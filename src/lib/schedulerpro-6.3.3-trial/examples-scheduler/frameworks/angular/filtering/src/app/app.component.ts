import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DateHelper, DomClassList, Scheduler, Toast } from '@bryntum/schedulerpro';
import { BryntumSchedulerComponent } from '@bryntum/schedulerpro-angular';
import AppEventModel from './app.types';
import { schedulerProps } from './app.config';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

    private scheduler!: Scheduler;
    @ViewChild(BryntumSchedulerComponent, { static : true }) schedulerComponent!: BryntumSchedulerComponent;
    @ViewChild('datePickerContainer', { static : true }) datePickerContainer!: ElementRef;

    schedulerProps    = schedulerProps;
    events            = [];
    resources         = [];
    timeRanges        = [];
    pickerDate        = new Date(2018, 1, 7);
    selectedEventName = '';

    constructor(private http: HttpClient) {
        this.getData();
    }

    ngAfterViewInit(): void {
        // Store Scheduler instance
        this.scheduler = this.schedulerComponent.instance;
    }

    getData(): void {
        const me = this;

        me.http.get('./assets/data/data.json').subscribe((data: any) => {
            me.resources  = data.resources.rows;
            me.events     = data.events.rows;
            me.timeRanges = data.timeRanges.rows;
        });
    }

    onEventSelectionChange(): void {
        if (this.scheduler.selectedEvents.length > 0) {
            this.selectedEventName = this.scheduler.selectedEvents[0].name;
        }
        else {
            this.selectedEventName = '';
        }
    }

    onReleaseEvent(): void {
        this.selectedEventName = '';
    }

    // add event button click handled here
    onAddEventClick(): void {
        const
            { scheduler } = this,
            resource      = scheduler.resourceStore.first;

        if (!resource) {
            Toast.show('There is no resource available');
            return;
        }

        const event = new AppEventModel({
            resourceId   : scheduler.resourceStore.first.id,
            startDate    : scheduler.startDate,
            duration     : 2,
            durationUnit : 'hour',
            name         : 'Meet CEO',
            desc         : 'Discuss project',
            eventType    : 'Meeting',
            eventColor   : 'red'
        });

        scheduler.editEvent(event);
    }

    // remove event button click handled here
    onRemoveEventClick(): void {
        const { scheduler } = this;
        scheduler.eventStore.remove(scheduler.selectedEvents);
    }

    // change scheduler start/end dates
    onDatePickerChange(event: any): void {
        const { value } = event;
        this.scheduler.setTimeSpan(
            DateHelper.add(value, 8, 'hour'),
            DateHelper.add(value, 18, 'hour')
        );
    }

    filterEvents(event: any): void {
        const value = event.value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

        this.scheduler.eventStore.filter({
            filters : (event: AppEventModel) => event.name.match(new RegExp(value, 'i')),
            replace : true
        });
    }

    highlightEvents(event: any): void {
        const
            { scheduler } = this,
            { value }     = event;

        scheduler.eventStore.forEach((event: AppEventModel) => {
            const taskClassList = new DomClassList(event.cls);

            if (value !== '' && event.name.toLowerCase().includes(value.toLowerCase())) {
                taskClassList.add('b-match');
            }
            else {
                taskClassList.remove('b-match');
            }

            event.cls = taskClassList.value;
        }, this);

        scheduler.element.classList[value.length > 0 ? 'add' : 'remove']('b-highlighting');
    }
}
