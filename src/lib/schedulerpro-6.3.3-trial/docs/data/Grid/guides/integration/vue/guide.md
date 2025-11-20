<h1 class="title-with-image"><img src="Core/logo/vue.svg"
alt="Bryntum Grid supports Vue"/>Using Bryntum Grid with Vue</h1>

## Version requirements

Minimum supported:

* Vue: `3.0.0` or higher
* TypeScript: `3.6.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)

Recommended:

* Vue: `3.0.0` or higher
* TypeScript: `4.0.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)

<div class="note">

Please note that since Vue 2 has reached end of life, we no longer maintain guides or components for it. We recommend
upgrading to Vue 3 for continued support and compatibility.

</div>

## Bryntum NPM repository access

Please refer to this [guide for Bryntum NPM repository access](#Grid/guides/npm-repository.md).

## Bryntum Grid

Bryntum Grid itself is framework agnostic, but it ships with demos and wrappers to simplify using it with popular
frameworks such as Vue. The purpose of this guide is to give a basic introduction on how to use Bryntum Grid with Vue.

## View online demos

Bryntum Grid Vue demos can be viewed in our
[online example browser](https://bryntum.com/products/grid/examples/?framework=vue).

## Build and run local demos

Download distribution zip with demos according to this [guide](#Grid/guides/download.md#distribution).

Vue demos are located in **examples/frameworks/vue** and **examples/frameworks/vue-3** folders inside distribution zip.

Each demo contains bundled `README.md` file in demo folder with build and run instructions.

To view and run an example locally in development mode, you can use the following commands:

```shell
npm install
npm run start
```

That starts a local server accessible at [http://127.0.0.1:8080](http://127.0.0.1:8080). If you modify the example code
while running it locally it is automatically rebuilt and updated in the browser allowing you to see your changes
immediately.

The production version of an example, or your application, is built by running:

```shell
npm install
npm run build
```

## TypeScript and Typings

Bryntum bundles ship with typings for the classes for usage in TypeScript applications. You can find `grid*.d.ts`
files in the `build` folder inside the distribution zip package. The definitions also contain a special config type
which can be passed to the class constructor.

The config specific types are also accepted by multiple other properties and functions, for example
the [Store.data](#Core/data/Store#config-data) config of the `Store` which accepts type `ModelConfig[]`.

Sample code for tree store creation with `ModelConfig` and `StoreConfig` classes:

```typescript
import { Store, StoreConfig, ModelConfig } from '@bryntum/grid';

const storeConfig: StoreConfig = {
    tree : true,
    data : [
        {
            id       : 1,
            children : [
                {
                    id : 2
                }
            ] as ModelConfig[]
        }
    ] as ModelConfig[]
};

new Store(storeConfig);
```

## Wrappers

The Vue wrappers encapsulate Bryntum Grid and other Bryntum widgets in Vue components that expose
configuration options, properties, features and events. The wrapped all Bryntum UI components so they can be used the
usual Vue way.

To use native API package classes with wrappers import them from `@bryntum/grid`.

```javascript
import { Grid } from '@bryntum/grid';
```

### Installing the wrappers package

The wrappers are distributed as a separate package `@bryntum/grid-vue` that is installed according to the used
package manager. Please refer to this [guide for Bryntum NPM repository access](#Grid/guides/npm-repository.md).

### Wrappers Overview

Wrappers are Vue components which provide full access to Bryntum API widget class configs, properties, events and
features. Each Wrapper has it's own HTML tag which can be used in vue templates. This is the list of available
wrappers for Bryntum Grid Vue package:

| Wrapper tag name                                | API widget reference                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------- |
| &lt;bryntum-button/&gt;                         | [Button](#Core/widget/Button)                                         |
| &lt;bryntum-button-group/&gt;                   | [ButtonGroup](#Core/widget/ButtonGroup)                               |
| &lt;bryntum-checkbox/&gt;                       | [Checkbox](#Core/widget/Checkbox)                                     |
| &lt;bryntum-checkbox-group/&gt;                 | [CheckboxGroup](#Core/widget/CheckboxGroup)                           |
| &lt;bryntum-checklist-filter-combo/&gt;         | [ChecklistFilterCombo](#Grid/widget/ChecklistFilterCombo)             |
| &lt;bryntum-chip-view/&gt;                      | [ChipView](#Core/widget/ChipView)                                     |
| &lt;bryntum-code-editor/&gt;                    | [CodeEditor](#Core/widget/CodeEditor)                                 |
| &lt;bryntum-color-field/&gt;                    | [ColorField](#Core/widget/ColorField)                                 |
| &lt;bryntum-combo/&gt;                          | [Combo](#Core/widget/Combo)                                           |
| &lt;bryntum-container/&gt;                      | [Container](#Core/widget/Container)                                   |
| &lt;bryntum-date-field/&gt;                     | [DateField](#Core/widget/DateField)                                   |
| &lt;bryntum-date-picker/&gt;                    | [DatePicker](#Core/widget/DatePicker)                                 |
| &lt;bryntum-date-range-field/&gt;               | [DateRangeField](#Core/widget/DateRangeField)                         |
| &lt;bryntum-date-time-field/&gt;                | [DateTimeField](#Core/widget/DateTimeField)                           |
| &lt;bryntum-demo-code-editor/&gt;               | [DemoCodeEditor](#Core/widget/DemoCodeEditor)                         |
| &lt;bryntum-display-field/&gt;                  | [DisplayField](#Core/widget/DisplayField)                             |
| &lt;bryntum-duration-field/&gt;                 | [DurationField](#Core/widget/DurationField)                           |
| &lt;bryntum-editor/&gt;                         | [Editor](#Core/widget/Editor)                                         |
| &lt;bryntum-field-filter-picker/&gt;            | [FieldFilterPicker](#Core/widget/FieldFilterPicker)                   |
| &lt;bryntum-field-filter-picker-group/&gt;      | [FieldFilterPickerGroup](#Core/widget/FieldFilterPickerGroup)         |
| &lt;bryntum-field-set/&gt;                      | [FieldSet](#Core/widget/FieldSet)                                     |
| &lt;bryntum-file-field/&gt;                     | [FileField](#Core/widget/FileField)                                   |
| &lt;bryntum-file-picker/&gt;                    | [FilePicker](#Core/widget/FilePicker)                                 |
| &lt;bryntum-filter-field/&gt;                   | [FilterField](#Core/widget/FilterField)                               |
| &lt;bryntum-grid/&gt;                           | [Grid](#Grid/view/Grid)                                               |
| &lt;bryntum-grid-base/&gt;                      | [GridBase](#Grid/view/GridBase)                                       |
| &lt;bryntum-grid-chart-designer/&gt;            | [GridChartDesigner](#Grid/widget/GridChartDesigner)                   |
| &lt;bryntum-grid-field-filter-picker/&gt;       | [GridFieldFilterPicker](#Grid/widget/GridFieldFilterPicker)           |
| &lt;bryntum-grid-field-filter-picker-group/&gt; | [GridFieldFilterPickerGroup](#Grid/widget/GridFieldFilterPickerGroup) |
| &lt;bryntum-group-bar/&gt;                      | [GroupBar](#Grid/widget/GroupBar)                                     |
| &lt;bryntum-hint/&gt;                           | [Hint](#Core/widget/Hint)                                             |
| &lt;bryntum-label/&gt;                          | [Label](#Core/widget/Label)                                           |
| &lt;bryntum-list/&gt;                           | [List](#Core/widget/List)                                             |
| &lt;bryntum-menu/&gt;                           | [Menu](#Core/widget/Menu)                                             |
| &lt;bryntum-month-picker/&gt;                   | [MonthPicker](#Core/widget/MonthPicker)                               |
| &lt;bryntum-number-field/&gt;                   | [NumberField](#Core/widget/NumberField)                               |
| &lt;bryntum-paging-toolbar/&gt;                 | [PagingToolbar](#Core/widget/PagingToolbar)                           |
| &lt;bryntum-panel/&gt;                          | [Panel](#Core/widget/Panel)                                           |
| &lt;bryntum-password-field/&gt;                 | [PasswordField](#Core/widget/PasswordField)                           |
| &lt;bryntum-radio/&gt;                          | [Radio](#Core/widget/Radio)                                           |
| &lt;bryntum-radio-group/&gt;                    | [RadioGroup](#Core/widget/RadioGroup)                                 |
| &lt;bryntum-slider/&gt;                         | [Slider](#Core/widget/Slider)                                         |
| &lt;bryntum-slide-toggle/&gt;                   | [SlideToggle](#Core/widget/SlideToggle)                               |
| &lt;bryntum-splitter/&gt;                       | [Splitter](#Core/widget/Splitter)                                     |
| &lt;bryntum-tab-panel/&gt;                      | [TabPanel](#Core/widget/TabPanel)                                     |
| &lt;bryntum-text-area-field/&gt;                | [TextAreaField](#Core/widget/TextAreaField)                           |
| &lt;bryntum-text-area-picker-field/&gt;         | [TextAreaPickerField](#Core/widget/TextAreaPickerField)               |
| &lt;bryntum-text-field/&gt;                     | [TextField](#Core/widget/TextField)                                   |
| &lt;bryntum-time-field/&gt;                     | [TimeField](#Core/widget/TimeField)                                   |
| &lt;bryntum-time-picker/&gt;                    | [TimePicker](#Core/widget/TimePicker)                                 |
| &lt;bryntum-toolbar/&gt;                        | [Toolbar](#Core/widget/Toolbar)                                       |
| &lt;bryntum-tree-combo/&gt;                     | [TreeCombo](#Grid/widget/TreeCombo)                                   |
| &lt;bryntum-tree-grid/&gt;                      | [TreeGrid](#Grid/view/TreeGrid)                                       |
| &lt;bryntum-widget/&gt;                         | [Widget](#Core/widget/Widget)                                         |
| &lt;bryntum-year-picker/&gt;                    | [YearPicker](#Core/widget/YearPicker)                                 |

### Using the wrapper in your application

Now you can use the component defined in the wrapper in your application:

Sample code for `App.vue`:

```html
<template>
    <bryntum-grid
        ref="grid"
        tooltip="gridConfig.tooltip"
        v-bind="gridConfig"
        @click="onClick"
    />
</template>

<script>

import { BryntumGrid } from '@bryntum/grid-vue';
import { gridConfig } from './AppConfig';
import './components/ColorColumn.js';

export default {
    name: 'app',

    // local components
    components: {
        BryntumGrid
    },
    data() {
        return { gridConfig };
    }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
```

As shown above you can assign values and bind to Vue data with `tooltip="gridConfig.tooltip"` or `v-bind` option.
Listen to events with `@click="onClick"`, or use `v-on`.

`AppConfig.js` should contain a simple Bryntum Grid configuration.
We recommend to keep it in a separate file because it can become lengthy especially for more advanced configurations.

Sample code for `AppConfig.js`:

```javascript
export const gridConfig =  {
    tooltip : "My cool Bryntum Grid component"
    // Bryntum Grid config options
};
```

Add `sass-loader` to your `package.json` if you used SCSS.

You will also need to import CSS file for Bryntum Grid.
The ideal place for doing it is the beginning of `App.scss/App.css` that would be imported in `App.vue`:

```javascript
@import "~@bryntum/grid/grid.stockholm.css";
```

### Embedding widgets inside wrapper

Wrappers are designed to allow using Bryntum widgets as Vue components, but they themselves cannot contain other
Bryntum wrappers inside their tag. To embed Bryntum widgets inside a wrapper you should instead use the available
configuration options for the wrapper's widget. Please note that not all widgets may contain inner widgets, please refer
to the API docs to check for valid configuration options.

This example shows how to use a `Toolbar` widget inside the wrapper for Bryntum Grid:

Sample code for `AppConfig.js`:

```javascript
export const gridConfig =  {
    // Toolbar (tbar) config
    tbar: {
        items : {
            myButton : {
                type : 'button',
                text : 'My button'
            }
        }
    }
    // Bryntum Grid config options
};
```

### Syncing bound data changes

The stores used by the wrapper enable [syncDataOnLoad](#Core/data/Store#config-syncDataOnLoad) by default (Stores not
used by the wrapper have it disabled by default). It is done to make Vue column renderer update the value.
Without `syncDataOnLoad`, each time a new array of data is set to the store would apply the data as a completely new
dataset. With `syncDataOnLoad`, the new state is instead compared to the old, and the differences are applied.

<div class="note">

If you're using Vue3, avoid using <code>ref</code> to access any store (eventStore, resourceStore etc).
Vue 3 wraps the passed object in a JavaScript Proxy, which can cause unexpected issues. Use
it to get access to higher level component (Grid, Scheduler, and Gantt etc) and
then access the store.

</div>

## Using Vue components to provide content

Vue components can be used to provide a content in various places of Bryntum based applications.
The Vue components, which are intended to provide a content must be registered globally.

### Register Vue component

This is usually implemented in `main.js` before the global Vue instance is created.

```javascript
import Vue from 'vue';
import App from './App.vue';

import BlueButton from './components/BlueButton.vue';
import RedButton from './components/RedButton.vue';
import PercentBar from './components/PercentBar.vue';

// Register components globally to be accessible in renderers
Vue.component('BlueButton', BlueButton);
Vue.component('RedButton', RedButton);
Vue.component('PercentBar', PercentBar);

// etc...
```

The `BlueButton` could look like this:

```javascript
<template>
    <button class="b-button b-blue" @click="click($event)">
        <span>{{ htmlText }}</span>
    </button>
</template>

<script>
import { StringHelper } from '@bryntum/grid';

export default {
    name     : 'BlueButton',
    props    : ['record', 'clickHandler'],
    computed : {
        htmlText() {
            return StringHelper.encodeHtml(this.record.city);
        }
    },
    methods  : {
        click() {
            this.clickHandler(this.htmlText, 'b-blue');
        }
    }
};
</script>
```

## Using Vue components in cells

The wrapper implements support for using Vue Components to render the cell content. There are several steps needed to configure that in the application:

1. [Register Vue component globally](#Grid/guides/integration/vue/guide.md#register-vue-component)
2. Implement column renderer
3. Implement methods called in Vue component

You can see the online examples here:

* Vue 2: [Rendering components into cells demo (Vue 2)](https://bryntum.com/products/grid/examples/frameworks/vue/javascript/vue-renderer/dist/)
* Vue 3: [Components in cells demo (Vue 3)](https://bryntum.com/products/grid/examples/frameworks/vue-3-vite/vue-renderer/dist/)

### Implement column renderer

The column with Vue component must have a specific configuration:

```javascript
{
    text   : 'Button',
    field  : 'city',
    vue    : true,  // Required flag
    renderer({ grid: { extraData : { clickHandler } }, record }) {
        // The object needed by the wrapper to render the component
        return {
            // Required. Name of the component to render.
            // The component must be registered globally in main.js
            // https://vuejs.org/v2/guide/components.html#Dynamic-Components
            is : 'BlueButton',

            // `BlueButton` gets its text from `record`
            record,

            // Button click handler defined above
            clickHandler
        };
    }
```
`vue : true` is mandatory and `is` property of the returned object is also required.

### Implement methods called in Vue component

Should the component be interactive it needs handlers to process the user actions. The handler can be implemented
locally to the component if it does not need any outside data or it can be passed to the component from an upper level.
For example:

```javascript
<template>
    <div id="container">
        <bryntum-grid
            v-bind="gridConfig"
            :extraData="extraData"
        />
    </div>
</template>

<script>
import { BryntumGrid } from '@bryntum/grid-vue';
import { Toast } from '@bryntum/grid';
import { gridConfig } from './AppConfig';

export default {
    name       : 'App',
    components : {
        BryntumGrid
    },

    data() {
        return {
            gridConfig,
            // extraData is available as a property of the grid in renderer
            extraData : { clickHandler : this.clickHandler }
        };
    },

    methods : {
        clickHandler : (html, color) => {
            Toast.show({ html, color, timeout : 3000 });
        }
    }
};
</script>
```

## Using Vue component in widgets and tooltips

Any widget or tooltip content can be provided by a Vue component. There are several steps to implement that:

1. [Register Vue component globally](#Grid/guides/integration/vue/guide.md#register-vue-component)
2. Configure `html` property for widgets or `renderer` for tooltips

For example, to configure a cell tooltip the following code is needed:

```javascript
cellTooltipFeature : {
    tooltipRenderer({ record }) {
        return {
            vue  : true, // Required flag
            is   : 'VueTooltip',
            bind : { record }
        };
    }
},
```

The return value of the renderer must be an object minimally with `vue: true` and `is` properties. The string value of
`is` is the component name registered in `main.js`.

To configure a widget the following code can be used:

```javascript
const propHello = ref('Hello');
const propWorld = ref('world!');

function handleMyClick() {
    // ...
}

const bbar = {
    items : {
        myWidget : {
            type : 'widget',
            html : {
                vue : true, // Required flag
                is : 'VueWidget', // must be registered
                bind : { propHello, propWorld },
                on : { myclick : handleMyClick }
            }
        }
    }
}
```

`bbar` can then be bound to a Grid component. Properties `propHello` and `propWorld` are passed down to the
`VueWidget` component. Any changes of these properties are then reflected in `VueWidget`. Custom event `myclick`
is bound to the handler `handleMyClick`.

You can see the above examples in action in [this demo](https://bryntum.com/products/scheduler/examples/frameworks/vue-3-vite/widget-rendering/dist/).

## Configs, properties and events

All Bryntum Vue Wrappers support the full set of the public configs, properties and events of a component.

### Using dataChange event to synchronize data

Bryntum Grid keeps all data in its stores, which are automatically synchronized with the UI and the user actions.
Nevertheless, it is sometimes necessary for the rest of the application to be informed about data changes. For that
it is easiest to use `dataChange` event.

```javascript
<template>
    <div>
        <bryntum-grid
            ref="grid"
            v-bind="gridConfig"
            @datachange="syncData"
        />
    </div>
</template>

<script>
import { BryntumGrid } from "@bryntum/grid-vue";
import { gridConfig } from "./AppConfig.js";

export default {
    name: "App",

    components: { BryntumGrid },

    methods: {
        syncData({ store, action, records }) {
            console.log(`${store.id} changed. The action was: ${action}. Changed records: `, records);
            // Your sync data logic comes here
        }
    },

    data() {
        return { gridConfig };
    }
};
</script>
```

### Wrapper configs

* `relayStoreEvents` - set it to `true` to relay events from stores to `Grid` instance.
`dataChange` event fires twice if set to true.  Defaults to `false`.

## Features

Features are suffixed with `Feature` and act as both configs and properties for `BryntumGridComponent`.
They are mapped to the corresponding API features of the Bryntum Grid `instance`.

This is a list of all `BryntumGridComponent` features:

| Wrapper feature parameter    | API feature reference                                     |
| ---------------------------- | --------------------------------------------------------- |
| :cell-copy-paste-feature     | [CellCopyPaste](#Grid/feature/CellCopyPaste)              |
| :cell-edit-feature           | [CellEdit](#Grid/feature/CellEdit)                        |
| :cell-menu-feature           | [CellMenu](#Grid/feature/CellMenu)                        |
| :cell-tooltip-feature        | [CellTooltip](#Grid/feature/CellTooltip)                  |
| :charts-feature              | [Charts](#Grid/feature/Charts)                            |
| :column-auto-width-feature   | [ColumnAutoWidth](#Grid/feature/ColumnAutoWidth)          |
| :column-drag-toolbar-feature | [ColumnDragToolbar](#Grid/feature/ColumnDragToolbar)      |
| :column-picker-feature       | [ColumnPicker](#Grid/feature/ColumnPicker)                |
| :column-rename-feature       | [ColumnRename](#Grid/feature/ColumnRename)                |
| :column-reorder-feature      | [ColumnReorder](#Grid/feature/ColumnReorder)              |
| :column-resize-feature       | [ColumnResize](#Grid/feature/ColumnResize)                |
| :excel-exporter-feature      | [ExcelExporter](#Grid/feature/experimental/ExcelExporter) |
| :file-drop-feature           | [FileDrop](#Grid/feature/experimental/FileDrop)           |
| :fill-handle-feature         | [FillHandle](#Grid/feature/FillHandle)                    |
| :filter-feature              | [Filter](#Grid/feature/Filter)                            |
| :filter-bar-feature          | [FilterBar](#Grid/feature/FilterBar)                      |
| :group-feature               | [Group](#Grid/feature/Group)                              |
| :group-summary-feature       | [GroupSummary](#Grid/feature/GroupSummary)                |
| :header-menu-feature         | [HeaderMenu](#Grid/feature/HeaderMenu)                    |
| :lock-rows-feature           | [LockRows](#Grid/feature/LockRows)                        |
| :merge-cells-feature         | [MergeCells](#Grid/feature/MergeCells)                    |
| :pdf-export-feature          | [PdfExport](#Grid/feature/export/PdfExport)               |
| :print-feature               | [Print](#Grid/feature/export/Print)                       |
| :quick-find-feature          | [QuickFind](#Grid/feature/QuickFind)                      |
| :region-resize-feature       | [RegionResize](#Grid/feature/RegionResize)                |
| :row-copy-paste-feature      | [RowCopyPaste](#Grid/feature/RowCopyPaste)                |
| :row-edit-feature            | [RowEdit](#Grid/feature/RowEdit)                          |
| :row-expander-feature        | [RowExpander](#Grid/feature/RowExpander)                  |
| :row-reorder-feature         | [RowReorder](#Grid/feature/RowReorder)                    |
| :row-resize-feature          | [RowResize](#Grid/feature/RowResize)                      |
| :search-feature              | [Search](#Grid/feature/Search)                            |
| :sort-feature                | [Sort](#Grid/feature/Sort)                                |
| :split-feature               | [Split](#Grid/feature/Split)                              |
| :sticky-cells-feature        | [StickyCells](#Grid/feature/StickyCells)                  |
| :stripe-feature              | [Stripe](#Grid/feature/Stripe)                            |
| :summary-feature             | [Summary](#Grid/feature/Summary)                          |
| :tree-feature                | [Tree](#Grid/feature/Tree)                                |
| :tree-group-feature          | [TreeGroup](#Grid/feature/TreeGroup)                      |

### Configuring features

Most features are enabled by default, in which case you can disable them like this:

```javascript
const gridProps = {
    // other config
   cellEditFeature : false,
   groupFeature    : false,
};
```

Others require you to enable them:

```javascript
const gridProps = {
    // other config
    sortFeature     : 'name', // enabled by default but configured to be sorted by name field.
    filterFeature   : true,
};
```

To learn more about configuration, visit the feature page from the **API Feature reference** table above.

## Bryntum Grid API instance

It is important to know that the Vue `BryntumGridComponent` is **not** the native Bryntum Grid instance, it
is a wrapper or an interface between the Vue application and the Bryntum Grid itself.

All available configs, properties and features are propagated from the wrapper down to the underlying Bryntum Grid
instance, but there might be the situations when you want to access the Bryntum Grid directly. That is fully valid
approach and you are free to do it.

<div class="docs-tabs" data-name="vue">
<div>
    <a>Vue 2</a>
    <a>Vue 3</a>
</div>
<div>

<p>
If you need to access Bryntum Grid functionality not exposed by the wrapper, you can access the Bryntum Grid
instance directly. Within the <strong>Vue 2</strong> wrapper it is available under the <code>instance</code> property.

This simple example shows how you could use it:

App.vue:
</p>

```html
<template>
    <bryntum-grid ref="grid" v-bind="gridConfig" />
</template>

<script>
// Bryntum Grid and its config
import { BryntumGrid } from '@bryntum/grid-vue';
import { gridConfig } from './GridConfig';
import './components/ColorColumn.js';

// App
export default {
    name: 'App',

    // local components
    components: {
        BryntumGrid
    },

    data() {
        return { gridConfig };
    },

    methods: {
        doSomething() {
            // Reference to Bryntum Grid instance
            const gridInstance = this.$refs.grid.instance;

            // NOTE: Do not use assignment to this.gridInstance
            // Vue will wrap Bryntum Grid instance with Proxy class
            // and this will not work as expected.
            // Refer to this Vue guide for the details:
            // https://vuejs.org/guide/extras/reactivity-in-depth.html
        }
    }
};
</script>

<style lang="scss">
@import './App.scss';
</style>
```
<p>
When accessing <code>instance</code> directly, use wrapper's API widget reference docs from the list above to get available
configs and properties.
</p>

</div>
<div>

<p>
If you need to access Bryntum Grid functionality not exposed by the wrapper, you can access the Bryntum Grid instance
directly. Within the <strong>Vue 3</strong> wrapper it is available under the <code>instance.value</code> property.

This simple example shows how you could use it:

App.vue:
</p>

```html
<template>
    <bryntum-grid ref="grid" v-bind="gridConfig" />
</template>

<script>
// vue imports
import { ref, reactive } from 'vue';

// Bryntum Grid and its config
import { BryntumGrid } from '@bryntum/grid-vue-3';
import { useGridConfig } from './GridConfig';
import './components/ColorColumn.js';

// App
export default {
    name: 'App',

    // local components
    components: {
        BryntumGrid
    },

    setup() {
        const grid = ref(null);
        const gridConfig = reactive(useGridConfig());

        doSomething() {
            // Reference to Bryntum Grid instance
            const gridInstance = grid.value.instance.value;

            // NOTE: Do not use assignment to this.gridInstance
            // Vue will wrap Bryntum Grid instance with Proxy class
            // and this will not work as expected.
            // Refer to this Vue guide for the details:
            // https://vuejs.org/guide/extras/reactivity-in-depth.html
        }

        return {
            grid,
            gridConfig,
            doSomething
        };
    },
};
</script>

<style lang="scss">
@import './App.scss';
</style>
```

<p>
When accessing <code>instance</code> directly, use wrapper's API widget reference docs from the list above to get available
configs and properties.
</p>
</div>
</div>

## Troubleshooting

Please refer to this [Troubleshooting guide](#Grid/guides/integration/vue/troubleshooting.md).

## References

* Config options, features, events and methods [Bryntum Grid API docs](#api)
* Visit [Vue Framework Homepage](https://vuejs.org)
* Post your questions to [Bryntum Support Forum](https://forum.bryntum.com/)
* [Contact us](https://bryntum.com/contact/)


<p class="last-modified">Last modified on 2025-10-06 7:47:08</p>