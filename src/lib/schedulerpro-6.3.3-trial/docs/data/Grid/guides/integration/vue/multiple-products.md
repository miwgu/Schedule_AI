# Combining multiple Bryntum products

## Thin packages overview

Bryntum's products share the same data model and can be combined to provide different views of the underlying data.

When combining multiple Bryntum products in a single application using Vue, you should use thin npm packages. This
avoids runtime errors and also reduces the amount of code and CSS that has to be downloaded.

The main difference between thin packages and regular packages is that thin only contain product specific code and
styling, while regular contain code and styling for all underlying products (for example Scheduler includes Scheduler +
Grid + Core). Thin packages are valid for building a single product application.

<div class="note">

It is not possible to import several regular (non-thin) Bryntum npm packages like <code>@bryntum/grid</code> and 
<code>@bryntum/calendar</code> in one application. Doing this will lead to a runtime console error:

```shell
The Bryntum Grid bundle was loaded multiple times by the application.
```

</div>

<div class="note">

Do not mix regular (e.g., <code>@bryntum/grid</code>) and thin (e.g., <code>@bryntum/grid-thin</code>) packages in the same project.
If using thin packages, remove regular ones and follow this guide to install all
<a href="#Grid/guides/integration/vue/multiple-products.md#package-dependencies">required dependencies</a>.

</div>

## Thin packages list

Bryntum's npm repository contains thin packages for combining multiple Bryntum products in one application.

### Thin limited trial library packages:

| Package                          | Purpose                                            |
|----------------------------------|----------------------------------------------------|
| @bryntum/core-thin-trial         | Bryntum Core data and UI trial components package  |
| @bryntum/grid-thin-trial         | Bryntum Grid trial components package              |
| @bryntum/scheduler-thin-trial    | Bryntum Scheduler trial components package         |
| @bryntum/schedulerpro-thin-trial | Bryntum Scheduler Pro trial components package     |
| @bryntum/gantt-thin-trial        | Bryntum Gantt trial components package             |
| @bryntum/calendar-thin-trial     | Bryntum Calendar trial components package          |
| @bryntum/taskboard-thin-trial    | Bryntum TaskBoard trial components package         |
| @bryntum/engine-thin-trial       | Bryntum Scheduling engine trial components package |

<div class="note">

