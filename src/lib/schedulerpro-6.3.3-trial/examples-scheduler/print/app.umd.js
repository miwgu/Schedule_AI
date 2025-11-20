var {
    DateHelper,
    DataGenerator,
    Scheduler
} = window.bryntum.schedulerpro;
const headerTpl = ({
    currentPage,
    totalPages
}) => `
    <img alt="Company logo" src="resources/bryntum.svg"/>
    <dl>
        <dt>Date: ${DateHelper.format(new Date(), 'll LT')}</dt>
        <dd>${totalPages ? `Page: ${currentPage + 1}/${totalPages}` : ''}</dd>
    </dl>
    `;
const footerTpl = () => `<h3>© ${new Date().getFullYear()} Bryntum AB</h3></div>`,
    today = DateHelper.clearTime(new Date()),
    scheduler = new Scheduler({
        appendTo   : 'container',
        eventStyle : 'border',
        rowHeight  : 50,
        ...DataGenerator.generateEvents({
            viewStartDate : today,
            viewEndDate   : DateHelper.add(today, 7, 'weeks'),
            nbrResources  : 100,
            nbrEvents     : 5,
            tickUnit      : 'day',
            minDuration   : 4,
            dependencies  : true
        }),
        columns : [{
            type : 'rownumber'
        }, {
            text  : 'First name',
            field : 'firstName',
            flex  : 1
        }, {
            text  : 'Surname',
            field : 'surName',
            flex  : 1
        }, {
            type  : 'number',
            text  : 'Score',
            field : 'score',
            flex  : 1
        }],
        features : {
            dependencies : {
                disabled : true
            },
            print : {
                headerTpl,
                footerTpl,
                filterStyles : styles => styles.filter(item => {
                    // Filter out large style related to embedded monaco editor. Only relevant for Bryntum demos.
                    return !item.match(/<style .+monaco-colors/) && !item.match(/<link .+monaco/);
                })
            }
        },
        tbar : [{
            type        : 'button',
            toggleable  : true,
            icon        : 'b-fa-square',
            pressedIcon : 'b-fa-check-square',
            text        : 'Show dependencies',
            onToggle({
                pressed
            }) {
                scheduler.features.dependencies.disabled = !pressed;
            }
        }, {
            ref  : 'printButton',
            type : 'button',
            icon : 'b-fa-print',
            text : 'Print',
            onClick() {
                scheduler.features.print.showPrintDialog();
            }
        }]
    });

