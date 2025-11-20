# Getting started with Bryntum Scheduler in Next.js

This quick start guide will show you how to build a basic Bryntum Scheduler in a Next.js TypeScript application using the
[Next.js getting started guide](https://nextjs.org/docs/getting-started/installation) as a starting point.

You can also take a shortcut and start with our
[Bryntum Scheduler Next.js with TypeScript starter template](https://github.com/bryntum/bryntum-scheduler-nextjs-quick-start)
that we will create in this guide.

## Requirements

Next.js version 15 requires [Node.js 18.18](https://nodejs.org/) or higher. Bryntum Scheduler requires React `16.0.0`
or higher and TypeScript `3.6.0` or higher for applications written in TypeScript.

## Getting started

To get started, we'll follow these steps to create a basic Bryntum Scheduler Next.js app:

1. Setup a Next.js application.
2. Install the Bryntum Scheduler component.
3. Create a Bryntum Scheduler component.
4. Run the application.

The basic Bryntum Scheduler starter template that we'll build will look like this:

<img src="Scheduler/getting-started-nextjs-result.png" class="b-screenshot" alt="Getting Started on Bryntum Scheduler with Next.js Result">

## Setup a Next.js application

We will use the [Next.js getting started guide](https://nextjs.org/docs/getting-started/installation) to create a
Next.js application. Next.js recommends using `create-next-app` to create a new Next.js app as it sets everything up
for you, automatically. Create a Next.js application by running the following command:

```shell
npx create-next-app@latest
```

You'll see multiple prompts. To follow along with this guide, choose the following options:

```shell
What is your project named? bryntum-scheduler
Would you like to use TypeScript? No / Yes ✔️
Would you like to use ESLint? No / Yes ✔️
Would you like to use Tailwind CSS? No ✔️ / Yes
Would you like to use `src/` directory? No ✔️ / Yes 
Would you like to use App Router? (recommended) No / Yes ✔️
Would you like to use Turbopack for `next dev`? No ✔️ / Yes
Would you like to customize the default import alias (@/*)? No ✔️ / Yes
```

After you've selected your answers for the prompt questions, `create-next-app` will create a folder with your
project name and install the dependencies.

Change your current working directory to the new Next.js project directory:

```shell
cd bryntum-scheduler
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

### Dependencies

The application configuration may add a caret `^` as a prefix of the dependencies version in your `package.json` file.
We recommend removing the caret character as a version prefix so that you have full control over package updates.

## Create a Bryntum Scheduler component

Create a config file called `schedulerConfig.ts` in the `app/` folder. Add the following lines of code to it:

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

Create a file called `Scheduler.tsx` in the `app/components/` folder. Add the following lines of code to it:

```typescript
"use client";

import { BryntumScheduler } from "@bryntum/scheduler-react";
import { useEffect, useRef } from "react";

export default function Scheduler({ ...props }) {
  const schedulerRef = useRef<BryntumScheduler>(null);

  useEffect(() => {
    // Bryntum Scheduler instance
    const scheduler = schedulerRef?.current?.instance;
  }, []);

  return <BryntumScheduler {...props} ref={schedulerRef} />;
}
```

The Scheduler component is a React
[client component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) as it uses the
`"use client"` directive at the top of the file.

The code in the useEffect hook setup function shows you how to access the Bryntum Scheduler instance.

Let's create the file for the example data. In the `public` folder, create a file called `data.json` and add the
following JSON object to it:
```javascript
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
In the `components` folder, create a file called `SchedulerWrapper.tsx` and add the following lines of code to it:

```typescript
'use client';

import dynamic from "next/dynamic";
import { schedulerProps } from "../schedulerConfig";

const Scheduler = dynamic(() => import("./Scheduler"), {
  ssr: false,
  loading: () => {
    return (
      <div
        style={{
          display        : "flex",
          alignItems     : "center",
          justifyContent : "center",
          height         : "100vh",
        }}
      >
        <p>Loading...</p>
      </div>
    );
  },
});

const SchedulerWrapper = () => {
    return <Scheduler {...schedulerProps} />
};
export { SchedulerWrapper };
```

The Bryntum Scheduler React component is
[dynamically imported](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic)
with server-side rendering (`ssr`) set to `false`. This is done to prevent the Bryntum Scheduler React client component
from being pre-rendered on the server as Bryntum components are client-side only.

<div class="note">

If the above throws an error, replace the <code>ssr: false,</code> with <code>ssr: !!false,</code>.

</div>

Next, replace the code in the `app/page.tsx` file with the following lines of code:

```typescript
import { SchedulerWrapper } from "@/app/components/SchedulerWrapper";
import "@bryntum/scheduler/scheduler.stockholm.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SchedulerWrapper />
    </main>
  );
}
```

We imported the CSS styles for the Bryntum Scheduler Stockholm theme, which is one of five available themes.

## Styling

To style the Bryntum Scheduler so that it takes up the whole page, replace the styles in the `app/globals.css`
file with the following styles:

```css
body,
html {
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Poppins, "Open Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
}
```

In the `src/app/page.module.css` file, replace the styles with the following style for the `<main>` HTML tag:

```css
.main {
  height: 100%;
}
```

If you want to customize the default theme, you can replace the `stockholm.css` with the sass version.
Visit [Creating a custom theme](#Scheduler/guides/customization/styling.md#creating-a-custom-theme) section for more info.

You can learn more about styling your Bryntum Scheduler in our [style guide](#Scheduler/guides/customization/styling.md).

## Using ref outside Scheduler Component

To access the Bryntum Scheduler instance outside of `Scheduler.tsx`, you can use React’s `useRef` hook. Typically,
you would use `forwardRef`; however, in this case, the Scheduler component is lazy-loaded, so the ref needs to be
passed as a regular prop. To implement this, make the `SchedulerWrapper.tsx` a client component, create a ref in the
`SchedulerWrapper` function and pass it as a prop to the Scheduler:

```typescript
"use client"; // make it a client component

import { useEffect, useRef } from "react";
import { BryntumScheduler } from "@bryntum/scheduler-react";

const SchedulerWrapper = () => {
  const schedulerRef = useRef<BryntumScheduler>(null);

  useEffect(() => {
    // For testing purposes, since Scheduler is lazy loaded, schedulerRef is null initially
    setTimeout(() => {
      console.log(schedulerRef);
    }, 2000);
  });

  return <Scheduler schedulerRef={schedulerRef} {...schedulerProps} />;
};
```

In `Scheduler.tsx`, define the `Props` type:

```typescript
type Props = {
  Scheduler: React.Ref<BryntumScheduler>;
} & BryntumSchedulerProps;
```

Next, pass and apply the `schedulerRef` within the `Scheduler` function and remove any existing ref used for
`BryntumScheduler`.

```typescript
export default function Scheduler({ schedulerRef, ...props }: Props) {
  return (
    <BryntumScheduler
      {...props}
      ref={schedulerRef}
      // additional config
    />
  );
}
```

Scheduler can now be accessed from `Scheduler`, letting you access Scheduler's events and configs.

## Run the application

Run the local development server:

```shell
npm run dev
```

You'll see the Bryntum Scheduler app at the URL [http://localhost:3000](http://localhost:3000/).

<p class="last-modified">Last modified on 2025-10-06 8:00:34</p>