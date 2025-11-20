# Getting started with Bryntum Scheduler in Remix

This quick start guide will show you how to build a basic Bryntum Scheduler in a Remix TypeScript application.

## Version requirements

Bryntum Scheduler requires React `16.0.0` or higher and TypeScript `3.6.0` or higher for applications written in
TypeScript and Remix version `2.15.0` requires [Node LTS version](https://nodejs.org/en).

## Getting started

To get started, we will follow these steps to create a basic Bryntum Scheduler Remix app:

1. [Setup a Remix application](##setup-a-remix-application)
2. [Install the Bryntum Scheduler component](##install-the-bryntum-scheduler-component)
3. [Create a Bryntum Scheduler component](##create-a-bryntum-scheduler-component)
4. [Run the application](##run-the-application)

The basic Bryntum Scheduler starter template that we'll build will look like this:

<img src="Scheduler/getting-started-result-react-cra.png" class="b-screenshot" alt="Getting Started on 
Bryntum Scheduler with React Result">

## Setup a Remix application

We'll use the [Remix quick start guide](https://remix.run/docs/en/main/start/quickstart) to create a Remix application.
Create a Remix application by running the following command:

```shell
npx create-remix@latest
```

This command will prompt a few questions:

```bash
- Where should we create your new project?
 my-remix-scheduler
- Initialize a new git repository?
 Yes
- Install dependencies with npm?
 Yes
```

After you've selected your answers for the prompt questions, `create-remix` will create a folder with your 
project name and install the dependencies. 

Change your current working directory to the new Remix project directory:

```shell
cd my-remix-scheduler
```

## Install the Bryntum Scheduler component

Installing the Bryntum Scheduler component using npm is the quickest way to use our products. First, get access to the
Bryntum private npm registry by following the [guide in our docs](#Scheduler/guides/npm-repository.md#repository-access).
Once you’ve logged in to the registry, install the Bryntum Scheduler component packages:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/scheduler@npm:@bryntum/scheduler-trial @bryntum/scheduler-react
```

</div>
<div>

```shell
npm install @bryntum/scheduler @bryntum/scheduler-react
```

</div>
</div>

<div class="note">
Ensure that you have configured your npm properly to get access to the Bryntum packages.
If not, refer to <a href="#Scheduler/guides/npm-repository.md">this guide</a>.
</div>

You'll also need to install `remix-utils` to do client-side rendering.

```shell
npm install remix-utils
```

### Dependencies

The application configuration may add a caret `^` as a prefix of the dependencies version in your `package.json` file.
We recommend removing the caret character as a version prefix so that you have full control over package updates.

## Create a Bryntum Scheduler component

Let's start by creating a config file called `app.config.tsx`.
Create a `components` folder in the `app` folder and add the following lines of code to it:

```typescript
import { BryntumSchedulerProps } from '@bryntum/scheduler-react';

const schedulerProps: BryntumSchedulerProps = {

    startDate        : new Date(2022, 2, 20, 6),
    endDate          : new Date(2022, 2, 20, 20),
    viewPreset       : 'hourAndDay',
    rowHeight        : 50,
    barMargin        : 5,
    multiEventSelect : true,

    columns : [
        { text : 'Name', field : 'name', width : 130 }
    ],

    crudManager : {
        transport : {
            load : {
                url : 'data.json'
            }
        },
        autoLoad : true
    }
};

export { schedulerProps };
```

This object will be used for configuration of the Bryntum Scheduler component.

Next, we'll create a Bryntum Scheduler React component. Create a file called `bryntum.client.tsx` in the
`app/components/` folder. Add the following lines of code to it:

```typescript
import { BryntumScheduler } from '@bryntum/scheduler-react';
import { schedulerProps } from './app.config';

const BryntumClient = () => {
    return (
        <BryntumScheduler
            {...SchedulerProps}
        />
    );
};

export default BryntumClient;
```

The file extension is `.client.tsx` becase Bryntum components are rendered on **client-side** only and Remix uses
`.client.tsx` for client side files.

Let's create the file for the example data. In the `public` folder, create a folder called `data`. In the `data` folder,
create a file called `data.json` and add the following JSON object to it:

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
        "name": "Elle"
      }
    ]
  },
  "events": {
    "rows": [
      {
        "id": 1,
        "resourceId": "r1",
        "startDate": "2022-03-20T10:00",
        "endDate": "2022-03-20T12:00",
        "name": "Click me",
        "iconCls": "b-fa b-fa-mouse-pointer",
        "eventColor": "pink"
      },
      {
        "id": 2,
        "resourceId": "r2",
        "startDate": "2022-03-20T12:00",
        "endDate": "2022-03-20T13:30",
        "name": "Drag me",
        "iconCls": "b-fa b-fa-arrows-alt"
      },
      {
        "id": 3,
        "resourceId": "r3",
        "startDate": "2022-03-20T14:00",
        "duration": 2,
        "durationUnit": "h",
        "name": "Double click me",
        "eventColor": "purple",
        "iconCls": "b-fa b-fa-mouse-pointer"
      },
      {
        "id": 4,
        "resourceId": "r4",
        "startDate": "2022-03-20T08:00",
        "endDate": "2022-03-20T11:00",
        "name": "Right click me",
        "iconCls": "b-fa b-fa-mouse-pointer"
      },
      {
        "id": 5,
        "resourceId": "r5",
        "startDate": "2022-03-20T15:00",
        "endDate": "2022-03-20T17:00",
        "name": "Resize me",
        "iconCls": "b-fa b-fa-arrows-alt-h"
      },
      {
        "id": 6,
        "resourceId": "r6",
        "startDate": "2022-03-20T16:00",
        "endDate": "2022-03-20T19:00",
        "name": "Important meeting (read-only)",
        "iconCls": "b-fa b-fa-exclamation-triangle",
        "eventColor": "red",
        "readOnly": true
      },
      {
        "id": 7,
        "resourceId": "r6",
        "startDate": "2022-03-20T06:00",
        "endDate": "2022-03-20T08:00",
        "name": "Sports event",
        "iconCls": "b-fa b-fa-basketball-ball"
      },
      {
        "id": 8,
        "resourceId": "r7",
        "startDate": "2022-03-20T09:00",
        "endDate": "2022-03-20T11:30",
        "name": "Dad's birthday!",
        "iconCls": "b-fa b-fa-gift",
        "style": "background-color : teal; font-size: 18px",
        "eventStyle": "none"
      },
      {
        "id": 9,
        "resourceId": "r8",
        "startDate": "2022-03-20T14:00",
        "endDate": "2022-03-20T16:00",
        "name": "Visit dentist",
        "iconCls": "b-fa b-fa-user-doctor",
        "eventColor": "orange"
      },
      {
        "id": 10,
        "resourceId": "r9",
        "startDate": "2022-03-20T10:00",
        "endDate": "2022-03-20T14:00",
        "name": "Car maintenance",
        "iconCls": "b-fa b-fa-car",
        "eventColor": "blue"
      },
      {
        "id": 11,
        "resourceId": "r10",
        "startDate": "2022-03-20T16:00",
        "endDate": "2022-03-20T19:00",
        "name": "Party time",
        "iconCls": "b-fa b-fa-cake-candles",
        "eventColor": "purple"
      }
    ]
  }
}
```

We need to create a wrapper component for the Bryntum Scheduler React component to render on the client only.
Replace the `app/routes/_index.tsx` file with the following code:

```typescript
import { ClientOnly } from 'remix-utils/client-only';
import BryntumClient from '~/components/bryntum.client';

export default function Index() {
    return (
        <ClientOnly fallback={<h1>Loading Bryntum Scheduler</h1>}>
            {() => <BryntumClient/>}
        </ClientOnly>
    );
}
```

Where the `ClientOnly` lets you render the components on the client-side only.

### Styling

To style the Bryntum Scheduler, create a `app/styles/` folder and add `index.css` file:

```css
body,
html {
    margin         : 0;
    display        : flex;
    flex-direction : column;
    height         : 100vh;
    font-family    : Poppins, "Open Sans", Helvetica, Arial, sans-serif;
    font-size      : 14px;
}
```

Import the `index.css` file along with one of the Bryntum theme in `Bryntum.client.tsx`:

```typescript
import "@bryntum/scheduler/scheduler.stockholm.css";
import "../styles/index.css";
```

If you want to customize the default theme, you can replace the `stockholm.css` with the sass version.
Visit [Creating a custom theme](#Gantt/guides/customization/styling.md#creating-a-custom-theme) section for more info.

You can learn more about styling your Bryntum Scheduler in our [style guide](#Scheduler/guides/customization/styling.md). 

## Run the application

Run the local development server:

```shell
npm run dev
```

You'll see the Bryntum Scheduler app at the URL [http://localhost:5173/](http://localhost:5173/).

## Troubleshooting

Please refer to this [Troubleshooting guide](#Scheduler/guides/integration/react/troubleshooting.md).

## What to do next?

### Tutorial

Now it is time to customize your application. To get familiar with the most common tasks developers perform, we have
designed an [engaging tutorial](#Scheduler/guides/tutorial/tutorial-react.md) that we are excited to see you follow.

### Further on integration with React

Do you want to know more about how Bryntum Scheduler integrates with react and start to customize your application? We
provide you with a [complete React guide here](#Scheduler/guides/integration/react/guide.md).

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#Scheduler/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-10-06 8:00:34</p>