# Getting Started with Bryntum Scheduler Pro in Angular

## Try Angular demos

Bryntum Scheduler Pro is delivered with a variety of Angular demo applications showing its functionality.
All demo applications have been verified to be compatible with Node.js 20.

<div class="b-card-group-2">
<a href="https://bryntum.com/products/schedulerpro/examples/?framework=angular" class="b-card"><i class="fas b-fa-globe"></i>View online Angular demos</a>
<a href="#SchedulerPro/guides/integration/angular/guide.md#build-and-run-local-demos" class="b-card"><i class="fab b-fa-angular"></i>Build and run Angular demos</a>
</div>

## Version requirements

Minimum supported:

* Angular: `9.0.0` or higher
* TypeScript: `3.6.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)

Recommended:

* Angular: `12.0.0` or higher
* TypeScript: `4.0.0` or higher (for TypeScript application)
* Sass: `1.78.0` or higher (for application, which uses `*.scss` styles)

## Create Angular application 

To get started, the broad steps are as follows:

1. [Access to npm registry](##access-to-npm-registry)
2. [Create Application](##create-application)
3. [Install component](##install-component)
4. [Add component to Application](##add-component-to-application)
5. [Apply styles](##apply-styles)
6. [Run Application](##run-application)

The application we are about to build together is pretty simple, and will look like the illustration below:

<img src="SchedulerPro/getting-started-result.png" class="b-screenshot" alt="Getting Started on Bryntum Scheduler Pro with Angular Result">

## Access to npm registry

Bryntum components are commercial products, hosted in a private Bryntum repository.
Please refer to our [Npm Repository Guide](#SchedulerPro/guides/npm-repository.md) for complete access information. 

## Create Application

Similarly to all the examples shipped with the distribution, we will be using [Angular CLI](https://cli.angular.io/) to
build Angular applications.

Type the following command to install Angular CLI:

```shell
npm install -g @angular/cli
```

We will then create a basic application with Angular CLI using Typescript:

```shell
ng new schedulerpro-app --no-standalone --no-routing --ssr=false
```

<div class="note">

The Bryntum components are designed to render on the client side. Therefore, we are using the option <code>--ssr=false</code> to indicate that server-side rendering is not required.

</div>

When you run the command, you will be prompted to select a stylesheet format. We suggest choosing either **CSS** or **SCSS**. This guide provides information on both options.

<div class="note">

Please feel free to change <code>schedulerpro-app</code> to your preferred application name

</div>

You can then move to your application folder:

```shell
cd schedulerpro-app
```

## Install component

From your terminal, update project dependencies using the following commands:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/schedulerpro@npm:@bryntum/schedulerpro-trial@6.3.3 @bryntum/schedulerpro-angular@6.3.3
```

</div>
<div>

```shell
npm install @bryntum/schedulerpro@6.3.3 @bryntum/schedulerpro-angular@6.3.3
```
</div>
</div>

## Add component to Application

<div class="note">

Starting from Angular v20, file naming conventions have changed.
<ul>
<li><code>app.module.ts</code> → <code>app-module.ts</code></li>
<li><code>app.component.ts</code> → <code>app.ts</code></li>
<li><code>app.component.html</code> → <code>app.html</code></li>
<li><code>Class AppComponent</code> → <code>Class App</code></li>
</ul>
If you are on earlier version, please adjust the filenames and class names accordingly.

</div>

Edit the `src/app/app-module.ts` file and add the following import:

```typescript
import { BryntumSchedulerProModule } from '@bryntum/schedulerpro-angular';
```

Next, add `BryntumSchedulerProModule` to `imports[]` :

```typescript
@NgModule({
    imports : [
        BryntumSchedulerProModule
    ]
})
```

Then, edit the `src/app/app.ts` file and replace the content with the following:

```typescript
import { Component, ViewChild } from '@angular/core';
import { BryntumSchedulerProComponent, BryntumSchedulerProProjectModelComponent } from '@bryntum/schedulerpro-angular';
import { schedulerProProps, projectProps } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
      resources = [
        { id : 1, name : 'Dan Stevenson' },
        { id : 2, name : 'Talisha Babin' }
    ];

    events = [
        { id : 1, startDate : '2022-01-01', duration : 3, durationUnit : 'd', name : 'Event 1' },
        { id : 2, duration : 4, durationUnit : 'd', name : 'Event 2' }
    ];

    assignments = [
        { event : 1, resource : 1 },
        { event : 2, resource : 2 }
    ];

    dependencies = [
        { fromEvent : 1, toEvent : 2 }
    ];

    schedulerProProps = schedulerProProps;
    projectProps = projectProps;

    @ViewChild('schedulerpro') schedulerProComponent!: BryntumSchedulerProComponent;
    @ViewChild('project') projectComponent!: BryntumSchedulerProProjectModelComponent;
}
```

If you prefer using CSS styling then replace `'./app.scss'` with `'./app.css'`.

In this code sample above:

