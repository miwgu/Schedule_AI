var {
    TimelineHistogram,
    DateHelper
} = window.bryntum.schedulerpro;
const histogram = new TimelineHistogram({
    appendTo  : 'container',
    startDate : new Date(2023, 0, 1),
    endDate   : new Date(2023, 2, 1),
    cls       : 'b-hide-maxWork b-hide-work',
    tickSize  : 35,
    columns   : [{
        type  : 'tree',
        text  : 'Name',
        field : 'name',
        width : 200
    }, {
        text  : 'Company',
        field : 'company'
    }, {
        text  : 'City',
        field : 'city'
    }],
    // configure histogram displayed series of values
    series : {
        work : {
            type : 'bar'
        },
        maxWork : {
            type : 'outline'
        },
        travelTime : {
            type : 'bar'
        }
    },
    // Custom function to get histogram data for the provided record
    async getRecordData(record) {
        const {
            count
        } = this.timeAxis;

        // get record histogram data from the server
        const response = await fetch('php/histogramdata.php?' + new URLSearchParams({
            // pass the record identifier and the time span we need data for
            recordId  : record.id,
            tickCount : count,
            startDate : DateHelper.format(this.startDate),
            endDate   : DateHelper.format(this.endDate)
        }));

        // return the responded data
        return response.json();
    },
    // Bars styling
    getBarClass(series, _rectConfig, datum) {
    // indicate bars entries having work greater than maxWork with "too-much-work" CSS class
        if (series.id === 'work' && datum.work > datum.maxWork) {
            return 'too-much-work';
        }
        return '';
    },
    features : {
        tree      : true,
        treeGroup : {
            levels : ['city', 'company']
        }
    },
    store : {
        autoLoad : true,
        readUrl  : 'php/read.php'
    },
    tbar : [{
        type : 'label',
        text : 'Group by'
    }, {
        type : 'groupbar'
    }, {
        type : 'label',
        text : 'Show series'
    }, {
        type     : 'buttongroup',
        cls      : 'hide-buttons',
        defaults : {
            toggleable : true
        },
        items : [{
            text    : 'Work',
            tooltip : 'Display Work bars',
            cls     : 'work-button',
            icon    : 'b-fa-chart-simple',
            onAction() {
                // We toggle the series visibility by setting a special class on the
                // histogram component element.
                // Check "resource/app.css" file to see how it's done.
                histogram.element.classList.toggle('b-hide-work');
            }
        }, {
            text    : 'Max Work',
            tooltip : 'Display Max Work outline',
            cls     : 'maxWork-button',
            icon    : 'b-fa-chart-line',
            onAction() {
                histogram.element.classList.toggle('b-hide-maxWork');
            }
        }, {
            text    : 'Travel Time',
            pressed : true,
            tooltip : 'Display Travel Time bars',
            cls     : 'travelTime-button',
            icon    : 'b-fa-chart-simple',
            onAction() {
                histogram.element.classList.toggle('b-hide-travelTime');
            }
        }]
    }, '->', {
        text    : 'Reload',
        tooltip : 'Load new random data',
        icon    : 'b-fa-recycle',
        color   : 'b-red',
        onAction() {
            histogram.store.load();
        }
    }]
});