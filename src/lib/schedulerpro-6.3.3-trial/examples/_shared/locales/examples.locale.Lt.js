import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Lt.js';
import '../../../lib/SchedulerPro/localization/Lt.js';
import './shared.locale.Lt.js';

const locale = {

    localeName : 'LT',
    localeDesc : 'Lietuvių',
    localeCode : 'lt-LT',
    localeRtl  : false,

    Column : {
        Actions             : 'Veiksmai',
        Allocation          : 'Paskirstymas',
        Calendar            : 'Kalendorius',
        City                : 'Miestas',
        Consultant          : 'Konsultantas',
        Contractor          : 'Rangovas',
        Doctor              : 'Gydytojas',
        Driver              : 'Vairuotojas',
        Expedition          : 'Ekspedicija',
        'First name'        : 'Vardas',
        Inspector           : 'Inspektorius',
        Manager             : 'Vadovas',
        Name                : 'Pavadinimas',
        Projects            : 'Projektai',
        Property            : 'Nuosavybė',
        Rating              : 'Įvertinimas',
        Resource            : 'Ištekliai',
        Role                : 'Vaidmuo',
        Score               : 'Rezultatas',
        Shift               : 'Pamaina',
        'Speaker rating'    : 'Pranešėjo įvertinimas',
        Staff               : 'Personalas',
        Station             : 'Stotis',
        Surname             : 'Pavardė',
        Tasks               : 'Užduotys',
        Technicians         : 'Technikai',
        Type                : 'Tipas',
        'Vehicle Condition' : 'Transporto priemonės būklė',
        'Work hours'        : 'Darbo valandos',
        Worker              : 'Darbuotojas'
    },

    Button : {
        '10K events'                  : '10 tūkst. įvykių',
        '1K events'                   : '1 tūkst. įvykių',
        '5K events'                   : '5 tūkst. įvykių',
        'Add exception'               : 'Pridėti išimtį',
        'Add invalid calendar'        : 'Pridėti neteisingą kalendorių',
        'Add invalid dependency'      : 'Pridėti neteisingą priklausomybę',
        'Add order'                   : 'Pridėti užsakymą',
        'Add week'                    : 'Pridėti savaitę',
        Apr                           : 'Bal',
        Aug                           : 'Rgp',
        'Auto-schedule'               : 'Automatinis tvarkaraštis',
        'Bar settings'                : 'Juostos nustatymai',
        Cancel                        : 'Atšaukti',
        'Change working time'         : 'Keisti darbo laiką',
        'City - Resource'             : 'Miestas - Ištekliai',
        Custom                        : 'Pasirinktinis',
        Dark                          : 'Tamsus',
        Dec                           : 'Gru',
        Default                       : 'Numatytasis',
        'Default layouts'             : 'Numatytieji išdėstymai',
        Delete                        : 'Ištrinti',
        Dependencies                  : 'Priklausomybės',
        'Drag & resize settings'      : 'Vilkimo ir dydžio keitimo nustatymai',
        'Edit calendar'               : 'Redaguoti kalendorių',
        'Enable mouse interaction'    : 'Įjungti pelės sąveiką',
        Feb                           : 'Vas',
        'Filter out non-working time' : 'Filtruoti nedarbo laiką',
        'Hide scheduled'              : 'Slėpti suplanuotus',
        'Highlight 9-10am + 2-4pm'    : 'Pažymėti 9-10 val. + 14-16 val.',
        'Highlight while dragging'    : 'Pažymėti tempiant',
        'Horizontal mode'             : 'Horizontalus režimas',
        Jan                           : 'Sau',
        Jul                           : 'Lie',
        Jun                           : 'Bir',
        'Layout function'             : 'Išdėstymo funkcija',
        Light                         : 'Šviesus',
        Login                         : 'Prisijungti',
        Logout                        : 'Atsijungti',
        Mar                           : 'Kov',
        March                         : 'Kovas',
        May                           : 'Geg',
        'New event'                   : 'Naujas įvykis',
        Nov                           : 'Lap',
        Oct                           : 'Spa',
        Overlap                       : 'Persidengti',
        Pack                          : 'Pakuoti',
        Reset                         : 'Atstatyti',
        'Reset data'                  : 'Atstatyti duomenis',
        'Resource - City'             : 'Ištekliai - Miestas',
        'Resource ranges'             : 'Išteklių diapazonai',
        Save                          : 'Išsaugoti',
        Sep                           : 'Rgs',
        'Show setup time'             : 'Rodyti paruošimo laiką',
        Stack                         : 'Sukrauti',
        Today                         : 'Šiandien',
        'Vertical mode'               : 'Vertikalus režimas',
        'Zoom in'                     : 'Priartinti',
        'Zoom out'                    : 'Atitolinti'
    },

    Checkbox : {
        'Draw around parents'   : 'Piešti aplink tėvus',
        'Enable bar tooltip'    : 'Įjungti juostos patarimą',
        'Show bar texts'        : 'Rodyti juostos tekstus',
        'Show max allocation'   : 'Rodyti maksimalią paskirstymą',
        'Show non working time' : 'Rodyti ne darbo laiką'
    },

    Slider : {
        'Max capacity' : 'Maksimali talpa',
        'Row height'   : 'Eilutės aukštis'
    },

    Label : {
        Days       : 'Dienos',
        'Group by' : 'Grupuoti pagal',
        Months     : 'Mėnesiai',
        Settings   : 'Nustatymai'
    },

    Combo : {
        'Current timezone' : 'Dabartinė laiko juosta',
        'Group events by'  : 'Grupuoti įvykius pagal',
        Parent             : 'Tėvas',
        Show               : 'Rodyti'
    },

    NumberField : {
        Events    : 'Įvykiai',
        Resources : 'Ištekliai'
    },

    TextField : {
        Doctor           : 'Gydytojas',
        Name             : 'Vardas',
        'Server address' : 'Serverio adresas',
        Username         : 'Vartotojo vardas'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Pažymėkite, kad būtų rodoma maksimali išteklių paskirstymo linija',
        'Check to show resource allocation in the bars'                                                            : 'Pažymėkite, kad būtų rodomas išteklių paskirstymas juostose',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Pažymėkite, kad būtų rodomi patarimai, kai pelė juda virš juostų',
        'Click to group by City - Resource'                                                                        : 'Spustelėkite, kad sugrupuotumėte pagal miestą - išteklius',
        'Click to group by Resource - City'                                                                        : 'Spustelėkite, kad sugrupuotumėte pagal išteklius - miestą',
        'Collapse all groups'                                                                                      : 'Sutraukti visas grupes',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Išjungti medžio grupavimo funkciją ir grįžti prie numatytojo išteklių - priskyrimo vaizdo',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Įveskite įvykių skaičių vienam ištekliui ir paspauskite [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Įveskite išteklių eilučių skaičių ir paspauskite [ENTER]',
        'Expand all groups'                                                                                        : 'Išplėsti visas grupes',
        Friday                                                                                                     : 'Penktadienis',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Jei du segmentai yra šalia vienas kito, galite juos sujungti arba palikti atskirai',
        Monday                                                                                                     : 'Pirmadienis',
        Saturday                                                                                                   : 'Šeštadienis',
        Sunday                                                                                                     : 'Sekmadienis',
        Thursday                                                                                                   : 'Ketvirtadienis',
        'Toggle layout'                                                                                            : 'Perjungti išdėstymą',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Bando pritaikyti neplanuotus įvykius į šiuo metu rodomą laiko intervalą',
        Tuesday                                                                                                    : 'Antradienis',
        'View next day'                                                                                            : 'Peržiūrėti kitą dieną',
        'View previous day'                                                                                        : 'Peržiūrėti ankstesnę dieną',
        'View today, to see the current time line'                                                                 : 'Peržiūrėti šiandieną, kad pamatytumėte dabartinę laiko liniją',
        Wednesday                                                                                                  : 'Trečiadienis'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Automatiškai sujungti gretimus segmentus',
        'Auto-send'                    : 'Automatinis siuntimas',
        'Constrain drag to row'        : 'Apriboti vilkimą eilute',
        'Days are working by default'  : 'Dienos yra darbo pagal numatytuosius nustatymus',
        'Enable highlighting'          : 'Įjungti paryškinimą',
        'Enable task drag drop'        : 'Įjungti užduočių vilkimą',
        'Snap to grid'                 : 'Prikabinti prie tinklelio',
        'View Planned dates'           : 'Peržiūrėti planuojamas datas'
    }
};

export default LocaleHelper.publishLocale(locale);
