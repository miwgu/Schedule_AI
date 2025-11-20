import { SchedulerEventModel, SchedulerEventModelConfig } from '@bryntum/schedulerpro';

type BryntumAppEventModelProps = SchedulerEventModelConfig & {
    desc: string
    eventType: string
    eventColor: string
}

export default class AppEventModel extends SchedulerEventModel {

    static $name = 'AppEventModel';

    static override get fields()  {
        return [
            'desc',
            'eventType'
        ];
    }

    desc?: string;
    eventType?: string;

    constructor(config: BryntumAppEventModelProps) {
        super(config);
    }

}
