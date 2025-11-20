import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Hr.js';
import '../../../lib/SchedulerPro/localization/Hr.js';
import './shared.locale.Hr.js';

const locale = {

    localeName : 'Hr',
    localeDesc : 'Hrvatski',
    localeCode : 'hr',
    localeRtl  : false,

    Column : {
        Actions             : 'Akcije',
        Allocation          : 'Raspodjela',
        Calendar            : 'Kalendar',
        City                : 'Grad',
        Consultant          : 'Konzultant',
        Contractor          : 'Izvođač',
        Doctor              : 'Liječnik',
        Driver              : 'Vozač',
        Expedition          : 'Ekspedicija',
        'First name'        : 'Ime',
        Inspector           : 'Inspektor',
        Manager             : 'Upravitelj',
        Name                : 'Naziv',
        Projects            : 'Projekti',
        Property            : 'Svojstvo',
        Rating              : 'Ocjena',
        Resource            : 'Resurs',
        Role                : 'Uloga',
        Score               : 'Rezultat',
        Shift               : 'Smjena',
        'Speaker rating'    : 'Ocjena govornika',
        Staff               : 'Osoblje',
        Station             : 'Stanica',
        Surname             : 'Prezime',
        Tasks               : 'Zadaci',
        Technicians         : 'Tehničari',
        Type                : 'Vrsta',
        'Vehicle Condition' : 'Stanje vozila',
        'Work hours'        : 'Radno vrijeme',
        Worker              : 'Radnik'
    },

    Button : {
        '10K events'                  : '10K događaja',
        '1K events'                   : '1K događaja',
        '5K events'                   : '5K događaja',
        'Add exception'               : 'Dodaj iznimku',
        'Add invalid calendar'        : 'Dodaj nevažeći kalendar',
        'Add invalid dependency'      : 'Dodaj nevažeću ovisnost',
        'Add order'                   : 'Dodaj narudžbu',
        'Add week'                    : 'Dodaj tjedan',
        Apr                           : 'Tra',
        Aug                           : 'Kol',
        'Auto-schedule'               : 'Automatsko raspoređivanje',
        'Bar settings'                : 'Postavke trake',
        Cancel                        : 'Odustani',
        'Change working time'         : 'Promijeni radno vrijeme',
        'City - Resource'             : 'Grad - Resurs',
        Custom                        : 'Prilagođeno',
        Dark                          : 'Tamno',
        Dec                           : 'Pro',
        Default                       : 'Zadano',
        'Default layouts'             : 'Zadani rasporedi',
        Delete                        : 'Izbriši',
        Dependencies                  : 'Ovisnosti',
        'Drag & resize settings'      : 'Postavke povlačenja i promjene veličine',
        'Edit calendar'               : 'Uredi kalendar',
        'Enable mouse interaction'    : 'Omogući interakciju mišem',
        Feb                           : 'Velj',
        'Filter out non-working time' : 'Filtriraj neradno vrijeme',
        'Hide scheduled'              : 'Sakrij zakazano',
        'Highlight 9-10am + 2-4pm'    : 'Istakni 9-10h + 14-16h',
        'Highlight while dragging'    : 'Istakni tijekom povlačenja',
        'Horizontal mode'             : 'Horizontalni način',
        Jan                           : 'Sij',
        Jul                           : 'Srp',
        Jun                           : 'Lip',
        'Layout function'             : 'Funkcija rasporeda',
        Light                         : 'Svijetlo',
        Login                         : 'Prijava',
        Logout                        : 'Odjava',
        Mar                           : 'Ožu',
        March                         : 'Ožujak',
        May                           : 'Svi',
        'New event'                   : 'Novi događaj',
        Nov                           : 'Stu',
        Oct                           : 'Lis',
        Overlap                       : 'Preklapanje',
        Pack                          : 'Pakiraj',
        Reset                         : 'Poništi',
        'Reset data'                  : 'Resetiraj podatke',
        'Resource - City'             : 'Resurs - Grad',
        'Resource ranges'             : 'Rasponi resursa',
        Save                          : 'Spremi',
        Sep                           : 'Ruj',
        'Show setup time'             : 'Prikaži vrijeme postavljanja',
        Stack                         : 'Stog',
        Today                         : 'Danas',
        'Vertical mode'               : 'Vertikalni način',
        'Zoom in'                     : 'Povećaj',
        'Zoom out'                    : 'Smanji'
    },

    Checkbox : {
        'Draw around parents'   : 'Crtaj oko roditelja',
        'Enable bar tooltip'    : 'Omogući opis trake',
        'Show bar texts'        : 'Prikaži tekstove trake',
        'Show max allocation'   : 'Prikaži maksimalnu alokaciju',
        'Show non working time' : 'Prikaži neradno vrijeme'
    },

    Slider : {
        'Max capacity' : 'Maksimalni kapacitet',
        'Row height'   : 'Visina reda'
    },

    Label : {
        Days       : 'Dani',
        'Group by' : 'Grupiraj po',
        Months     : 'Mjeseci',
        Settings   : 'Postavke'
    },

    Combo : {
        'Current timezone' : 'Trenutna vremenska zona',
        'Group events by'  : 'Grupiraj događaje po',
        Parent             : 'Roditelj',
        Show               : 'Prikaži'
    },

    NumberField : {
        Events    : 'Događaji',
        Resources : 'Resursi'
    },

    TextField : {
        Doctor           : 'Liječnik',
        Name             : 'Ime',
        'Server address' : 'Adresa poslužitelja',
        Username         : 'Korisničko ime'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Označite za prikaz linije maksimalne alokacije resursa',
        'Check to show resource allocation in the bars'                                                            : 'Označite za prikaz alokacije resursa u trakama',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Provjerite za prikaz skočnih savjeta kada pomičete miš preko traka',
        'Click to group by City - Resource'                                                                        : 'Kliknite za grupiranje po Gradu - Resursu',
        'Click to group by Resource - City'                                                                        : 'Kliknite za grupiranje po Resursu - Gradu',
        'Collapse all groups'                                                                                      : 'Sažmi sve grupe',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Onemogućite značajku grupiranja stabla i vratite se na zadani izgled Resurs - Zadatak',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Unesite broj događaja po resursu za generiranje i pritisnite [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Unesite broj redaka resursa za generiranje i pritisnite [ENTER]',
        'Expand all groups'                                                                                        : 'Proširi sve grupe',
        Friday                                                                                                     : 'Petak',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Ako su dva segmenta postavljena jedan pored drugog, možete ih spojiti ili ih držati odvojenima',
        Monday                                                                                                     : 'Ponedjeljak',
        Saturday                                                                                                   : 'Subota',
        Sunday                                                                                                     : 'Nedjelja',
        Thursday                                                                                                   : 'Četvrtak',
        'Toggle layout'                                                                                            : 'Prebaci izgled',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Pokušava uklopiti neplanirane događaje u trenutno prikazani vremenski okvir',
        Tuesday                                                                                                    : 'Utorak',
        'View next day'                                                                                            : 'Pogledaj sljedeći dan',
        'View previous day'                                                                                        : 'Pogledaj prethodni dan',
        'View today, to see the current time line'                                                                 : 'Pogledaj danas, za prikaz trenutne vremenske linije',
        Wednesday                                                                                                  : 'Srijeda'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Automatsko spajanje susjednih segmenata',
        'Auto-send'                    : 'Automatsko slanje',
        'Constrain drag to row'        : 'Ograniči povlačenje na red',
        'Days are working by default'  : 'Dani su radni prema zadanim postavkama',
        'Enable highlighting'          : 'Omogući isticanje',
        'Enable task drag drop'        : 'Omogući povlačenje i ispuštanje zadatka',
        'Snap to grid'                 : 'Poravnaj s mrežom',
        'View Planned dates'           : 'Prikaži planirane datume'
    }
};

export default LocaleHelper.publishLocale(locale);
