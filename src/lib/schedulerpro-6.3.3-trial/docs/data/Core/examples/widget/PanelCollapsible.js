CSSHelper.insertRule('.invoice-panel .b-panel-content  { gap : 1em; }');

// Description: This file is an example of the Panel widget with collapsible feature.
const invoicePanel = new Panel({
    appendTo : targetElement,
    cls      : 'invoice-panel',
    title    : 'Create Invoice',
    // Vertical layout, but we will nest hbox containers for two-column rows
    layout   : {
        type  : 'vbox',
        align : 'stretch'
    },
    revealed    : true,
    collapsible : {
        direction : 'up'
    },
    width : 600,

    items : {
        // Row 1: Invoice Number, Fiscal Year
        row1 : {
            type   : 'container',
            layout : 'hbox',
            style  : 'gap:1em',
            items  : {
                invoiceNumber : {
                    type  : 'textfield',
                    label : 'Invoice Number',
                    value : '01020304',
                    flex  : 1
                },
                fiscalYear : {
                    type     : 'combo',
                    label    : 'Fiscal Year',
                    items    : ['2022', '2023', '2024', '2025'],
                    value    : '2023',
                    flex     : 1,
                    editable : false
                }
            }
        },
        // Row 2: Status, Type
        row2 : {
            type   : 'container',
            layout : 'hbox',
            style  : 'gap:1em',
            items  : {
                invoiceStatus : {
                    type       : 'combo',
                    label      : 'Status',
                    items      : ['Draft', 'Received', 'Paid'],
                    value      : 'Received',
                    flex       : 1,
                    labelWidth : '50%',
                    editable   : false
                },
                invoiceType : {
                    type       : 'combo',
                    label      : 'Type',
                    items      : ['Invoice', 'Credit Note', 'Receipt'],
                    value      : 'Invoice',
                    flex       : 1,
                    labelWidth : '50%',
                    editable   : false
                }
            }
        },
        // Row 3: Amount, Invoice Date
        row3 : {
            type   : 'container',
            layout : 'hbox',
            style  : 'gap:1em',
            items  : {
                amount : {
                    type   : 'numberfield',
                    label  : 'Amount',
                    ref    : 'amount',
                    value  : '10,000.00',
                    flex   : 1,
                    step   : 1000,
                    format : {
                        style    : 'currency',
                        currency : 'USD'
                    },
                    labelWidth : '50%'
                },
                invoiceDate : {
                    type       : 'datefield',
                    label      : 'Invoice Date',
                    ref        : 'invoiceDate',
                    // Note: month is 0-based, so (2022, 1, 1) is 01 Feb 2022
                    value      : new Date(2022, 1, 1),
                    flex       : 1,
                    labelWidth : '50%'
                }
            }
        },
        // Row 4: Note (single column)
        invoiceNote : {
            type          : 'textarea',
            label         : 'Note',
            labelPosition : 'above',
            emptyText     : 'Add your note here...',
            height        : 100
        }
    },

    bbar : {
        items : {
            save : {
                type     : 'button',
                text     : 'Save',
                onAction : () => {
                    // Gather field values from the panel
                    const
                        wm                = invoicePanel.widgetMap,
                        data              = {
                            invoiceNumber : wm.invoiceNumber.value,
                            fiscalYear    : wm.fiscalYear.value,
                            invoiceStatus : wm.invoiceStatus.value,
                            invoiceType   : wm.invoiceType.value,
                            amount        : wm.amount.value,
                            invoiceDate   : wm.invoiceDate.value,
                            invoiceNote   : wm.invoiceNote.value
                        },
                        htmlFormattedData = Object.entries(data)
                            .map(([key, value]) => `<b>${key}:</b> ${value}<br>`)
                            .join('');

                    Toast.show(`Invoice saved!<br>${htmlFormattedData}`);
                }
            }
        }
    }
});
