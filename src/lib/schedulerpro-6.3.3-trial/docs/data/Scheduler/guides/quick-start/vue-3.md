# Getting Started with Bryntum Scheduler in Vue

Learn how to install the Scheduler via npm and explore its numerous configuration options, such as `columns`,
`viewPreset`, `eventColor` and others. This video also demonstrates how easy it is to load resource and event data.

[@youtube](https://www.youtube.com/embed/Fw52KaIYVvA)

## Try Vue demos

Bryntum Scheduler is delivered with a variety of Vue demo applications showing its functionality.
All demo applications have been verified to be compatible with Node.js 20.

<div class="b-card-group-2">
<a href="https://bryntum.com/products/scheduler/examples/?framework=vue" class="b-card"><i class="fas b-fa-globe"></i>View online Vue demos</a>
<a href="#Scheduler/guides/integration/vue/guide.md#build-and-run-local-demos" class="b-card"><i class="fab b-fa-vuejs"></i>Build and run Vue demos</a>
</div>

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

Please note that this guide is designed for creating a Vue 3 application. Since Vue 2 has reached end of life, we no
longer maintain guides or components for Vue 2. We recommend upgrading to Vue 3 for continued support and compatibility.

</div>

## Create Vue 3 application

To get started, the broad steps are as follows:

1. [Access to npm registry](##access-to-npm-registry)
2. [Create Application](##create-application)
3. [Install component](##install-component)
4. [Add component to Application](##add-component-to-application)
5. [Apply styles](##apply-styles)
6. [Run Application](##run-application)

The application we will be building now should look like the illustration below:

<img src="Scheduler/getting-started-vue.png" class="b-screenshot" alt="Getting Started on Bryntum Scheduler with Vue Result">

## Access to npm registry

Bryntum components are commercial products, hosted in a private Bryntum repository.
Please refer to our [Npm Repository Guide](#Scheduler/guides/npm-repository.md) for a complete access information.

## Create Application

Similarly to all the examples shipped with the distribution, we will be using [Vue CLI](https://cli.vuejs.org/) to build
Vue applications.

Type the following command to install Vue CLI:

```shell
npm create vue@latest
```

This command will install and execute create-vue, the official Vue project scaffolding tool.
You will be presented with prompts for several optional features such as TypeScript and testing support:

```shell
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No / Yes✔️
✔ Add JSX Support? … No✔️ / Yes
✔ Add Vue Router for Single Page Application development? … No✔️ / Yes
✔ Add Pinia for state management? … No✔️ / Yes
✔ Add Vitest for Unit testing? … No✔️ / Yes
✔ Add an End-to-End Testing Solution? … No✔️ / Cypress / Nightwatch / Playwright
✔ Add ESLint for code quality? … No✔️ / Yes
✔ Add Prettier for code formatting? … No✔️ / Yes
✔ Add Vue DevTools 7 extension for debugging? (experimental) … No✔️ / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

We are using the above config in this quick start guide but feel free to make any changes.

You can then move to your application folder:

```shell
cd <your-project-name>
```

<div class="note">

Please note some generated files will no longer be needed in your app, you can safely remove 
<code>.src/components/HelloWorld.vue</code> and <code>src/assets/logo.png</code>. Also, remove the <code>assets</code> folder and any links to <code>.css</code>
files in the <code>main.ts</code> or <code>main.js</code>.

</div>

## Install Bryntum Scheduler packages

From your terminal, update project dependencies using the following commands:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/scheduler@npm:@bryntum/scheduler-trial@6.3.3 @bryntum/scheduler-vue-3@6.3.3
```

</div>
<div>

```shell
npm install @bryntum/scheduler@6.3.3 @bryntum/scheduler-vue-3@6.3.3
```
</div>
</div>

## Add component to Application

Edit the `src/App.vue` file and replace the content with the following:

<div class="docs-tabs" data-name="AppVue">
<div>
    <a>JavaScript</a>
    <a>TypeScript</a>
</div>
<div>

```javascript
<script setup>
import { BryntumScheduler } from '@bryntum/scheduler-vue-3';
import { schedulerConfig } from './AppConfig.js';
</script>

<template>
  <bryntum-scheduler v-bind="schedulerConfig" />
</template>

<style lang="scss">
@import './App.scss';
</style>
```

</div>
<div>

```typescript
<script setup lang="ts">
import { BryntumScheduler } from '@bryntum/scheduler-vue-3';
import { schedulerConfig } from './AppConfig.ts';
</script>

<template>
  <bryntum-scheduler v-bind="schedulerConfig" />
</template>

<style lang="scss">
@import './App.scss';
</style>
```
</div>
</div>

Create a `AppConfig` file in the `src/` directory with the following content:

<div class="docs-tabs" data-name="AppConfig">
<div>
    <a>JavaScript</a>
    <a>TypeScript</a>
</div>
<div>

```javascript
export const schedulerConfig = {
    startDate        : new Date(2024, 0, 1, 6),
    endDate          : new Date(2024, 0, 1, 20),
    viewPreset       : 'hourAndDay',
    rowHeight        : 50,
    barMargin        : 5,
    multiEventSelect : true,
    // Uncomment the following if you have images in public/users/
    // resourceImagePath : 'users/',
    columns          : [{ text : 'Name', field : 'name', width : 130 }],
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager      : {
        loadUrl : 'data/data.json',
        autoLoad : true
    }
};
```

</div>
<div>

```typescript
import { type BryntumSchedulerProps } from '@bryntum/scheduler-vue-3';

export const schedulerConfig : BryntumSchedulerProps = {
    startDate        : new Date(2024, 0, 1, 6),
    endDate          : new Date(2024, 0, 1, 20),
    viewPreset       : 'hourAndDay',
    rowHeight        : 50,
    barMargin        : 5,
    multiEventSelect : true,
    // Uncomment the following if you have images in public/users/
    // resourceImagePath : 'users/',
    columns          : [{ text : 'Name', field : 'name', width : 130 }],
    // CrudManager arranges loading and syncing of data in JSON form from/to a web service
    crudManager      : {
        loadUrl : 'data/data.json',
        autoLoad : true
    }
};
```
</div>
</div>

<div class="note">

Note that the <code>startDate</code> and <code>endDate</code> configs passed to <code>schedulerConfig</code> denote
the currently visible timespan.

</div>

## Add component data

Create a `data/data.json` in the `public` directory with the following content:
```json
{
  "success": true,
  "resources": {
    "rows": [
      {
        "id": "r1",
        "name": "Mike"
      },
      {
        "id": "r2",
        "name": "Linda"
      },
      {
        "id": "r3",
        "name": "Don"
      },
      {
        "id": "r4",
        "name": "Karen"
      },
      {
        "id": "r5",
        "name": "Doug"
      },
      {
        "id": "r6",
        "name": "Peter"
      },
      {
        "id": "r7",
        "name": "Sam"
      },
      {
        "id": "r8",
        "name": "Melissa"
      },
      {
        "id": "r9",
        "name": "John"
      },
      {
        "id": "r10",
        "name": "Ellen"
      }
    ]
  },
  "events": {
    "rows": [
      {
        "resourceId": "r1",
        "startDate": "2024-01-01T05:00:00.000Z",
        "endDate": "2024-01-01T07:00:00.000Z",
        "name": "Click me",
        "iconCls": "b-fa b-fa-mouse-pointer"
      },
      {
        "resourceId": "r2",
        "startDate": "2024-01-01T07:00:00.000Z",
        "endDate": "2024-01-01T08:30:00.000Z",
        "name": "Drag me",
        "iconCls": "b-fa b-fa-arrows-alt"
      },
      {
        "resourceId": "r3",
        "startDate": "2024-01-01T09:00:00.000Z",
        "endDate": "2024-01-01T11:00:00.000Z",
        "name": "Double click me",
        "eventColor": "purple",
        "iconCls": "b-fa b-fa-mouse-pointer"
      },
      {
        "resourceId": "r4",
        "startDate": "2024-01-01T03:00:00.000Z",
        "endDate": "2024-01-01T06:00:00.000Z",
        "name": "Right click me",
        "iconCls": "b-fa b-fa-mouse-pointer"
      },
      {
        "resourceId": "r5",
        "startDate": "2024-01-01T10:00:00.000Z",
        "endDate": "2024-01-01T12:00:00.000Z",
        "name": "Resize me",
        "iconCls": "b-fa b-fa-arrows-alt-h"
      },
      {
        "resourceId": "r6",
        "startDate": "2024-01-01T11:00:00.000Z",
        "endDate": "2024-01-01T14:00:00.000Z",
        "name": "Important meeting",
        "iconCls": "b-fa b-fa-exclamation-triangle",
        "eventColor": "red"
      },
      {
        "resourceId": "r6",
        "startDate": "2024-01-01T01:00:00.000Z",
        "endDate": "2024-01-01T03:00:00.000Z",
        "name": "Sports event",
        "iconCls": "b-fa b-fa-basketball-ball"
      },
      {
        "resourceId": "r7",
        "startDate": "2024-01-01T04:00:00.000Z",
        "endDate": "2024-01-01T06:30:00.000Z",
        "name": "Dad's birthday!",
        "iconCls": "b-fa b-fa-birthday-cake",
        "style": "background-color : teal; font-size: 18px"
      }
    ]
  }
}
```

This is the data the Bryntum Scheduler will use.

## Apply styles

### Stylesheet

Remove both `src/assets/main.css` and `src/assets/base.css`, and delete the `main.css` import from `src/main.ts`.

A theme is required to render the Bryntum Scheduler correctly.

The following CSS files are provided with the Bryntum npm packages or in the `/build` folder of the distribution:

| File                        | Contents            |
|-----------------------------|---------------------|
| `scheduler.classic-dark.css`  | Classic-Dark theme  |
| `scheduler.classic.css`       | Classic theme       |
| `scheduler.classic-light.css` | Classic-Light theme |
| `scheduler.material.css`      | Material theme      |
| `scheduler.stockholm.css`     | Stockholm theme     |

You'll need to reference the selected CSS file into your project.

<div class="docs-tabs" data-name="stylesheet">
<div>
    <a>CSS</a>
    <a>SCSS</a>
</div>
<div>

Create a <code>src/App.css</code> file and add the following:

```css
@import "@bryntum/scheduler/scheduler.stockholm.css";
```

You need to change the <code>App.scss</code> to <code>App.css</code> in the <code>App.vue</code>.

</div>
<div>

Create a <code>src/App.scss</code> file and add the following:

```scss
@import "@bryntum/scheduler/scheduler.stockholm.css";
```

For your application to support sass files, you'll need to add additional dependencies to your project.

From the terminal:

```shell
npm install sass@1.42.0 --save-dev --save-prefix=~
```

If you want to customize the default theme, you can replace the <code>stockholm.css</code> with the sass version.
Visit <a href="#Gantt/guides/customization/styling.md#creating-a-custom-theme">Creating a custom theme</a> section for more info.
</div>
</div>

### Sizing the component

By Default, the Component is configured to take `100%` of the parent DOM element with a min-height of `10em`.

For your application to show the Component with the appropriate size, you can for example make parent components take
the full height of the screen.

<div class="docs-tabs" data-name="stylesheet">
<div>
    <a>CSS</a>
    <a>SCSS</a>
</div>
<div>

In your <code>src/App.css</code> file, add the following:

```css
body,
html {
    margin         : 0;
    display        : flex;
    flex-direction : column;
    height         : 100vh;
    font-family    : sans-serif;
    font-size      : 14px;
}
```

```css
#app {
    flex : 1 1 100%;
}
```

</div>
<div>

In your <code>src/App.scss</code> file, add the following:

```css
body,
html {
    margin         : 0;
    display        : flex;
    flex-direction : column;
    height         : 100vh;
    font-family    : sans-serif;
    font-size      : 14px;
}
```

```css
#app {
    flex : 1 1 100%;
}
```
</div>
</div>

There are many other solutions depending on the situation. Feel free to adapt the code above regarding your application
layout. For more information on the topic, see this guide
[Sizing the component](https://bryntum.com/products/grid/docs/guide/Grid/basics/sizing).

## Run Application

From your terminal:

```shell
npm run dev
```

Your application is now available under [http://localhost:5173](http://localhost:5173).

## Customizations

Now that your app is up and running, it is time to try to customize some of the commonly used built-in features. 

### Customizing context menus

The Scheduler shows context menus when right-clicking the empty space in the schedule, as well as the event bars. In 
this video we walk you through how to customize the existing menu items, and adding new items. For an in-depth guide on 
this topic, please see [this guide](#Scheduler/guides/customization/contextmenu.md).

[@youtube](https://www.youtube.com/embed/nXMaClkkKdQ)

### Customizing the event editor

The Scheduler ships with a fully customizable event editor. In this video we walk you through the basic customizations,
such as adding new fields or modifying the default fields. For an in-depth guide on this topic, please see 
[this guide](#Scheduler/guides/customization/eventedit.md).

[@youtube](https://www.youtube.com/embed/o7xQ6B_Y04w)

## Full tutorial

To get familiar with the most common tasks developers perform, we have
created an [engaging tutorial](#Scheduler/guides/tutorial/tutorial-vue3.md) for you to follow.

## Further on integration with Vue

Do you want to know more about how Bryntum Scheduler integrates with Vue and starts to customize your application? We
provide you with a [complete Vue guide here](#Scheduler/guides/integration/vue/guide.md).

## Troubleshooting

Stuck somewhere? Please refer to this [Troubleshooting guide](#Scheduler/guides/integration/vue/troubleshooting.md). If
you find errors in our docs and/or onboarding guides, please report them in [our forums](https://forum.bryntum.com).

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#Scheduler/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-10-06 8:00:34</p>