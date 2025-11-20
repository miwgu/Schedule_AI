# Combining multiple Bryntum products

## Thin packages overview

Bryntum's products share the same data model and can be combined to provide different views of the underlying data.

When combining multiple Bryntum products in a single application using Ionic + Angular, you should use thin npm
packages. This avoids runtime errors and also reduces the amount of code and CSS that has to be downloaded.

The main difference between thin packages and regular packages is that thin only contain product specific code and
styling, while regular contain code and styling for all underlying products (for example Scheduler includes Scheduler +
Grid + Core). Thin packages are valid for building a single product application.

<div class="note">

It is not possible to import several regular (non-thin) Bryntum npm packages like <code>@bryntum/grid</code> and
<code>@bryntum/calendar</code> in one application. Doing this will lead to a runtime console error:

```shell
The Bryntum Scheduler bundle was loaded multiple times by the application.
```

</div>

<div class="note">

Do not mix regular (e.g., <code>@bryntum/scheduler</code>) and thin (e.g., <code>@bryntum/scheduler-thin</code>) packages in the same project.
If using thin packages, remove regular ones and follow this guide to install all
<a href="#Scheduler/guides/integration/ionic/multiple-products.md#package-dependencies">required dependencies</a>.

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

Example for `@bryntum/scheduler-thin-trial` package:

```shell
npm install @bryntum/scheduler-thin@npm:@bryntum/scheduler-thin-trial@6.3.3
```

Alternatively, you can directly add entries to the `"dependencies"` section of the `package.json` project file as follows:

```json
"dependencies": {
  "@bryntum/scheduler-thin": "npm:@bryntum/scheduler-thin-trial@6.3.3",
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

### Thin Angular wrapper packages:

| Package                                    | Purpose                                                   |
|--------------------------------------------|-----------------------------------------------------------|
| @bryntum/core-angular-thin         | Bryntum Core UI widgets Angular wrappers package |
| @bryntum/grid-angular-thin         | Bryntum Grid Angular wrapper package             |
| @bryntum/scheduler-angular-thin    | Bryntum Scheduler Angular wrapper package        |
| @bryntum/schedulerpro-angular-thin | Bryntum Scheduler Pro Angular wrapper package    |
| @bryntum/gantt-angular-thin        | Bryntum Gantt Angular wrapper package            |
| @bryntum/calendar-angular-thin     | Bryntum Calendar Angular wrapper package         |
| @bryntum/taskboard-angular-thin    | Bryntum TaskBoard Angular wrapper package        |

## Package dependencies

Each package contains code related to the specific product only and requires installing a dependency packages for
all underlying products. This is not done automatically to give you full control over the installed packages.

List of required `dependencies` used in **package.json** for Angular application:

<div class="note">

<code>@bryntum/core-angular-thin</code> is listed among the available framework wrapper packages, but you only need to
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
    "@bryntum/core-angular-thin": "6.3.3",
    "@bryntum/grid-angular-thin": "6.3.3"
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
    "@bryntum/core-angular-thin": "6.3.3",
    "@bryntum/scheduler-angular-thin": "6.3.3"
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
    "@bryntum/core-angular-thin": "6.3.3",
    "@bryntum/schedulerpro-angular-thin": "6.3.3"
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
    "@bryntum/core-angular-thin": "6.3.3",
    "@bryntum/gantt-angular-thin": "6.3.3"
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
    "@bryntum/core-angular-thin": "6.3.3",
    "@bryntum/calendar-angular-thin": "6.3.3"
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
    "@bryntum/core-angular-thin": "6.3.3",
    "@bryntum/taskboard-angular-thin": "6.3.3"
  }
}
```
</div>
</div>

## Modules configuration

Importing package module for Ionic + Angular application **app.module.ts**:

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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BryntumCoreModule } from '@bryntum/core-angular-thin';
import { BryntumGridModule } from '@bryntum/grid-angular-thin';

import { AppComponent } from './app.component';

