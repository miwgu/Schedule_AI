import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Sl.js';
import '../../../lib/SchedulerPro/localization/Sl.js';
import './shared.locale.Sl.js';

const locale = {

    localeName : 'Sl',
    localeDesc : 'Slovensko',
    localeCode : 'sl',
    localeRtl  : false,

    Column : {
        Actions             : 'Dejanja',
        Allocation          : 'Dodelitev',
        Calendar            : 'Koledar',
        City                : 'Mesto',
        Consultant          : 'Konzultant',
        Contractor          : 'Izvajalec',
        Doctor              : 'Zdravnik',
        Driver              : 'Voznik',
        Expedition          : 'Ekspedicija',
        'First name'        : 'Ime',
        Inspector           : 'Inšpektor',
        Manager             : 'Upravitelj',
        Name                : 'Ime',
        Projects            : 'Projekti',
        Property            : 'Lastnina',
        Rating              : 'Ocena',
        Resource            : 'Vir',
        Role                : 'Vloga',
        Score               : 'Rezultat',
        Shift               : 'Izmena',
        'Speaker rating'    : 'Ocena govorca',
        Staff               : 'Osebje',
        Station             : 'Postaja',
        Surname             : 'Priimek',
        Tasks               : 'Naloge',
        Technicians         : 'Tehniki',
        Type                : 'Vrsta',
        'Vehicle Condition' : 'Stanje vozila',
        'Work hours'        : 'Delovne ure',
        Worker              : 'Delavec'
    },

    Button : {
        '10K events'                  : '10K dogodkov',
        '1K events'                   : '1K dogodkov',
        '5K events'                   : '5K dogodkov',
        'Add exception'               : 'Dodaj izjemo',
        'Add invalid calendar'        : 'Dodaj neveljaven koledar',
        'Add invalid dependency'      : 'Dodaj neveljavno odvisnost',
        'Add order'                   : 'Dodaj naročilo',
        'Add week'                    : 'Dodaj teden',
        Apr                           : 'Apr',
        Aug                           : 'Avg',
        'Auto-schedule'               : 'Samodejni urnik',
        'Bar settings'                : 'Nastavitve vrstice',
        Cancel                        : 'Prekliči',
        'Change working time'         : 'Spremeni delovni čas',
        'City - Resource'             : 'Mesto - Vir',
        Custom                        : 'Po meri',
        Dark                          : 'Temno',
        Dec                           : 'Dec',
        Default                       : 'Privzeto',
        'Default layouts'             : 'Privzete postavitve',
        Delete                        : 'Izbriši',
        Dependencies                  : 'Odzivnosti',
        'Drag & resize settings'      : 'Nastavitve povleci in spremeni velikost',
        'Edit calendar'               : 'Uredi koledar',
        'Enable mouse interaction'    : 'Omogoči interakcijo z miško',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Filtriraj nedelovni čas',
        'Hide scheduled'              : 'Skrij načrtovano',
        'Highlight 9-10am + 2-4pm'    : 'Označi 9-10h + 14-16h',
        'Highlight while dragging'    : 'Označi med vlečenjem',
        'Horizontal mode'             : 'Vodoravni način',
        Jan                           : 'Jan',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Funkcija postavitve',
        Light                         : 'Svetlo',
        Login                         : 'Prijava',
        Logout                        : 'Odjava',
        Mar                           : 'Mar',
        March                         : 'Marec',
        May                           : 'Maj',
        'New event'                   : 'Nov dogodek',
        Nov                           : 'Nov',
        Oct                           : 'Okt',
        Overlap                       : 'Prekrivanje',
        Pack                          : 'Pakiraj',
        Reset                         : 'Ponastavi',
        'Reset data'                  : 'Ponastavi podatke',
        'Resource - City'             : 'Vir - Mesto',
        'Resource ranges'             : 'Obsegi virov',
        Save                          : 'Shrani',
        Sep                           : 'Sep',
        'Show setup time'             : 'Prikaži čas nastavitve',
        Stack                         : 'Zloži',
        Today                         : 'Danes',
        'Vertical mode'               : 'Navpični način',
        'Zoom in'                     : 'Povečaj',
        'Zoom out'                    : 'Pomanjšaj'
    },

    Checkbox : {
        'Draw around parents'   : 'Riši okoli staršev',
        'Enable bar tooltip'    : 'Omogoči orodje za vrstico',
        'Show bar texts'        : 'Prikaži besedila v vrstici',
        'Show max allocation'   : 'Prikaži največjo dodelitev',
        'Show non working time' : 'Pokaži ne delovni čas'
    },

    Slider : {
        'Max capacity' : 'Največja zmogljivost',
        'Row height'   : 'Višina vrstice'
    },

    Label : {
        Days       : 'Dnevi',
        'Group by' : 'Združi po',
        Months     : 'Meseci',
        Settings   : 'Nastavitve'
    },

    Combo : {
        'Current timezone' : 'Trenutni časovni pas',
        'Group events by'  : 'Združi dogodke po',
        Parent             : 'Nadrejeni',
        Show               : 'Prikaži'
    },

    NumberField : {
        Events    : 'Dogodki',
        Resources : 'Viri'
    },

    TextField : {
        Doctor           : 'Zdravnik',
        Name             : 'Ime',
        'Server address' : 'Naslov strežnika',
        Username         : 'Uporabniško ime'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Označite za prikaz črte največje dodelitve virov',
        'Check to show resource allocation in the bars'                                                            : 'Označite za prikaz dodelitve virov v vrsticah',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Preverite, da prikažete orodna namiga, ko premikate miško nad vrsticami',
        'Click to group by City - Resource'                                                                        : 'Kliknite za razvrstitev po Mesto - Sredstvo',
        'Click to group by Resource - City'                                                                        : 'Kliknite za razvrstitev po Sredstvo - Mesto',
        'Collapse all groups'                                                                                      : 'Strni vse skupine',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Onemogočite funkcijo skupine dreves in se vrnite na privzeti videz Sredstvo - Dodelitev',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Vnesite število dogodkov na vir za generiranje in pritisnite [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Vnesite število vrstic virov za generiranje in pritisnite [ENTER]',
        'Expand all groups'                                                                                        : 'Razširi vse skupine',
        Friday                                                                                                     : 'Petek',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Če sta dva segmenta postavljena drug ob drugem, ju lahko združite ali ohranite ločena',
        Monday                                                                                                     : 'Ponedeljek',
        Saturday                                                                                                   : 'Sobota',
        Sunday                                                                                                     : 'Nedelja',
        Thursday                                                                                                   : 'Četrtek',
        'Toggle layout'                                                                                            : 'Preklopi postavitev',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Poskuša prilagoditi neplanirane dogodke v trenutno prikazan časovni okvir',
        Tuesday                                                                                                    : 'Torek',
        'View next day'                                                                                            : 'Ogled naslednjega dne',
        'View previous day'                                                                                        : 'Ogled prejšnjega dne',
        'View today, to see the current time line'                                                                 : 'Ogled danes, da vidite trenutno časovno črto',
        Wednesday                                                                                                  : 'Sreda'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Samodejno združevanje sosednjih segmentov',
        'Auto-send'                    : 'Samodejno pošiljanje',
        'Constrain drag to row'        : 'Omeji povleci na vrstico',
        'Days are working by default'  : 'Dnevi so privzeto delovni',
        'Enable highlighting'          : 'Omogoči označevanje',
        'Enable task drag drop'        : 'Omogoči povleci in spusti naloge',
        'Snap to grid'                 : 'Poravnaj na mrežo',
        'View Planned dates'           : 'Ogled načrtovanih datumov'
    }
};

export default LocaleHelper.publishLocale(locale);
