var {
    Scheduler
} = window.bryntum.schedulerpro;
const scheduler = new Scheduler({
    appendTo         : 'container',
    startDate        : new Date(2025, 0, 1, 6),
    endDate          : new Date(2025, 0, 1, 20),
    viewPreset       : 'hourAndDay',
    // Enable multi-event selection with ctrl, shift or alt keys + click
    // (this does not affect drag selection)
    multiEventSelect : {
        ctrlKey  : true,
        shiftKey : true,
        altKey   : true
    },
    // If you only want the default modifier key (ctrl), you can pass true instead of an object
    // multiEventSelect : true,
    resourceStore : {
        autoLoad : true,
        readUrl  : './data/resources.json'
    },
    eventStore : {
        autoLoad : true,
        readUrl  : './data/events.json'
    },
    features : {
    // Enable event drag (marquee) selection
        eventDragSelect : true,
        // Disable event drag creation, cannot be used together with drag selection
        eventDragCreate : false
    },
    columns : [{
        text  : 'Name',
        field : 'name',
        width : 130
    }],
    listeners : {
        eventSelectionChange : 'onEventSelectionChange'
    },
    tbar : [{
        type  : 'checkbox',
        label : 'Unified drag',
        onChange({
            checked
        }) {
            scheduler.features.eventDrag.unifiedDrag = checked;
        }
    }, '->', {
        type : 'widget',
        ref  : 'selectionSummary',
        html : 'Selection:'
    }],
    onEventSelectionChange() {
        const eventCount = scheduler.selectedEvents.length,
            resourceCount = [...new Set(scheduler.selectedEvents.map(event => event.resourceId))].length;
        scheduler.widgetMap.selectionSummary.html = `
            <strong>Selection:</strong><i class="b-fa b-fa-users"></i><span>${resourceCount} user${resourceCount === 1 ? '' : 's'}</span>
            <i class="b-fa b-fa-calendar"></i><span>${eventCount} event${eventCount === 1 ? ' ' : 's'}</span>
        `;
    }
});
scheduler.onEventSelectionChange();