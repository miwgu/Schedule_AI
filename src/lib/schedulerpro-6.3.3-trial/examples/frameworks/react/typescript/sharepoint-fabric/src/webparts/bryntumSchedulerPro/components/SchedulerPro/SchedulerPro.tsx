import { BryntumSchedulerPro } from '@bryntum/schedulerpro-react-thin';
import React from 'react';
import { ISchedulerProProps } from './ISchedulerProProps';

import { schedulerProConfig } from './SchedulerProConfig';

// import css theme
import '@bryntum/core-thin/core.stockholm.css';
import '@bryntum/grid-thin/grid.stockholm.css';
import '@bryntum/scheduler-thin/scheduler.stockholm.css';
import '@bryntum/schedulerpro-thin/schedulerpro.stockholm.css';

/**
 * SchedulerPro React component.
 *
 * This component renders the Bryntum SchedulerPro widget.
 */
export default class SchedulerPro extends React.Component<ISchedulerProProps> {

    constructor(props: Readonly<ISchedulerProProps>) {
        super(props);
        // Add a reference to the schedulerPro engine in the service
        props.service.schedulerProRef = React.createRef();
    }

    public render(): React.ReactNode {
        return <BryntumSchedulerPro
            ref={this.props.service.schedulerProRef}

            project={this.props.service.getTaskListModel()}

            {...schedulerProConfig}
        />;
    }

    public shouldComponentUpdate(): boolean {
        // This component should never update
        return false;
    }
}
