import Combo from '../../../lib/Core/widget/Combo.js';

// Custom combo containing icons to pick from
export default class IconCombo extends Combo {

    static type = 'iconcombo';

    static configurable = {
        cls : 'b-icon-combo',

        picker : {
            cls : 'b-icon-combo-picker'
        },

        items : [
            { value : 'b-fa b-fa-fw b-fa-arrow-up', text : 'Arrow up' },
            { value : 'b-fa b-fa-fw b-fa-asterisk', text : 'Asterisk' },
            { value : 'b-fa b-fa-fw b-fa-beer', text : 'Beer' },
            { value : 'b-fa b-fa-fw b-fa-book', text : 'Book' },
            { value : 'b-fa b-fa-fw b-fa-bug', text : 'Bug' },
            { value : 'b-fa b-fa-fw b-fa-building', text : 'Building' },
            { value : 'b-fa b-fa-fw b-fa-code', text : 'Code' },
            { value : 'b-fa b-fa-fw b-fa-coffee', text : 'Coffee' },
            { value : 'b-fa b-fa-fw b-fa-cog', text : 'Cog' },
            { value : 'b-fa b-fa-fw b-fa-database', text : 'Database' },
            { value : 'b-fa b-fa-fw b-fa-dumbbell', text : 'Dumbbell' },
            { value : 'b-fa b-fa-fw b-fa-keyboard', text : 'Keyboard' },
            { value : 'b-fa b-fa-fw b-fa-laptop', text : 'Laptop' },
            { value : 'b-fa b-fa-fw b-fa-laptop-code', text : 'Laptop code' },
            { value : 'b-fa b-fa-fw b-fa-lock', text : 'Lock' },
            { value : 'b-fa b-fa-fw b-fa-phone', text : 'Phone' },
            { value : 'b-fa b-fa-fw b-fa-plane', text : 'Plane' },
            { value : 'b-fa b-fa-fw b-fa-power-off', text : 'Power off' },
            { value : 'b-fa b-fa-fw b-fa-question', text : 'Question' },
            { value : 'b-fa b-fa-fw b-fa-life-ring', text : 'Ring' },
            { value : 'b-fa b-fa-fw b-fa-server', text : 'Server' },
            { value : 'b-fa b-fa-fw b-fa-sync', text : 'Sync' },
            { value : 'b-fa b-fa-fw b-fa-user', text : 'User' },
            { value : 'b-fa b-fa-fw b-fa-users', text : 'Users' },
            { value : 'b-fa b-fa-fw b-fa-video', text : 'Video' }
        ],

        listItemTpl : item => `<i class="${item.value}"></i>${item.text}`
    };

    syncInputFieldValue(...args) {
        this.icon.className = this.value;
        super.syncInputFieldValue(...args);
    }

    get innerElements() {
        return [
            {
                reference : 'icon',
                tag       : 'i',
                className : 'b-fa b-fa-cog'
            },
            ...super.innerElements
        ];
    }
}

// Register class to be able to create widget by type
IconCombo.initClass();
