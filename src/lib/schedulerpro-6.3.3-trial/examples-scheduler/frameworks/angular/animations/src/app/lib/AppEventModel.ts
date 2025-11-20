import { SchedulerEventModel } from '@bryntum/schedulerpro';

export default class AppEventModel extends SchedulerEventModel {

    declare desc: string;
    declare eventType: string;

    static $name = 'AppEventModel';

    static override get fields() : object[] {
        return [
            { name : 'desc' },
            { name : 'eventType' }
        ];
    }
}
