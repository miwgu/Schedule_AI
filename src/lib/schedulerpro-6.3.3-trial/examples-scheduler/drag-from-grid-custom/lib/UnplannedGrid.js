import Grid from '../../../lib/Grid/view/Grid.js';
import '../../../lib/Scheduler/column/DurationColumn.js';
import StringHelper from '../../../lib/Core/helper/StringHelper.js';

export default class UnplannedGrid extends Grid {
    /**
     * Original class name getter. See Widget.$name docs for the details.
     * @returns {string}
     */
    static $name = 'UnplannedGrid';

    // Factoryable type name
    static type = 'unplannedgrid';

    static get configurable() {
        return {
            rowHeight : 80,
            readOnly  : true,
            features  : {
                sort : 'name'
            },

            columns : [{
                type       : 'template',
                text       : 'Tasks',
                flex       : 1,
                field      : 'name',
                htmlEncode : false,
                minWidth   : 200,
                template   : ({ record : eventRecord }) =>  StringHelper.xss`
                <div class="b-sch-event-wrap b-sch-style-colored b-sch-color-none">
                    <div class="b-sch-event">
                        <div class="b-sch-event-content">
                            <div class="b-event-header"><span>${eventRecord.isPhantom ? '#' : eventRecord.id} ${eventRecord.name}</span></div>
                            <div class="b-event-footer"><span class="b-meta">${eventRecord.note}</span><span>${eventRecord.duration} ${eventRecord.durationUnit}</span></div>
                        </div>
                    </div>
                </div>
            `
            }]
        };
    }
}

// Register this widget type with its Factory
UnplannedGrid.initClass();
