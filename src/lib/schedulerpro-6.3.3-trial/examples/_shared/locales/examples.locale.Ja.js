import LocaleHelper from '../../../lib/Core/localization/LocaleHelper.js';
import '../../../lib/Chart/localization/Ja.js';
import '../../../lib/SchedulerPro/localization/Ja.js';
import './shared.locale.Ja.js';
const locale = {

    localeName : 'Ja',
    localeDesc : '日本語',
    localeCode : 'ja',
    localeRtl  : false,

    Column : {
        Actions             : 'アクション',
        Allocation          : '割り当て',
        Calendar            : 'カレンダー',
        City                : '市',
        Consultant          : 'コンサルタント',
        Contractor          : '契約者',
        Doctor              : '医者',
        Driver              : 'ドライバー',
        Expedition          : '遠征',
        'First name'        : '名',
        Inspector           : '検査官',
        Manager             : 'マネージャー',
        Name                : '名前',
        Projects            : 'プロジェクト',
        Property            : 'プロパティ',
        Rating              : '評価',
        Resource            : 'リソース',
        Role                : '役割',
        Score               : 'スコア',
        Shift               : 'シフト',
        'Speaker rating'    : 'スピーカー評価',
        Staff               : 'スタッフ',
        Station             : 'ステーション',
        Surname             : '姓',
        Tasks               : 'タスク',
        Technicians         : '技術者',
        Type                : 'タイプ',
        'Vehicle Condition' : '車両の状態',
        'Work hours'        : '労働時間',
        Worker              : '労働者'
    },

    Button : {
        '10K events'                  : '10K イベント',
        '1K events'                   : '1K イベント',
        '5K events'                   : '5K イベント',
        'Add exception'               : '例外を追加',
        'Add invalid calendar'        : '無効なカレンダーを追加',
        'Add invalid dependency'      : '無効な依存関係を追加',
        'Add order'                   : '注文を追加',
        'Add week'                    : '週を追加',
        Apr                           : '4月',
        Aug                           : '8月',
        'Auto-schedule'               : '自動スケジュール',
        'Bar settings'                : 'バー設定',
        Cancel                        : 'キャンセル',
        'Change working time'         : '作業時間を変更',
        'City - Resource'             : '都市 - リソース',
        Custom                        : 'カスタム',
        Dark                          : 'ダーク',
        Dec                           : '12月',
        Default                       : 'デフォルト',
        'Default layouts'             : 'デフォルトレイアウト',
        Delete                        : '削除',
        Dependencies                  : '依存関係',
        'Drag & resize settings'      : 'ドラッグ＆リサイズ設定',
        'Edit calendar'               : 'カレンダーを編集',
        'Enable mouse interaction'    : 'マウス操作を有効にする',
        Feb                           : '2月',
        'Filter out non-working time' : '非作業時間を除外',
        'Hide scheduled'              : 'スケジュールを非表示',
        'Highlight 9-10am + 2-4pm'    : '9-10時 + 14-16時をハイライト',
        'Highlight while dragging'    : 'ドラッグ中にハイライト',
        'Horizontal mode'             : '水平モード',
        Jan                           : '1月',
        Jul                           : '7月',
        Jun                           : '6月',
        'Layout function'             : 'レイアウト機能',
        Light                         : 'ライト',
        Login                         : 'ログイン',
        Logout                        : 'ログアウト',
        Mar                           : '3月',
        March                         : '3月',
        May                           : '5月',
        'New event'                   : '新しいイベント',
        Nov                           : '11月',
        Oct                           : '10月',
        Overlap                       : '重なり',
        Pack                          : 'パック',
        Reset                         : 'リセット',
        'Reset data'                  : 'データをリセット',
        'Resource - City'             : 'リソース - 都市',
        'Resource ranges'             : 'リソース範囲',
        Save                          : '保存',
        Sep                           : '9月',
        'Show setup time'             : 'セットアップ時間を表示',
        Stack                         : 'スタック',
        Today                         : '今日',
        'Vertical mode'               : '垂直モード',
        'Zoom in'                     : 'ズームイン',
        'Zoom out'                    : 'ズームアウト'
    },

    Checkbox : {
        'Draw around parents'   : '親の周りに描画',
        'Enable bar tooltip'    : 'バーのツールチップを有効にする',
        'Show bar texts'        : 'バーのテキストを表示',
        'Show max allocation'   : '最大割り当てを表示',
        'Show non working time' : '非稼働時間を表示'
    },

    Slider : {
        'Max capacity' : '最大容量',
        'Row height'   : '行の高さ'
    },

    Label : {
        Days       : '日',
        'Group by' : 'グループ化',
        Months     : '月',
        Settings   : '設定'
    },

    Combo : {
        'Current timezone' : '現在のタイムゾーン',
        'Group events by'  : 'イベントをグループ化',
        Parent             : '親',
        Show               : '表示'
    },

    NumberField : {
        Events    : 'イベント',
        Resources : 'リソース'
    },

    TextField : {
        Doctor           : '医師',
        Name             : '名前',
        'Server address' : 'サーバーアドレス',
        Username         : 'ユーザー名'
    },

    Tooltip : {
        'Check to display max resource allocation line'                                                            : '最大リソース割り当てラインを表示するにはチェックしてください',
        'Check to show resource allocation in the bars'                                                            : 'バー内のリソース割り当てを表示するにはチェックしてください',
        'Check to show tooltips when moving mouse over bars'                                                       : 'バーの上にマウスを移動したときにツールチップを表示するにはチェックしてください',
        'Click to group by City - Resource'                                                                        : '都市別 - リソースでグループ化するにはクリック',
        'Click to group by Resource - City'                                                                        : 'リソース別 - 都市でグループ化するにはクリック',
        'Collapse all groups'                                                                                      : 'すべてのグループを折りたたむ',
        'Disable tree group feature and back to default Resource - Assignment look'                                : 'ツリーグループ機能を無効にしてデフォルトのリソース - アサインメント表示に戻す',
        'Enter number of events per resource to generate and press [ENTER]'                                        : '生成するリソースごとのイベント数を入力し、[ENTER]を押してください',
        'Enter number of resource rows to generate and press [ENTER]'                                              : '生成するリソース行数を入力し、[ENTER]を押してください',
        'Expand all groups'                                                                                        : 'すべてのグループを展開',
        Friday                                                                                                     : '金曜日',
        'If two segments are placed next to each other, you can either have them be merged or keep them separated' : '2つのセグメントが隣接して配置されている場合、それらをマージするか、分離したままにすることができます',
        Monday                                                                                                     : '月曜日',
        Saturday                                                                                                   : '土曜日',
        Sunday                                                                                                     : '日曜日',
        Thursday                                                                                                   : '木曜日',
        'Toggle layout'                                                                                            : 'レイアウトを切り替える',
        'Tries to fit the unplanned events into the currently displayed timeframe'                                 : '現在表示されている時間枠に未計画のイベントを収めようとします',
        Tuesday                                                                                                    : '火曜日',
        'View next day'                                                                                            : '翌日を表示',
        'View previous day'                                                                                        : '前日を表示',
        'View today, to see the current time line'                                                                 : '今日を表示して現在のタイムラインを確認',
        Wednesday                                                                                                  : '水曜日'
    },

    SlideToggle : {
        'Auto-merge adjacent segments' : '隣接するセグメントを自動マージ',
        'Auto-send'                    : '自動送信',
        'Constrain drag to row'        : '行へのドラッグを制限',
        'Days are working by default'  : 'デフォルトで稼働日',
        'Enable highlighting'          : 'ハイライトを有効にする',
        'Enable task drag drop'        : 'タスクのドラッグ＆ドロップを有効にする',
        'Snap to grid'                 : 'グリッドにスナップ',
        'View Planned dates'           : '計画された日付を表示'
    }
};

export default LocaleHelper.publishLocale(locale);
