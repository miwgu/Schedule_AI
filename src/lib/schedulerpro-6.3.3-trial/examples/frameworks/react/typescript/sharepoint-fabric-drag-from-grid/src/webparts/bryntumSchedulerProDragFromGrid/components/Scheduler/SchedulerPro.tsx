import React from 'react';
import { ISchedulerProProps } from './ISchedulerProps';
import { BryntumSchedulerPro } from '@bryntum/schedulerpro-react-thin';

import { schedulerProConfig } from './SchedulerProConfig';
import { BryntumSplitter } from '@bryntum/core-react-thin';
import { UnplannedGrid } from '../UnplannedGrid/UnplannedGrid';

// import css theme
import '@bryntum/core-thin/core.stockholm.css';
import '@bryntum/grid-thin/grid.stockholm.css';
import '@bryntum/scheduler-thin/scheduler.stockholm.css';
import '@bryntum/schedulerpro-thin/schedulerpro.stockholm.css';
import styles from '../App.module.scss';

/**
 * SchedulerPro React component.
 *
 * This component renders the Bryntum Scheduler and Grid widget.
 */
export default class SchedulerPro extends React.Component<ISchedulerProProps> {

    constructor(props: Readonly<ISchedulerProProps>) {
        super(props);
        // Add a reference to the scheduler engine in the service
        props.service.schedulerProRef = React.createRef();
        props.service.gridRef         = React.createRef();
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.content}>
                <BryntumSchedulerPro
                    ref={this.props.service.schedulerProRef}
                    project={this.props.service.getTaskListModel()}
                    {...schedulerProConfig}
                />
                <BryntumSplitter />
                <UnplannedGrid gridRef={this.props.service.gridRef} schedulerProRef={this.props.service.schedulerProRef} />
            </div>
        );
    }

    public shouldComponentUpdate(): boolean {
        // This component should never update
        return false;
    }
}
