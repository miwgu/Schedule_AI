CSSHelper.insertRule([
    '.date-range-field-demo .b-calendar-cell .b-datepicker-cell-inner { padding:1.2em; line-height: 1.4;}',
    '.temperature { font-size: 0.6em;}',
    '.b-calendar-cell:not(.b-active-date) .temperature { opacity:0.65; }',
    '.therm { padding-inline-end : .5em;; }'
]);

const picker = new DateRangeField({
    appendTo   : targetElement,
    autoExpand : true,
    cls        : 'date-range-field-demo',
    value      : ['today', 'today'],

    picker : {
        align        : 't-b50',
        cellRenderer : ({ cell, date }) => {
            const
                CF = /US|LR|MM/i.test(new Intl.Locale(navigator.languages[0]).region) ? 'F' :  'C', // US/Liberia/Myanmar
                convert = (CF === 'F') ? t => t : t => Math.floor((t - 32) * 5 / 9),
                therm = v => Math.min(4, Math.max(0, Math.floor((v - 30) / 15))),
                hiF = date % 31 + 47,  // pseudo-random temperature
                loF = hiF - date % 29 - 11,
                hi = `${convert(hiF)} °${CF}`,
                lo = `${convert(loF)} °${CF}`;

            cell.innerHTML =
                `<div>${date.getDate()}</div>` +
                `<div class="temperature">${hi}</div>`;

            cell.dataset.btip =
                `<div><span class="therm b-fa b-fa-thermometer-${therm(hiF)}"></span>High: ${hi}</div><br>` +
                `<div><span class="therm b-fa b-fa-thermometer-${therm(loF)}"></span>Low: ${lo}</div>`;
        }
    },

    listeners : {
        change : ({ value }) => {
            Toast.show(`You picked ${DateHelper.format(value[0], 'MMM DD')} to ${DateHelper.format(value[1], 'MMM DD')}`);
        }
    }
});
