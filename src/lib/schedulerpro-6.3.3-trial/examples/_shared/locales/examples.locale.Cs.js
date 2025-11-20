import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Cs.js';
import '../../../lib/SchedulerPro/localization/Cs.js';
import './shared.locale.Cs.js';

const locale = {

    localeName : 'Cs',
    localeDesc : 'Česky',
    localeCode : 'cs',
    localeRtl  : false,

    Column : {
        Actions             : 'Akce',
        Allocation          : 'Přidělení',
        Calendar            : 'Kalendář',
        City                : 'Město',
        Consultant          : 'Konzultant',
        Contractor          : 'Dodavatel',
        Doctor              : 'Doktor',
        Driver              : 'Řidič',
        Expedition          : 'Expedice',
        'First name'        : 'Jméno',
        Inspector           : 'Inspektor',
        Manager             : 'Manažer',
        Name                : 'Název',
        Projects            : 'Projekty',
        Property            : 'Vlastnost',
        Rating              : 'Hodnocení',
        Resource            : 'Zdroj',
        Role                : 'Role',
        Score               : 'Skóre',
        Shift               : 'Směna',
        'Speaker rating'    : 'Hodnocení řečníka',
        Staff               : 'Personál',
        Station             : 'Stanice',
        Surname             : 'Příjmení',
        Tasks               : 'Úkoly',
        Technicians         : 'Technici',
        Type                : 'Typ',
        'Vehicle Condition' : 'Stav vozidla',
        'Work hours'        : 'Pracovní hodiny',
        Worker              : 'Pracovník'
    },

    Button : {
        '10K events'                  : '10K událostí',
        '1K events'                   : '1K událostí',
        '5K events'                   : '5K událostí',
        'Add exception'               : 'Přidat výjimku',
        'Add invalid calendar'        : 'Přidat neplatný kalendář',
        'Add invalid dependency'      : 'Přidat neplatnou závislost',
        'Add order'                   : 'Přidat objednávku',
        'Add week'                    : 'Přidat týden',
        Apr                           : 'Dub',
        Aug                           : 'Srp',
        'Auto-schedule'               : 'Automatické plánování',
        'Bar settings'                : 'Nastavení lišty',
        Cancel                        : 'Zrušit',
        'Change working time'         : 'Změnit pracovní dobu',
        'City - Resource'             : 'Město - Zdroj',
        Custom                        : 'Vlastní',
        Dark                          : 'Tmavý',
        Dec                           : 'Pro',
        Default                       : 'Výchozí',
        'Default layouts'             : 'Výchozí rozvržení',
        Delete                        : 'Smazat',
        Dependencies                  : 'Závislosti',
        'Drag & resize settings'      : 'Nastavení přetažení a změny velikosti',
        'Edit calendar'               : 'Upravit kalendář',
        'Enable mouse interaction'    : 'Povolit interakci myší',
        Feb                           : 'Úno',
        'Filter out non-working time' : 'Filtrovat nepracovní dobu',
        'Hide scheduled'              : 'Skrýt naplánované',
        'Highlight 9-10am + 2-4pm'    : 'Zvýraznit 9-10h + 14-16h',
        'Highlight while dragging'    : 'Zvýraznit při přetahování',
        'Horizontal mode'             : 'Horizontální režim',
        Jan                           : 'Led',
        Jul                           : 'Čvc',
        Jun                           : 'Čvn',
        'Layout function'             : 'Funkce rozvržení',
        Light                         : 'Světlý',
        Login                         : 'Přihlásit se',
        Logout                        : 'Odhlásit se',
        Mar                           : 'Bře',
        March                         : 'Březen',
        May                           : 'Kvě',
        'New event'                   : 'Nová událost',
        Nov                           : 'Lis',
        Oct                           : 'Říj',
        Overlap                       : 'Překrytí',
        Pack                          : 'Balíček',
        Reset                         : 'Obnovit',
        'Reset data'                  : 'Resetovat data',
        'Resource - City'             : 'Zdroj - Město',
        'Resource ranges'             : 'Rozsahy zdrojů',
        Save                          : 'Uložit',
        Sep                           : 'Zář',
        'Show setup time'             : 'Zobrazit čas nastavení',
        Stack                         : 'Stoh',
        Today                         : 'Dnes',
        'Vertical mode'               : 'Vertikální režim',
        'Zoom in'                     : 'Přiblížit',
        'Zoom out'                    : 'Oddálit'
    },

    Checkbox : {
        'Draw around parents'   : 'Kreslit kolem rodičů',
        'Enable bar tooltip'    : 'Povolit popisek pruhu',
        'Show bar texts'        : 'Zobrazit texty lišty',
        'Show max allocation'   : 'Zobrazit maximální alokaci',
        'Show non working time' : 'Zobrazit nepracovní dobu'
    },

    Slider : {
        'Max capacity' : 'Maximální kapacita',
        'Row height'   : 'Výška řádku'
    },

    Label : {
        Days       : 'Dny',
        'Group by' : 'Seskupit podle',
        Months     : 'Měsíce',
        Settings   : 'Nastavení'
    },

    Combo : {
        'Current timezone' : 'Aktuální časové pásmo',
        'Group events by'  : 'Seskupit události podle',
        Parent             : 'Rodič',
        Show               : 'Zobrazit'
    },

    NumberField : {
        Events    : 'Události',
        Resources : 'Zdroje'
    },

    TextField : {
        Doctor           : 'Doktor',
        Name             : 'Jméno',
        'Server address' : 'Adresa serveru',
        Username         : 'Uživatelské jméno'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Zaškrtněte pro zobrazení čáry maximální alokace zdrojů',
        'Check to show resource allocation in the bars'                                                            : 'Zaškrtněte pro zobrazení alokace zdrojů v lištách',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Zaškrtněte pro zobrazení tooltipů při pohybu myší nad pruhy',
        'Click to group by City - Resource'                                                                        : 'Klikněte pro seskupení podle Město - Zdroj',
        'Click to group by Resource - City'                                                                        : 'Klikněte pro seskupení podle Zdroj - Město',
        'Collapse all groups'                                                                                      : 'Sbalit všechny skupiny',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Zakázat funkci seskupení stromu a vrátit se k výchozímu zobrazení Zdroj - Přiřazení',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Zadejte počet událostí na zdroj k vygenerování a stiskněte [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Zadejte počet řádků zdrojů k vygenerování a stiskněte [ENTER]',
        'Expand all groups'                                                                                        : 'Rozbalit všechny skupiny',
        Friday                                                                                                     : 'Pátek',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Pokud jsou dva segmenty umístěny vedle sebe, můžete je buď sloučit, nebo ponechat oddělené',
        Monday                                                                                                     : 'Pondělí',
        Saturday                                                                                                   : 'Sobota',
        Sunday                                                                                                     : 'Neděle',
        Thursday                                                                                                   : 'Čtvrtek',
        'Toggle layout'                                                                                            : 'Přepnout rozvržení',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Pokouší se přizpůsobit neplánované události do aktuálně zobrazeného časového rámce',
        Tuesday                                                                                                    : 'Úterý',
        'View next day'                                                                                            : 'Zobrazit další den',
        'View previous day'                                                                                        : 'Zobrazit předchozí den',
        'View today, to see the current time line'                                                                 : 'Zobrazit dnešek, pro zobrazení aktuální časové osy',
        Wednesday                                                                                                  : 'Středa'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Automatické sloučení sousedních segmentů',
        'Auto-send'                    : 'Automatické odesílání',
        'Constrain drag to row'        : 'Omezit přetahování na řádek',
        'Days are working by default'  : 'Dny jsou ve výchozím nastavení pracovní',
        'Enable highlighting'          : 'Povolit zvýraznění',
        'Enable task drag drop'        : 'Povolit přetahování úkolů',
        'Snap to grid'                 : 'Přichytit k mřížce',
        'View Planned dates'           : 'Zobrazit plánovaná data'
    }
};

export default LocaleHelper.publishLocale(locale);
