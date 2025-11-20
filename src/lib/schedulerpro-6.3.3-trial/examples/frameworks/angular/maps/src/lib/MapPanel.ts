/* global mapboxgl */
import {
    ButtonConfig, ButtonGroupConfig, DomHelper, GlobalEvents, Panel, PanelConfig, Popup, StoreListeners, StringHelper, TimeAxis,
    WidgetConfig
} from '@bryntum/schedulerpro';
import { constructParams, MarkerConfig, PopupConfig } from './Types';
import { TaskStore } from 'src/app/app.config';
import Task from './Task';

class CustomTimeAxis extends TimeAxis {
    declare isTimeSpanInAxis: (eventRecord: Task) => boolean;
}

// NOTE: You must use your own Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWF0c2JyeW50c2UiLCJhIjoiY2tlcHdqd2lrM3hlZjJybHRpeDR0amo1cCJ9.PJc0GY_loGf0iQKlewuL0w';

// A simple class containing a MapboxGL JS map instance
export default class MapPanel extends Panel {
    // Class properties
    static override type  = 'mappanel';
    static override $name = 'MapPanel';

    // Instance properties
    declare map: mapboxgl['Map'];
    declare popup: Popup;
    declare lon: number;
    declare lat: number;
    declare zoom: number;
    declare eventStore: TaskStore;
    declare timeAxis: CustomTimeAxis;

    // Configuration
    static get configurable() {
        return {
            monitorResize : true,
            // Some defaults of the initial map display
            zoom          : 11,
            lat           : 40.7128,
            lon           : -74.0060,
            textContent   : false,

            // Toolbar buttons
            tbar : [
                this.createTitleWidget(),
                this.createThemeButtonGroup(),
                this.createZoomButtonGroup()
            ]
        } as PanelConfig;
    }

    constructor(args: constructParams) {
        super(args);
    }

    // Initialization methods
    private static createTitleWidget = (): WidgetConfig => ({
        type : 'widget',
        cls  : 'widget-title',
        html : 'Map View',
        flex : 1
    });

    private static createThemeButtonGroup = (): ButtonGroupConfig => {
        const currentThemeName = DomHelper.themeInfo?.name || 'Material';
        return ({
            type        : 'buttonGroup',
            ref         : 'themeGroup',
            toggleGroup : true,
            items       : [currentThemeName, 'Classic-Dark'].map(name => {
                const
                    isLight      = name?.toLowerCase() === currentThemeName.toLowerCase(),
                    themeIsLight = Boolean(!currentThemeName.toLowerCase().match('dark'));

                return {
                    id      : name?.toLowerCase(),
                    text    : isLight ? 'Light' : 'Dark',
                    pressed : isLight ? themeIsLight : !themeIsLight
                };
            }),
            onAction : ({ source }) => {
                DomHelper.setTheme(source.id);
                const className = 'b-theme-classic-dark';
                document.body.classList[source.id === 'classic-dark' ? 'add' : 'remove'](className);
            }
        });
    };

    private static createZoomButtonGroup = (): ButtonGroupConfig => ({
        type        : 'buttonGroup',
        ref         : 'zoomGroup',
        toggleGroup : true,
        items       : [
            {
                icon    : 'b-fa b-fa-plus',
                onClick : 'up.onZoomIn'
            },
            {
                icon    : 'b-fa b-fa-minus',
                onClick : 'up.onZoomOut'
            }
        ] as ButtonConfig[]
    });

    // Lifecycle methods
    override construct(...args: constructParams[]) {
        const me = this;

        super.construct(...args);

        const mapContainerEl = me.contentElement;

        // NOTE: You must use your own Mapbox access token
        me.map = new mapboxgl.Map({
            container : mapContainerEl,
            style     : 'mapbox://styles/mapbox/streets-v11',
            center    : [me.lon, me.lat],
            zoom      : me.zoom
        });

        // First load the map and then set up our event listeners for store CRUD and time axis changes
        me.map.on('load', async() => {
            // Demo code editor destroys created Widgets on editing code
            if (me.isDestroying) {
                return;
            }

            mapContainerEl.classList.add('maploaded');

            // await for the project commit to complete to have all data normalized before adding the markers
            // otherwise the `this.timeAxis.isTimeSpanInAxis(eventRecord)` check may fail in the
            // `addEventMarker()` method, because of the missing end date in the record
            await me.eventStore.project.commitAsync();

            me.onStoreChange({
                action  : 'dataset',
                records : me.eventStore.records,
                source  : me.eventStore,
                record  : me.eventStore.records[0],
                changes : {}
            });
        });

        me.eventStore.on('change', me.onStoreChange, me);
        me.timeAxis.on('reconfigure', me.onTimeAxisReconfigure, me);

        // Switch to dark maps for dark theme
        GlobalEvents.on({
            theme   : 'onThemeChange',
            thisObj : me
        });
    }

    // Map interaction methods
    onZoomIn() {
        this.map.zoomIn();
    }

    onZoomOut() {
        this.map.zoomOut();
    }

    override composeBody() {
        const result = super.composeBody();

        result.listeners = {
            click    : 'onMapClick',
            delegate : '.mapboxgl-marker'
        };

        return result;
    }

