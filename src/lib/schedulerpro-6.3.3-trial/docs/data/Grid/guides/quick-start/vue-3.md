# Getting Started with Bryntum Grid in Vue

## Try Vue demos

Bryntum Grid is delivered with a variety of Vue demo applications showing its functionality.
All demo applications have been verified to be compatible with Node.js 20.

<div class="b-card-group-2">
<a href="https://bryntum.com/products/grid/examples/?framework=vue" class="b-card"><i class="fas b-fa-globe"></i>View online Vue demos</a>
<a href="#Grid/guides/integration/vue/guide.md#build-and-run-local-demos" class="b-card"><i class="fab b-fa-vuejs"></i>Build and run Vue demos</a>
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

<img src="Grid/getting-started-vue.png" class="b-screenshot" alt="Getting Started on Bryntum Grid with Vue Result">

## Access to npm registry

Bryntum components are commercial products, hosted in a private Bryntum repository.
Please refer to our [Npm Repository Guide](#Grid/guides/npm-repository.md) for a complete access information.

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

## Install Bryntum Grid packages

From your terminal, update project dependencies using the following commands:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/grid@npm:@bryntum/grid-trial@6.3.3 @bryntum/grid-vue-3@6.3.3
```

</div>
<div>

```shell
npm install @bryntum/grid@6.3.3 @bryntum/grid-vue-3@6.3.3
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
import { BryntumGrid } from '@bryntum/grid-vue-3';
import { gridConfig } from './AppConfig.js';
</script>

<template>
  <bryntum-grid v-bind="gridConfig" />
</template>

<style lang="scss">
@import './App.scss';
</style>
```

</div>
<div>

```typescript
<script setup lang="ts">
import { BryntumGrid } from '@bryntum/grid-vue-3';
import { gridConfig } from './AppConfig.ts';
</script>

<template>
  <bryntum-grid v-bind="gridConfig" />
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
import { DataGenerator } from '@bryntum/grid';

export const gridConfig = {
    columns : [
        {
            text   : 'Name',
            field  : 'name',
            flex   : 2,
            editor : {
                type     : 'textfield',
                required : true
            }
        }, {
            text  : 'Age',
            field : 'age',
            width : 100,
            type  : 'number'
        }, {
            text  : 'City',
            field : 'city',
            flex  : 1
        }, {
            text  : 'Food',
            field : 'food',
            flex  : 1
        }, {
            text     : 'Color (not sortable)',
            field    : 'color',
            flex     : 1,
            sortable : false,
            renderer({ cellElement, value }) {
                // renderer that sets text color = text
                cellElement.style.color = value;
                return value;
            }
        }
    ],

    data : DataGenerator.generateData(50)
};
```

</div>
<div>

```typescript
import { DataGenerator } from '@bryntum/grid';
import { type BryntumGridProps } from '@bryntum/grid-vue-3';

export const gridConfig : BryntumGridProps = {
    columns : [
        {
            text   : 'Name',
            field  : 'name',
            flex   : 2,
            editor : {
                type     : 'textfield',
                required : true
            }
        }, {
            text  : 'Age',
            field : 'age',
            width : 100,
            type  : 'number'
        }, {
            text  : 'City',
            field : 'city',
            flex  : 1
        }, {
            text  : 'Food',
            field : 'food',
            flex  : 1
        }, {
            text     : 'Color (not sortable)',
            field    : 'color',
            flex     : 1,
            sortable : false,
            renderer({ cellElement, value } : { cellElement: HTMLElement; value: string; }) {
                // renderer that sets text color = text
                cellElement.style.color = value;
                return value;
            }
        }
    ],

    data : DataGenerator.generateData(50)
};
```
</div>
</div>

## Apply styles

### Stylesheet

Remove both `src/assets/main.css` and `src/assets/base.css`, and delete the `main.css` import from `src/main.ts`.

A theme is required to render the Bryntum Grid correctly.

The following CSS files are provided with the Bryntum npm packages or in the `/build` folder of the distribution:

| File                        | Contents            |
|-----------------------------|---------------------|
| `grid.classic-dark.css`  | Classic-Dark theme  |
| `grid.classic.css`       | Classic theme       |
| `grid.classic-light.css` | Classic-Light theme |
| `grid.material.css`      | Material theme      |
| `grid.stockholm.css`     | Stockholm theme     |

You'll need to reference the selected CSS file into your project.

<div class="docs-tabs" data-name="stylesheet">
<div>
    <a>CSS</a>
    <a>SCSS</a>
</div>
<div>

Create a <code>src/App.css</code> file and add the following:

```css
@import "@bryntum/grid/grid.stockholm.css";
```

You need to change the <code>App.scss</code> to <code>App.css</code> in the <code>App.vue</code>.

</div>
<div>

Create a <code>src/App.scss</code> file and add the following:

```scss
@import "@bryntum/grid/grid.stockholm.css";
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

## Further on integration with Vue

Do you want to know more about how Bryntum Grid integrates with Vue and starts to customize your application? We
provide you with a [complete Vue guide here](#Grid/guides/integration/vue/guide.md).

## Troubleshooting

Stuck somewhere? Please refer to this [Troubleshooting guide](#Grid/guides/integration/vue/troubleshooting.md). If
you find errors in our docs and/or onboarding guides, please report them in [our forums](https://forum.bryntum.com).

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#Grid/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-10-06 7:47:08</p>