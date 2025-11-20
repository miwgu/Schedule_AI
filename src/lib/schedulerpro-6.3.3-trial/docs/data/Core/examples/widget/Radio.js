new Container({
    appendTo : targetElement,
    items    : {
        question : {
            tag   : 'p',
            style : 'font-weight:500',
            html  : 'Do you need jQuery in your web app?'
        },
        no : {
            type         : 'radio',
            name         : 'radios',
            text         : 'No',
            checked      : true,
            checkedValue : 'A'
        },
        probablyNot : {
            type         : 'radio',
            name         : 'radios',
            text         : 'Probably not',
            checkedValue : 'B'
        },
        unlikely : {
            type         : 'radio',
            name         : 'radios',
            text         : 'Unlikely',
            checkedValue : 'C'
        }
    }
});

new Container({
    appendTo : targetElement,
    style    : 'margin-top:2em',
    items    : {
        question : {
            tag   : 'p',
            style : 'font-weight:500',
            html  : 'Are colored radio buttons awesome?'
        },
        // green radio
        sure : {
            type         : 'radio',
            color        : 'b-green',
            checked      : true,
            name         : 'coloredradios',
            text         : 'Sure',
            checkedValue : 'A'
        },

        // blue radio
        yes : {
            type         : 'radio',
            color        : 'b-blue',
            name         : 'coloredradios',
            text         : 'Yes',
            checkedValue : 'B'
        },

        // orange radio
        kinda : {
            type         : 'radio',
            color        : 'b-orange',
            name         : 'coloredradios',
            text         : 'Kinda',
            checkedValue : 'C'
        },

        // disabled radio
        disabled : {
            type         : 'radio',
            disabled     : true,
            name         : 'coloredradios',
            text         : 'Disabled',
            checkedValue : 'D'
        }
    }
});
