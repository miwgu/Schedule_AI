import shared from '../_shared/shared.module.js';
import { Scheduler, StringHelper } from '../../build/schedulerpro.module.js';

// Each team gets their own background color
const colors = {
    DevOps : 'violet',
    Devs   : 'purple',
    Sales  : 'indigo'
};

const scheduler = new Scheduler({
    appendTo          : 'container',
    startDate         : new Date(2021, 8, 19),
    endDate           : new Date(2021, 8, 26),
    barMargin         : 0,
    resourceImagePath : '../_shared/images/users/',

    features : {
        // Enable merging cells
        mergeCells : true
    },

    columns : [
        {
            text       : 'Team',
            field      : 'team',
            width      : 40,
            minWidth   : 40,
            resizable  : false,
            draggable  : false,
            // Merge cells in this column when it is sorted
            mergeCells : true,
            // Apply some CSS to hide the header text, looks ugly in the narrow header
            cls        : 'hide-header-text',
            // Custom renderer for the merged cells, allows you to affected the generated merged cell (the contents are
            // determined using the normal renderer/record value)
            mergedRenderer({ domConfig, value }) {
                // Add a background based on team to the merged range
                Object.assign(domConfig.className, {
                    'b-sch-violet' : value === 'DevOps',
                    'b-sch-purple' : value === 'Devs',
                    'b-sch-indigo' : value === 'Sales',
                    'b-sch-pink'   : value !== 'DevOps' && value !== 'Devs' && value !== 'Sales'
                });
            }
        },
        { type : 'resourceInfo', text : 'Name', field : 'name', width : 130 },
        { text : 'Role', field : 'role', width : 100 }

    ],

    // Custom event renderer, to manipulate event styling
    eventRenderer({ eventRecord, resourceRecord, renderData }) {
        // When there is no color explicitly defined, use the teams color
        if (!eventRecord.eventColor) {
            renderData.eventColor = colors[resourceRecord.team] ?? 'pink';
        }

        return StringHelper.encodeHtml(eventRecord.name);
    },

    crudManager : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data/data.json'
            }
        },

        resourceStore : {
            // Additional resource fields
            fields  : ['team', 'role'],
            // Sort by team and name initially
            sorters : [
                { field : 'team', ascending : true },
                { field : 'name', ascending : true }
            ]
        },

        // This config enables responses validation and dumping of found errors to the browser console.
        // It's meant to be used as a development stage helper only so please set it to false for production systems.
        validateResponse : true
    },

    tbar : [
        // Button to toggle between merging teams and not doing so
        {
            text        : 'Merge teams',
            icon        : 'b-fa-square',
            pressedIcon : 'b-fa-check-square',
            toggleable  : true,
            pressed     : true,
            onToggle({ pressed }) {
                const
                    { columns } = scheduler,
                    teamColumn  = columns.get('team');

                // When merging teams, move column first and make it narrow (as it starts)
                if (pressed) {
                    columns.move(teamColumn, columns.first);
                    teamColumn.width = 40;
                    teamColumn.cls = 'hide-header-text';
                    scheduler.resourceStore.sort('team', true);
                }
                // When not merging, move it last in the locked region and make it wider
                else {
                    columns.move(teamColumn, scheduler.timeAxisColumn);
                    teamColumn.width = 100;
                    teamColumn.cls = null;
                }

                // Toggle merging cells
                scheduler.features.mergeCells.disabled = !pressed;
            }
        }
    ]
});
