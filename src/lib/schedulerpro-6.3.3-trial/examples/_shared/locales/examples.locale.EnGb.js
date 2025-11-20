import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/EnGb.js';
import '../../../lib/SchedulerPro/localization/EnGb.js';
import './shared.locale.EnGb.js';

const locale = {

    localeName : 'EnGb',
    localeDesc : 'English (GB)',
    localeCode : 'en-GB',
    localeRtl  : false,

    Column : {
        Actions             : 'Actions',
        Allocation          : 'Allocation',
        Calendar            : 'Calendar',
        City                : 'City',
        Consultant          : 'Consultant',
        Contractor          : 'Contractor',
        Doctor              : 'Doctor',
        Driver              : 'Driver',
        Expedition          : 'Expedition',
        'First name'        : 'First name',
        Inspector           : 'Inspector',
        Manager             : 'Manager',
        Name                : 'Name',
        Projects            : 'Projects',
        Property            : 'Property',
        Rating              : 'Rating',
        Resource            : 'Resource',
        Role                : 'Role',
        Score               : 'Score',
        Shift               : 'Shift',
        'Speaker rating'    : 'Speaker rating',
        Staff               : 'Staff',
        Station             : 'Station',
        Surname             : 'Surname',
        Tasks               : 'Tasks',
        Technicians         : 'Technicians',
        Type                : 'Type',
        'Vehicle Condition' : 'Vehicle Condition',
        'Work hours'        : 'Work hours',
        Worker              : 'Worker'
    },

    Button : {
        '10K events'                  : '10K events',
        '1K events'                   : '1K events',
        '5K events'                   : '5K events',
        'Add exception'               : 'Add exception',
        'Add invalid calendar'        : 'Add invalid calendar',
        'Add invalid dependency'      : 'Add invalid dependency',
        'Add order'                   : 'Add order',
        'Add week'                    : 'Add week',
        Apr                           : 'Apr',
        Aug                           : 'Aug',
        'Auto-schedule'               : 'Auto-schedule',
        'Bar settings'                : 'Bar settings',
        Cancel                        : 'Cancel',
        'Change working time'         : 'Change working hours',
        'City - Resource'             : 'City - Resource',
        Custom                        : 'Custom',
        Dark                          : 'Dark',
        Dec                           : 'Dec',
        Default                       : 'Default',
        'Default layouts'             : 'Default layouts',
        Delete                        : 'Delete',
        Dependencies                  : 'Dependencies',
        'Drag & resize settings'      : 'Drag & resize settings',
        'Edit calendar'               : 'Edit calendar',
        'Enable mouse interaction'    : 'Enable mouse interaction',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Filter out non-working hours',
        'Hide scheduled'              : 'Hide scheduled',
        'Highlight 9-10am + 2-4pm'    : 'Highlight 9-10am + 2-4pm',
        'Highlight while dragging'    : 'Highlight while dragging',
        'Horizontal mode'             : 'Horizontal mode',
        Jan                           : 'Jan',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Layout function',
        Light                         : 'Light',
        Login                         : 'Log in',
        Logout                        : 'Log out',
        Mar                           : 'Mar',
        March                         : 'March',
        May                           : 'May',
        'New event'                   : 'New event',
        Nov                           : 'Nov',
        Oct                           : 'Oct',
        Overlap                       : 'Overlap',
        Pack                          : 'Pack',
        Reset                         : 'Reset',
        'Reset data'                  : 'Reset data',
        'Resource - City'             : 'Resource - City',
        'Resource ranges'             : 'Resource ranges',
        Save                          : 'Save',
        Sep                           : 'Sep',
        'Show setup time'             : 'Show setup time',
        Stack                         : 'Stack',
        Today                         : 'Today',
        'Vertical mode'               : 'Vertical mode',
        'Zoom in'                     : 'Zoom in',
        'Zoom out'                    : 'Zoom out'
    },

    Checkbox : {
        'Draw around parents'   : 'Draw around parents',
        'Enable bar tooltip'    : 'Enable bar tooltip',
        'Show bar texts'        : 'Show bar texts',
        'Show max allocation'   : 'Show max allocation',
        'Show non working time' : 'Show non-working time'
    },

    Slider : {
        'Max capacity' : 'Max capacity',
        'Row height'   : 'Row height'
    },

    Label : {
        Days       : 'Days',
        'Group by' : 'Group by',
        Months     : 'Months',
        Settings   : 'Settings'
    },

    Combo : {
        'Current timezone' : 'Current time zone',
        'Group events by'  : 'Group events by',
        Parent             : 'Parent',
        Show               : 'Show'
    },

    NumberField : {
        Events    : 'Events',
        Resources : 'Resources'
    },

    TextField : {
        Doctor           : 'Doctor',
        Name             : 'Name',
        'Server address' : 'Server address',
        Username         : 'Username'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Check to display max resource allocation line',
        'Check to show resource allocation in the bars'                                                            : 'Check to show resource allocation in the bars',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Check to show tooltips when moving mouse over bars',
        'Click to group by City - Resource'                                                                        : 'Click to group by City - Resource',
        'Click to group by Resource - City'                                                                        : 'Click to group by Resource - City',
        'Collapse all groups'                                                                                      : 'Collapse all groups',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Disable tree group feature and return to default Resource - Assignment view',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Enter number of events per resource to generate and press [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Enter number of resource rows to generate and press [ENTER]',
        'Expand all groups'                                                                                        : 'Expand all groups',
        Friday                                                                                                     : 'Friday',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'If two segments are placed next to each other, you can either have them be merged or keep them separated',
        Monday                                                                                                     : 'Monday',
        Saturday                                                                                                   : 'Saturday',
        Sunday                                                                                                     : 'Sunday',
        Thursday                                                                                                   : 'Thursday',
        'Toggle layout'                                                                                            : 'Toggle layout',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Tries to fit the unplanned events into the currently displayed timeframe',
        Tuesday                                                                                                    : 'Tuesday',
        'View next day'                                                                                            : 'View next day',
        'View previous day'                                                                                        : 'View previous day',
        'View today, to see the current time line'                                                                 : 'View today, to see the current time line',
        Wednesday                                                                                                  : 'Wednesday'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Auto-merge adjacent segments',
        'Auto-send'                    : 'Auto-send',
        'Constrain drag to row'        : 'Constrain drag to row',
        'Days are working by default'  : 'Days are working by default',
        'Enable highlighting'          : 'Enable highlighting',
        'Enable task drag drop'        : 'Enable task drag drop',
        'Snap to grid'                 : 'Snap to grid',
        'View Planned dates'           : 'View Planned dates'
    }
};

export default LocaleHelper.publishLocale(locale);
