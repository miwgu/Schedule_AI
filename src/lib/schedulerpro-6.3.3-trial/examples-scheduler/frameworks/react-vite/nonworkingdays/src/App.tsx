import { useRef, useState } from 'react';
import { Button, ButtonGroup, DateHelper, Locale, LocaleKeys, LocaleManager } from '@bryntum/schedulerpro';
import { BryntumDemoHeader, BryntumScheduler, BryntumToolbar } from '@bryntum/schedulerpro-react';
import useSchedulerConfig from './AppConfig';

import './App.scss';

type DayButton = Button & { index: number };

// The App component
function App() {
    const schedulerRef = useRef<BryntumScheduler>(null);
    const toolbarRef = useRef<BryntumToolbar>(null);

    const [customStyling, setCustomStyling] = useState(true);

    function toggleDisplayRanges({ pressed } : { pressed: boolean }) {
        const scheduler = schedulerRef.current!.instance;
        scheduler.features.nonWorkingTime.disabled = !pressed;
    }

    function toggleShadeBars({ pressed } : { pressed: boolean }) {
        const scheduler = schedulerRef.current!.instance;
        scheduler.features.eventNonWorkingTime.disabled = !pressed;
    }

    function onClickNonWorkingDays() {
        const toolbar = toolbarRef.current!.instance;

        //Collect an array of pressed button indices
        const pressed = (((toolbar.widgetMap.nonWorkingDays as unknown) as ButtonGroup).items as DayButton[])
            .filter(item => item.pressed)
            .map(item => item.index);

        const days: Record<number, boolean> = {};
        pressed.forEach((day) => {
            days[day] = true;
        });

        const locale = LocaleManager.locale as Locale;
        (locale.DateHelper as LocaleKeys).nonWorkingDays = days;

        LocaleManager.applyLocale(locale, true);
    }

    function handleToolbarToggle() {
        const tbar = toolbarRef.current!.instance;
        if (!tbar.element.style.height) {
            // Set initial height + flush for transition to work
            tbar.element.style.height = tbar.element.offsetHeight + 'px';
            tbar.element.offsetHeight;
        }

        tbar.element.classList.toggle('b-collapsed');
    }

    const schedulerConfig = useSchedulerConfig(handleToolbarToggle);

    return (
        <>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <BryntumToolbar
                ref={toolbarRef}
                cls="b-top-toolbar"
                items={[
                    {
                        type        : 'button',
                        toggleable  : true,
                        pressed     : true,
                        text        : 'Custom styling',
                        icon        : 'b-fa-square',
                        pressedIcon : 'b-fa-check-square',
                        onToggle    : () => setCustomStyling(!customStyling)
                    },
                    {
                        type        : 'button',
                        toggleable  : true,
                        pressed     : true,
                        text        : 'Display ranges',
                        icon        : 'b-fa-square',
                        pressedIcon : 'b-fa-check-square',
                        onToggle    : toggleDisplayRanges
                    },
                    {
                        type        : 'button',
                        toggleable  : true,
                        pressed     : false,
                        text        : 'Shade bars',
                        icon        : 'b-fa-square',
                        pressedIcon : 'b-fa-check-square',
                        onToggle    : toggleShadeBars
                    },
                    '->', // Fill to the right
                    {
                        type : 'widget',
                        cls  : 'b-has-label',
                        html : '<label>Non-working days</label>'
                    },
                    {
                        type     : 'buttongroup',
                        ref      : 'nonWorkingDays',
                        defaults : {
                            toggleable : true
                        },
                        items : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((name, index) => {
                            return {
                                text    : name,
                                pressed : DateHelper.nonWorkingDays[index],
                                index
                            };
                        }),
                        onClick : onClickNonWorkingDays
                    }
                ]}
            />
            <BryntumScheduler
                ref={schedulerRef}
                cls={customStyling ? 'custom-style' : ''}
                {...schedulerConfig}
            />
        </>
    );
}

export default App;