To use framework wrappers, trial packages listed above require aliasing the <code>@bryntum/*-thin-trial</code> package as
<code>@bryntum/*-thin</code> during installation, as shown below. Once installed, the provided app code samples can be used without
modification

</div>

Example for `@bryntum/grid-thin-trial` package:

```shell
npm install @bryntum/grid-thin@npm:@bryntum/grid-thin-trial@6.3.3
```

Alternatively, you can directly add entries to the `"dependencies"` section of the `package.json` project file as follows:

```json
"dependencies": {
  "@bryntum/grid-thin": "npm:@bryntum/grid-thin-trial@6.3.3",
}
```

### Thin licensed library packages:

| Package                    | Purpose                                      |
|----------------------------|----------------------------------------------|
| @bryntum/core-thin         | Bryntum Core data and UI components package  |
| @bryntum/grid-thin         | Bryntum Grid components package              |
| @bryntum/scheduler-thin    | Bryntum Scheduler components package         |
| @bryntum/schedulerpro-thin | Bryntum Scheduler Pro components package     |
| @bryntum/gantt-thin        | Bryntum Gantt components package             |
| @bryntum/calendar-thin     | Bryntum Calendar components package          |
| @bryntum/taskboard-thin    | Bryntum TaskBoard components package         |
| @bryntum/engine-thin       | Bryntum Scheduling engine components package |

### Thin Vue 3 wrapper packages:

| Package                                    | Purpose                                                   |
|--------------------------------------------|-----------------------------------------------------------|
| @bryntum/core-vue-3-thin         | Bryntum Core UI widgets Vue 3 wrappers package |
| @bryntum/grid-vue-3-thin         | Bryntum Grid Vue 3 wrapper package             |
| @bryntum/scheduler-vue-3-thin    | Bryntum Scheduler Vue 3 wrapper package        |
| @bryntum/schedulerpro-vue-3-thin | Bryntum Scheduler Pro Vue 3 wrapper package    |
| @bryntum/gantt-vue-3-thin        | Bryntum Gantt Vue 3 wrapper package            |
| @bryntum/calendar-vue-3-thin     | Bryntum Calendar Vue 3 wrapper package         |
| @bryntum/taskboard-vue-3-thin    | Bryntum TaskBoard Vue 3 wrapper package        |

## Package dependencies

Each package contains code related to the specific product only and requires installing a dependency packages for
all underlying products. This is not done automatically to give you full control over the installed packages.

List of required `dependencies` used in **package.json** for Vue 3 application:

<div class="note">

<code>@bryntum/core-vue-3-thin</code> is listed among the available framework wrapper packages, but you only need to
install it if you use Bryntum Core UI widgets in your app (e.g., <code>BryntumButton</code>, <code>BryntumCombo</code> etc.).
It’s not needed otherwise.
<br>
However, you should always install all API packages as they are required for the proper functioning.
<br><br>
Please note that you need an active license for each product to use it in the UI.

</div>

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

API packages:

```json
{
  "dependencies": {
    "@bryntum/core-thin": "6.3.3",
    "@bryntum/grid-thin": "6.3.3"
  }
}
```

Framework wrapper packages:

```json
{
  "dependencies": {
    "@bryntum/core-vue-3-thin": "6.3.3",
    "@bryntum/grid-vue-3-thin": "6.3.3"
  }
}
```

</div>
<div>

API packages:

```json
{
  "dependencies": {
    "@bryntum/core-thin": "6.3.3",
    "@bryntum/engine-thin": "6.3.3",
    "@bryntum/grid-thin": "6.3.3",
    "@bryntum/scheduler-thin": "6.3.3"
  }
}
```

Framework wrapper packages:

```json
{
  "dependencies": {
    "@bryntum/core-vue-3-thin": "6.3.3",
    "@bryntum/scheduler-vue-3-thin": "6.3.3"
  }
}
```

</div>
<div>

API packages:

```json
{
  "dependencies": {
    "@bryntum/core-thin": "6.3.3",
    "@bryntum/engine-thin": "6.3.3",
    "@bryntum/grid-thin": "6.3.3",
    "@bryntum/scheduler-thin": "6.3.3",
    "@bryntum/schedulerpro-thin": "6.3.3"
  }
}
```

Framework wrapper packages:

```json
{
  "dependencies": {
    "@bryntum/core-vue-3-thin": "6.3.3",
    "@bryntum/schedulerpro-vue-3-thin": "6.3.3"
  }
}
```

</div>
<div>

API packages:

```json
{
  "dependencies": {
    "@bryntum/core-thin": "6.3.3",
    "@bryntum/engine-thin": "6.3.3",
    "@bryntum/grid-thin": "6.3.3",
    "@bryntum/scheduler-thin": "6.3.3",
    "@bryntum/schedulerpro-thin": "6.3.3",
    "@bryntum/gantt-thin": "6.3.3"
  }
}
```

Framework wrapper packages:

```json
{
  "dependencies": {
    "@bryntum/core-vue-3-thin": "6.3.3",
    "@bryntum/gantt-vue-3-thin": "6.3.3"
  }
}
```

</div>
<div>

API packages:

```json
{
  "dependencies": {
    "@bryntum/core-thin": "6.3.3",
    "@bryntum/engine-thin": "6.3.3",
    "@bryntum/grid-thin": "6.3.3",
    "@bryntum/scheduler-thin": "6.3.3",
    "@bryntum/calendar-thin": "6.3.3"
  }
}
```

Framework wrapper packages:

```json
{
  "dependencies": {
    "@bryntum/core-vue-3-thin": "6.3.3",
    "@bryntum/calendar-vue-3-thin": "6.3.3"
  }
}
```

</div>
<div>

API packages:

```json
{
  "dependencies": {
    "@bryntum/core-thin": "6.3.3",
    "@bryntum/engine-thin": "6.3.3",
    "@bryntum/taskboard-thin": "6.3.3"
  }
}
```

Framework wrapper packages:

```json
{
  "dependencies": {
    "@bryntum/core-vue-3-thin": "6.3.3",
    "@bryntum/taskboard-vue-3-thin": "6.3.3"
  }
}
```
</div>
</div>

## Product configuration

Importing product configuration for Vue 3 application **app.config.tsx**:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```typescript
import { BryntumGridProps } from '@bryntum/grid-vue-3-thin';

const gridProps : BryntumGridProps = {
    // Grid configuration
};
```

</div>
<div>

```typescript
import { BryntumSchedulerProps } from '@bryntum/scheduler-vue-3-thin';

const schedulerProps : BryntumSchedulerProps = {
    // Scheduler configuration
};
```

</div>
<div>

```typescript
import { BryntumSchedulerProProps } from '@bryntum/schedulerpro-vue-3-thin';

const schedulerProProps : BryntumSchedulerProProps = {
    // Scheduler Pro configuration
};
```

</div>
<div>

```typescript
import { BryntumGanttProps } from '@bryntum/gantt-vue-3-thin';

const ganttProps : BryntumGanttProps = {
    // Gantt configuration
};
```

</div>
<div>

```typescript
import { BryntumCalendarProps } from '@bryntum/calendar-vue-3-thin';

const calendarProps : BryntumCalendarProps = {
    // Calendar configuration
};
```

</div>
<div>

```typescript
import { BryntumTaskBoardProps } from '@bryntum/taskboard-vue-3-thin';

const taskBoardProps : TaskBoardPropsBryntumTaskBoardProps = {
    // TaskBoard configuration
};
```
</div>
</div>

## Product localization

For a complete localization information please check [localization guide](#Grid/guides/customization/localization.md).

Localization can be done using these two methods:

### Using source code

Import product locale from a thin package in your application

Example for German `De` locale:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```javascript
import '@bryntum/grid-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/scheduler-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/schedulerpro-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/gantt-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/calendar-thin/lib/localization/De.js'
```

</div>
<div>

```javascript
import '@bryntum/taskboard-thin/lib/localization/De.js'
```
</div>
</div>

### Using prebuilt full locale

Import full UMD locale from the installed `@bryntum` package.

Example for `De` locale:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```javascript
import '@bryntum/grid-thin/lib/locales/grid.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/scheduler-thin/lib/locales/scheduler.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/schedulerpro-thin/lib/locales/schedulerpro.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/gantt-thin/lib/locales/gantt.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/calendar-thin/lib/locales/calendar.locale.De.js'
```

</div>
<div>

```javascript
import '@bryntum/taskboard-thin/lib/locales/taskboard.locale.De.js'
```
</div>
</div>

Full locale can also be added to the `index.html` file of your application.
You need to copy locales from the installed @bryntum package to a folder located at `PATH_TO_LOCALE` first, and then
add this script to the application's home page.

Example for Grid product and German `De` locale:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/grid.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/scheduler.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/schedulerpro.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/gantt.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/calendar.locale.De.js"></script>
```

</div>
<div>

```html
<script src="PATH_TO_LOCALE/locales/taskboard.locale.De.js"></script>
```
</div>
</div>

## Product styling

List of required styles for Vue application **App.scss**:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
@import '@bryntum/scheduler-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
@import '@bryntum/scheduler-thin/scheduler.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
@import '@bryntum/scheduler-thin/sass/themes/stockholm.scss';
@import '@bryntum/schedulerpro-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
@import '@bryntum/scheduler-thin/scheduler.stockholm.css';
@import '@bryntum/schedulerpro-thin/schedulerpro.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
@import '@bryntum/scheduler-thin/sass/themes/stockholm.scss';
@import '@bryntum/schedulerpro-thin/sass/themes/stockholm.scss';
@import '@bryntum/gantt-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
@import '@bryntum/scheduler-thin/scheduler.stockholm.css';
@import '@bryntum/schedulerpro-thin/schedulerpro.stockholm.css';
@import '@bryntum/gantt-thin/gantt.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/grid-thin/sass/themes/stockholm.scss';
@import '@bryntum/scheduler-thin/sass/themes/stockholm.scss';
@import '@bryntum/calendar-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/grid-thin/grid.stockholm.css';
@import '@bryntum/scheduler-thin/scheduler.stockholm.css';
@import '@bryntum/calendar-thin/calendar.stockholm.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/stockholm.scss';
@import '@bryntum/taskboard-thin/sass/themes/stockholm.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.stockholm.css';
@import '@bryntum/taskboard-thin/taskboard.stockholm.css';
```
</div>
</div>

## Product template

Example of configuring product template for Vue application **App.vue**:

<div class="docs-tabs" data-name="multiproduct">
<div>
    <a>Grid</a>
    <a>Scheduler</a>
    <a>Scheduler Pro</a>
    <a>Gantt</a>
    <a>Calendar</a>
    <a>TaskBoard</a>
</div>
<div>

```typescript
<script setup>
import { createApp, ref } from 'vue';

import { BryntumGrid } from '@bryntum/grid-vue-3-thin';
import { gridConfig } from './AppConfig';

import './App.scss';

createApp({
});
</script>

<template>
    <bryntum-grid
        v-bind="gridConfig"
    />
</template>

<style lang="scss">
</style>
```

</div>
<div>

```typescript
<script setup>
import { createApp, ref } from 'vue';

import { BryntumScheduler } from '@bryntum/scheduler-vue-3-thin';
import { schedulerConfig } from './AppConfig';

import './App.scss';

createApp({
});
</script>

<template>
    <bryntum-scheduler
        v-bind="schedulerConfig"
    />
</template>

<style lang="scss">
</style>
```

</div>
<div>

```typescript
<script setup>
import { createApp, ref } from 'vue';

import { BryntumSchedulerPro, BryntumSchedulerProProjectModel } from '@bryntum/schedulerpro-vue-3-thin';
import { schedulerProProjectConfig, schedulerProConfig } from './configs/schedulerrpo';

import './App.scss';

const schedulerProProject = ref(null);

createApp({
    setup() {
        return {
            schedulerProProject
        };
    }
});
</script>

<template>
    <bryntum-scheduler-pro-project-model
        ref="schedulerProProject"
        v-bind="schedulerProProjectConfig"
    />
    <bryntum-scheduler-pro
        :project="schedulerProProject"
        v-bind="schedulerProConfig"
    />
</template>

<style lang="scss">
</style>
```

<p>
Using <code>bryntum-scheduler-pro-project-model</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>project</code> prop, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>

</div>
<div>

```typescript
<script setup>
import { createApp, ref } from 'vue';

import { BryntumGantt, BryntumGanttProjectModel } from '@bryntum/gantt-vue-3-thin';
import { ganttConfig, ganttProjectConfig } from './AppConfig';

import './App.scss';

const ganttProject = ref(null);

createApp({
    setup() {
        return {
            ganttProject
        };
    }
});
</script>

<template>
    <bryntum-gantt-project-model
        ref="ganttProject"
        v-bind="ganttProjectConfig"
    />
    <bryntum-gantt
        :project="ganttProject"
        v-bind="ganttConfig"
    />
</template>

<style lang="scss">
</style>
```

<p>
Using <code>bryntum-gantt-pro-project-model</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>project</code> prop, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>

</div>
<div>

```typescript
<script setup>
import { createApp, ref } from 'vue';

import { BryntumCalendar } from '@bryntum/calendar-vue-3-thin';
import { calendarConfig } from './AppConfig';

import './App.scss';

createApp({
});
</script>

<template>
    <bryntum-calendar
        v-bind="calendarConfig"
    />
</template>

<style lang="scss">
</style>
```

</div>
<div>

```typescript
<script setup>
import { createApp, ref } from 'vue';

import { BryntumTaskBoard, BryntumTaskBoardProjectModel } from '@bryntum/taskboard-vue-3-thin';
import { taskBoardProjectConfig, taskBoardConfig } from './AppConfig';

import './App.scss';

const taskBoardProject = ref(null);

createApp({
    setup() {
        return {
            taskBoardProject
        };
    }
});
</script>

<template>
    <bryntum-task-board-project-model
        ref="taskBoardProject"
        v-bind="taskBoardProjectConfig"
    />
    <bryntum-task-board
        :project="taskBoardProject"
        v-bind="taskBoardConfig"
    />

</template>

<style lang="scss">
</style>
```

<p>
Using <code>bryntum-task-board-pro-project-model</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>project</code> prop, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>
</div>
</div>

## Technical demo

Technical demo showing all products in one application can be seen
[here](https://bryntum.com/products/grid/examples/frameworks/vue-3-vite/multiple-products-thin/).
You may download source there clicking on Download header icon.


<p class="last-modified">Last modified on 2025-10-06 7:47:08</p>