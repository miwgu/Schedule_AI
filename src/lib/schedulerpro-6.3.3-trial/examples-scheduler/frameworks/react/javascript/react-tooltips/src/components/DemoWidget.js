import React from 'react';

const DemoWidget = props => {

    const title = 'Click me and watch the console output';

    const style = {
        cursor : 'pointer'
    };

    const handleClick = event => {
        console.log(event);
    };

    return <div title={title} style={style} onClick={handleClick}>React Demo Widget</div>;
};

export default DemoWidget;
