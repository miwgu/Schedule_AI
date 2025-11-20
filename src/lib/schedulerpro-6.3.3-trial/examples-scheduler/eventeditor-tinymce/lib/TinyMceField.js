import GlobalEvents from '../../../lib/Core/GlobalEvents.js';
import DomHelper from '../../../lib/Core/helper/DomHelper.js';
import RichTextField from '../../../lib/Core/widget/RichTextField.js';
import Delayable from '../../../lib/Core/mixin/Delayable.js';

/**
 * Implementation of a tinyMCE rich text field.
 *
 * @extends Core/widget/RichTextField
 * @classtype tinymcefield
 * @inputfield
 */
export default class TinyMceField extends RichTextField.mixin(Delayable) {
    static $name = 'TinyMceField';
    static type = 'tinymcefield';

    tinymce = null;

    //region Config

    static configurable = {
        /**
         * The tinyMCE configuration options.
         *
         * This object is a proxy for all [tinyMCE configuration options](https://www.tiny.cloud/docs/tinymce/latest/initial-configuration/)
         * that should be passed to the editor.
         *
         * Note that some of the config options have defaults for seamless integration into the Bryntum components.
         * @config {Object}
         * @default
         */
        tinyMceConfig : {},

        /**
         * [tinyMCE license key](https://www.tiny.cloud/docs/tinymce/latest/license-key/) that needs to be provided by the customer.
         * @config {String}
         * @default
         */
        licenseKey : '',

        /**
         * The operation mode of the tinyMCE editor. Set to `true` to use content editing instead of the default
         * iFrame based editor. An inline use demonstration is provided in the
         * [Grid Rich text editor example](https://bryntum.com/products/grid/examples/tinymce-editor/).
         * @config {Boolean}
         * @default
         */
        inline : false,

        /**
         * To allow resizing in vertical or both axes, set to `true` or `'both'`.
         * @config {Boolean|'both'}
         * @default
         */
        resize : false,

        /**
         * Define if the dropdown menubar should be displayed (default false).
         * @config {Boolean}
         * @default
         */
        menubar : false,

        /**
         * Focus the editor after it becomes visible. Set to false when this is undesirable in a form where a
         * different control should be initially focused.
         * @config {Boolean}
         * @default
         */
        autoFocus : true,

        /**
         * The default root block of tinyMCE is traditionally a <p>. When integrated with Bryntum components,
         * a <div> element without browser default margins is more useful.
         * @config {String} forced_root_block
         * @default
         */
        rootBlock : 'div',

        /**
         * The default input element to be replaced by the tinyMCE editor in the Bryntum environment.
         *
         * @config {DomConfig}
         * @default
         */
        inputAttributes : {
            tag : 'textarea'
        }
    };

    updateValue(value, ...args) {
        super.updateValue(value, ...args);

        // providing a value to the field causes TinyMCE value reloading
        if (!this.inputting) {
            this.editor?.load();
        }
    }

    //endregion Config

    //region Constructor/destructor

    construct(config = {}) {
        super.construct(config);

        GlobalEvents.ion({
            theme   : 'destroyEditor',
            thisObj : this
        });

        this.ion({
            paint   : 'internalOnPaint',
            thisObj : this
        });
    }

    doDestroy() {
        this.destroyEditor();

        super.doDestroy();
    }

    destroyEditor() {
        // Remove unconsumed listener if method was not called from doDestroy
        this.detachListeners('popup-hide');

        this.editor?.destroy(); // Destroy the existing instance
        this.editor = null;
    }

    // endregion Constructor/destructor

    //region Event listeners

    // Catches internal TinyMCE editor keyDown events
    onEditorKeyDown(event) {
        // pass the inner <iframe> [Escape] keyDown event through
        if (event.key === 'Escape') {
            // make a new keydown event with the same data
            const newEvent = new KeyboardEvent('keydown', {
                ...event
            });

            // trigger it on the field element
            this.element.dispatchEvent(newEvent);

            return false;
        }
    }

    onEditorNodeChange({ target }) {
        if (this.isDestroying) {
            return;
        }

        const
            oldValue = this.value,
            value    = target.getContent();

        if (value === oldValue) {
            return;
        }

        // Update the TinyMceField instance value silently when the tinyMCE content changes
        this.richText = value;
        this.triggerFieldChange({
            value,
            oldValue,
            userAction : true
        });
    }

    setupEditor(editor) {
        const me = this;

        // The 'on' below is tinyMCE's `on` method, not Bryntum's
        editor.on('NodeChange', event => me.onEditorNodeChange(event));

        if (!me.inline) {
            editor.on('keydown', event => me.onEditorKeyDown(event));
        }

        // https://github.com/bryntum/support/issues/11434
        // inline mode in grid renders wrong toolbar width on first opening
        if (me.inline) {
            editor.once('focus', () =>
                me.setTimeout(() => {
                    globalThis.dispatchEvent(new Event('resize'));
                }, 0)
            );
        }
        else {
            // https://github.com/bryntum/bryntum-suite/issues/11644
            // find the parent popup and install a one-shot listener to destroy the editor on hide
            const popup = me.up('popup', true);

            me.detachListeners('popup-hide');

            popup?.ion({
                name    : 'popup-hide',
                hide    : 'destroyEditor',
                once    : true,
                thisObj : me
            });
        }
    }

    internalOnPaint() {
        const me = this;

        // tinyMCE does not cooperate well with popups and loses its connection to associated DOM elements.
        // So we need to destroy the tinyMCE instance when the owner component hides & shows back.
        if (me.editor) {
            me.destroyEditor();
        }

        // Initialize tinyMCE when we have a target element
        globalThis.tinymce.init({
            ...me.tinyMceConfig,
            license_key       : me.licenseKey,
            auto_focus        : me.autoFocus,
            inline            : me.inline,
            forced_root_block : me.rootBlock,
            menubar           : me.menubar,
            resize            : me.resize,
            height            : me.height,
            target            : me.input,
            skin              : DomHelper.themeInfo?.name?.toLowerCase().endsWith('-dark')  ? 'oxide-dark' : 'oxide',
            ui_mode           : 'split',

            setup : editor => me.setupEditor(editor)
        }).then(allEditors => me.editor = allEditors.at(-1));
    }

    //endregion Event listeners

    // Ensure the CellEdit feature is aware of our ownership of tinyMCEs floating toolbar element
    owns(target) {
        return super.owns(target) || Boolean(target?.closest('.tox-tinymce'));
    }
}

TinyMceField.initClass();