    // Marker management
    addEventMarker(eventRecord: Task) {
        if (!eventRecord.address) return;

        const { lat, lon } = eventRecord.address;
        if (!lat || !lon || (!this.timeAxis.isTimeSpanInAxis(eventRecord) && eventRecord.isScheduled)) return;

        const marker = this.createMarker(eventRecord, lat, lon);
        this.attachMarkerToEvent(marker, eventRecord);
    }

    private createMarker(eventRecord: Task, lat: number, lon: number) {
        const color = eventRecord.eventColor || eventRecord.resource?.eventColor || '#f0f0f0';
        return new mapboxgl.Marker({ color } as MarkerConfig).setLngLat([lon, lat]);
    }

    private attachMarkerToEvent(marker: mapboxgl['marker'], eventRecord: Task) {
        marker.getElement().id = eventRecord.id;
        eventRecord.marker     = marker;
        marker.eventRecord     = eventRecord;
        marker.addTo(this.map);
    }

    removeEventMarker(eventRecord: Task) {
        const marker = eventRecord.marker;
        if (marker) {
            if (marker.popup) {
                marker.popup.remove();
                marker.popup = null;
            }
            marker.remove();
        }
        eventRecord.marker = null;
    }

    removeAllMarkers() {
        this.eventStore.forEach((eventRecord: Task) => this.removeEventMarker(eventRecord));
    }

    // Map view methods
    scrollMarkerIntoView(eventRecord: Task) {
        const marker = eventRecord.marker;
        this.map.easeTo({ center : marker.getLngLat() });
    }

    showTooltip(eventRecord: Task, centerAtMarker: boolean) {
        const marker = eventRecord.marker;
        this.popup?.remove();

        if (centerAtMarker) {
            this.scrollMarkerIntoView(eventRecord);
        }

        this.createAndShowPopup(eventRecord, marker);
    }

    private createAndShowPopup(eventRecord: Task, marker: mapboxgl['marker']) {
        const popup = this.popup = marker.popup = new mapboxgl.Popup({
            offset : [0, -21]
        } as PopupConfig);

        popup
            .setLngLat(marker.getLngLat())
            .setHTML(this.createPopupContent(eventRecord))
            .addTo(this.map);
    }

    private createPopupContent = (eventRecord: Task) => StringHelper.xss`
        <span class="event-name">${eventRecord.name}</span>
        <span class="resource"><i class="b-fa b-fa-fw b-fa-user"></i>${eventRecord.resource?.name || 'Unassigned'}</span>
        <span class="location"><i class="b-fa b-fa-fw b-fa-map-marker-alt"></i>${eventRecord.shortAddress}</span>
    `;

    // Event handlers
    onMapClick({ target }: { target: mapboxgl['marker'] }) {
        const markerEl = target.closest('.mapboxgl-marker');
        if (!markerEl) return;

        const eventRecord = this.eventStore.getById(markerEl.id) as Task;
        this.showTooltip(eventRecord, true);
        this.trigger('markerclick', {
            marker : eventRecord.marker,
            eventRecord
        });
    }

    override onResize = () => {
        // This widget was resized, so refresh the Mapbox map
        this.map?.resize();
    };

    onThemeChange({ theme }: { theme: string }) {
        const
            buttonIndex = theme.toLowerCase().match('dark') ? 1 : 0,
            button      = (this.tbar.widgetMap['themeGroup'] as ButtonGroupConfig)?.items?.[buttonIndex];

        this.setMapStyle();
        if (button) {
            button.pressed = true;
        }
    }

    onTimeAxisReconfigure() {
        this.eventStore.forEach((eventRecord: Task) => {
            this.removeEventMarker(eventRecord);
            this.addEventMarker(eventRecord);
        });
    }

    // Theme handling
    setMapStyle() {
        const
            isDark   = (DomHelper.themeInfo as { name?: string })?.name?.toLowerCase().match('dark'),
            mapStyle = isDark ? 'dark-v10' : 'streets-v11';

        this.map.setStyle('mapbox://styles/mapbox/' + mapStyle);
    }

    // When data changes in the eventStore, update the map markers accordingly
    async onStoreChange(event: Parameters<NonNullable<Exclude<StoreListeners['change'], string>>>[0]) {
        // await for the project commit to complete to have all data normalized before adding the markers
        await this.eventStore.project.commitAsync();

        switch (event.action) {
            case 'add':
            case 'dataset':
                if (event.action === 'dataset') {
                    this.removeAllMarkers();
                }
                event.records.forEach((eventRecord) => this.addEventMarker(eventRecord as Task));
                break;

            case 'remove':
                event.records.forEach((eventRecord) => this.removeEventMarker(eventRecord as Task));
                break;

            case 'update': {
                const eventRecord = event.record as Task;

                if (!eventRecord) return;
                this.removeEventMarker(eventRecord);
                this.addEventMarker(eventRecord);

                break;
            }

            case 'filter': {
                const renderedMarkers: Task[] = [];

                this.eventStore.query((rec: Task) => rec.marker, true).forEach((eventRecord) => {
                    if (!event.records.includes(eventRecord as Task)) {
                        this.removeEventMarker(eventRecord as Task);
                    }
                    else {
                        renderedMarkers.push(eventRecord as Task);
                    }
                });

                event.records.forEach((eventRecord) => {
                    const task = eventRecord as Task;
                    if (!renderedMarkers.includes(task)) {
                        this.addEventMarker(task);
                    }
                });

                break;
            }
        }
    }
}

// Register this widget type with its Factory
MapPanel.initClass();
