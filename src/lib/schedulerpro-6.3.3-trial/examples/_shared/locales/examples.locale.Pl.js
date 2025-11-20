import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Pl.js';
import '../../../lib/SchedulerPro/localization/Pl.js';
import './shared.locale.Pl.js';

const locale = {

    localeName : 'Pl',
    localeDesc : 'Polski',
    localeCode : 'pl',
    localeRtl  : false,

    Column : {
        Actions             : 'Akcje',
        Allocation          : 'Przydział',
        Calendar            : 'Kalendarz',
        City                : 'Miasto',
        Consultant          : 'Konsultant',
        Contractor          : 'Wykonawca',
        Doctor              : 'Lekarz',
        Driver              : 'Kierowca',
        Expedition          : 'Ekspedycja',
        'First name'        : 'Imię',
        Inspector           : 'Inspektor',
        Manager             : 'Kierownik',
        Name                : 'Nazwa',
        Projects            : 'Projekty',
        Property            : 'Własność',
        Rating              : 'Ocena',
        Resource            : 'Zasób',
        Role                : 'Rola',
        Score               : 'Wynik',
        Shift               : 'Zmiana',
        'Speaker rating'    : 'Ocena mówcy',
        Staff               : 'Personel',
        Station             : 'Stacja',
        Surname             : 'Nazwisko',
        Tasks               : 'Zadania',
        Technicians         : 'Technicy',
        Type                : 'Typ',
        'Vehicle Condition' : 'Stan pojazdu',
        'Work hours'        : 'Godziny pracy',
        Worker              : 'Pracownik'
    },

    Button : {
        '10K events'                  : '10K wydarzeń',
        '1K events'                   : '1K wydarzeń',
        '5K events'                   : '5K wydarzeń',
        'Add exception'               : 'Dodaj wyjątek',
        'Add invalid calendar'        : 'Dodaj nieprawidłowy kalendarz',
        'Add invalid dependency'      : 'Dodaj nieprawidłową zależność',
        'Add order'                   : 'Dodaj zamówienie',
        'Add week'                    : 'Dodaj tydzień',
        Apr                           : 'Kwi',
        Aug                           : 'Sie',
        'Auto-schedule'               : 'Automatyczne planowanie',
        'Bar settings'                : 'Ustawienia paska',
        Cancel                        : 'Anuluj',
        'Change working time'         : 'Zmień czas pracy',
        'City - Resource'             : 'Miasto - Zasób',
        Custom                        : 'Niestandardowy',
        Dark                          : 'Ciemny',
        Dec                           : 'Gru',
        Default                       : 'Domyślny',
        'Default layouts'             : 'Domyślne układy',
        Delete                        : 'Usuń',
        Dependencies                  : 'Zależności',
        'Drag & resize settings'      : 'Ustawienia przeciągania i zmiany rozmiaru',
        'Edit calendar'               : 'Edytuj kalendarz',
        'Enable mouse interaction'    : 'Włącz interakcję z myszą',
        Feb                           : 'Lut',
        'Filter out non-working time' : 'Filtruj czas niepracujący',
        'Hide scheduled'              : 'Ukryj zaplanowane',
        'Highlight 9-10am + 2-4pm'    : 'Wyróżnij 9-10 rano + 2-4 po południu',
        'Highlight while dragging'    : 'Wyróżnij podczas przeciągania',
        'Horizontal mode'             : 'Tryb poziomy',
        Jan                           : 'Sty',
        Jul                           : 'Lip',
        Jun                           : 'Cze',
        'Layout function'             : 'Funkcja układu',
        Light                         : 'Jasny',
        Login                         : 'Zaloguj się',
        Logout                        : 'Wyloguj się',
        Mar                           : 'Mar',
        March                         : 'Marzec',
        May                           : 'Maj',
        'New event'                   : 'Nowe wydarzenie',
        Nov                           : 'Lis',
        Oct                           : 'Paź',
        Overlap                       : 'Nakładanie',
        Pack                          : 'Pakiet',
        Reset                         : 'Resetuj',
        'Reset data'                  : 'Resetuj dane',
        'Resource - City'             : 'Zasób - Miasto',
        'Resource ranges'             : 'Zakresy zasobów',
        Save                          : 'Zapisz',
        Sep                           : 'Wrz',
        'Show setup time'             : 'Pokaż czas konfiguracji',
        Stack                         : 'Stos',
        Today                         : 'Dzisiaj',
        'Vertical mode'               : 'Tryb pionowy',
        'Zoom in'                     : 'Powiększ',
        'Zoom out'                    : 'Pomniejsz'
    },

    Checkbox : {
        'Draw around parents'   : 'Rysuj wokół rodziców',
        'Enable bar tooltip'    : 'Włącz podpowiedź paska',
        'Show bar texts'        : 'Pokaż teksty na pasku',
        'Show max allocation'   : 'Pokaż maksymalne przydzielenie',
        'Show non working time' : 'Pokaż czas niepracujący'
    },

    Slider : {
        'Max capacity' : 'Maksymalna pojemność',
        'Row height'   : 'Wysokość wiersza'
    },

    Label : {
        Days       : 'Dni',
        'Group by' : 'Grupuj według',
        Months     : 'Miesiące',
        Settings   : 'Ustawienia'
    },

    Combo : {
        'Current timezone' : 'Bieżąca strefa czasowa',
        'Group events by'  : 'Grupuj wydarzenia według',
        Parent             : 'Rodzic',
        Show               : 'Pokaż'
    },

    NumberField : {
        Events    : 'Wydarzenia',
        Resources : 'Zasoby'
    },

    TextField : {
        Doctor           : 'Lekarz',
        Name             : 'Nazwa',
        'Server address' : 'Adres serwera',
        Username         : 'Nazwa użytkownika'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Zaznacz, aby wyświetlić linię maksymalnego przydziału zasobów',
        'Check to show resource allocation in the bars'                                                            : 'Zaznacz, aby pokazać przydział zasobów na paskach',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Zaznacz, aby pokazać podpowiedzi przy przesuwaniu myszy nad paskami',
        'Click to group by City - Resource'                                                                        : 'Kliknij, aby pogrupować według Miasta - Zasób',
        'Click to group by Resource - City'                                                                        : 'Kliknij, aby pogrupować według Zasób - Miasto',
        'Collapse all groups'                                                                                      : 'Zwiń wszystkie grupy',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Wyłącz funkcję grupowania drzewa i wróć do domyślnego widoku Zasób - Przypisanie',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Wprowadź liczbę wydarzeń na zasób do wygenerowania i naciśnij [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Wprowadź liczbę wierszy zasobów do wygenerowania i naciśnij [ENTER]',
        'Expand all groups'                                                                                        : 'Rozwiń wszystkie grupy',
        Friday                                                                                                     : 'Piątek',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Jeśli dwa segmenty są umieszczone obok siebie, możesz je połączyć lub pozostawić oddzielnie',
        Monday                                                                                                     : 'Poniedziałek',
        Saturday                                                                                                   : 'Sobota',
        Sunday                                                                                                     : 'Niedziela',
        Thursday                                                                                                   : 'Czwartek',
        'Toggle layout'                                                                                            : 'Przełącz układ',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Próbuje dopasować nieplanowane zdarzenia do aktualnie wyświetlanego przedziału czasowego',
        Tuesday                                                                                                    : 'Wtorek',
        'View next day'                                                                                            : 'Zobacz następny dzień',
        'View previous day'                                                                                        : 'Zobacz poprzedni dzień',
        'View today, to see the current time line'                                                                 : 'Zobacz dzisiaj, aby zobaczyć aktualną linię czasu',
        Wednesday                                                                                                  : 'Środa'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Automatyczne łączenie sąsiednich segmentów',
        'Auto-send'                    : 'Automatyczne wysyłanie',
        'Constrain drag to row'        : 'Ogranicz przeciąganie do wiersza',
        'Days are working by default'  : 'Dni są domyślnie robocze',
        'Enable highlighting'          : 'Włącz podświetlanie',
        'Enable task drag drop'        : 'Włącz przeciąganie i upuszczanie zadań',
        'Snap to grid'                 : 'Przyciągaj do siatki',
        'View Planned dates'           : 'Wyświetl planowane daty'
    }
};

export default LocaleHelper.publishLocale(locale);
