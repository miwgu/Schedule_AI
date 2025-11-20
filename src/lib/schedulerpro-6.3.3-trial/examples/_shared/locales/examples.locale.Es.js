import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Es.js';
import '../../../lib/SchedulerPro/localization/Es.js';
import './shared.locale.Es.js';

const locale = {

    localeName : 'Es',
    localeDesc : 'Español',
    localeCode : 'es',
    localeRtl  : false,

    Column : {
        Actions             : 'Acciones',
        Allocation          : 'Asignación',
        Calendar            : 'Calendario',
        City                : 'Ciudad',
        Consultant          : 'Consultor',
        Contractor          : 'Contratista',
        Doctor              : 'Doctor',
        Driver              : 'Conductor',
        Expedition          : 'Expedición',
        'First name'        : 'Nombre',
        Inspector           : 'Inspector',
        Manager             : 'Gerente',
        Name                : 'Nombre',
        Projects            : 'Proyectos',
        Property            : 'Propiedad',
        Rating              : 'Calificación',
        Resource            : 'Recurso',
        Role                : 'Rol',
        Score               : 'Puntuación',
        Shift               : 'Turno',
        'Speaker rating'    : 'Calificación del orador',
        Staff               : 'Personal',
        Station             : 'Estación',
        Surname             : 'Apellido',
        Tasks               : 'Tareas',
        Technicians         : 'Técnicos',
        Type                : 'Tipo',
        'Vehicle Condition' : 'Condición del vehículo',
        'Work hours'        : 'Horas de trabajo',
        Worker              : 'Trabajador'
    },

    Button : {
        '10K events'                  : '10K eventos',
        '1K events'                   : '1K eventos',
        '5K events'                   : '5K eventos',
        'Add exception'               : 'Agregar excepción',
        'Add invalid calendar'        : 'Agregar calendario inválido',
        'Add invalid dependency'      : 'Agregar dependencia inválida',
        'Add order'                   : 'Agregar orden',
        'Add week'                    : 'Agregar semana',
        Apr                           : 'Abr',
        Aug                           : 'Ago',
        'Auto-schedule'               : 'Auto-programar',
        'Bar settings'                : 'Configuración de barra',
        Cancel                        : 'Cancelar',
        'Change working time'         : 'Cambiar horario laboral',
        'City - Resource'             : 'Ciudad - Recurso',
        Custom                        : 'Personalizado',
        Dark                          : 'Oscuro',
        Dec                           : 'Dic',
        Default                       : 'Predeterminado',
        'Default layouts'             : 'Diseños predeterminados',
        Delete                        : 'Eliminar',
        Dependencies                  : 'Dependencias',
        'Drag & resize settings'      : 'Configuración de arrastrar y redimensionar',
        'Edit calendar'               : 'Editar calendario',
        'Enable mouse interaction'    : 'Habilitar interacción con el ratón',
        Feb                           : 'Feb',
        'Filter out non-working time' : 'Filtrar tiempo no laboral',
        'Hide scheduled'              : 'Ocultar programado',
        'Highlight 9-10am + 2-4pm'    : 'Resaltar 9-10am + 2-4pm',
        'Highlight while dragging'    : 'Resaltar al arrastrar',
        'Horizontal mode'             : 'Modo horizontal',
        Jan                           : 'Ene',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Función de diseño',
        Light                         : 'Claro',
        Login                         : 'Iniciar sesión',
        Logout                        : 'Cerrar sesión',
        Mar                           : 'Mar',
        March                         : 'Marzo',
        May                           : 'May',
        'New event'                   : 'Nuevo evento',
        Nov                           : 'Nov',
        Oct                           : 'Oct',
        Overlap                       : 'Superposición',
        Pack                          : 'Empaquetar',
        Reset                         : 'Restablecer',
        'Reset data'                  : 'Restablecer datos',
        'Resource - City'             : 'Recurso - Ciudad',
        'Resource ranges'             : 'Rangos de recursos',
        Save                          : 'Guardar',
        Sep                           : 'Sep',
        'Show setup time'             : 'Mostrar tiempo de configuración',
        Stack                         : 'Apilar',
        Today                         : 'Hoy',
        'Vertical mode'               : 'Modo vertical',
        'Zoom in'                     : 'Acercar',
        'Zoom out'                    : 'Alejar'
    },

    Checkbox : {
        'Draw around parents'   : 'Dibujar alrededor de los padres',
        'Enable bar tooltip'    : 'Habilitar información sobre herramientas de la barra',
        'Show bar texts'        : 'Mostrar textos de barra',
        'Show max allocation'   : 'Mostrar asignación máxima',
        'Show non working time' : 'Mostrar tiempo no laborable'
    },

    Slider : {
        'Max capacity' : 'Capacidad máxima',
        'Row height'   : 'Altura de fila'
    },

    Label : {
        Days       : 'Días',
        'Group by' : 'Agrupar por',
        Months     : 'Meses',
        Settings   : 'Configuración'
    },

    Combo : {
        'Current timezone' : 'Zona horaria actual',
        'Group events by'  : 'Agrupar eventos por',
        Parent             : 'Padre',
        Show               : 'Mostrar'
    },

    NumberField : {
        Events    : 'Eventos',
        Resources : 'Recursos'
    },

    TextField : {
        Doctor           : 'Doctor',
        Name             : 'Nombre',
        'Server address' : 'Dirección del servidor',
        Username         : 'Nombre de usuario'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Marque para mostrar la línea de asignación máxima de recursos',
        'Check to show resource allocation in the bars'                                                            : 'Marque para mostrar la asignación de recursos en las barras',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Marcar para mostrar tooltips al mover el ratón sobre las barras',
        'Click to group by City - Resource'                                                                        : 'Haga clic para agrupar por Ciudad - Recurso',
        'Click to group by Resource - City'                                                                        : 'Haga clic para agrupar por Recurso - Ciudad',
        'Collapse all groups'                                                                                      : 'Colapsar todos los grupos',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Desactivar la función de grupo de árbol y volver a la vista predeterminada de Recurso - Asignación',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Ingrese el número de eventos por recurso para generar y presione [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Ingrese el número de filas de recursos para generar y presione [ENTER]',
        'Expand all groups'                                                                                        : 'Expandir todos los grupos',
        Friday                                                                                                     : 'Viernes',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Si dos segmentos están colocados uno al lado del otro, puede fusionarlos o mantenerlos separados',
        Monday                                                                                                     : 'Lunes',
        Saturday                                                                                                   : 'Sábado',
        Sunday                                                                                                     : 'Domingo',
        Thursday                                                                                                   : 'Jueves',
        'Toggle layout'                                                                                            : 'Alternar diseño',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Intenta ajustar los eventos no planificados en el marco de tiempo actualmente mostrado',
        Tuesday                                                                                                    : 'Martes',
        'View next day'                                                                                            : 'Ver el día siguiente',
        'View previous day'                                                                                        : 'Ver el día anterior',
        'View today, to see the current time line'                                                                 : 'Ver hoy, para ver la línea de tiempo actual',
        Wednesday                                                                                                  : 'Miércoles'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Fusión automática de segmentos adyacentes',
        'Auto-send'                    : 'Envío automático',
        'Constrain drag to row'        : 'Restringir arrastre a la fila',
        'Days are working by default'  : 'Los días son laborables por defecto',
        'Enable highlighting'          : 'Habilitar resaltado',
        'Enable task drag drop'        : 'Habilitar arrastrar y soltar tareas',
        'Snap to grid'                 : 'Ajustar a la cuadrícula',
        'View Planned dates'           : 'Ver fechas planificadas'
    }
};

export default LocaleHelper.publishLocale(locale);
