const button = new Button({
    appendTo : targetElement,
    text     : 'Show drawer',
    onClick() {
        const panel = this.panel || (this.panel = new Panel({
            drawer : {
                side : 'end'
            },
            title       : 'Settings',
            rootElement : document.body,
            width       : 400,
            items       : {
                name    : { type : 'text', label : 'Name' },
                email   : { type : 'text', label : 'Email' },
                phone   : { type : 'text', label : 'Phone' },
                address : { type : 'text', label : 'Address' }
            },
            bbar : {
                items : {
                    close : {
                        text    : 'Close',
                        icon    : 'b-fa b-fa-times',
                        onClick : () => {
                            panel.hide();
                        }
                    }
                }
            }
        }));

        panel.show();
    }
});
