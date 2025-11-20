import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Nl.js';
import '../../../lib/SchedulerPro/localization/Nl.js';
import './shared.locale.Nl.js';

const locale = {

    localeName : 'Nl',
    localeDesc : 'Nederlands',
    localeCode : 'nl',
    localeRtl  : false,

    Column : {
        Actions             : 'Acties',
        Allocation          : 'Toewijzing',
        Calendar            : 'Kalender',
        City                : 'Stad',
        Consultant          : 'Consultant',
        Contractor          : 'Aannemer',
        Doctor              : 'Dokter',
        Driver              : 'Bestuurder',
        Expedition          : 'Expeditie',
        'First name'        : 'Voornaam',
        Inspector           : 'Inspecteur',
        Manager             : 'Manager',
        Name                : 'Naam',
        Projects            : 'Projecten',
        Property            : 'Eigendom',
        Rating              : 'Beoordeling',
        Resource            : 'Middel',
        Role                : 'Rol',
        Score               : 'Score',
        Shift               : 'Dienst',
        'Speaker rating'    : 'Sprekersbeoordeling',
        Staff               : 'Personeel',
        Station             : 'Station',
        Surname             : 'Achternaam',
        Tasks               : 'Taken',
        Technicians         : 'Technici',
        Type                : 'Type',
        'Vehicle Condition' : 'Voertuigconditie',
        'Work hours'        : 'Werkuren',
        Worker              : 'Werknemer'
    },

    Button : {
        '10K events'                  : '10K evenementen',
        '1K events'                   : '1K evenementen',
        '5K events'                   : '5K evenementen',
        'Add exception'               : 'Uitzondering toevoegen',
        'Add invalid calendar'        : 'Ongeldige kalender toevoegen',
        'Add invalid dependency'      : 'Ongeldige afhankelijkheid toevoegen',
        'Add order'                   : 'Bestelling toevoegen',
        'Add week'                    : 'Week toevoegen',
        Apr                           : 'Apr',
        Aug                           : 'Aug',
        'Auto-schedule'               : 'Automatisch plannen',
        'Bar settings'                : 'Balkinstellingen',
        Cancel                        : 'Annuleren',
        'Change working time'         : 'Wijzig werktijd',
        'City - Resource'             : 'Stad - Middel',
        Custom                        : 'Aangepast',
        Dark                          : 'Donker',
        Dec                           : 'Dec',
        Default                       : 'Standaard',
        'Default layouts'             : 'Standaard lay-outs',
        Delete                        : 'Verwijderen',
        Dependencies                  : 'Afhankelijkheden',
        'Drag & resize settings'      : 'Sleep- en formaatinstellingen',
        'Edit calendar'               : 'Kalender bewerken',
        'Enable mouse interaction'    : 'Muisinteractie inschakelen',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Filter niet-werktijd uit',
        'Hide scheduled'              : 'Geplande verbergen',
        'Highlight 9-10am + 2-4pm'    : 'Markeer 9-10u + 14-16u',
        'Highlight while dragging'    : 'Markeer tijdens slepen',
        'Horizontal mode'             : 'Horizontale modus',
        Jan                           : 'Jan',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Lay-outfunctie',
        Light                         : 'Licht',
        Login                         : 'Inloggen',
        Logout                        : 'Uitloggen',
        Mar                           : 'Mrt',
        March                         : 'Maart',
        May                           : 'Mei',
        'New event'                   : 'Nieuw evenement',
        Nov                           : 'Nov',
        Oct                           : 'Okt',
        Overlap                       : 'Overlappen',
        Pack                          : 'Pakket',
        Reset                         : 'Reset',
        'Reset data'                  : 'Gegevens resetten',
        'Resource - City'             : 'Middel - Stad',
        'Resource ranges'             : 'Hulpbronnenbereiken',
        Save                          : 'Opslaan',
        Sep                           : 'Sep',
        'Show setup time'             : 'Insteltijd tonen',
        Stack                         : 'Stapel',
        Today                         : 'Vandaag',
        'Vertical mode'               : 'Verticale modus',
        'Zoom in'                     : 'Inzoomen',
        'Zoom out'                    : 'Uitzoomen'
    },

    Checkbox : {
        'Draw around parents'   : 'Teken rond ouders',
        'Enable bar tooltip'    : 'Schakel balktooltip in',
        'Show bar texts'        : 'Balkteksten weergeven',
        'Show max allocation'   : 'Maximale toewijzing weergeven',
        'Show non working time' : 'Toon niet-werktijd'
    },

    Slider : {
        'Max capacity' : 'Maximale capaciteit',
        'Row height'   : 'Rijhoogte'
    },

    Label : {
        Days       : 'Dagen',
        'Group by' : 'Groepeer op',
        Months     : 'Maanden',
        Settings   : 'Instellingen'
    },

    Combo : {
        'Current timezone' : 'Huidige tijdzone',
        'Group events by'  : 'Groepeer evenementen op',
        Parent             : 'Ouder',
        Show               : 'Toon'
    },

    NumberField : {
        Events    : 'Evenementen',
        Resources : 'Middelen'
    },

    TextField : {
        Doctor           : 'Arts',
        Name             : 'Naam',
        'Server address' : 'Serveradres',
        Username         : 'Gebruikersnaam'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Vink aan om de lijn voor maximale resource-toewijzing weer te geven',
        'Check to show resource allocation in the bars'                                                            : 'Vink aan om resource-toewijzing in de balken weer te geven',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Controleer om tooltips weer te geven wanneer de muis over de balken beweegt',
        'Click to group by City - Resource'                                                                        : 'Klik om te groeperen op Stad - Middel',
        'Click to group by Resource - City'                                                                        : 'Klik om te groeperen op Middel - Stad',
        'Collapse all groups'                                                                                      : 'Alle groepen samenvouwen',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Schakel de boomgroepeigenschap uit en keer terug naar de standaardweergave Middel - Toewijzing',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Voer aantal evenementen per hulpbron in om te genereren en druk op [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Voer aantal hulpbronrijen in om te genereren en druk op [ENTER]',
        'Expand all groups'                                                                                        : 'Alle groepen uitvouwen',
        Friday                                                                                                     : 'Vrijdag',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Als twee segmenten naast elkaar worden geplaatst, kunt u ze samenvoegen of gescheiden houden',
        Monday                                                                                                     : 'Maandag',
        Saturday                                                                                                   : 'Zaterdag',
        Sunday                                                                                                     : 'Zondag',
        Thursday                                                                                                   : 'Donderdag',
        'Toggle layout'                                                                                            : 'Schakel lay-out',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Probeert de niet-geplande evenementen in het momenteel weergegeven tijdsbestek te passen',
        Tuesday                                                                                                    : 'Dinsdag',
        'View next day'                                                                                            : 'Bekijk volgende dag',
        'View previous day'                                                                                        : 'Bekijk vorige dag',
        'View today, to see the current time line'                                                                 : 'Bekijk vandaag, om de huidige tijdlijn te zien',
        Wednesday                                                                                                  : 'Woensdag'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Automatisch aangrenzende segmenten samenvoegen',
        'Auto-send'                    : 'Automatisch verzenden',
        'Constrain drag to row'        : 'Beperk slepen tot rij',
        'Days are working by default'  : 'Dagen werken standaard',
        'Enable highlighting'          : 'Markering inschakelen',
        'Enable task drag drop'        : 'Taak slepen en neerzetten inschakelen',
        'Snap to grid'                 : 'Vastklikken op raster',
        'View Planned dates'           : 'Bekijk geplande data'
    }
};

export default LocaleHelper.publishLocale(locale);
