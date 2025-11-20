CSSHelper.insertRule('.strips-panel .b-chip { color : #774dc6; background-color: #edebfe;font-size:.9em;font-weight:600}');
CSSHelper.insertRule('.strips-panel .b-chip .b-icon-clear { color : #774dc6; background-color: transparent}');
CSSHelper.insertRule('.strips-panel .b-sidebar .b-panel-body-wrap { background : #f7f7f7}');

// This example show the Panel widget using the strips feature.
const invoicePanel = new Panel({
    appendTo : targetElement,
    cls      : 'strips-panel',
    title    : 'Application Form',
    width    : 600,
    layout   : {
        type  : 'vbox',
        align : 'stretch'
    },
    items : {
        name : {
            type       : 'textfield',
            label      : 'Name',
            value      : 'Johnny Coder',
            flex       : 1,
            labelWidth : '50%'
        },
        skills : {
            type        : 'combo',
            label       : 'Skills',
            multiSelect : true,
            items       : ['Coding', 'UX', 'Design', 'Database'],
            value       : ['Coding', 'UX'],
            flex        : 1,
            labelWidth  : '50%',
            editable    : false
        },
        framework : {
            type    : 'radiogroup',
            title   : 'Favorite JS Framework',
            value   : 'D',
            style   : 'margin-top: 2em',
            options : {
                A : 'React',
                B : 'Angular',
                C : 'Vue',
                D : 'Svelte'
            }
        },
        jsOrTs : {
            type    : 'radiogroup',
            title   : 'JS or TS',
            hidden  : true,
            value   : 'B',
            style   : 'margin-top: 2em',
            name    : 'jsOrTs',
            options : {
                A : 'JS',
                B : 'TS'
            }
        },
        tabsOrSpaces : {
            type    : 'radiogroup',
            title   : 'Tabs or Spaces',
            hidden  : true,
            value   : 'A',
            style   : 'margin-top: 2em',
            name    : 'tabsOrSpaces',
            options : {
                A : 'Tabs',
                B : 'Spaces'
            }
        }
    },
    strips : {
        right : {
            type        : 'panel',
            dock        : 'right',
            collapsible : true,
            width       : '20em',
            header      : false,
            cls         : 'b-sidebar',
            scrollable  : { overflowY : true },
            collapsed   : true,
            items       : {
                label : {
                    tag  : 'strong',
                    html : 'Settings'
                },
                toughQuestion : {
                    type     : 'slidetoggle',
                    label    : 'Show tough questions',
                    onChange : 'up.onShowToughQuestionsChange'
                }
            }
        }
    },
    tools : [
        {
            cls     : 'b-fa b-fa-bars',
            onClick : 'up.onToggleSettingsClick'
        }
    ],

    onToggleSettingsClick() {
        this.strips.right.toggleCollapsed();
    },

    onShowToughQuestionsChange({ value }) {
        this.widgetMap.jsOrTs.hidden = !value;
        this.widgetMap.tabsOrSpaces.hidden = !value;
    }
});
