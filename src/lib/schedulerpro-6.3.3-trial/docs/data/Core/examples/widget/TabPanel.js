new SlideToggle({
    insertFirst : targetElement,
    label       : 'Closable tabs',
    checked     : true,
    onChange({ value }) {
        tabPanel.tabBar.items.forEach(tab => tab.closable = value);
    }
});

const tabPanel = new TabPanel({
    appendTo : targetElement,
    height   : '25em',
    tabBar   : {
        defaults : {
            closable : true
        }
    },
    items : {
        main : {
            title : 'Tab with widgets',
            tab   : {
                icon : 'b-fa b-fa-puzzle-piece'
            },
            items : {
                forename : { type : 'text', label : 'First name', style : 'margin:2em 1em', required : true },
                surname  : { type : 'text', label : 'Last name', style : 'margin:2em 1em' }
            }

        },
        secondary : {
            title : 'Tab with basic HTML',
            tab   : {
                icon : 'b-fa b-fa-code'
            },
            items : {
                infoWidget : {
                    type  : 'widget',
                    style : 'padding:1em',
                    html  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
            }
        },
        tertiary : {
            title : 'Images',
            style : 'gap:3em;padding:4em',
            tab   : {
                icon : 'b-fa b-fa-image'
            },
            defaults : {
                flex : 1,
                type : 'widget',
                tag  : 'img'
            },
            items : {
                gantt     : { elementAttributes : { src : 'https://bryntum.com/products/gantt/examples/calendars/meta/thumb.stockholm.png' } },
                scheduler : { elementAttributes : { src : 'https://bryntum.com/products/calendar/examples/resource-avatars/meta/thumb.classic-dark.png' } },
                kanban    : { elementAttributes : { src : 'https://bryntum.com/products/taskboard/examples/task-drag/meta/thumb.stockholm.png' } }
            }
        }
    }
});
