import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/El.js';
import '../../../lib/SchedulerPro/localization/El.js';
import './shared.locale.El.js';

const locale = {

    localeName : 'El',
    localeDesc : 'Ελληνικά',
    localeCode : 'el',
    localeRtl  : false,

    Column : {
        Actions             : 'Ενέργειες',
        Allocation          : 'Κατανομή',
        Calendar            : 'Ημερολόγιο',
        City                : 'Πόλη',
        Consultant          : 'Σύμβουλος',
        Contractor          : 'Εργολάβος',
        Doctor              : 'Γιατρός',
        Driver              : 'Οδηγός',
        Expedition          : 'Αποστολή',
        'First name'        : 'Όνομα',
        Inspector           : 'Επιθεωρητής',
        Manager             : 'Διευθυντής',
        Name                : 'Όνομα',
        Projects            : 'Έργα',
        Property            : 'Ιδιοκτησία',
        Rating              : 'Βαθμολογία',
        Resource            : 'Πόρος',
        Role                : 'Ρόλος',
        Score               : 'Βαθμολογία',
        Shift               : 'Βάρδια',
        'Speaker rating'    : 'Αξιολόγηση ομιλητή',
        Staff               : 'Προσωπικό',
        Station             : 'Σταθμός',
        Surname             : 'Επώνυμο',
        Tasks               : 'Καθήκοντα',
        Technicians         : 'Τεχνικοί',
        Type                : 'Τύπος',
        'Vehicle Condition' : 'Κατάσταση οχήματος',
        'Work hours'        : 'Ώρες εργασίας',
        Worker              : 'Εργάτης'
    },

    Button : {
        '10K events'                  : '10K γεγονότα',
        '1K events'                   : '1K γεγονότα',
        '5K events'                   : '5K γεγονότα',
        'Add exception'               : 'Προσθήκη εξαίρεσης',
        'Add invalid calendar'        : 'Προσθήκη μη έγκυρου ημερολογίου',
        'Add invalid dependency'      : 'Προσθήκη μη έγκυρης εξάρτησης',
        'Add order'                   : 'Προσθήκη παραγγελίας',
        'Add week'                    : 'Προσθήκη εβδομάδας',
        Apr                           : 'Απρ',
        Aug                           : 'Αυγ',
        'Auto-schedule'               : 'Αυτόματο πρόγραμμα',
        'Bar settings'                : 'Ρυθμίσεις γραμμής',
        Cancel                        : 'Ακύρωση',
        'Change working time'         : 'Αλλαγή ωραρίου εργασίας',
        'City - Resource'             : 'Πόλη - Πόρος',
        Custom                        : 'Προσαρμοσμένο',
        Dark                          : 'Σκοτεινό',
        Dec                           : 'Δεκ',
        Default                       : 'Προεπιλογή',
        'Default layouts'             : 'Προεπιλεγμένες διατάξεις',
        Delete                        : 'Διαγραφή',
        Dependencies                  : 'Εξαρτήσεις',
        'Drag & resize settings'      : 'Ρυθμίσεις μεταφοράς & αλλαγής μεγέθους',
        'Edit calendar'               : 'Επεξεργασία ημερολογίου',
        'Enable mouse interaction'    : 'Ενεργοποίηση αλληλεπίδρασης με το ποντίκι',
        Feb                           : 'Φεβ',
        'Filter out non-working time' : 'Φιλτράρισμα μη εργάσιμου χρόνου',
        'Hide scheduled'              : 'Απόκρυψη προγραμματισμένων',
        'Highlight 9-10am + 2-4pm'    : 'Επισήμανση 9-10πμ + 2-4μμ',
        'Highlight while dragging'    : 'Επισήμανση κατά τη μεταφορά',
        'Horizontal mode'             : 'Οριζόντια λειτουργία',
        Jan                           : 'Ιαν',
        Jul                           : 'Ιουλ',
        Jun                           : 'Ιουν',
        'Layout function'             : 'Λειτουργία διάταξης',
        Light                         : 'Φωτεινό',
        Login                         : 'Σύνδεση',
        Logout                        : 'Αποσύνδεση',
        Mar                           : 'Μαρ',
        March                         : 'Μάρτιος',
        May                           : 'Μάι',
        'New event'                   : 'Νέο γεγονός',
        Nov                           : 'Νοε',
        Oct                           : 'Οκτ',
        Overlap                       : 'Επικάλυψη',
        Pack                          : 'Συσκευασία',
        Reset                         : 'Επαναφορά',
        'Reset data'                  : 'Επαναφορά δεδομένων',
        'Resource - City'             : 'Πόρος - Πόλη',
        'Resource ranges'             : 'Εύρη πόρων',
        Save                          : 'Αποθήκευση',
        Sep                           : 'Σεπ',
        'Show setup time'             : 'Εμφάνιση χρόνου ρύθμισης',
        Stack                         : 'Στοίβα',
        Today                         : 'Σήμερα',
        'Vertical mode'               : 'Κατακόρυφη λειτουργία',
        'Zoom in'                     : 'Μεγέθυνση',
        'Zoom out'                    : 'Σμίκρυνση'
    },

    Checkbox : {
        'Draw around parents'   : 'Σχεδίαση γύρω από τους γονείς',
        'Enable bar tooltip'    : 'Ενεργοποίηση εργαλείου συμβουλών μπάρας',
        'Show bar texts'        : 'Εμφάνιση κειμένων γραμμής',
        'Show max allocation'   : 'Εμφάνιση μέγιστης κατανομής',
        'Show non working time' : 'Εμφάνιση μη εργάσιμου χρόνου'
    },

    Slider : {
        'Max capacity' : 'Μέγιστη χωρητικότητα',
        'Row height'   : 'Ύψος σειράς'
    },

    Label : {
        Days       : 'Ημέρες',
        'Group by' : 'Ομαδοποίηση κατά',
        Months     : 'Μήνες',
        Settings   : 'Ρυθμίσεις'
    },

    Combo : {
        'Current timezone' : 'Τρέχουσα ζώνη ώρας',
        'Group events by'  : 'Ομαδοποίηση εκδηλώσεων κατά',
        Parent             : 'Γονέας',
        Show               : 'Εμφάνιση'
    },

    NumberField : {
        Events    : 'Εκδηλώσεις',
        Resources : 'Πόροι'
    },

    TextField : {
        Doctor           : 'Γιατρός',
        Name             : 'Όνομα',
        'Server address' : 'Διεύθυνση διακομιστή',
        Username         : 'Όνομα χρήστη'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Ελέγξτε για να εμφανίσετε τη γραμμή μέγιστης κατανομής πόρων',
        'Check to show resource allocation in the bars'                                                            : 'Ελέγξτε για να εμφανίσετε την κατανομή πόρων στις γραμμές',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Ελέγξτε για να εμφανίσετε συμβουλές εργαλείων όταν μετακινείτε το ποντίκι πάνω από τις μπάρες',
        'Click to group by City - Resource'                                                                        : 'Κάντε κλικ για ομαδοποίηση κατά Πόλη - Πόρος',
        'Click to group by Resource - City'                                                                        : 'Κάντε κλικ για ομαδοποίηση κατά Πόρος - Πόλη',
        'Collapse all groups'                                                                                      : 'Σύμπτυξη όλων των ομάδων',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Απενεργοποιήστε τη δυνατότητα ομαδοποίησης δέντρου και επιστρέψτε στην προεπιλεγμένη εμφάνιση Πόρος - Ανάθεση',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Εισάγετε αριθμό γεγονότων ανά πόρο για δημιουργία και πατήστε [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Εισάγετε αριθμό γραμμών πόρων για δημιουργία και πατήστε [ENTER]',
        'Expand all groups'                                                                                        : 'Ανάπτυξη όλων των ομάδων',
        Friday                                                                                                     : 'Παρασκευή',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Αν δύο τμήματα τοποθετηθούν το ένα δίπλα στο άλλο, μπορείτε είτε να τα συγχωνεύσετε είτε να τα κρατήσετε χωριστά',
        Monday                                                                                                     : 'Δευτέρα',
        Saturday                                                                                                   : 'Σάββατο',
        Sunday                                                                                                     : 'Κυριακή',
        Thursday                                                                                                   : 'Πέμπτη',
        'Toggle layout'                                                                                            : 'Εναλλαγή διάταξης',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Προσπαθεί να προσαρμόσει τα μη προγραμματισμένα γεγονότα στο χρονικό πλαίσιο που εμφανίζεται',
        Tuesday                                                                                                    : 'Τρίτη',
        'View next day'                                                                                            : 'Προβολή επόμενης ημέρας',
        'View previous day'                                                                                        : 'Προβολή προηγούμενης ημέρας',
        'View today, to see the current time line'                                                                 : 'Προβολή σήμερα, για να δείτε την τρέχουσα γραμμή χρόνου',
        Wednesday                                                                                                  : 'Τετάρτη'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Αυτόματη συγχώνευση γειτονικών τμημάτων',
        'Auto-send'                    : 'Αυτόματη αποστολή',
        'Constrain drag to row'        : 'Περιορισμός μεταφοράς στη σειρά',
        'Days are working by default'  : 'Οι ημέρες είναι εργάσιμες από προεπιλογή',
        'Enable highlighting'          : 'Ενεργοποίηση επισήμανσης',
        'Enable task drag drop'        : 'Ενεργοποίηση μεταφοράς και απόθεσης εργασιών',
        'Snap to grid'                 : 'Προσαρμογή στο πλέγμα',
        'View Planned dates'           : 'Προβολή προγραμματισμένων ημερομηνιών'
    }
};

export default LocaleHelper.publishLocale(locale);
