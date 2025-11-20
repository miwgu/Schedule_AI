import shared from '../_shared/shared.module.js';
import { Scheduler, StringHelper } from '../../build/schedulerpro.module.js';

const scheduler = new Scheduler({
    appendTo : 'container',

    features : {
        eventResize : false,
        eventDrag   : {
            constrainDragToResource : true
        }
    },

    columns : [
        { text : 'Staff', field : 'name', width : 200 }
    ],

    rowHeight  : 65,
    barMargin  : 20,
    startDate  : new Date(2017, 5, 1),
    endDate    : new Date(2017, 5, 11),
    viewPreset : 'dayAndWeek',

    crudManager : {
        autoLoad         : true,
        loadUrl          : 'data/data.json',
        // This config enables response validation and dumping of found errors to the browser console.
        // It's meant to be used as a development stage helper only so please set it to false for production systems.
        validateResponse : true
    },

    eventRenderer({ eventRecord, resourceRecord, renderData }) {
        // Add a custom CSS class to the event element
        renderData.wrapperCls.add(resourceRecord.id);

        return `
            ${eventRecord.cls.svg ? `
                <svg height="24" width="24">
                    ${eventRecord.startDate.getDay() % 2 ? `
                        <path fill="#748ffc" d="M10.392304845413264 0L20.784609690826528 6L20.784609690826528 18L10.392304845413264 24L0 18L0 6Z"></path>` : `
                        <circle cx="12" cy="12" r="12" fill="#748ffc" />
                    `}
            </svg>` : ''}
            ${StringHelper.encodeHtml(eventRecord.name || '')}           
        `;
    }
});
