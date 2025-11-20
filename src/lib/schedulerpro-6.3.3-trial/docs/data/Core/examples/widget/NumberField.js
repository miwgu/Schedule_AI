new NumberField({
    appendTo : targetElement,
    width    : 150,
    label    : 'Enter a number',
    style    : 'margin-right: .5em'
});

new NumberField({
    appendTo : targetElement,
    width    : 150,
    value    : 0.25,
    label    : 'Percentage',
    format   : '0%',
    style    : 'margin-right: .5em'
});

new NumberField({
    appendTo  : targetElement,
    clearable : true,
    width     : 150,
    label     : 'Currency, clearable',
    value     : 100,
    style     : 'margin-right: .5em',
    format    : {
        style    : 'currency',
        currency : 'USD'
    }
});

new NumberField({
    appendTo : targetElement,
    width    : 200,
    label    : 'With custom trigger',
    triggers : {
        plug : {
            cls     : 'b-fa b-fa-plug',
            tooltip : 'Do something special'
        }
    },
    style : 'margin-right: .5em'
});