* We created a simple project with a few resources and linked events
* Assignments hold information about which events are assigned to which resources
* Due to the absence of a start date for `Event 2`, the Scheduling Engine calculates it using `Event 1` start
  date and duration

[More information...](#Scheduler/guides/data/displayingdata.md)

Create `src/app/app.config.ts` file with the following content:

```typescript
import { BryntumSchedulerProProps, BryntumSchedulerProProjectModelProps } from '@bryntum/schedulerpro-angular';

export const projectProps: BryntumSchedulerProProjectModelProps = {
    // Empty project config
};

export const schedulerProProps: BryntumSchedulerProProps = {
    columns : [
        { text : 'Name', field : 'name', width : 160 }
    ],
    startDate : new Date(2022, 0, 1),
    endDate   : new Date(2022, 0, 10)
};
```

<div class="note">

Note that the <code>startDate</code> and <code>endDate</code> configs passed to <code>schedulerProProps</code> denote the currently visible timespan.

</div>

And finally, edit the `src/app/app.html` file and replace the content with the following:

```html
<bryntum-scheduler-pro-project-model
    #project
    [resources] = "resources"
    [events] = "events"
    [assignments] = "assignments"
    [dependencies] = "dependencies"
></bryntum-scheduler-pro-project-model>

<bryntum-scheduler-pro
    #schedulerpro
    [columns] = "schedulerProProps.columns!"
    [startDate] = "schedulerProProps.startDate!"
    [endDate] = "schedulerProProps.endDate!"
    [project] = "project"
></bryntum-scheduler-pro>
```

## Apply styles

### Stylesheet

A theme is required to render the Bryntum Scheduler Pro correctly.

The following CSS files are provided with the Bryntum npm packages or in the `/build` folder of the distribution:

| File                        | Contents            |
|-----------------------------|---------------------|
| `schedulerpro.classic-dark.css`  | Classic-Dark theme  |
| `schedulerpro.classic.css`       | Classic theme       |
| `schedulerpro.classic-light.css` | Classic-Light theme |
| `schedulerpro.material.css`      | Material theme      |
| `schedulerpro.stockholm.css`     | Stockholm theme     |

You'll need to reference the selected CSS file into your project.

<div class="docs-tabs" data-name="stylesheet">
<div>
    <a>build folder</a>
    <a>npm</a>
</div>
<div>

You'll need to copy the selected CSS file into your project, let's say in the <code>src/app</code> folder.

<div class="note">

We also recommend you to copy onto your application the <code>.css.map</code> file paired with the css file you selected.

</div>

You'll also need to <strong>copy</strong> the <strong>font</strong> folder next to the CSS file.

Edit the <code>src/app/app.ts</code> file and add a reference the CSS file location as follows:

```typescript
styleUrls : ['./app.css','./schedulerpro.material.css']
```

</div>
<div>

Edit the <code>src/styles.css</code> or <code>src/styles.scss</code> and add the following: 

```scss
@import "@bryntum/schedulerpro/schedulerpro.material.css";
```

If you want to customize the default theme, you can replace the <code>material.css</code> with the sass version.
Visit <a href="#SchedulerPro/guides/customization/styling.md#creating-a-custom-theme">Creating a custom theme</a> section for more info.
</div>
</div>

<div class="note">

The Bryntum components expect styling to be available globally, if you move the styling to <code>app.css</code>, it won't work, until you add the following line of code to <code>app.ts</code>:

```typescript
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None
})
```

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

In your <code>src/styles.css</code> file, add the following:

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
app-root {
    flex : 1 1 100%;
}
```

</div>
<div>

In your <code>src/styles.scss</code> file, add the following:

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
app-root {
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
ng serve
```

Your application is now available under [http://localhost:4200](http://localhost:4200).

## Customizations

Now that your app is up and running, it is time to try to customize some of the commonly used built-in features.

### Customizing context menus

The Scheduler shows context menus when right-clicking the empty space in the schedule, as well as the event bars. In this video we walk you through how to customize the existing menu items, and adding new items. For an in-depth guide on this topic, please see this [this guide](#Scheduler/guides/customization/contextmenu.md).

[@youtube](https://www.youtube.com/embed/0seuhWrIeXc)

### Customizing the event editor

The Scheduler ships with a fully customizable event editor. In this video we walk you through the basic customizations,
such as adding new fields or modifying the default fields. For an in-depth guide on this topic, please see 
[this guide](#Scheduler/guides/customization/eventedit.md).

[@youtube](https://www.youtube.com/embed/OuSH7YFndPE)

## Troubleshooting

Please refer to this [Troubleshooting guide](#SchedulerPro/guides/integration/angular/troubleshooting.md).

## What to do next?

### Further on integration with Angular

Do you want to know more about how `Bryntum Scheduler Pro` integrates with Angular and starts to customize your application?
We provide you with a [complete Angular guide here](#SchedulerPro/guides/integration/angular/guide.md).

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#SchedulerPro/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-10-06 8:19:19</p>