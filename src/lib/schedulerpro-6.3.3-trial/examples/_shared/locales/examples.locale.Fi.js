import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Fi.js';
import '../../../lib/SchedulerPro/localization/Fi.js';
import './shared.locale.Fi.js';

const locale = {

    localeName : 'Fi',
    localeDesc : 'Suomi',
    localeCode : 'fi',
    localeRtl  : false,

    Column : {
        Actions             : 'Toiminnot',
        Allocation          : 'Allokointi',
        Calendar            : 'Kalenteri',
        City                : 'Kaupunki',
        Consultant          : 'Konsultti',
        Contractor          : 'Urakoitsija',
        Doctor              : 'Lääkäri',
        Driver              : 'Kuljettaja',
        Expedition          : 'Retkikunta',
        'First name'        : 'Etunimi',
        Inspector           : 'Tarkastaja',
        Manager             : 'Johtaja',
        Name                : 'Nimi',
        Projects            : 'Projektit',
        Property            : 'Omaisuus',
        Rating              : 'Arvosana',
        Resource            : 'Resurssi',
        Role                : 'Rooli',
        Score               : 'Pisteet',
        Shift               : 'Vuoro',
        'Speaker rating'    : 'Puhujan arvosana',
        Staff               : 'Henkilökunta',
        Station             : 'Asema',
        Surname             : 'Sukunimi',
        Tasks               : 'Tehtävät',
        Technicians         : 'Teknikot',
        Type                : 'Tyyppi',
        'Vehicle Condition' : 'Ajoneuvon kunto',
        'Work hours'        : 'Työtunnit',
        Worker              : 'Työntekijä'
    },

    Button : {
        '10K events'                  : '10K tapahtumaa',
        '1K events'                   : '1K tapahtumaa',
        '5K events'                   : '5K tapahtumaa',
        'Add exception'               : 'Lisää poikkeus',
        'Add invalid calendar'        : 'Lisää virheellinen kalenteri',
        'Add invalid dependency'      : 'Lisää virheellinen riippuvuus',
        'Add order'                   : 'Lisää tilaus',
        'Add week'                    : 'Lisää viikko',
        Apr                           : 'Huhti',
        Aug                           : 'Elo',
        'Auto-schedule'               : 'Aikatauluta automaattisesti',
        'Bar settings'                : 'Palkkiasetukset',
        Cancel                        : 'Peruuta',
        'Change working time'         : 'Vaihda työaikaa',
        'City - Resource'             : 'Kaupunki - Resurssi',
        Custom                        : 'Mukautettu',
        Dark                          : 'Tumma',
        Dec                           : 'Joulu',
        Default                       : 'Oletus',
        'Default layouts'             : 'Oletusasettelut',
        Delete                        : 'Poista',
        Dependencies                  : 'Riippuvuudet',
        'Drag & resize settings'      : 'Vedä & muuta kokoa asetukset',
        'Edit calendar'               : 'Muokkaa kalenteria',
        'Enable mouse interaction'    : 'Ota hiiren vuorovaikutus käyttöön',
        Feb                           : 'Helmi',
        'Filter out non-working time' : 'Suodata pois ei-työaika',
        'Hide scheduled'              : 'Piilota aikataulutetut',
        'Highlight 9-10am + 2-4pm'    : 'Korosta 9-10am + 2-4pm',
        'Highlight while dragging'    : 'Korosta vedettäessä',
        'Horizontal mode'             : 'Vaakamoodi',
        Jan                           : 'Tammi',
        Jul                           : 'Heinä',
        Jun                           : 'Kesä',
        'Layout function'             : 'Asettelutoiminto',
        Light                         : 'Vaalea',
        Login                         : 'Kirjaudu sisään',
        Logout                        : 'Kirjaudu ulos',
        Mar                           : 'Maalis',
        March                         : 'Maaliskuu',
        May                           : 'Touko',
        'New event'                   : 'Uusi tapahtuma',
        Nov                           : 'Marras',
        Oct                           : 'Loka',
        Overlap                       : 'Päällekkäisyys',
        Pack                          : 'Pakkaa',
        Reset                         : 'Nollaa',
        'Reset data'                  : 'Nollaa tiedot',
        'Resource - City'             : 'Resurssi - Kaupunki',
        'Resource ranges'             : 'Resurssialueet',
        Save                          : 'Tallenna',
        Sep                           : 'Syys',
        'Show setup time'             : 'Näytä asennusaika',
        Stack                         : 'Pino',
        Today                         : 'Tänään',
        'Vertical mode'               : 'Pystymoodi',
        'Zoom in'                     : 'Lähennä',
        'Zoom out'                    : 'Loitonna'
    },

    Checkbox : {
        'Draw around parents'   : 'Piirrä vanhempien ympärille',
        'Enable bar tooltip'    : 'Ota käyttöön palkkivihje',
        'Show bar texts'        : 'Näytä palkkitekstit',
        'Show max allocation'   : 'Näytä maksimi allokointi',
        'Show non working time' : 'Näytä ei-työaika'
    },

    Slider : {
        'Max capacity' : 'Maksimikapasiteetti',
        'Row height'   : 'Rivin korkeus'
    },

    Label : {
        Days       : 'Päivät',
        'Group by' : 'Ryhmittele',
        Months     : 'Kuukaudet',
        Settings   : 'Asetukset'
    },

    Combo : {
        'Current timezone' : 'Nykyinen aikavyöhyke',
        'Group events by'  : 'Ryhmittele tapahtumat',
        Parent             : 'Yläluokka',
        Show               : 'Näytä'
    },

    NumberField : {
        Events    : 'Tapahtumat',
        Resources : 'Resurssit'
    },

    TextField : {
        Doctor           : 'Lääkäri',
        Name             : 'Nimi',
        'Server address' : 'Palvelimen osoite',
        Username         : 'Käyttäjänimi'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Valitse näyttääksesi maksimi resurssiallokointiviiva',
        'Check to show resource allocation in the bars'                                                            : 'Valitse näyttääksesi resurssiallokointi palkkeissa',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Valitse näyttääksesi työkaluvihjeet, kun siirrät hiirtä palkkien yli',
        'Click to group by City - Resource'                                                                        : 'Napsauta ryhmitelläksesi Kaupunki - Resurssi',
        'Click to group by Resource - City'                                                                        : 'Napsauta ryhmitelläksesi Resurssi - Kaupunki',
        'Collapse all groups'                                                                                      : 'Supista kaikki ryhmät',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Poista puuryhmäominaisuus käytöstä ja palaa oletus Resurssi - Tehtävä näkymään',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Anna luotavien tapahtumien määrä per resurssi ja paina [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Anna luotavien resurssirivien määrä ja paina [ENTER]',
        'Expand all groups'                                                                                        : 'Laajenna kaikki ryhmät',
        Friday                                                                                                     : 'Perjantai',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Jos kaksi segmenttiä on vierekkäin, voit joko yhdistää ne tai pitää ne erillään',
        Monday                                                                                                     : 'Maanantai',
        Saturday                                                                                                   : 'Lauantai',
        Sunday                                                                                                     : 'Sunnuntai',
        Thursday                                                                                                   : 'Torstai',
        'Toggle layout'                                                                                            : 'Vaihda asettelua',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Yrittää sovittaa suunnittelemattomat tapahtumat nykyiseen aikakehykseen',
        Tuesday                                                                                                    : 'Tiistai',
        'View next day'                                                                                            : 'Näytä seuraava päivä',
        'View previous day'                                                                                        : 'Näytä edellinen päivä',
        'View today, to see the current time line'                                                                 : 'Näytä tänään nähdäksesi nykyisen aikajanan',
        Wednesday                                                                                                  : 'Keskiviikko'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Yhdistä vierekkäiset segmentit automaattisesti',
        'Auto-send'                    : 'Automaattinen lähetys',
        'Constrain drag to row'        : 'Rajoita vetäminen riviin',
        'Days are working by default'  : 'Päivät ovat oletuksena työpäiviä',
        'Enable highlighting'          : 'Ota korostus käyttöön',
        'Enable task drag drop'        : 'Ota tehtävien vetäminen ja pudottaminen käyttöön',
        'Snap to grid'                 : 'Kiinnitä ruudukkoon',
        'View Planned dates'           : 'Näytä suunnitellut päivämäärät'
    }
};

export default LocaleHelper.publishLocale(locale);
