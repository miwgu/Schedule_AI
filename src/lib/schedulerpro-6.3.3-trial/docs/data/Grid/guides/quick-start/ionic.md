# Getting Started with Bryntum Grid in Ionic

## Try Ionic demos

Bryntum Grid is delivered with a variety of Ionic demo applications showing its functionality.
All demo applications have been verified to be compatible with Node.js 20.

<div class="b-card-group-2">
<a href="https://bryntum.com/products/grid/examples/#Integration" class="b-card"><i class="fas b-fa-globe"></i>View online Ionic demos</a>
<a href="#Grid/guides/integration/ionic/guide.md#build-and-run-local-demos" class="b-card"><i class="b-logo b-ionic"></i>Build and run Ionic demos</a>
</div>

## Create Ionic application

To get started, the broad steps are as follows:

1. [Access to npm registry](##access-to-npm-registry)
2. [Create Application](##create-application)
3. [Install component](##install-component)
4. [Add component to Application](##add-component-to-application)
5. [Apply styles](##apply-styles)
6. [Run Application](##run-application)

The application we are about to build together is pretty simple, and will look like the illustration below:

<img src="Grid/getting-started-result.png" class="b-screenshot" alt="Getting Started on Bryntum Grid with Ionic Result">

## Access to npm registry

Bryntum components are commercial products, hosted in a private Bryntum repository.
Please refer to our [Npm Repository Guide](#Grid/guides/npm-repository.md) for a complete access information.

## Create Application

Similarly to all the examples shipped with the distribution, we will be using [Ionic CLI](https://cli.angular.io/) to
build Ionic applications.

Type the following command to install Ionic CLI:

```shell
npm install -g @ionic/cli
```

We will then create a basic application with Ionic CLI:

```shell
ionic start IonicApp blank --type=angular
```

Here we are using `blank`, the most simple starter template for the app.

Ionic can use Angular, React, or Vue. By `choosing --type=angular`, we tell Ionic CLI to generate an application using
Angular.

Feel free to select other defaults if needed following instruction provided in
the [Ionic Framework Documentation](https://ionicframework.com)

<div class="note">

Please feel free to change <code>IonicApp</code> to your preferred application name

</div>

You can then move to your application folder

```shell
cd IonicApp
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
npm install @bryntum/grid@npm:@bryntum/grid-trial@6.3.3 @bryntum/grid-angular@6.3.3
```

</div>
<div>

```shell
npm install @bryntum/grid@6.3.3 @bryntum/grid-angular@6.3.3
```
</div>
</div>

## Add component to Application

Edit the **src/app/home/home.module.ts** file and add the following:

```typescript
import { BryntumGridModule } from '@bryntum/grid-angular';

@NgModule({
    imports : [
        BryntumGridModule
    ]
})
```

Then, edit the **src/app/home/home.page.ts** file and replace the content with the following:

```typescript
import { Component, ViewChild } from '@angular/core';
import { BryntumGridComponent } from '@bryntum/grid-angular';
import { gridProps } from './home.config';

@Component({
    selector    : 'app-home',
    templateUrl : 'home.page.html',
    styleUrls   : ['home.page.scss']
})
export class HomePage {

    constructor() {}

    data = [
        { name : 'Dan Stevenson', city : 'Los Angeles' },
        { name : 'Talisha Babin', city : 'Paris' }
    ];

    gridProps = gridProps;

    @ViewChild('grid') gridComponent!: BryntumGridComponent;
}
```

**Create** a **src/app/home/home.config.ts** file with the following content:

```typescript
import { BryntumGridProps } from '@bryntum/grid-angular';

export const gridProps: BryntumGridProps = {
    columns : [
        { field : 'name', text : 'Name', width : 200 },
        { field : 'city', text : 'City', flex : 1 }
    ]
};
```

And finally, edit the **src/app/home/home.page.html** file and replace the content with the following:

```html
<ion-content [fullscreen] = "true">
  <div id = "container">
    <bryntum-grid
        #grid
        [data] = "data"
        [columns] = "gridProps.columns!"
    ></bryntum-grid>
  </div>
</ion-content>
```

## Apply styles

### Stylesheet

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

Edit the **src/global.scss** and **add** the following:

```scss
@import "~@bryntum/grid/grid.stockholm.css";
```

### Sizing the component

By Default, the Component is configured to take `100%` of the parent DOM element with a min-height of `10em`.

For your application to show the Component with the appropriate size, you can for example make parent components take
the full height of the screen.

In your **src/app/home/home.page.scss** file, **add** the following:

```scss
#container {
    height : 100vh;
}
```

There are many other solutions depending on the situation. Feel free to adapt the code above regarding your application
layout. For more information on the topic, see this guide
[Sizing the component](https://bryntum.com/products/grid/docs/guide/Grid/basics/sizing).

## Run Application

From your terminal:

```shell
ionic serve
```

Your application is now available under [http://localhost:8100](http://localhost:8100), and your browser should
automatically open it for you.

## Troubleshooting

Please refer to this [Troubleshooting guide](#Grid/guides/integration/ionic/troubleshooting.md).

## What to do next?

### Further on integration with Ionic

Do you want to know more about how Bryntum Grid integrates with Ionic and starts to customize your application? We
provide you with a [complete Ionic guide here](#Grid/guides/integration/ionic/guide.md).

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#Grid/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-10-06 7:47:08</p>