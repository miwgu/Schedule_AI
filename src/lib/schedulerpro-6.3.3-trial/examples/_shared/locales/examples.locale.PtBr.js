import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/PtBr.js';
import '../../../lib/SchedulerPro/localization/PtBr.js';
import './shared.locale.PtBr.js';

const locale = {

    localeName : 'PtBr',
    localeDesc : 'Português do Brasil',
    localeCode : 'pt-BR',
    localeRtl  : false,

    Column : {
        Actions             : 'Ações',
        Allocation          : 'Alocação',
        Calendar            : 'Calendário',
        City                : 'Cidade',
        Consultant          : 'Consultor',
        Contractor          : 'Contratante',
        Doctor              : 'Médico',
        Driver              : 'Motorista',
        Expedition          : 'Expedição',
        'First name'        : 'Nome',
        Inspector           : 'Inspetor',
        Manager             : 'Gerente',
        Name                : 'Nome',
        Projects            : 'Projetos',
        Property            : 'Propriedade',
        Rating              : 'Avaliação',
        Resource            : 'Recurso',
        Role                : 'Função',
        Score               : 'Pontuação',
        Shift               : 'Turno',
        'Speaker rating'    : 'Classificação do palestrante',
        Staff               : 'Equipe',
        Station             : 'Estação',
        Surname             : 'Sobrenome',
        Tasks               : 'Tarefas',
        Technicians         : 'Técnicos',
        Type                : 'Tipo',
        'Vehicle Condition' : 'Condição do Veículo',
        'Work hours'        : 'Horas de trabalho',
        Worker              : 'Trabalhador'
    },

    Button : {
        '10K events'                  : '10K eventos',
        '1K events'                   : '1K eventos',
        '5K events'                   : '5K eventos',
        'Add exception'               : 'Adicionar exceção',
        'Add invalid calendar'        : 'Adicionar calendário inválido',
        'Add invalid dependency'      : 'Adicionar dependência inválida',
        'Add order'                   : 'Adicionar pedido',
        'Add week'                    : 'Adicionar semana',
        Apr                           : 'Abr',
        Aug                           : 'Ago',
        'Auto-schedule'               : 'Auto-agendar',
        'Bar settings'                : 'Configurações da barra',
        Cancel                        : 'Cancelar',
        'Change working time'         : 'Alterar horário de trabalho',
        'City - Resource'             : 'Cidade - Recurso',
        Custom                        : 'Personalizado',
        Dark                          : 'Escuro',
        Dec                           : 'Dez',
        Default                       : 'Padrão',
        'Default layouts'             : 'Layouts padrão',
        Delete                        : 'Excluir',
        Dependencies                  : 'Dependências',
        'Drag & resize settings'      : 'Configurações de arrastar e redimensionar',
        'Edit calendar'               : 'Editar calendário',
        'Enable mouse interaction'    : 'Habilitar interação com o mouse',
        Feb                           : 'Fev',
        'Filter out non-working time' : 'Filtrar tempo não trabalhado',
        'Hide scheduled'              : 'Ocultar agendado',
        'Highlight 9-10am + 2-4pm'    : 'Destacar 9-10h + 14-16h',
        'Highlight while dragging'    : 'Destacar ao arrastar',
        'Horizontal mode'             : 'Modo horizontal',
        Jan                           : 'Jan',
        Jul                           : 'Jul',
        Jun                           : 'Jun',
        'Layout function'             : 'Função de layout',
        Light                         : 'Claro',
        Login                         : 'Entrar',
        Logout                        : 'Sair',
        Mar                           : 'Mar',
        March                         : 'Março',
        May                           : 'Mai',
        'New event'                   : 'Novo evento',
        Nov                           : 'Nov',
        Oct                           : 'Out',
        Overlap                       : 'Sobreposição',
        Pack                          : 'Empacotar',
        Reset                         : 'Redefinir',
        'Reset data'                  : 'Redefinir dados',
        'Resource - City'             : 'Recurso - Cidade',
        'Resource ranges'             : 'Intervalos de recursos',
        Save                          : 'Salvar',
        Sep                           : 'Set',
        'Show setup time'             : 'Mostrar tempo de configuração',
        Stack                         : 'Empilhar',
        Today                         : 'Hoje',
        'Vertical mode'               : 'Modo vertical',
        'Zoom in'                     : 'Aproximar',
        'Zoom out'                    : 'Afastar'
    },

    Checkbox : {
        'Draw around parents'   : 'Desenhar ao redor dos pais',
        'Enable bar tooltip'    : 'Ativar dica de ferramenta da barra',
        'Show bar texts'        : 'Mostrar textos da barra',
        'Show max allocation'   : 'Mostrar alocação máxima',
        'Show non working time' : 'Mostrar tempo não trabalhado'
    },

    Slider : {
        'Max capacity' : 'Capacidade máxima',
        'Row height'   : 'Altura da linha'
    },

    Label : {
        Days       : 'Dias',
        'Group by' : 'Agrupar por',
        Months     : 'Meses',
        Settings   : 'Configurações'
    },

    Combo : {
        'Current timezone' : 'Fuso horário atual',
        'Group events by'  : 'Agrupar eventos por',
        Parent             : 'Pai',
        Show               : 'Mostrar'
    },

    NumberField : {
        Events    : 'Eventos',
        Resources : 'Recursos'
    },

    TextField : {
        Doctor           : 'Médico',
        Name             : 'Nome',
        'Server address' : 'Endereço do servidor',
        Username         : 'Nome de usuário'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : 'Marque para exibir a linha de alocação máxima de recursos',
        'Check to show resource allocation in the bars'                                                            : 'Marque para mostrar a alocação de recursos nas barras',
        'Check to show tooltips when moving mouse over bars'                                                       : 'Marque para mostrar dicas ao mover o mouse sobre as barras',
        'Click to group by City - Resource'                                                                        : 'Clique para agrupar por Cidade - Recurso',
        'Click to group by Resource - City'                                                                        : 'Clique para agrupar por Recurso - Cidade',
        'Collapse all groups'                                                                                      : 'Recolher todos os grupos',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'Desativar recurso de agrupamento em árvore e voltar para a visualização padrão de Recurso - Atribuição',
        'Enter number of events per resource to generate and press [ENTER]'                                        : 'Digite o número de eventos por recurso para gerar e pressione [ENTER]',
        'Enter number of resource rows to generate and press [ENTER]'                                              : 'Digite o número de linhas de recursos para gerar e pressione [ENTER]',
        'Expand all groups'                                                                                        : 'Expandir todos os grupos',
        Friday                                                                                                     : 'Sexta-feira',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : 'Se dois segmentos estiverem colocados lado a lado, você pode optar por uni-los ou mantê-los separados',
        Monday                                                                                                     : 'Segunda-feira',
        Saturday                                                                                                   : 'Sábado',
        Sunday                                                                                                     : 'Domingo',
        Thursday                                                                                                   : 'Quinta-feira',
        'Toggle layout'                                                                                            : 'Alternar layout',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : 'Tenta ajustar os eventos não planejados no período de tempo atualmente exibido',
        Tuesday                                                                                                    : 'Terça-feira',
        'View next day'                                                                                            : 'Ver próximo dia',
        'View previous day'                                                                                        : 'Ver dia anterior',
        'View today, to see the current time line'                                                                 : 'Ver hoje, para ver a linha do tempo atual',
        Wednesday                                                                                                  : 'Quarta-feira'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : 'Mesclar automaticamente segmentos adjacentes',
        'Auto-send'                    : 'Envio automático',
        'Constrain drag to row'        : 'Restringir arrastar para linha',
        'Days are working by default'  : 'Os dias são úteis por padrão',
        'Enable highlighting'          : 'Ativar destaque',
        'Enable task drag drop'        : 'Ativar arrastar e soltar de tarefas',
        'Snap to grid'                 : 'Ajustar à grade',
        'View Planned dates'           : 'Ver datas planejadas'
    }
};

export default LocaleHelper.publishLocale(locale);
