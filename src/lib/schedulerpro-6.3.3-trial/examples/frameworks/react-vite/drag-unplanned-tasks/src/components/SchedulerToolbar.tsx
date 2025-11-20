import { forwardRef, useCallback, RefObject, useEffect, useState } from 'react';
import { BryntumSchedulerPro, BryntumToolbar } from '@bryntum/schedulerpro-react';
import { DateHelper, Toast, SchedulerPro } from '@bryntum/schedulerpro';

type SchedulerToolbarProps = {
    schedulerRef: RefObject<BryntumSchedulerPro>
    toggleLayout: boolean
    setToggleLayout: React.Dispatch<React.SetStateAction<boolean>>
}

const SchedulerToolbar = forwardRef<BryntumToolbar, SchedulerToolbarProps>((props, schedulerToolbarRef) => {
    // Some variables used in this demo
    const startHour = 7;
    const endHour   = 20;

    // destructure props
    const {
        schedulerRef,
        toggleLayout,
        setToggleLayout
    } = props;

    // Save scheduler instance for easy access
    const [scheduler, setScheduler] = useState<SchedulerPro>();

    useEffect(() => {
        setScheduler(schedulerRef.current!.instance);
        if (!scheduler) {
            return;
        }
        const { project }      = scheduler!;
        const schedulerToolbar = (schedulerToolbarRef as RefObject<BryntumToolbar>).current!.instance;
        scheduler!.project.on({
            change : () => {
                const saveButton = schedulerToolbar.widgetMap?.['saveButton'];
                if (saveButton) {
                    saveButton.disabled = !Boolean(project.eventStore.changes);
                }
            },
            thisObj : project
        });
    }, [scheduler, schedulerRef, schedulerToolbarRef]);

    const onSave = useCallback(() => {
        Toast.show('TODO: Save data (see onSave() event for SchedulerPro)');
    }, []);

    const onSelect = useCallback(({ record }: { record: any }) => {
        const value     = record.value;
        const startDate = DateHelper.add(DateHelper.clearTime(scheduler!.startDate), startHour, 'h');
        const endDate   = DateHelper.add(startDate, value - 1, 'd');

        endDate.setHours(endHour);
        scheduler!.viewPreset = record.preset;
        scheduler!.setTimeSpan(startDate, endDate);

        // reset scroll
        scheduler!.scrollLeft = 0;
    }, [scheduler]);

    const onShiftPrevious = useCallback(() => {
        scheduler!.shiftPrevious();
    }, [scheduler]);

    const onShiftNext = useCallback(() => {
        scheduler!.shiftNext();
    }, [scheduler]);

    const onClickToday = useCallback(() => {
        const startDate = DateHelper.clearTime(new Date());
        scheduler!.setTimeSpan(DateHelper.add(startDate, startHour, 'h'), DateHelper.add(startDate, endHour, 'h'));
    }, [scheduler]);

    const onToggleLayout = useCallback(() => {
        setToggleLayout(!toggleLayout);
    }, [setToggleLayout, toggleLayout]);

    return <BryntumToolbar
        ref={schedulerToolbarRef}
        items={[
            {
                text     : 'Save',
                width    : 100,
                cls      : 'b-raised b-blue',
                ref      : 'saveButton',
                disabled : true,
                onAction : onSave
            },
            {
                type         : 'combo',
                ref          : 'preset',
                editable     : false,
                label        : 'Show',
                value        : 1,
                valueField   : 'value',
                displayField : 'name',
                items        : [
                    {
                        name   : '1 day',
                        value  : 1,
                        preset : {
                            base      : 'hourAndDay',
                            tickWidth : 45
                        }
                    },
                    {
                        name   : '3 days',
                        value  : 3,
                        preset : {
                            base : 'dayAndWeek'
                        }
                    },
                    {
                        name   : '1 week',
                        value  : 7,
                        preset : {
                            base : 'dayAndWeek'
                        }
                    }
                ],
                onSelect
            },
            '->',
            {
                type  : 'buttonGroup',
                items : [
                    {
                        icon     : 'b-icon b-fa-chevron-left',
                        cls      : 'b-transparent',
                        onAction : onShiftPrevious
                    },
                    {
                        type     : 'button',
                        text     : 'Today',
                        cls      : 'b-transparent',
                        onAction : onClickToday
                    },
                    {
                        icon     : 'b-icon b-fa-chevron-right',
                        cls      : 'b-transparent',
                        onAction : onShiftNext
                    }
                ]
            },
            '->',
            {
                icon       : 'b-fa b-fa-columns',
                tooltip    : 'Toggle layout',
                cls        : 'b-transparent',
                ref        : 'toggle-layout', // for testing purpose
                toggleable : true,
                onAction   : onToggleLayout,
                style      : 'margin-left: auto'
            }
        ]}
    />;

});

SchedulerToolbar.displayName = 'SchedulerToolbar';

export default SchedulerToolbar;
