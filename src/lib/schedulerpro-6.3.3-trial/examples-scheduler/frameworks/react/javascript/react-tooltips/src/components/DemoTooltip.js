import React from 'react';

const DemoTooltip = props => {

    const { record } = props;

    return (<div>React component: <b>{record.name}</b></div>);
};

export default DemoTooltip;
