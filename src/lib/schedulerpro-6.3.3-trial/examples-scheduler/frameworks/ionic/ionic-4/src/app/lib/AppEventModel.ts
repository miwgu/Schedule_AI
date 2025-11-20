import { SchedulerEventModel, SchedulerEventModelConfig } from '@bryntum/schedulerpro';

type AppEventModelConfig = SchedulerEventModelConfig & {
    desc: string
    eventType: string
}

export default class AppEventModel extends SchedulerEventModel {

    declare desc: string;
    declare eventType: string;

    static $name = 'AppEventModel';

    static get fields() : object[] {
        return [
            { name : 'desc' },
            { name : 'eventType' },
            { name : 'eventColor' }
        ];
    }

    constructor(config: AppEventModelConfig) {
        super(config);
    }

}
