# Getting started with Bryntum SchedulerPro in Next.js

This quick start guide will show you how to build a basic Bryntum SchedulerPro in a Next.js TypeScript application using the
[Next.js getting started guide](https://nextjs.org/docs/getting-started/installation) as a starting point.

You can also take a shortcut and start with our
[Bryntum SchedulerPro Next.js with TypeScript starter template](https://github.com/bryntum/bryntum-schedulerpro-nextjs-quick-start)
that we will create in this guide.

## Requirements

Next.js version 15 requires [Node.js 18.18](https://nodejs.org/) or higher. Bryntum SchedulerPro requires React `16.0.0`
or higher and TypeScript `3.6.0` or higher for applications written in TypeScript.

## Getting started

To get started, we'll follow these steps to create a basic Bryntum SchedulerPro Next.js app:

1. Setup a Next.js application.
2. Install the Bryntum SchedulerPro component.
3. Create a Bryntum SchedulerPro component.
4. Run the application.

The basic Bryntum SchedulerPro starter template that we'll build will look like this:

<img src="SchedulerPro/getting-started-nextjs-result.png" class="b-screenshot" alt="Getting Started on Bryntum SchedulerPro with Next.js Result">

## Setup a Next.js application

We will use the [Next.js getting started guide](https://nextjs.org/docs/getting-started/installation) to create a
Next.js application. Next.js recommends using `create-next-app` to create a new Next.js app as it sets everything up
for you, automatically. Create a Next.js application by running the following command:

```shell
npx create-next-app@latest
```

You'll see multiple prompts. To follow along with this guide, choose the following options:

```shell
What is your project named? bryntum-schedulerpro
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
cd bryntum-schedulerpro
```

## Install the Bryntum SchedulerPro component

Installing the Bryntum SchedulerPro component using npm is the quickest way to use our products. First, get access to the
Bryntum private npm registry by following the [guide in our docs](#SchedulerPro/guides/npm-repository.md#repository-access).
Once you’ve logged in to the registry, install the Bryntum SchedulerPro component packages:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/schedulerpro@npm:@bryntum/schedulerpro-trial @bryntum/schedulerpro-react
```

</div>
<div>

```shell
npm install @bryntum/schedulerpro @bryntum/schedulerpro-react
```

</div>
</div>

<div class="note">
Ensure that you have configured your npm properly to get access to the Bryntum packages.
If not, refer to <a href="#SchedulerPro/guides/npm-repository.md">this guide</a>.
</div>

### Dependencies

The application configuration may add a caret `^` as a prefix of the dependencies version in your `package.json` file.
We recommend removing the caret character as a version prefix so that you have full control over package updates.

## Create a Bryntum SchedulerPro component

Create a config file called `schedulerproConfig.ts` in the `app/` folder. Add the following lines of code to it:

```typescript
import { BryntumSchedulerProProps } from '@bryntum/schedulerpro-react';

const schedulerproProps: BryntumSchedulerProProps = {

    startDate  : new Date(2022, 2, 23, 2),
    endDate    : new Date(2022, 2, 23, 18),
    rowHeight  : 60,
    barMargin  : 15,
    eventStyle : 'colored',
    viewPreset : 'hourAndDay',

    columns : [
        { type : 'resourceInfo', width : 150 }
    ],

    project : {
        autoLoad  : true,
        transport : {
            load : {
                url : 'data.json'
            }
        }
    }

};

export { schedulerproProps };
```

Create a file called `SchedulerPro.tsx` in the `app/components/` folder. Add the following lines of code to it:

```typescript
"use client";

import { BryntumSchedulerPro } from "@bryntum/schedulerpro-react";
import { useEffect, useRef } from "react";

export default function SchedulerPro({ ...props }) {
  const schedulerproRef = useRef<BryntumSchedulerPro>(null);

  useEffect(() => {
    // Bryntum SchedulerPro instance
    const schedulerpro = schedulerproRef?.current?.instance;
  }, []);

  return <BryntumSchedulerPro {...props} ref={schedulerproRef} />;
}
```

The SchedulerPro component is a React
[client component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) as it uses the
`"use client"` directive at the top of the file.

The code in the useEffect hook setup function shows you how to access the Bryntum SchedulerPro instance.

Let's create the file for the example data. In the `public` folder, create a file called `data.json` and add the
following JSON object to it:
```javascript
{
  "success": true,
  "resources": {
    "rows": [
      {
        "id": 1,
        "name": "Truck 1",
        "iconCls": "b-fa b-fa-truck",
        "image": false
      },
      {
        "id": 2,
        "name": "Truck 2",
        "iconCls": "b-fa b-fa-truck",
        "image": false
      },
      {
        "id": 3,
        "name": "Truck 3",
        "iconCls": "b-fa b-fa-truck",
        "image": false
      },
      {
        "id": 4,
        "name": "Train 1",
        "iconCls": "b-fa b-fa-train",
        "image": false
      },
      {
        "id": 5,
        "name": "Train 2",
        "iconCls": "b-fa b-fa-train",
        "image": false
      },
      {
        "id": 6,
        "name": "Pickup 1",
        "iconCls": "b-fa b-fa-truck-pickup",
        "image": false
      },
      {
        "id": 7,
        "name": "Pickup 2",
        "iconCls": "b-fa b-fa-truck-pickup",
        "image": false
      },
      {
        "id": 8,
        "name": "Pickup 3",
        "iconCls": "b-fa b-fa-truck-pickup",
        "image": false
      }
    ]
  },
  "events": {
    "rows": [
      {
        "id": 1,
        "name": "Arrive",
        "startDate": "2022-03-23T03:00",
        "duration": 2,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-arrow-right",
        "eventColor": "blue"
      },
      {
        "id": 2,
        "name": "Unload",
        "duration": 3,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-snowplow",
        "eventColor": "orange"
      },
      {
        "id": 3,
        "name": "Load",
        "duration": 2,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-truck-loading",
        "eventColor": "green"
      },
      {
        "id": 4,
        "name": "Depart",
        "duration": 1.5,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-arrow-right",
        "cls": "depart",
        "eventColor": "blue"
      },
      {
        "id": 5,
        "name": "Arrive",
        "startDate": "2022-03-23T07:00",
        "duration": 2,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-arrow-right",
        "eventColor": "blue"
      },
      {
        "id": 6,
        "name": "Unload",
        "duration": 1.5,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-snowplow",
        "eventColor": "orange"
      },
      {
        "id": 7,
        "name": "Load",
        "duration": 1.5,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-truck-loading",
        "eventColor": "green"
      },
      {
        "id": 8,
        "name": "Depart",
        "duration": 2,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-arrow-right",
        "cls": "depart",
        "eventColor": "blue"
      },
      {
        "id": 9,
        "name": "Yearly maintenance",
        "startDate": "2022-03-23T03:00",
        "duration": 5,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-wrench",
        "eventColor": "gray"
      },
      {
        "id": 10,
        "name": "Arrive",
        "startDate": "2022-03-23T01:00",
        "duration": 1.5,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-arrow-right",
        "eventColor": "blue"
      },
      {
        "id": 11,
        "name": "Unload",
        "duration": 2,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-snowplow",
        "eventColor": "orange"
      },
      {
        "id": 12,
        "name": "Load",
        "duration": 3,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-truck-loading",
        "eventColor": "green"
      },
      {
        "id": 13,
        "name": "Depart",
        "duration": 2,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-arrow-right",
        "cls": "depart",
        "eventColor": "blue"
      },
      {
        "id": 14,
        "name": "Arrive",
        "startDate": "2022-03-23T02:00",
        "duration": 5,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-arrow-right",
        "eventColor": "blue"
      },
      {
        "id": 15,
        "name": "Reload",
        "duration": 6,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-snowplow",
        "eventColor": "orange"
      },
      {
        "id": 16,
        "name": "Depart",
        "duration": 4,
        "durationUnit": "hour",
        "iconCls": "b-fa b-fa-arrow-right",
        "cls": "depart",
        "eventColor": "blue"
      }
    ]
  },
  "assignments": {
    "rows": [
      {
        "id": 1,
        "event": 1,
        "resource": 1
      },
      {
        "id": 2,
        "event": 2,
        "resource": 1
      },
      {
        "id": 3,
        "event": 3,
        "resource": 4
      },
      {
        "id": 4,
        "event": 4,
        "resource": 4
      },
      {
        "id": 5,
        "event": 5,
        "resource": 7
      },
      {
        "id": 6,
        "event": 6,
        "resource": 7
      },
      {
        "id": 7,
        "event": 7,
        "resource": 8
      },
      {
        "id": 8,
        "event": 8,
        "resource": 8
      },
      {
        "id": 9,
        "event": 9,
        "resource": 2
      },
      {
        "id": 10,
        "event": 9,
        "resource": 3
      },
      {
        "id": 11,
        "event": 9,
        "resource": 6
      },
      {
        "id": 12,
        "event": 10,
        "resource": 2
      },
      {
        "id": 13,
        "event": 11,
        "resource": 2
      },
      {
        "id": 14,
        "event": 12,
        "resource": 5
      },
      {
        "id": 15,
        "event": 13,
        "resource": 5
      },
      {
        "id": 16,
        "event": 14,
        "resource": 11
      },
      {
        "id": 17,
        "event": 15,
        "resource": 11
      },
      {
        "id": 18,
        "event": 16,
        "resource": 11
      }
    ]
  },
  "dependencies": {
    "rows": [
      {
        "id": 1,
        "fromEvent": 1,
        "toEvent": 2,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 2,
        "fromEvent": 2,
        "toEvent": 3,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 3,
        "fromEvent": 3,
        "toEvent": 4,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 4,
        "fromEvent": 5,
        "toEvent": 6,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 5,
        "fromEvent": 6,
        "toEvent": 7,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 6,
        "fromEvent": 7,
        "toEvent": 8,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 7,
        "fromEvent": 9,
        "toEvent": 10,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 8,
        "fromEvent": 10,
        "toEvent": 11,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 9,
        "fromEvent": 11,
        "toEvent": 12,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 10,
        "fromEvent": 13,
        "toEvent": 14,
        "lag": 2,
        "lagUnit": "hour"
      },
      {
        "id": 11,
        "fromEvent": 14,
        "toEvent": 15,
        "lag": 2,
        "lagUnit": "hour"
      },
      {
        "id": 12,
        "fromEvent": 17,
        "toEvent": 18,
        "lag": 1,
        "lagUnit": "hour"
      },
      {
        "id": 13,
        "fromEvent": 18,
        "toEvent": 19,
        "lag": 2,
        "lagUnit": "hour"
      },
      {
        "id": 14,
        "fromEvent": 19,
        "toEvent": 20,
        "lag": 3,
        "lagUnit": "hour"
      },
      {
        "id": 16,
        "fromEvent": 22,
        "toEvent": 23,
        "lag": 3,
        "lagUnit": "hour"
      }
    ]
  }
}
```

We need to create a wrapper component for the Bryntum SchedulerPro React component to render on the client only.
In the `components` folder, create a file called `SchedulerProWrapper.tsx` and add the following lines of code to it:

```typescript
'use client';

import dynamic from "next/dynamic";
import { schedulerproProps } from "../schedulerproConfig";

const SchedulerPro = dynamic(() => import("./SchedulerPro"), {
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

const SchedulerProWrapper = () => {
    return <SchedulerPro {...schedulerproProps} />
};
export { SchedulerProWrapper };
```

The Bryntum SchedulerPro React component is
[dynamically imported](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic)
with server-side rendering (`ssr`) set to `false`. This is done to prevent the Bryntum SchedulerPro React client component
from being pre-rendered on the server as Bryntum components are client-side only.

<div class="note">

If the above throws an error, replace the <code>ssr: false,</code> with <code>ssr: !!false,</code>.

</div>

Next, replace the code in the `app/page.tsx` file with the following lines of code:

```typescript
import { SchedulerProWrapper } from "@/app/components/SchedulerProWrapper";
import "@bryntum/schedulerpro/schedulerpro.stockholm.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <SchedulerProWrapper />
    </main>
  );
}
```

We imported the CSS styles for the Bryntum SchedulerPro Stockholm theme, which is one of five available themes.

## Styling

To style the Bryntum SchedulerPro so that it takes up the whole page, replace the styles in the `app/globals.css`
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
Visit [Creating a custom theme](#SchedulerPro/guides/customization/styling.md#creating-a-custom-theme) section for more info.

You can learn more about styling your Bryntum SchedulerPro in our [style guide](#SchedulerPro/guides/customization/styling.md).

## Using ref outside SchedulerPro Component

To access the Bryntum SchedulerPro instance outside of `SchedulerPro.tsx`, you can use React’s `useRef` hook. Typically,
you would use `forwardRef`; however, in this case, the SchedulerPro component is lazy-loaded, so the ref needs to be
passed as a regular prop. To implement this, make the `SchedulerProWrapper.tsx` a client component, create a ref in the
`SchedulerProWrapper` function and pass it as a prop to the SchedulerPro:

```typescript
"use client"; // make it a client component

import { useEffect, useRef } from "react";
import { BryntumSchedulerPro } from "@bryntum/schedulerpro-react";

const SchedulerProWrapper = () => {
  const schedulerproRef = useRef<BryntumSchedulerPro>(null);

  useEffect(() => {
    // For testing purposes, since SchedulerPro is lazy loaded, schedulerproRef is null initially
    setTimeout(() => {
      console.log(schedulerproRef);
    }, 2000);
  });

  return <SchedulerPro schedulerproRef={schedulerproRef} {...schedulerproProps} />;
};
```

In `SchedulerPro.tsx`, define the `Props` type:

```typescript
type Props = {
  SchedulerPro: React.Ref<BryntumSchedulerPro>;
} & BryntumSchedulerProProps;
```

Next, pass and apply the `schedulerproRef` within the `SchedulerPro` function and remove any existing ref used for
`BryntumSchedulerPro`.

```typescript
export default function SchedulerPro({ schedulerproRef, ...props }: Props) {
  return (
    <BryntumSchedulerPro
      {...props}
      ref={schedulerproRef}
      // additional config
    />
  );
}
```

SchedulerPro can now be accessed from `SchedulerPro`, letting you access SchedulerPro's events and configs.

## Run the application

Run the local development server:

```shell
npm run dev
```

You'll see the Bryntum SchedulerPro app at the URL [http://localhost:3000](http://localhost:3000/).

<p class="last-modified">Last modified on 2025-10-06 8:19:19</p>