@NgModule({
    declarations : [
        AppComponent
    ],
    imports      : [
        BrowserModule,
        BryntumCoreModule,
        BryntumGridModule
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
```

</div>
<div>

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BryntumCoreModule } from '@bryntum/core-angular-thin';
import { BryntumGridModule } from '@bryntum/grid-angular-thin';
import { BryntumSchedulerModule } from '@bryntum/scheduler-angular-thin';

import { AppComponent } from './app.component';

@NgModule({
    declarations : [
        AppComponent
    ],
    imports      : [
        BrowserModule,
        BryntumCoreModule,
        BryntumGridModule,
        BryntumSchedulerModule
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
```

</div>
<div>

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BryntumCoreModule } from '@bryntum/core-angular-thin';
import { BryntumGridModule } from '@bryntum/grid-angular-thin';
import { BryntumSchedulerModule } from '@bryntum/scheduler-angular-thin';
import { BryntumSchedulerProModule } from '@bryntum/schedulerpro-angular-thin';

import { AppComponent } from './app.component';

@NgModule({
    declarations : [
        AppComponent
    ],
    imports      : [
        BrowserModule,
        BryntumCoreModule,
        BryntumGridModule,
        BryntumSchedulerModule,
        BryntumSchedulerProModule
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
```

</div>
<div>

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BryntumCoreModule } from '@bryntum/core-angular-thin';
import { BryntumGridModule } from '@bryntum/grid-angular-thin';
import { BryntumSchedulerModule } from '@bryntum/scheduler-angular-thin';
import { BryntumSchedulerProModule } from '@bryntum/schedulerpro-angular-thin';
import { BryntumGanttModule } from '@bryntum/gantt-angular-thin';

import { AppComponent } from './app.component';

@NgModule({
    declarations : [
        AppComponent
    ],
    imports      : [
        BrowserModule,
        BryntumCoreModule,
        BryntumGridModule,
        BryntumSchedulerModule,
        BryntumSchedulerProModule,
        BryntumGanttModule
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
```

</div>
<div>

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BryntumCoreModule } from '@bryntum/core-angular-thin';
import { BryntumGridModule } from '@bryntum/grid-angular-thin';
import { BryntumSchedulerModule } from '@bryntum/scheduler-angular-thin';
import { BryntumCalendarModule } from '@bryntum/calendar-angular-thin';

import { AppComponent } from './app.component';

@NgModule({
    declarations : [
        AppComponent
    ],
    imports      : [
        BrowserModule,
        BryntumCoreModule,
        BryntumGridModule,
        BryntumSchedulerModule,
        BryntumCalendarModule
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
```

</div>
<div>

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BryntumCoreModule } from '@bryntum/core-angular-thin';
import { BryntumTaskBoardModule } from '@bryntum/taskboard-angular-thin';

import { AppComponent } from './app.component';

@NgModule({
    declarations : [
        AppComponent
    ],
    imports      : [
        BrowserModule,
        BryntumCoreModule,
        BryntumTaskBoardModule
    ],
    providers    : [],
    bootstrap    : [AppComponent]
})
export class AppModule {}
```
</div>
</div>

## Product configuration

Importing product configuration for Angular application **app.config.tsx**:

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
import { BryntumGridProps } from '@bryntum/grid-angular-thin';

const gridProps : BryntumGridProps = {
    // Grid configuration
};
```

</div>
<div>

```typescript
import { BryntumSchedulerProps } from '@bryntum/scheduler-angular-thin';

const schedulerProps : BryntumSchedulerProps = {
    // Scheduler configuration
};
```

</div>
<div>

```typescript
import { BryntumSchedulerProProps } from '@bryntum/schedulerpro-angular-thin';

const schedulerProProps : BryntumSchedulerProProps = {
    // Scheduler Pro configuration
};
```

</div>
<div>

```typescript
import { BryntumGanttProps } from '@bryntum/gantt-angular-thin';

const ganttProps : BryntumGanttProps = {
    // Gantt configuration
};
```

</div>
<div>

```typescript
import { BryntumCalendarProps } from '@bryntum/calendar-angular-thin';

const calendarProps : BryntumCalendarProps = {
    // Calendar configuration
};
```

</div>
<div>

```typescript
import { BryntumTaskBoardProps } from '@bryntum/taskboard-angular-thin';

const taskBoardProps : TaskBoardPropsBryntumTaskBoardProps = {
    // TaskBoard configuration
};
```
</div>
</div>

## Product styling

List of required styles for Ionic + Angular application **app.component.scss**:

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
@import '@bryntum/core-thin/sass/themes/material.scss';
@import '@bryntum/grid-thin/sass/themes/material.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.material.css';
@import '@bryntum/grid-thin/grid.material.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/material.scss';
@import '@bryntum/grid-thin/sass/themes/material.scss';
@import '@bryntum/scheduler-thin/sass/themes/material.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.material.css';
@import '@bryntum/grid-thin/grid.material.css';
@import '@bryntum/scheduler-thin/scheduler.material.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/material.scss';
@import '@bryntum/grid-thin/sass/themes/material.scss';
@import '@bryntum/scheduler-thin/sass/themes/material.scss';
@import '@bryntum/schedulerpro-thin/sass/themes/material.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.material.css';
@import '@bryntum/grid-thin/grid.material.css';
@import '@bryntum/scheduler-thin/scheduler.material.css';
@import '@bryntum/schedulerpro-thin/schedulerpro.material.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/material.scss';
@import '@bryntum/grid-thin/sass/themes/material.scss';
@import '@bryntum/scheduler-thin/sass/themes/material.scss';
@import '@bryntum/schedulerpro-thin/sass/themes/material.scss';
@import '@bryntum/gantt-thin/sass/themes/material.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.material.css';
@import '@bryntum/grid-thin/grid.material.css';
@import '@bryntum/scheduler-thin/scheduler.material.css';
@import '@bryntum/schedulerpro-thin/schedulerpro.material.css';
@import '@bryntum/gantt-thin/gantt.material.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/material.scss';
@import '@bryntum/grid-thin/sass/themes/material.scss';
@import '@bryntum/scheduler-thin/sass/themes/material.scss';
@import '@bryntum/calendar-thin/sass/themes/material.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.material.css';
@import '@bryntum/grid-thin/grid.material.css';
@import '@bryntum/scheduler-thin/scheduler.material.css';
@import '@bryntum/calendar-thin/calendar.material.css';
```

</div>
<div>

<strong>SCSS:</strong>

```scss
@import '@bryntum/core-thin/sass/themes/material.scss';
@import '@bryntum/taskboard-thin/sass/themes/material.scss';
```

<strong>CSS:</strong>

```scss
@import '@bryntum/core-thin/core.material.css';
@import '@bryntum/taskboard-thin/taskboard.material.css';
```
</div>
</div>

If you import styles from `*.scss` files, please ensure that fonts from `@bryntum/core-thin` are copied to `assets`.

Add this to `angular.json` file:

```json
"assets": [
  {
    "glob": "**/*",
    "input": "node_modules/@bryntum/core-thin/fonts",
    "output": "assets/fonts"
  },
  ...
],
```

These setup is also required for styling.

Add to `app.component.scss` before importing component styles:

```scss
// This is required to setup font locations for Angular SCSS preprocessor
$fa-font-path  : '../../fonts';
$roboto-font-path : '../../../fonts';
```

## Product template

Example of configuring product template for Ionic + Angular application **app.component.html**:

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
<bryntum-grid
    #grid
    ...
></bryntum-grid>
```

</div>
<div>

```html
<bryntum-scheduler
    #scheduler
    ...
></bryntum-scheduler>
```

</div>
<div>

```html
<bryntum-scheduler-pro-project-model
    #schedulerProProject
    ...
></bryntum-scheduler-pro-project-model>
<bryntum-scheduler-pro
    #schedulerpro
    [project]="schedulerProProject"
    ...
></bryntum-scheduler-pro>
```

<p>
Using <code>bryntum-scheduler-pro-project-model</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>[project]</code> property, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>

</div>
<div>

```html
<bryntum-gantt-project-model
    #ganttProject
    ...
></bryntum-gantt-project-model>
<bryntum-gantt
    #gantt
    [project]="ganttProject!"
    ...
></bryntum-gantt>
```

<p>
Using <code>bryntum-gantt-pro-project-model</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>[project]</code> property, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>

</div>
<div>

```html
<bryntum-calendar
    #calendar
    ...
></bryntum-calendar>
```

</div>
<div>

```html
<bryntum-task-board-project-model
    #taskBoardProject
    ...
></bryntum-task-board-project-model>
<bryntum-task-board
    #taskboard
    [project]="taskBoardProject"
    ...
></bryntum-task-board>
```

<p>
Using <code>bryntum-task-board-pro-project-model</code> is not obligatory, you can also configure the project by supplying a
configuration object to the <code>[project]</code> property, or leave it out fully and supply data in other ways. Using the project
component is only required when you want to share the full project between multiple products.
</p>
</div>
</div>



<p class="last-modified">Last modified on 2025-10-06 8:00:34</p>