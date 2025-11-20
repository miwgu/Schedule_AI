import { BryntumScheduler } from '@bryntum/schedulerpro-react-thin';
import React from 'react';
import { ISchedulerProps } from './ISchedulerProps';

import { schedulerConfig } from './SchedulerConfig';

// import css theme
import '@bryntum/core-thin/core.stockholm.css';
import '@bryntum/grid-thin/grid.stockholm.css';
import '@bryntum/schedulerpro-thin/schedulerpro.stockholm.css';

/**
 * Scheduler React component.
 *
 * This component renders the Bryntum Scheduler widget.
 */
export default class Scheduler extends React.Component<ISchedulerProps> {

    constructor(props: Readonly<ISchedulerProps>) {
        super(props);
        // Add a reference to the scheduler engine in the service
        props.service.schedulerRef = React.createRef();
    }

    public render(): React.ReactNode {
        return <BryntumScheduler
            ref={this.props.service.schedulerRef}

            crudManager={this.props.service.getTaskListModel()}

            {...schedulerConfig}
        />;
    }

    public shouldComponentUpdate(): boolean {
        // This component should never update
        return false;
    }
}
