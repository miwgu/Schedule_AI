import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Sr.js';
import '../../../lib/SchedulerPro/localization/Sr.js';
import './shared.locale.Sr.js';

const locale = {

    localeName : 'Sr',
    localeDesc : 'Srpski',
    localeCode : 'sr',
    localeRtl  : false,

    Column : {
        Actions             : 'Akcije',
        Allocation          : 'Alokacija',
        Calendar            : 'Kalendar',
        City                : 'Grad',
        Consultant          : 'Konsultant',
        Contractor          : 'Izvođač',
        Doctor              : 'Doktor',
        Driver              : 'Vozač',
        Expedition          : 'Ekspedicija',
        'First name'        : 'Ime',
        Inspector           : 'Inspektor',
        Manager             : 'Menadžer',
        Name                : 'Ime',
        Projects            : 'Projekti',
        Property            : 'Svojina',
        Rating              : 'Ocena',
        Resource            : 'Resurs',
        Role                : 'Uloga',
        Score               : 'Rezultat',
        Shift               : 'Smena',
        'Speaker rating'    : 'Ocena govornika',
        Staff               : 'Osoblje',
        Station             : 'Stanica',
        Surname             : 'Prezime',
        Tasks               : 'Zadaci',
        Technicians         : 'Tehničari',
        Type                : 'Tip',
        'Vehicle Condition' : 'Stanje vozila',
        'Work hours'        : 'Radni sati',
        Worker              : 'Radnik'
    },

    Button : {
        '10K events'                  : '10K događaja',
        '1K events'                   : '1K događaja',
        '5K events'                   : '5K događaja',
        'Add exception'               : 'Dodaj izuzetak',
        'Add invalid calendar'        : 'Dodaj nevažeći kalendar',
        'Add invalid dependency'      : 'Dodaj nevažeću zavisnost',
        'Add order'                   : 'Dodaj redosled',
        'Add week'                    : 'Dodaj nedelju',
        Apr                           : 'Apr',
        Aug                           : 'Avg',
        'Auto-schedule'               : 'Automatsko zakazivanje',
        'Bar settings'                : 'Podešavanja trake',
        Cancel                        : 'Otkaži',
        'Change working time'         : 'Promeni radno vreme',
        'City - Resource'             : 'Grad - Resurs',
        Custom                        : 'Prilagođeno',
        Dark                          : 'Tamno',
        Dec                           : 'Dec',
        Default                       : 'Podrazumevano',
        'Default layouts'             : 'Podrazumevani rasporedi',
        Delete                        : 'Obriši',
        Dependencies                  : 'Zavisnosti',
        'Drag & resize settings'      : 'Podešavanja prevlačenja i promene veličine',
        'Edit calendar'               : 'Izmeni kalendar',
        'Enable mouse interaction'    : 'Omogući interakciju mišem',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Filtriraj neradno vreme',
        'Hide scheduled'              : 'Sakrij zakazano',
        'Highlight 9-10am + 2-4pm'    : 'Istakni 9-10h + 14-16h',
        'Highlight while dragging'    : 'Istakni tokom prevlačenja',
        'Horizontal mode'             : 'Horizontalni režim',
        Jan                           : 'Jan',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Funkcija rasporeda',
        Light                         : 'Svetlo',
        Login                         : 'Prijava',
        Logout                        : 'Odjava',
        Mar                           : 'Mar',
        March                         : 'Mart',
        May                           : 'Maj',
        'New event'                   : 'Novi događaj',
        Nov                           : 'Nov',
        Oct                           : 'Okt',
        Overlap                       : 'Preklapanje',
        Pack                          : 'Pakuj',
        Reset                         : 'Resetuj',
        'Reset data'                  : 'Resetuj podatke',
        'Resource - City'             : 'Resurs - Grad',
        'Resource ranges'             : 'Opsezi resursa',
        Save                          : 'Sačuvaj',
        Sep                           : 'Sep',
        'Show setup time'             : 'Prikaži vreme postavljanja',
        Stack                         : 'Složi',
        Today                         : 'Danas',
        'Vertical mode'               : 'Vertikalni režim',
        'Zoom in'                     : 'Uvećaj',
        'Zoom out'                    : 'Umanji'
    },

    Checkbox : {
        'Draw around parents'   : 'Crtaj oko roditelja',
        'Enable bar tooltip'    : 'Omogući alatku za traku',
        'Show bar texts'        : 'Prikaži tekstove na traci',
        'Show max allocation'   : 'Prikaži maksimalnu alokaciju',
        'Show non working time' : 'Prikaži neradno vreme'
    },

    Slider : {
        'Max capacity' : 'Maksimalni kapacitet',
        'Row height'   : 'Visina reda'
    },

    Label : {
        Days       : 'Dani',
        'Group by' : 'Grupiši po',
        Months     : 'Meseci',
        Settings   : 'Podešavanja'
    },

    Combo : {
        'Current timezone' : 'Trenutna vremenska zona',
        'Group events by'  : 'Grupiši događaje po',
        Parent             : 'Roditelj',
        Show               : 'Prikaži'
    },

    NumberField : {
        Events    : 'Događaji',
        Resources : 'Resursi'
    },

    TextField : {
        Doctor           : 'Doktor',
        Name             : 'Ime',
        'Server address' : 'Adresa servera',
        Username         : 'Korisničko ime'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Označite da prikažete liniju maksimalne alokacije resursa',
        'Check to show resource allocation in the bars'                                                            : 'Označite da prikažete alokaciju resursa u trakama',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Proveri da prikažeš oblačiće sa informacijama kada pomeraš miša preko traka',
        'Click to group by City - Resource'                                                                        : 'Kliknite da grupišete po Gradu - Resursu',
        'Click to group by Resource - City'                                                                        : 'Kliknite da grupišete po Resursu - Gradu',
        'Collapse all groups'                                                                                      : 'Sažmi sve grupe',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Onemogućite funkciju grupisanja stabla i vratite se na podrazumevani izgled Resurs - Zadatak',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Unesite broj događaja po resursu za generisanje i pritisnite [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Unesite broj redova resursa za generisanje i pritisnite [ENTER]',
        'Expand all groups'                                                                                        : 'Proširi sve grupe',
        Friday                                                                                                     : 'Petak',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Ako su dva segmenta postavljena jedan pored drugog, možete ih spojiti ili ih držati odvojeno',
        Monday                                                                                                     : 'Ponedeljak',
        Saturday                                                                                                   : 'Subota',
        Sunday                                                                                                     : 'Nedelja',
        Thursday                                                                                                   : 'Četvrtak',
        'Toggle layout'                                                                                            : 'Prebaci izgled',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Pokušava da uklopi neplanirane događaje u trenutno prikazani vremenski okvir',
        Tuesday                                                                                                    : 'Utorak',
        'View next day'                                                                                            : 'Pogledaj sledeći dan',
        'View previous day'                                                                                        : 'Pogledaj prethodni dan',
        'View today, to see the current time line'                                                                 : 'Pogledaj danas, da vidiš trenutnu vremensku liniju',
        Wednesday                                                                                                  : 'Sreda'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Automatsko spajanje susednih segmenata',
        'Auto-send'                    : 'Automatsko slanje',
        'Constrain drag to row'        : 'Ograniči povlačenje na red',
        'Days are working by default'  : 'Dani su radni po defaultu',
        'Enable highlighting'          : 'Omogući isticanje',
        'Enable task drag drop'        : 'Omogući povlačenje zadatka',
        'Snap to grid'                 : 'Poravnaj sa mrežom',
        'View Planned dates'           : 'Prikaži planirane datume'
    }
};

export default LocaleHelper.publishLocale(locale);
