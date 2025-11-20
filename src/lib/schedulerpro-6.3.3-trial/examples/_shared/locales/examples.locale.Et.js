import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Et.js';
import '../../../lib/SchedulerPro/localization/Et.js';
import './shared.locale.Et.js';

const locale = {

    localeName : 'Et',
    localeDesc : 'Eesti keel',
    localeCode : 'et',
    localeRtl  : false,

    Column : {
        Actions             : 'Tegevused',
        Allocation          : 'Jaotus',
        Calendar            : 'Kalender',
        City                : 'Linn',
        Consultant          : 'Konsultant',
        Contractor          : 'Lepinguline töötaja',
        Doctor              : 'Arst',
        Driver              : 'Juht',
        Expedition          : 'Ekspeditsioon',
        'First name'        : 'Eesnimi',
        Inspector           : 'Inspektor',
        Manager             : 'Juhataja',
        Name                : 'Nimi',
        Projects            : 'Projektid',
        Property            : 'Kinnisvara',
        Rating              : 'Hinnang',
        Resource            : 'Ressurss',
        Role                : 'Roll',
        Score               : 'Tulemus',
        Shift               : 'Vahetus',
        'Speaker rating'    : 'Esineja hinnang',
        Staff               : 'Töötajad',
        Station             : 'Jaam',
        Surname             : 'Perekonnanimi',
        Tasks               : 'Ülesanded',
        Technicians         : 'Tehnikud',
        Type                : 'Tüüp',
        'Vehicle Condition' : 'Sõiduki seisukord',
        'Work hours'        : 'Tööaeg',
        Worker              : 'Tööline'
    },

    Button : {
        '10K events'                  : '10K sündmust',
        '1K events'                   : '1K sündmust',
        '5K events'                   : '5K sündmust',
        'Add exception'               : 'Lisa erand',
        'Add invalid calendar'        : 'Lisa vigane kalender',
        'Add invalid dependency'      : 'Lisa vigane sõltuvus',
        'Add order'                   : 'Lisa tellimus',
        'Add week'                    : 'Lisa nädal',
        Apr                           : 'Apr',
        Aug                           : 'Aug',
        'Auto-schedule'               : 'Automaatne ajakava',
        'Bar settings'                : 'Riba seaded',
        Cancel                        : 'Tühista',
        'Change working time'         : 'Muuda tööaega',
        'City - Resource'             : 'Linn - Ressurss',
        Custom                        : 'Kohandatud',
        Dark                          : 'Tume',
        Dec                           : 'Dets',
        Default                       : 'Vaikimisi',
        'Default layouts'             : 'Vaikimisi paigutused',
        Delete                        : 'Kustuta',
        Dependencies                  : 'Sõltuvused',
        'Drag & resize settings'      : 'Lohista ja suuruse muutmise seaded',
        'Edit calendar'               : 'Muuda kalendrit',
        'Enable mouse interaction'    : 'Luba hiire interaktsioon',
        Feb                           : 'Veebr',
        'Filter out non-working time' : 'Filtreeri välja mitte-tööaeg',
        'Hide scheduled'              : 'Peida ajastatud',
        'Highlight 9-10am + 2-4pm'    : 'Tõsta esile 9-10am + 2-4pm',
        'Highlight while dragging'    : 'Tõsta esile lohistamise ajal',
        'Horizontal mode'             : 'Horisontaalne režiim',
        Jan                           : 'Jaan',
        Jul                           : 'Juuli',
        Jun                           : 'Juun',
        'Layout function'             : 'Paigutuse funktsioon',
        Light                         : 'Hele',
        Login                         : 'Logi sisse',
        Logout                        : 'Logi välja',
        Mar                           : 'Märts',
        March                         : 'Märts',
        May                           : 'Mai',
        'New event'                   : 'Uus sündmus',
        Nov                           : 'Nov',
        Oct                           : 'Okt',
        Overlap                       : 'Kattumine',
        Pack                          : 'Paki',
        Reset                         : 'Lähtesta',
        'Reset data'                  : 'Lähtesta andmed',
        'Resource - City'             : 'Ressurss - Linn',
        'Resource ranges'             : 'Ressursi vahemikud',
        Save                          : 'Salvesta',
        Sep                           : 'Sept',
        'Show setup time'             : 'Näita seadistusaega',
        Stack                         : 'Virn',
        Today                         : 'Täna',
        'Vertical mode'               : 'Vertikaalne režiim',
        'Zoom in'                     : 'Suumi sisse',
        'Zoom out'                    : 'Suumi välja'
    },

    Checkbox : {
        'Draw around parents'   : 'Joonista ümber vanemate',
        'Enable bar tooltip'    : 'Luba riba tööriistavihje',
        'Show bar texts'        : 'Kuva riba tekstid',
        'Show max allocation'   : 'Kuva maksimaalne jaotus',
        'Show non working time' : 'Näita mitte tööaega'
    },

    Slider : {
        'Max capacity' : 'Maksimaalne maht',
        'Row height'   : 'Rea kõrgus'
    },

    Label : {
        Days       : 'Päevad',
        'Group by' : 'Rühmitamine',
        Months     : 'Kuud',
        Settings   : 'Seaded'
    },

    Combo : {
        'Current timezone' : 'Praegune ajavöönd',
        'Group events by'  : 'Sündmuste rühmitamine',
        Parent             : 'Vanem',
        Show               : 'Näita'
    },

    NumberField : {
        Events    : 'Sündmused',
        Resources : 'Ressursid'
    },

    TextField : {
        Doctor           : 'Arst',
        Name             : 'Nimi',
        'Server address' : 'Serveri aadress',
        Username         : 'Kasutajanimi'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Maksimaalse ressursijaotuse joone kuvamiseks märgi ruut',
        'Check to show resource allocation in the bars'                                                            : 'Ressursijaotuse ribades kuvamiseks märgi ruut',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Kontrollige, et kuvada tööriistavihjeid, kui liigutate hiirt ribade kohal',
        'Click to group by City - Resource'                                                                        : 'Klõpsake, et grupeerida linna järgi - Ressurss',
        'Click to group by Resource - City'                                                                        : 'Klõpsake, et grupeerida ressursi järgi - Linn',
        'Collapse all groups'                                                                                      : 'Ahenda kõik grupid',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Keela puugrupi funktsioon ja naase vaikimisi Ressurss - Ülesanne vaatesse',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Sisesta sündmuste arv ressursi kohta ja vajuta [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Sisesta ressursi ridade arv ja vajuta [ENTER]',
        'Expand all groups'                                                                                        : 'Laienda kõik grupid',
        Friday                                                                                                     : 'Reede',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Kui kaks segmenti on üksteise kõrval, saate need kas ühendada või eraldi hoida',
        Monday                                                                                                     : 'Esmaspäev',
        Saturday                                                                                                   : 'Laupäev',
        Sunday                                                                                                     : 'Pühapäev',
        Thursday                                                                                                   : 'Neljapäev',
        'Toggle layout'                                                                                            : 'Vaheta paigutust',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Püüab sobitada planeerimata sündmused praegu kuvatavasse ajaraami',
        Tuesday                                                                                                    : 'Teisipäev',
        'View next day'                                                                                            : 'Vaata järgmist päeva',
        'View previous day'                                                                                        : 'Vaata eelmist päeva',
        'View today, to see the current time line'                                                                 : 'Vaata tänast päeva, et näha praegust ajajoont',
        Wednesday                                                                                                  : 'Kolmapäev'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Külgnevate segmentide automaatne ühendamine',
        'Auto-send'                    : 'Automaatne saatmine',
        'Constrain drag to row'        : 'Piira lohistamine reaga',
        'Days are working by default'  : 'Päevad on vaikimisi tööpäevad',
        'Enable highlighting'          : 'Luba esiletõstmine',
        'Enable task drag drop'        : 'Luba ülesannete lohistamine',
        'Snap to grid'                 : 'Joonda ruudustikuga',
        'View Planned dates'           : 'Vaata planeeritud kuupäevi'
    }
};

export default LocaleHelper.publishLocale(locale);
