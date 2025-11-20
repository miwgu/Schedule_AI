/**
 * Application
 */
import React, { Fragment, useCallback, useRef } from 'react';

import {
    BryntumScheduler,
    BryntumDemoHeader,
    BryntumButton
} from '@bryntum/schedulerpro-react';
import { StringHelper, Toast } from '@bryntum/schedulerpro';
import { schedulerConfig } from './AppConfig';
import './App.scss';

const App = props => {
    const { encodeHtml } = StringHelper;
    const scheduler = useRef(null);

    const onExportClick = useCallback(() => {
        scheduler.current.instance.features.pdfExport.showExportDialog();
    }, []);

    const eventRenderer = useCallback(({ eventRecord, resourceRecord, renderData }) => {
        const bgColor = encodeHtml(resourceRecord.bg || '');

        renderData.style = `background:${bgColor};border-color:${bgColor};color:${encodeHtml(resourceRecord.textColor)}`;
        renderData.iconCls = `b-fa b-fa-${encodeHtml(resourceRecord.icon)}`;

        return encodeHtml(eventRecord.name);
    }, [encodeHtml]);

    return (
        <Fragment>
            {/* BryntumDemoHeader component is used for Bryntum example styling only and can be removed */}
            <BryntumDemoHeader />
            <div className="demo-toolbar align-right">
                <BryntumButton
                    text="Export"
                    cls="b-deep-orange b-raised"
                    onClick={onExportClick}
                />
            </div>
            <BryntumScheduler
                ref={scheduler}
                {...schedulerConfig}
                eventRenderer={eventRenderer}
            />
        </Fragment>
    );
};

export default App;


Toast.show({
    color : 'b-orange',
    html  : `
    <p style="color:white;">This demo was created with <strong>Create React App</strong> (CRA).</p>
    <p style="color:white;">Since CRA is deprecated, we recommend you to check out our React Vite demos.</p>
`,
    timeout : 10000
});
