import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Hu.js';
import '../../../lib/SchedulerPro/localization/Hu.js';
import './shared.locale.Hu.js';

const locale = {

    localeName : 'Hu',
    localeDesc : 'Magyar',
    localeCode : 'hu',
    localeRtl  : false,

    Column : {
        Actions             : 'Műveletek',
        Allocation          : 'Kiosztás',
        Calendar            : 'Naptár',
        City                : 'Város',
        Consultant          : 'Tanácsadó',
        Contractor          : 'Vállalkozó',
        Doctor              : 'Orvos',
        Driver              : 'Sofőr',
        Expedition          : 'Expedíció',
        'First name'        : 'Keresztnév',
        Inspector           : 'Ellenőr',
        Manager             : 'Vezető',
        Name                : 'Név',
        Projects            : 'Projektek',
        Property            : 'Tulajdonság',
        Rating              : 'Értékelés',
        Resource            : 'Erőforrás',
        Role                : 'Szerep',
        Score               : 'Pontszám',
        Shift               : 'Műszak',
        'Speaker rating'    : 'Előadó értékelése',
        Staff               : 'Személyzet',
        Station             : 'Állomás',
        Surname             : 'Vezetéknév',
        Tasks               : 'Feladatok',
        Technicians         : 'Technikusok',
        Type                : 'Típus',
        'Vehicle Condition' : 'Jármű állapota',
        'Work hours'        : 'Munkaórák',
        Worker              : 'Munkás'
    },

    Button : {
        '10K events'                  : '10K esemény',
        '1K events'                   : '1K esemény',
        '5K events'                   : '5K esemény',
        'Add exception'               : 'Kivétel hozzáadása',
        'Add invalid calendar'        : 'Érvénytelen naptár hozzáadása',
        'Add invalid dependency'      : 'Érvénytelen függőség hozzáadása',
        'Add order'                   : 'Rendelés hozzáadása',
        'Add week'                    : 'Hét hozzáadása',
        Apr                           : 'Ápr',
        Aug                           : 'Aug',
        'Auto-schedule'               : 'Automatikus ütemezés',
        'Bar settings'                : 'Sáv beállítások',
        Cancel                        : 'Mégse',
        'Change working time'         : 'Munkaidő megváltoztatása',
        'City - Resource'             : 'Város - Erőforrás',
        Custom                        : 'Egyéni',
        Dark                          : 'Sötét',
        Dec                           : 'Dec',
        Default                       : 'Alapértelmezett',
        'Default layouts'             : 'Alapértelmezett elrendezések',
        Delete                        : 'Törlés',
        Dependencies                  : 'Függőségek',
        'Drag & resize settings'      : 'Húzás és átméretezés beállítások',
        'Edit calendar'               : 'Naptár szerkesztése',
        'Enable mouse interaction'    : 'Egér interakció engedélyezése',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Munkaidőn kívüli idő kiszűrése',
        'Hide scheduled'              : 'Ütemezett elrejtése',
        'Highlight 9-10am + 2-4pm'    : '9-10 óra + 14-16 óra kiemelése',
        'Highlight while dragging'    : 'Kiemelés húzás közben',
        'Horizontal mode'             : 'Vízszintes mód',
        Jan                           : 'Jan',
        Jul                           : 'Júl',
        Jun                           : 'Jún',
        'Layout function'             : 'Elrendezés funkció',
        Light                         : 'Világos',
        Login                         : 'Bejelentkezés',
        Logout                        : 'Kijelentkezés',
        Mar                           : 'Márc',
        March                         : 'Március',
        May                           : 'Máj',
        'New event'                   : 'Új esemény',
        Nov                           : 'Nov',
        Oct                           : 'Okt',
        Overlap                       : 'Átfedés',
        Pack                          : 'Csomag',
        Reset                         : 'Visszaállítás',
        'Reset data'                  : 'Adatok visszaállítása',
        'Resource - City'             : 'Erőforrás - Város',
        'Resource ranges'             : 'Erőforrás tartományok',
        Save                          : 'Mentés',
        Sep                           : 'Szept',
        'Show setup time'             : 'Beállítási idő megjelenítése',
        Stack                         : 'Halom',
        Today                         : 'Ma',
        'Vertical mode'               : 'Függőleges mód',
        'Zoom in'                     : 'Nagyítás',
        'Zoom out'                    : 'Kicsinyítés'
    },

    Checkbox : {
        'Draw around parents'   : 'Rajzolás a szülők körül',
        'Enable bar tooltip'    : 'Eszköztipp engedélyezése a sávon',
        'Show bar texts'        : 'Sáv szövegek megjelenítése',
        'Show max allocation'   : 'Maximális kiosztás megjelenítése',
        'Show non working time' : 'Nem munkaidő megjelenítése'
    },

    Slider : {
        'Max capacity' : 'Maximális kapacitás',
        'Row height'   : 'Sor magasság'
    },

    Label : {
        Days       : 'Napok',
        'Group by' : 'Csoportosítás',
        Months     : 'Hónapok',
        Settings   : 'Beállítások'
    },

    Combo : {
        'Current timezone' : 'Jelenlegi időzóna',
        'Group events by'  : 'Események csoportosítása',
        Parent             : 'Szülő',
        Show               : 'Mutat'
    },

    NumberField : {
        Events    : 'Események',
        Resources : 'Erőforrások'
    },

    TextField : {
        Doctor           : 'Orvos',
        Name             : 'Név',
        'Server address' : 'Szerver címe',
        Username         : 'Felhasználónév'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Jelölje be a maximális erőforrás-kiosztási vonal megjelenítéséhez',
        'Check to show resource allocation in the bars'                                                            : 'Jelölje be az erőforrás-kiosztás megjelenítéséhez a sávokban',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Jelölje be az eszköztippek megjelenítéséhez, amikor az egérrel a sávok fölé mozog',
        'Click to group by City - Resource'                                                                        : 'Kattintson a csoportosításhoz Város - Erőforrás szerint',
        'Click to group by Resource - City'                                                                        : 'Kattintson a csoportosításhoz Erőforrás - Város szerint',
        'Collapse all groups'                                                                                      : 'Összes csoport összecsukása',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Fa csoportosítás funkció letiltása és visszatérés az alapértelmezett Erőforrás - Hozzárendelés nézethez',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Adja meg az események számát erőforrásonként, és nyomja meg az [ENTER] gombot',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Adja meg a generálandó erőforrás sorok számát, és nyomja meg az [ENTER] gombot',
        'Expand all groups'                                                                                        : 'Összes csoport kibontása',
        Friday                                                                                                     : 'Péntek',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Ha két szegmens egymás mellett helyezkedik el, összevonhatja őket, vagy külön tarthatja',
        Monday                                                                                                     : 'Hétfő',
        Saturday                                                                                                   : 'Szombat',
        Sunday                                                                                                     : 'Vasárnap',
        Thursday                                                                                                   : 'Csütörtök',
        'Toggle layout'                                                                                            : 'Elrendezés váltása',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Megpróbálja az ütemezetlen eseményeket a jelenleg megjelenített időkeretbe illeszteni',
        Tuesday                                                                                                    : 'Kedd',
        'View next day'                                                                                            : 'Következő nap megtekintése',
        'View previous day'                                                                                        : 'Előző nap megtekintése',
        'View today, to see the current time line'                                                                 : 'A mai nap megtekintése az aktuális idővonal megtekintéséhez',
        Wednesday                                                                                                  : 'Szerda'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Szomszédos szegmensek automatikus egyesítése',
        'Auto-send'                    : 'Automatikus küldés',
        'Constrain drag to row'        : 'Húzás korlátozása sorra',
        'Days are working by default'  : 'A napok alapértelmezés szerint munkanapok',
        'Enable highlighting'          : 'Kiemelés engedélyezése',
        'Enable task drag drop'        : 'Feladat húzásának engedélyezése',
        'Snap to grid'                 : 'Rácshoz igazítás',
        'View Planned dates'           : 'Tervezett dátumok megtekintése'
    }
};

export default LocaleHelper.publishLocale(locale);
