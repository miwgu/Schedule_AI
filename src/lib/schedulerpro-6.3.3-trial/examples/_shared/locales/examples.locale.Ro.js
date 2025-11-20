import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Ro.js';
import '../../../lib/SchedulerPro/localization/Ro.js';
import './shared.locale.Ro.js';

const locale = {

    localeName : 'Ro',
    localeDesc : 'Română',
    localeCode : 'ro',
    localeRtl  : false,

    Column : {
        Actions             : 'Acțiuni',
        Allocation          : 'Alocare',
        Calendar            : 'Calendar',
        City                : 'Oraș',
        Consultant          : 'Consultant',
        Contractor          : 'Contractant',
        Doctor              : 'Doctor',
        Driver              : 'Șofer',
        Expedition          : 'Expediție',
        'First name'        : 'Prenume',
        Inspector           : 'Inspector',
        Manager             : 'Manager',
        Name                : 'Nume',
        Projects            : 'Proiecte',
        Property            : 'Proprietate',
        Rating              : 'Evaluare',
        Resource            : 'Resursă',
        Role                : 'Rol',
        Score               : 'Scor',
        Shift               : 'Schimb',
        'Speaker rating'    : 'Evaluare vorbitor',
        Staff               : 'Personal',
        Station             : 'Stație',
        Surname             : 'Nume de familie',
        Tasks               : 'Sarcini',
        Technicians         : 'Tehnicieni',
        Type                : 'Tip',
        'Vehicle Condition' : 'Stare vehicul',
        'Work hours'        : 'Ore de lucru',
        Worker              : 'Muncitor'
    },

    Button : {
        '10K events'                  : '10K evenimente',
        '1K events'                   : '1K evenimente',
        '5K events'                   : '5K evenimente',
        'Add exception'               : 'Adaugă excepție',
        'Add invalid calendar'        : 'Adaugă calendar invalid',
        'Add invalid dependency'      : 'Adaugă dependență invalidă',
        'Add order'                   : 'Adaugă comandă',
        'Add week'                    : 'Adaugă săptămână',
        Apr                           : 'Apr',
        Aug                           : 'Aug',
        'Auto-schedule'               : 'Auto-programare',
        'Bar settings'                : 'Setări bară',
        Cancel                        : 'Anulează',
        'Change working time'         : 'Schimbă timpul de lucru',
        'City - Resource'             : 'Oraș - Resursă',
        Custom                        : 'Personalizat',
        Dark                          : 'Întunecat',
        Dec                           : 'Dec',
        Default                       : 'Implicit',
        'Default layouts'             : 'Aspecte implicite',
        Delete                        : 'Șterge',
        Dependencies                  : 'Dependențe',
        'Drag & resize settings'      : 'Setări tragere și redimensionare',
        'Edit calendar'               : 'Editează calendarul',
        'Enable mouse interaction'    : 'Activează interacțiunea cu mouse-ul',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Filtrează timpul nelucrător',
        'Hide scheduled'              : 'Ascunde programat',
        'Highlight 9-10am + 2-4pm'    : 'Evidențiază 9-10am + 2-4pm',
        'Highlight while dragging'    : 'Evidențiază în timpul tragerii',
        'Horizontal mode'             : 'Mod orizontal',
        Jan                           : 'Jan',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Funcție de aspect',
        Light                         : 'Luminos',
        Login                         : 'Autentificare',
        Logout                        : 'Deconectare',
        Mar                           : 'Mar',
        March                         : 'Martie',
        May                           : 'Mai',
        'New event'                   : 'Eveniment nou',
        Nov                           : 'Nov',
        Oct                           : 'Oct',
        Overlap                       : 'Suprapunere',
        Pack                          : 'Împachetează',
        Reset                         : 'Resetare',
        'Reset data'                  : 'Resetează datele',
        'Resource - City'             : 'Resursă - Oraș',
        'Resource ranges'             : 'Intervale de resurse',
        Save                          : 'Salvează',
        Sep                           : 'Sep',
        'Show setup time'             : 'Afișează timpul de configurare',
        Stack                         : 'Stivă',
        Today                         : 'Astăzi',
        'Vertical mode'               : 'Mod vertical',
        'Zoom in'                     : 'Mărește',
        'Zoom out'                    : 'Micșorează'
    },

    Checkbox : {
        'Draw around parents'   : 'Desenează în jurul părinților',
        'Enable bar tooltip'    : 'Activează tooltip pentru bară',
        'Show bar texts'        : 'Afișează textele barei',
        'Show max allocation'   : 'Afișează alocarea maximă',
        'Show non working time' : 'Afișează timpul nefuncțional'
    },

    Slider : {
        'Max capacity' : 'Capacitate maximă',
        'Row height'   : 'Înălțimea rândului'
    },

    Label : {
        Days       : 'Zile',
        'Group by' : 'Grupare după',
        Months     : 'Luni',
        Settings   : 'Setări'
    },

    Combo : {
        'Current timezone' : 'Fus orar curent',
        'Group events by'  : 'Grupare evenimente după',
        Parent             : 'Părinte',
        Show               : 'Afișează'
    },

    NumberField : {
        Events    : 'Evenimente',
        Resources : 'Resurse'
    },

    TextField : {
        Doctor           : 'Doctor',
        Name             : 'Nume',
        'Server address' : 'Adresa serverului',
        Username         : 'Nume utilizator'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Bifați pentru a afișa linia de alocare maximă a resurselor',
        'Check to show resource allocation in the bars'                                                            : 'Bifați pentru a afișa alocarea resurselor în bare',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Bifați pentru a afișa tooltips când mutați mouse-ul peste bare',
        'Click to group by City - Resource'                                                                        : 'Faceți clic pentru a grupa după Oraș - Resursă',
        'Click to group by Resource - City'                                                                        : 'Faceți clic pentru a grupa după Resursă - Oraș',
        'Collapse all groups'                                                                                      : 'Restrângeți toate grupurile',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Dezactivați funcția de grupare în arbore și reveniți la aspectul implicit Resursă - Atribuire',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Introduceți numărul de evenimente pe resursă de generat și apăsați [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Introduceți numărul de rânduri de resurse de generat și apăsați [ENTER]',
        'Expand all groups'                                                                                        : 'Extindeți toate grupurile',
        Friday                                                                                                     : 'Vineri',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Dacă două segmente sunt plasate unul lângă altul, le puteți fie îmbina, fie păstra separate',
        Monday                                                                                                     : 'Luni',
        Saturday                                                                                                   : 'Sâmbătă',
        Sunday                                                                                                     : 'Duminică',
        Thursday                                                                                                   : 'Joi',
        'Toggle layout'                                                                                            : 'Comutați aspectul',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Încearcă să încadreze evenimentele neplanificate în intervalul de timp afișat în prezent',
        Tuesday                                                                                                    : 'Marți',
        'View next day'                                                                                            : 'Vizualizați ziua următoare',
        'View previous day'                                                                                        : 'Vizualizați ziua anterioară',
        'View today, to see the current time line'                                                                 : 'Vizualizați astăzi, pentru a vedea linia de timp curentă',
        Wednesday                                                                                                  : 'Miercuri'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Îmbinare automată a segmentelor adiacente',
        'Auto-send'                    : 'Trimitere automată',
        'Constrain drag to row'        : 'Constrângeți tragerea la rând',
        'Days are working by default'  : 'Zilele sunt lucrătoare implicit',
        'Enable highlighting'          : 'Activează evidențierea',
        'Enable task drag drop'        : 'Activează tragerea și plasarea sarcinilor',
        'Snap to grid'                 : 'Aliniază la grilă',
        'View Planned dates'           : 'Vizualizați datele planificate'
    }
};

export default LocaleHelper.publishLocale(locale);
