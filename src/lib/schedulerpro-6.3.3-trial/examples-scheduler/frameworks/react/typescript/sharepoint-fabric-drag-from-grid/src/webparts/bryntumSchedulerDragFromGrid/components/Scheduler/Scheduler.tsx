import React from 'react';
import { ISchedulerProps } from './ISchedulerProps';
import { BryntumScheduler } from '@bryntum/schedulerpro-react-thin';

import { schedulerConfig } from './SchedulerConfig';
import { BryntumSplitter } from '@bryntum/core-react-thin';
import { UnplannedGrid } from '../UnplannedGrid/UnplannedGrid';

// import css theme
import '@bryntum/core-thin/core.stockholm.css';
import '@bryntum/grid-thin/grid.stockholm.css';
import '@bryntum/schedulerpro-thin/schedulerpro.stockholm.css';
import styles from '../App.module.scss';

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
        props.service.gridRef      = React.createRef();
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.content}>
                <BryntumScheduler
                    ref={this.props.service.schedulerRef}
                    crudManager={this.props.service.getTaskListModel()}
                    {...schedulerConfig}
                />
                <BryntumSplitter />
                <UnplannedGrid gridRef={this.props.service.gridRef} schedulerRef={this.props.service.schedulerRef} />
            </div>
        );
    }

    public shouldComponentUpdate(): boolean {
        // This component should never update
        return false;
    }
}
