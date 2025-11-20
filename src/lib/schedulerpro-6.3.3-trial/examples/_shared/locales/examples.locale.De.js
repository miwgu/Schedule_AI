import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/De.js';
import '../../../lib/SchedulerPro/localization/De.js';
import './shared.locale.De.js';

const locale = {

    localeName : 'De',
    localeDesc : 'Deutsch',
    localeCode : 'de-DE',
    localeRtl  : false,

    Column : {
        Actions             : 'Aktionen',
        Allocation          : 'Zuweisung',
        Calendar            : 'Kalender',
        City                : 'Stadt',
        Consultant          : 'Berater',
        Contractor          : 'Auftragnehmer',
        Doctor              : 'Arzt',
        Driver              : 'Fahrer',
        Expedition          : 'Expedition',
        'First name'        : 'Vorname',
        Inspector           : 'Inspektor',
        Manager             : 'Manager',
        Name                : 'Name',
        Projects            : 'Projekte',
        Property            : 'Eigentum',
        Rating              : 'Bewertung',
        Resource            : 'Ressource',
        Role                : 'Rolle',
        Score               : 'Punktzahl',
        Shift               : 'Schicht',
        'Speaker rating'    : 'Rednerbewertung',
        Staff               : 'Personal',
        Station             : 'Station',
        Surname             : 'Nachname',
        Tasks               : 'Aufgaben',
        Technicians         : 'Techniker',
        Type                : 'Typ',
        'Vehicle Condition' : 'Fahrzeugzustand',
        'Work hours'        : 'Arbeitsstunden',
        Worker              : 'Arbeiter'
    },

    Button : {
        '10K events'                  : '10K Ereignisse',
        '1K events'                   : '1K Ereignisse',
        '5K events'                   : '5K Ereignisse',
        'Add exception'               : 'Ausnahme hinzufügen',
        'Add invalid calendar'        : 'Ungültigen Kalender hinzufügen',
        'Add invalid dependency'      : 'Ungültige Abhängigkeit hinzufügen',
        'Add order'                   : 'Bestellung hinzufügen',
        'Add week'                    : 'Woche hinzufügen',
        Apr                           : 'Apr',
        Aug                           : 'Aug',
        'Auto-schedule'               : 'Automatisch planen',
        'Bar settings'                : 'Balkeneinstellungen',
        Cancel                        : 'Abbrechen',
        'Change working time'         : 'Arbeitszeit ändern',
        'City - Resource'             : 'Stadt - Ressource',
        Custom                        : 'Benutzerdefiniert',
        Dark                          : 'Dunkel',
        Dec                           : 'Dez',
        Default                       : 'Standard',
        'Default layouts'             : 'Standardlayouts',
        Delete                        : 'Löschen',
        Dependencies                  : 'Abhängigkeiten',
        'Drag & resize settings'      : 'Ziehen & Größenänderungseinstellungen',
        'Edit calendar'               : 'Kalender bearbeiten',
        'Enable mouse interaction'    : 'Mausinteraktion aktivieren',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Nicht-Arbeitszeit herausfiltern',
        'Hide scheduled'              : 'Geplantes ausblenden',
        'Highlight 9-10am + 2-4pm'    : '9-10 Uhr + 14-16 Uhr hervorheben',
        'Highlight while dragging'    : 'Beim Ziehen hervorheben',
        'Horizontal mode'             : 'Horizontalmodus',
        Jan                           : 'Jan',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Layoutfunktion',
        Light                         : 'Hell',
        Login                         : 'Anmelden',
        Logout                        : 'Abmelden',
        Mar                           : 'Mär',
        March                         : 'März',
        May                           : 'Mai',
        'New event'                   : 'Neues Ereignis',
        Nov                           : 'Nov',
        Oct                           : 'Okt',
        Overlap                       : 'Überlappen',
        Pack                          : 'Packen',
        Reset                         : 'Zurücksetzen',
        'Reset data'                  : 'Daten zurücksetzen',
        'Resource - City'             : 'Ressource - Stadt',
        'Resource ranges'             : 'Ressourcenbereiche',
        Save                          : 'Speichern',
        Sep                           : 'Sep',
        'Show setup time'             : 'Einrichtungszeit anzeigen',
        Stack                         : 'Stapel',
        Today                         : 'Heute',
        'Vertical mode'               : 'Vertikalmodus',
        'Zoom in'                     : 'Vergrößern',
        'Zoom out'                    : 'Verkleinern'
    },

    Checkbox : {
        'Draw around parents'   : 'Um Eltern zeichnen',
        'Enable bar tooltip'    : 'Balken-Tooltip aktivieren',
        'Show bar texts'        : 'Balkentexte anzeigen',
        'Show max allocation'   : 'Maximale Zuweisung anzeigen',
        'Show non working time' : 'Nichtarbeitszeit anzeigen'
    },

    Slider : {
        'Max capacity' : 'Maximale Kapazität',
        'Row height'   : 'Zeilenhöhe'
    },

    Label : {
        Days       : 'Tage',
        'Group by' : 'Gruppieren nach',
        Months     : 'Monate',
        Settings   : 'Einstellungen'
    },

    Combo : {
        'Current timezone' : 'Aktuelle Zeitzone',
        'Group events by'  : 'Ereignisse gruppieren nach',
        Parent             : 'Eltern',
        Show               : 'Anzeigen'
    },

    NumberField : {
        Events    : 'Ereignisse',
        Resources : 'Ressourcen'
    },

    TextField : {
        Doctor           : 'Arzt',
        Name             : 'Name',
        'Server address' : 'Serveradresse',
        Username         : 'Benutzername'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Ankreuzen, um die maximale Ressourcenallokationslinie anzuzeigen',
        'Check to show resource allocation in the bars'                                                            : 'Ankreuzen, um die Ressourcenallokation in den Balken anzuzeigen',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Überprüfen, um Tooltips anzuzeigen, wenn die Maus über die Balken bewegt wird',
        'Click to group by City - Resource'                                                                        : 'Klicken Sie, um nach Stadt - Ressource zu gruppieren',
        'Click to group by Resource - City'                                                                        : 'Klicken Sie, um nach Ressource - Stadt zu gruppieren',
        'Collapse all groups'                                                                                      : 'Alle Gruppen einklappen',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Baumgruppenfunktion deaktivieren und zur Standardansicht Ressource - Zuordnung zurückkehren',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Anzahl der Ereignisse pro Ressource eingeben und [ENTER] drücken',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Anzahl der zu generierenden Ressourcenzeilen eingeben und [ENTER] drücken',
        'Expand all groups'                                                                                        : 'Alle Gruppen ausklappen',
        Friday                                                                                                     : 'Freitag',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Wenn zwei Segmente nebeneinander platziert sind, können Sie sie entweder zusammenführen oder getrennt halten',
        Monday                                                                                                     : 'Montag',
        Saturday                                                                                                   : 'Samstag',
        Sunday                                                                                                     : 'Sonntag',
        Thursday                                                                                                   : 'Donnerstag',
        'Toggle layout'                                                                                            : 'Layout umschalten',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Versucht, die ungeplanten Ereignisse in den aktuell angezeigten Zeitrahmen einzupassen',
        Tuesday                                                                                                    : 'Dienstag',
        'View next day'                                                                                            : 'Nächsten Tag anzeigen',
        'View previous day'                                                                                        : 'Vorherigen Tag anzeigen',
        'View today, to see the current time line'                                                                 : 'Heute anzeigen, um die aktuelle Zeitlinie zu sehen',
        Wednesday                                                                                                  : 'Mittwoch'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Automatisches Zusammenführen benachbarter Segmente',
        'Auto-send'                    : 'Automatisch senden',
        'Constrain drag to row'        : 'Ziehen auf Zeile beschränken',
        'Days are working by default'  : 'Tage sind standardmäßig Arbeitstage',
        'Enable highlighting'          : 'Hervorhebung aktivieren',
        'Enable task drag drop'        : 'Aufgaben ziehen und ablegen aktivieren',
        'Snap to grid'                 : 'Am Raster ausrichten',
        'View Planned dates'           : 'Geplante Termine anzeigen'
    }
};

export default LocaleHelper.publishLocale(locale);
