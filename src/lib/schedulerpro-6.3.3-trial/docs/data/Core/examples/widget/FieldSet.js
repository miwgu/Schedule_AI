new FieldSet({
    appendTo : targetElement,
    title    : 'The FieldSet widget',
    width    : '20em',
    items    : {
        username : {
            type  : 'text',
            label : 'Username'
        },
        password : {
            type  : 'password',
            label : 'Enter password'
        },
        repeat : {
            type  : 'password',
            label : 'Repeat password'
        },
        register : {
            type  : 'button',
            text  : 'Register',
            style : 'margin:2em 0 1em 0',
            onClick() {
                Toast.show('You clicked the button');
            }
        }
    }
});
