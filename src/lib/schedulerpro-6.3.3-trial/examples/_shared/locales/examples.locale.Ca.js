import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Ca.js';
import '../../../lib/SchedulerPro/localization/Ca.js';
import './shared.locale.Ca.js';

const locale = {

    localeName : 'Ca',
    localeDesc : 'Català',
    localeCode : 'ca-ES',
    localeRtl  : false,

    Column : {
        Actions             : 'Accions',
        Allocation          : 'Assignació',
        Calendar            : 'Calendari',
        City                : 'Ciutat',
        Consultant          : 'Consultor',
        Contractor          : 'Contractista',
        Doctor              : 'Metge',
        Driver              : 'Conductor',
        Expedition          : 'Expedició',
        'First name'        : 'Nom',
        Inspector           : 'Inspector',
        Manager             : 'Gerent',
        Name                : 'Nom',
        Projects            : 'Projectes',
        Property            : 'Propietat',
        Rating              : 'Valoració',
        Resource            : 'Recurs',
        Role                : 'Rol',
        Score               : 'Puntuació',
        Shift               : 'Torn',
        'Speaker rating'    : 'Valoració del ponent',
        Staff               : 'Personal',
        Station             : 'Estació',
        Surname             : 'Cognom',
        Tasks               : 'Tasques',
        Technicians         : 'Tècnics',
        Type                : 'Tipus',
        'Vehicle Condition' : 'Condició del vehicle',
        'Work hours'        : 'Hores de treball',
        Worker              : 'Treballador'
    },

    Button : {
        '10K events'                  : '10K esdeveniments',
        '1K events'                   : '1K esdeveniments',
        '5K events'                   : '5K esdeveniments',
        'Add exception'               : 'Afegeix excepció',
        'Add invalid calendar'        : 'Afegeix calendari invàlid',
        'Add invalid dependency'      : 'Afegeix dependència invàlida',
        'Add order'                   : 'Afegeix ordre',
        'Add week'                    : 'Afegeix setmana',
        Apr                           : 'Abr',
        Aug                           : 'Ago',
        'Auto-schedule'               : 'Programació automàtica',
        'Bar settings'                : 'Configuració de la barra',
        Cancel                        : 'Cancel·la',
        'Change working time'         : "Canviar l'horari laboral",
        'City - Resource'             : 'Ciutat - Recurs',
        Custom                        : 'Personalitzat',
        Dark                          : 'Fosc',
        Dec                           : 'Des',
        Default                       : 'Per defecte',
        'Default layouts'             : 'Dissenys per defecte',
        Delete                        : 'Suprimeix',
        Dependencies                  : 'Dependències',
        'Drag & resize settings'      : "Configuració de l'arrossegament i redimensionament",
        'Edit calendar'               : 'Edita el calendari',
        'Enable mouse interaction'    : 'Habilita la interacció amb el ratolí',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Filtrar el temps no laborable',
        'Hide scheduled'              : 'Amaga programat',
        'Highlight 9-10am + 2-4pm'    : 'Ressaltar 9-10h + 14-16h',
        'Highlight while dragging'    : 'Ressaltar mentre es desplaça',
        'Horizontal mode'             : 'Mode horitzontal',
        Jan                           : 'Gen',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Funció de disseny',
        Light                         : 'Clar',
        Login                         : 'Inicia sessió',
        Logout                        : 'Tanca sessió',
        Mar                           : 'Mar',
        March                         : 'Març',
        May                           : 'Mai',
        'New event'                   : 'Nou esdeveniment',
        Nov                           : 'Nov',
        Oct                           : 'Oct',
        Overlap                       : 'Superposició',
        Pack                          : 'Empaqueta',
        Reset                         : 'Reinicia',
        'Reset data'                  : 'Restableix dades',
        'Resource - City'             : 'Recurs - Ciutat',
        'Resource ranges'             : 'Rangs de recursos',
        Save                          : 'Desa',
        Sep                           : 'Set',
        'Show setup time'             : 'Mostra el temps de configuració',
        Stack                         : 'Apila',
        Today                         : 'Avui',
        'Vertical mode'               : 'Mode vertical',
        'Zoom in'                     : 'Amplia',
        'Zoom out'                    : 'Redueix'
    },

    Checkbox : {
        'Draw around parents'   : 'Dibuixa al voltant dels pares',
        'Enable bar tooltip'    : 'Activa la informació sobre eines de la barra',
        'Show bar texts'        : 'Mostrar textos de la barra',
        'Show max allocation'   : 'Mostrar assignació màxima',
        'Show non working time' : 'Mostra el temps no laborable'
    },

    Slider : {
        'Max capacity' : 'Capacitat màxima',
        'Row height'   : 'Alçada de fila'
    },

    Label : {
        Days       : 'Dies',
        'Group by' : 'Agrupar per',
        Months     : 'Mesos',
        Settings   : 'Configuració'
    },

    Combo : {
        'Current timezone' : 'Zona horària actual',
        'Group events by'  : 'Agrupar esdeveniments per',
        Parent             : 'Pare',
        Show               : 'Mostrar'
    },

    NumberField : {
        Events    : 'Esdeveniments',
        Resources : 'Recursos'
    },

    TextField : {
        Doctor           : 'Metge',
        Name             : 'Nom',
        'Server address' : 'Adreça del servidor',
        Username         : "Nom d'usuari"
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : "Comprova per mostrar la línia d'assignació màxima de recursos",
        'Check to show resource allocation in the bars'                                                            : "Comprova per mostrar l'assignació de recursos a les barres",
        'Check to show tooltips when moving mouse over bars'                                                       : 'Comprova per mostrar les eines emergents quan es mou el ratolí sobre les barres',
        'Click to group by City - Resource'                                                                        : 'Fes clic per agrupar per Ciutat - Recurs',
        'Click to group by Resource - City'                                                                        : 'Fes clic per agrupar per Recurs - Ciutat',
        'Collapse all groups'                                                                                      : 'Col·lapsa tots els grups',
        'Disable tree group feature and back to default Resource - Assignment look'                                : "Desactiva la funció d'agrupació d'arbres i torna a l'aspecte predeterminat de Recurs - Assignació",
        'Enter number of events per resource to generate and press [ENTER]'                                        : "Introduïu el nombre d'esdeveniments per recurs a generar i premeu [ENTER]",
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Introduïu el nombre de files de recursos a generar i premeu [ENTER]',
        'Expand all groups'                                                                                        : 'Expandeix tots els grups',
        Friday                                                                                                     : 'Divendres',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : "Si dos segments es col·loquen un al costat de l'altre, pots fusionar-los o mantenir-los separats",
        Monday                                                                                                     : 'Dilluns',
        Saturday                                                                                                   : 'Dissabte',
        Sunday                                                                                                     : 'Diumenge',
        Thursday                                                                                                   : 'Dijous',
        'Toggle layout'                                                                                            : 'Canvia el disseny',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Intenta ajustar els esdeveniments no planificats al període de temps actualment mostrat',
        Tuesday                                                                                                    : 'Dimarts',
        'View next day'                                                                                            : 'Veure el dia següent',
        'View previous day'                                                                                        : 'Veure el dia anterior',
        'View today, to see the current time line'                                                                 : 'Veure avui, per veure la línia de temps actual',
        Wednesday                                                                                                  : 'Dimecres'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Fusió automàtica de segments adjacents',
        'Auto-send'                    : 'Enviament automàtic',
        'Constrain drag to row'        : 'Restringir el desplaçament a la fila',
        'Days are working by default'  : 'Els dies són laborables per defecte',
        'Enable highlighting'          : 'Habilitar ressaltat',
        'Enable task drag drop'        : 'Habilitar arrossegar i deixar anar tasques',
        'Snap to grid'                 : 'Ajustar a la graella',
        'View Planned dates'           : 'Veure dates planificades'
    }
};

export default LocaleHelper.publishLocale(locale);
