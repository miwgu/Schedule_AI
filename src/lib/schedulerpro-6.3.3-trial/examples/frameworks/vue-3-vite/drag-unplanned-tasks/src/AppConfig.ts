import { type CalendarHighlightConfig, CalendarModel, Column, DateHelper, type EventDragConfig, type EventMenuConfig, type FilterBarConfig, type GroupConfig, ResourceModel, SchedulerPro, StringHelper, type TaskEditConfig } from '@bryntum/schedulerpro';
import type { BryntumGridProps, BryntumSchedulerProProjectModelProps, BryntumSchedulerProProps } from '@bryntum/schedulerpro-vue-3';
import { Doctor } from './lib/Doctor';
import { Appointment } from './lib/Appointment';

export const projectConfiguration: BryntumSchedulerProProjectModelProps = {
    autoLoad      : true,
    loadUrl       : './data/data.json',
    resourceStore : {
        modelClass : Doctor,
        sorters    : [
            { field : 'name', ascending : true }
        ]
    },
    eventStore : {
        // Unassigned events should remain in store
        removeUnassignedEvent : false,
        modelClass            : Appointment
    },
    // This config enables response validation and dumping of found errors to the browser console.
    // It's meant to be used as a development stage helper only so please set it to false for production systems.
    validateResponse : true
};

export const schedulerConfig: BryntumSchedulerProProps = {
    startDate           : new Date(2022, 2, 1, 7),
    endDate             : new Date(2022, 2, 1, 19),
    rowHeight           : 80,
    barMargin           : 10,
    eventStyle          : 'border',
    eventColor          : 'indigo',
    allowOverlap        : false,
    useInitialAnimation : false,
    resourceImagePath   : './users',
    columns             : [
        {
            type           : 'resourceInfo',
            field          : 'name',
            text           : 'Doctor',
            width          : 220,
            showEventCount : false,
            showMeta       : resourceRecord => {
                const doctor = resourceRecord as Doctor;
                return `<i class="${doctor.roleIconCls}"></i>${doctor.role}`;
            }
        },
        {
            type       : 'column',
            text       : 'Hours',
            editor     : false,
            filterable : false,
            sortable   : false,
            align      : 'right',
            renderer   : ({ record, grid }) => {
                const
                    scheduler = grid as SchedulerPro,
                    calendar  = (record as ResourceModel)?.calendar as CalendarModel,
                    ranges    = calendar?.getWorkingTimeRanges?.(scheduler.startDate, scheduler.endDate);
                if (ranges?.length) {
                    const range = ranges[0];
                    return `${DateHelper.format(range.startDate, 'K')} - ${DateHelper.format(range.endDate, 'K')}`;
                }
                else {
                    return '';
                }
            }
        }
    ],
    // Custom view preset with header configuration
    viewPreset : {
        base           : 'hourAndDay',
        columnLinesFor : 1,
        headers        : [
            {
                unit       : 'd',
                align      : 'center',
                dateFormat : 'dddd'
            },
            {
                unit       : 'h',
                align      : 'center',
                dateFormat : 'HH'
            }
        ]
    },

    eventRenderer({ eventRecord }) {
        return [
            {
                children : [
                    {
                        class : 'b-event-name',
                        text  : eventRecord.name
                    },
                    {
                        class : 'b-patient',
                        html  : StringHelper.xss`<div>Patient: ${(eventRecord as Appointment).patient || ''}</div>`
                    }
                ]
            }
        ];
    }
};

// Configurations for features in the SchedulerPro
export const filterBarFeatureConfig: FilterBarConfig = {
    compactMode : true
};

export const calendarHighlightFeatureConfig: CalendarHighlightConfig = {
    calendar : 'resource',
    // This method is provided to determine which resources are available for one or more eventRecords,
    // in order to highlight the right availability intervals
    collectAvailableResources({ scheduler, eventRecords }) {
        const appointment = eventRecords[0] as Appointment;
        return scheduler.resourceStore.query((doctor: Doctor) => doctor.role === appointment.requiredRole || !appointment.requiredRole) as ResourceModel[];
    }
};

export const eventMenuFeatureConfig: EventMenuConfig = {
    items : {
        deleteEvent : {
            text : 'Delete appointment'
        },
        unassignEvent : {
            text : 'Unschedule appointment'
        }
    }
};

export const eventDragFeatureConfig: EventDragConfig = {
    validatorFn({ eventRecords, newResource, startDate, endDate }) {
        const
            task         = eventRecords[0] as Appointment,
            doctor       = newResource as Doctor,
            { calendar } = doctor,
            valid        = doctor.role === task.requiredRole && (!calendar || (calendar as CalendarModel).isWorkingTime(startDate, endDate)),
            message      = valid ? '' : 'No available slot';

        return {
            valid,
            message : (valid ? '' : '<i class="b-icon b-fa-exclamation-triangle"></i>') + message
        };
    }
};

export const taskEditFeatureConfig: TaskEditConfig = {
    editorConfig : {
        title : 'Appointment'
    },

    // Customize its contents inside the General tab
    items : {
        generalTab : {
            // Add a patient field
            items : {
                // Add a patient field
                orderField : {
                    type   : 'text',
                    name   : 'patient',
                    label  : 'Patient',
                    // Place after name field
                    weight : 150
                }
            }
        }
    }
};

// Custom grid that holds unassigned appointments
export const gridConfiguration: BryntumGridProps = {
    selectionMode : {
        cell : false
    },
    columns : [
        {
            type    : 'template',
            text    : 'Appointment',
            flex    : 1,
            cellCls : 'unscheduledNameCell',

            template : ({ record }) => {
                const appointment = record as Appointment;
                return StringHelper.xss`
                        <i class="b-fa b-fa-${appointment.iconCls}"></i>
                        <div class="name-container">
                            <span>${StringHelper.encodeHtml(appointment.name)}</span>
                            <span class="patient-name">Patient: ${appointment.patient}</span>
                        </div>
                    `;
            }
        },
        {
            text  : 'Required role',
            field : 'requiredRole'
        }, {
            type     : 'column',
            icon     : 'b-icon b-fa-clock',
            width    : 80,
            align    : 'center',
            editor   : 'duration',
            field    : 'fullDuration',
            renderer : ({ record }) => {
                const appointment = record as Appointment;
                return `${appointment.duration} ${appointment.durationUnit}`;
            }
        }
    ],
    rowHeight                  : 65,
    disableGridRowModelWarning : true
};

export const groupFeatureConfig: GroupConfig = {
    field : 'requiredRole',
    renderer({ groupRowFor, column }: {
        groupRowFor: string
        column: Column
    }) {
        if (column.parentIndex === 0) {
            return `Tasks for ${groupRowFor}`;
        }

        return '';
    }
};
