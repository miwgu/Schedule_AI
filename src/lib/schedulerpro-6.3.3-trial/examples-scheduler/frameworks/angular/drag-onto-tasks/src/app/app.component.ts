import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { BryntumGridComponent, BryntumSchedulerComponent } from '@bryntum/schedulerpro-angular';
import { DragHelper, SchedulerEventModel, Grid, Scheduler, Toast } from '@bryntum/schedulerpro';
import { gridProps, schedulerProps } from './app.config';
import { AppEventModel, EquipmentStore } from './app.types';

@Component({
    selector      : 'app-root',
    templateUrl   : './app.component.html',
    styleUrls     : ['./app.component.scss'],
    encapsulation : ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    schedulerProps : any = schedulerProps;
    gridProps : any      = gridProps;

    private scheduler! : Scheduler;
    private grid! : Grid;

    @ViewChild(BryntumSchedulerComponent, { static : true }) schedulerComponent! : BryntumSchedulerComponent;
    @ViewChild(BryntumGridComponent, { static : true }) gridComponent! : BryntumGridComponent;

    ngAfterViewInit() : void {
        // Store Scheduler/Grid instance
        this.scheduler = this.schedulerComponent.instance;
        this.grid      = this.gridComponent.instance;

        const
            { scheduler, grid } = this,
            equipmentStore      = new EquipmentStore({
                modelClass : SchedulerEventModel,
                readUrl    : 'assets/data/equipment.json',
                sorters    : [
                    { field : 'name', ascending : true }
                ],
                durationUnit : 'hour',
                equipment    : []
            });

        grid.store = equipmentStore.chain(() => true, [], {});

        // event renderer expects equipmentStore to be class property of scheduler
        // @ts-ignore
        scheduler['equipmentStore'] = equipmentStore;
        scheduler.on({
            eventEditBeforeSetRecord : this.onEventEditBeforeSetRecord,
            thisObj                  : this,
            once                     : true
        });

        equipmentStore.load({}).then(() => {
            this.onEquipmentStoreLoad();
        });

        this.initDrag();


        setTimeout(() => {
            Toast.show({
                timeout : 3500,
                html    : 'Please note that this example uses the Bryntum Grid, which is licensed separately.'
            });
        }, 500);

    }

    private onEventEditBeforeSetRecord({ source : editor } : { source : any }) : void {
        const equipmentCombo = editor.widgetMap.equipmentCombo;

        if (!equipmentCombo.items.length) {
            // @ts-ignore
            equipmentCombo.items = this.scheduler['equipmentStore'].getRange();
        }
    }

    onEquipmentStoreLoad() : void {
        // Since the event bars contain icons for equipment, we need to refresh rows once equipment store is loaded
        this.scheduler.refreshRows();
    }

    initDrag() : void {
        const { scheduler, grid } = this,

            drag                = new DragHelper({
                cloneTarget        : true,
                mode               : 'translateXY',
                dropTargetSelector : '.b-sch-event',
                targetSelector     : '.b-grid-cell',
                outerElement       : grid.element
            });

        drag.on({
            dragstart : ({ context } : { context : any }) => {
                // save a reference to the equipment, so we can access it later
                context.equipment = grid.getRecordFromElement(context.grabbed);

                // Prevent tooltips from showing while dragging
                scheduler.element.classList.add('b-dragging-event');
            },

            drop : async({ context } : { context : any }) => {
                if (context.valid) {
                    const
                        equipmentItem = context.equipment,
                        eventRecord   = scheduler.resolveEventRecord(context.target) as AppEventModel;

                    if (eventRecord.equipment?.includes(equipmentItem.id)) {
                        context.valid = false;
                        Toast.show(`${equipmentItem.name} is already assigned to ${eventRecord.name}`);
                    }
                    else {
                        eventRecord.equipment = eventRecord.equipment?.concat(equipmentItem.id);
                        Toast.show(`Added ${equipmentItem.name} to ${eventRecord.name}`);
                    }
                }
                scheduler.element.classList.remove('b-dragging-event');
            }
        });
    }

}
