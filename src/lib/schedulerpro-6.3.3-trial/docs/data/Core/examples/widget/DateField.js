CSSHelper.insertRule('#datePickerRenderer .b-calendar-cell .b-datepicker-cell-inner { padding:1.2em; line-height: 1.4;}');
CSSHelper.insertRule('.price { font-size: 0.7em;}');
CSSHelper.insertRule('.b-calendar-cell:not(.b-active-date) .price { opacity:0.65; }');

const prices = [
    110, 80, 0, 70, 120, 80, 90,
    90, 110, 80, 0, 0, 120, 80, 90,
    90, 130, 60, 0, 70, 80, 90
];

// uneditable datefield (user only allowed to use picker)
new DateField({
    label    : 'Not editable',
    editable : false,
    appendTo : targetElement,
    style    : 'margin-right: .5em'
});

//editable datefield (user can type)
new DateField({
    label    : 'Editable',
    editable : true,
    appendTo : targetElement,
    style    : 'margin-right: .5em',
    picker   : {
        id            : 'datePickerRenderer',
        disabledDates : ['2025-01-10'],
        date          : '2025-01-03',
        // Show some extra info in each day cell
        cellRenderer({ cell, date }) {
            const
                sameMonth = date.getMonth() === this.date.getMonth(),
                price     = prices[date.getDate()];

            cell.innerHTML += `<span class="price">${sameMonth && price ? ('$' + price) : '&nbsp;'}</span>`;

            if (sameMonth) {
                cell.dataset.btip = price ? `Flights available from: <strong>$${price}</strong>` : 'No flights available';
            }
        }
    }
});

//invalid datefield
new DateField({
    label    : 'Invalid',
    min      : new Date(2018, 4, 18),
    value    : new Date(2018, 4, 17),
    editable : true,
    appendTo : targetElement
});
