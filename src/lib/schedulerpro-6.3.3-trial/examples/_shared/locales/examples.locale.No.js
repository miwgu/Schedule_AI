import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/No.js';
import '../../../lib/SchedulerPro/localization/No.js';
import './shared.locale.No.js';

const locale = {

    localeName : 'No',
    localeDesc : 'Norsk',
    localeCode : 'no',
    localeRtl  : false,

    Column : {
        Actions             : 'Handlinger',
        Allocation          : 'Tildeling',
        Calendar            : 'Kalender',
        City                : 'By',
        Consultant          : 'Konsulent',
        Contractor          : 'Entreprenør',
        Doctor              : 'Doktor',
        Driver              : 'Sjåfør',
        Expedition          : 'Ekspedisjon',
        'First name'        : 'Fornavn',
        Inspector           : 'Inspektør',
        Manager             : 'Leder',
        Name                : 'Navn',
        Projects            : 'Prosjekter',
        Property            : 'Eiendom',
        Rating              : 'Vurdering',
        Resource            : 'Ressurs',
        Role                : 'Rolle',
        Score               : 'Poengsum',
        Shift               : 'Skift',
        'Speaker rating'    : 'Foredragsholdervurdering',
        Staff               : 'Ansatte',
        Station             : 'Stasjon',
        Surname             : 'Etternavn',
        Tasks               : 'Oppgaver',
        Technicians         : 'Teknikere',
        Type                : 'Type',
        'Vehicle Condition' : 'Kjøretøytilstand',
        'Work hours'        : 'Arbeidstimer',
        Worker              : 'Arbeider'
    },

    Button : {
        '10K events'                  : '10K hendelser',
        '1K events'                   : '1K hendelser',
        '5K events'                   : '5K hendelser',
        'Add exception'               : 'Legg til unntak',
        'Add invalid calendar'        : 'Legg til ugyldig kalender',
        'Add invalid dependency'      : 'Legg til ugyldig avhengighet',
        'Add order'                   : 'Legg til bestilling',
        'Add week'                    : 'Legg til uke',
        Apr                           : 'Apr',
        Aug                           : 'Aug',
        'Auto-schedule'               : 'Auto-planlegg',
        'Bar settings'                : 'Linjeinnstillinger',
        Cancel                        : 'Avbryt',
        'Change working time'         : 'Endre arbeidstid',
        'City - Resource'             : 'By - Ressurs',
        Custom                        : 'Tilpasset',
        Dark                          : 'Mørk',
        Dec                           : 'Des',
        Default                       : 'Standard',
        'Default layouts'             : 'Standardoppsett',
        Delete                        : 'Slett',
        Dependencies                  : 'Avhengigheter',
        'Drag & resize settings'      : 'Dra & endre størrelse innstillinger',
        'Edit calendar'               : 'Rediger kalender',
        'Enable mouse interaction'    : 'Aktiver museinteraksjon',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Filtrer ut ikke-arbeidstid',
        'Hide scheduled'              : 'Skjul planlagt',
        'Highlight 9-10am + 2-4pm'    : 'Fremhev 9-10am + 2-4pm',
        'Highlight while dragging'    : 'Fremhev mens du drar',
        'Horizontal mode'             : 'Horisontal modus',
        Jan                           : 'Jan',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Oppsettfunksjon',
        Light                         : 'Lys',
        Login                         : 'Logg inn',
        Logout                        : 'Logg ut',
        Mar                           : 'Mar',
        March                         : 'Mars',
        May                           : 'Mai',
        'New event'                   : 'Ny hendelse',
        Nov                           : 'Nov',
        Oct                           : 'Okt',
        Overlap                       : 'Overlapp',
        Pack                          : 'Pakk',
        Reset                         : 'Tilbakestill',
        'Reset data'                  : 'Tilbakestill data',
        'Resource - City'             : 'Ressurs - By',
        'Resource ranges'             : 'Ressursområder',
        Save                          : 'Lagre',
        Sep                           : 'Sep',
        'Show setup time'             : 'Vis oppsettstid',
        Stack                         : 'Stabel',
        Today                         : 'I dag',
        'Vertical mode'               : 'Vertikal modus',
        'Zoom in'                     : 'Zoom inn',
        'Zoom out'                    : 'Zoom ut'
    },

    Checkbox : {
        'Draw around parents'   : 'Tegn rundt foreldre',
        'Enable bar tooltip'    : 'Aktiver stolpeverktøytips',
        'Show bar texts'        : 'Vis linjetekster',
        'Show max allocation'   : 'Vis maks tildeling',
        'Show non working time' : 'Vis ikke-arbeidstid'
    },

    Slider : {
        'Max capacity' : 'Maks kapasitet',
        'Row height'   : 'Radhøyde'
    },

    Label : {
        Days       : 'Dager',
        'Group by' : 'Grupper etter',
        Months     : 'Måneder',
        Settings   : 'Innstillinger'
    },

    Combo : {
        'Current timezone' : 'Gjeldende tidssone',
        'Group events by'  : 'Grupper hendelser etter',
        Parent             : 'Forelder',
        Show               : 'Vis'
    },

    NumberField : {
        Events    : 'Hendelser',
        Resources : 'Ressurser'
    },

    TextField : {
        Doctor           : 'Lege',
        Name             : 'Navn',
        'Server address' : 'Serveradresse',
        Username         : 'Brukernavn'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Merk av for å vise maks ressursallokeringslinje',
        'Check to show resource allocation in the bars'                                                            : 'Merk av for å vise ressursallokering i linjene',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Merk av for å vise verktøytips når du flytter musen over stolpene',
        'Click to group by City - Resource'                                                                        : 'Klikk for å gruppere etter by - Ressurs',
        'Click to group by Resource - City'                                                                        : 'Klikk for å gruppere etter ressurs - By',
        'Collapse all groups'                                                                                      : 'Kollaps alle grupper',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Deaktiver tregrupperingsfunksjonen og gå tilbake til standard Ressurs - Oppgave visning',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Skriv inn antall hendelser per ressurs for å generere og trykk [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Skriv inn antall ressursrader for å generere og trykk [ENTER]',
        'Expand all groups'                                                                                        : 'Utvid alle grupper',
        Friday                                                                                                     : 'Fredag',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Hvis to segmenter er plassert ved siden av hverandre, kan du enten slå dem sammen eller holde dem adskilt',
        Monday                                                                                                     : 'Mandag',
        Saturday                                                                                                   : 'Lørdag',
        Sunday                                                                                                     : 'Søndag',
        Thursday                                                                                                   : 'Torsdag',
        'Toggle layout'                                                                                            : 'Bytt oppsett',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Prøver å passe de uplanlagte hendelsene inn i den nåværende viste tidsrammen',
        Tuesday                                                                                                    : 'Tirsdag',
        'View next day'                                                                                            : 'Vis neste dag',
        'View previous day'                                                                                        : 'Vis forrige dag',
        'View today, to see the current time line'                                                                 : 'Vis i dag, for å se den nåværende tidslinjen',
        Wednesday                                                                                                  : 'Onsdag'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Automatisk slå sammen tilstøtende segmenter',
        'Auto-send'                    : 'Automatisk sending',
        'Constrain drag to row'        : 'Begrens dra til rad',
        'Days are working by default'  : 'Dager er arbeidsdager som standard',
        'Enable highlighting'          : 'Aktiver utheving',
        'Enable task drag drop'        : 'Aktiver oppgave dra og slipp',
        'Snap to grid'                 : 'Fest til rutenett',
        'View Planned dates'           : 'Vis planlagte datoer'
    }
};

export default LocaleHelper.publishLocale(locale);
