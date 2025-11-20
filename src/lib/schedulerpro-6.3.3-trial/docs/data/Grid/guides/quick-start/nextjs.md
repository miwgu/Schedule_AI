# Getting started with Bryntum Grid in Next.js

This quick start guide will show you how to build a basic Bryntum Grid in a Next.js TypeScript application using the
[Next.js getting started guide](https://nextjs.org/docs/getting-started/installation) as a starting point.

You can also take a shortcut and start with our
[Bryntum Grid Next.js with TypeScript starter template](https://github.com/bryntum/bryntum-grid-nextjs-quick-start)
that we will create in this guide.

## Requirements

Next.js version 15 requires [Node.js 18.18](https://nodejs.org/) or higher. Bryntum Grid requires React `16.0.0`
or higher and TypeScript `3.6.0` or higher for applications written in TypeScript.

## Getting started

To get started, we'll follow these steps to create a basic Bryntum Grid Next.js app:

1. Setup a Next.js application.
2. Install the Bryntum Grid component.
3. Create a Bryntum Grid component.
4. Run the application.

The basic Bryntum Grid starter template that we'll build will look like this:

<img src="Grid/getting-started-nextjs-result.png" class="b-screenshot" alt="Getting Started on Bryntum Grid with Next.js Result">

## Setup a Next.js application

We will use the [Next.js getting started guide](https://nextjs.org/docs/getting-started/installation) to create a
Next.js application. Next.js recommends using `create-next-app` to create a new Next.js app as it sets everything up
for you, automatically. Create a Next.js application by running the following command:

```shell
npx create-next-app@latest
```

You'll see multiple prompts. To follow along with this guide, choose the following options:

```shell
What is your project named? bryntum-grid
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
cd bryntum-grid
```

## Install the Bryntum Grid component

Installing the Bryntum Grid component using npm is the quickest way to use our products. First, get access to the
Bryntum private npm registry by following the [guide in our docs](#Grid/guides/npm-repository.md#repository-access).
Once you’ve logged in to the registry, install the Bryntum Grid component packages:

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```shell
npm install @bryntum/grid@npm:@bryntum/grid-trial @bryntum/grid-react
```

</div>
<div>

```shell
npm install @bryntum/grid @bryntum/grid-react
```

</div>
</div>

<div class="note">
Ensure that you have configured your npm properly to get access to the Bryntum packages.
If not, refer to <a href="#Grid/guides/npm-repository.md">this guide</a>.
</div>

### Dependencies

The application configuration may add a caret `^` as a prefix of the dependencies version in your `package.json` file.
We recommend removing the caret character as a version prefix so that you have full control over package updates.

## Create a Bryntum Grid component

Create a config file called `gridConfig.ts` in the `app/` folder. Add the following lines of code to it:

```typescript
import { BryntumGridProps } from "@bryntum/grid-react";

const gridProps: BryntumGridProps = {
  columns: [
    { text: "Name", field: "name", flex: 2 },
    { text: "Age", field: "age", width: 100, type: "number" },
    { text: "City", field: "city", flex: 1 },
    { text: "Food", field: "food", flex: 1 },
    {
      text: "Color",
      field: "color",
      flex: 1,
      renderer({
        cellElement,
        value,
      }: {
        cellElement: HTMLElement;
        value: string;
      }) {
        // set the color based on the value (e.g. "Red" should be red)
        cellElement.style.color = value;
        return value;
      },
    },
  ],

  data: [
    {
      id: 1,
      name: "Don A Taylor",
      firstName: "Don",
      surName: "Taylor",
      city: "Dubai",
      team: "Paris Tigers",
      age: 30,
      food: "Salad",
      color: "Black",
    },
    {
      id: 2,
      name: "John B Adams",
      firstName: "John",
      surName: "Adams",
      city: "Paris",
      team: "Washington Horses",
      age: 64,
      food: "Bolognese",
      color: "Orange",
    },
    {
      id: 3,
      name: "Doug C Jones",
      firstName: "Doug",
      surName: "Jones",
      city: "Stockholm",
      team: "New York Hens",
      age: 30,
      food: "Pancake",
      color: "Pink",
    },
    {
      id: 4,
      name: "James D Davis",
      firstName: "James",
      surName: "Davis",
      city: "Barcelona",
      team: "Dubai Lions",
      age: 87,
      food: "Pancake",
      color: "Green",
    },
    {
      id: 5,
      name: "Mike E Johnson",
      firstName: "Mike",
      surName: "Johnson",
      city: "Dubai",
      team: "New York Roosters",
      age: 14,
      food: "Pancake",
      color: "Green",
    },
    {
      id: 6,
      name: "Don F Johnson",
      firstName: "Don",
      surName: "Johnson",
      city: "Dubai",
      team: "Paris Tigers",
      age: 18,
      food: "Fish n chips",
      color: "Red",
    },
    {
      id: 7,
      name: "Jane G McGregor",
      firstName: "Jane",
      surName: "McGregor",
      city: "Stockholm",
      team: "Dubai Eagles",
      age: 78,
      food: "Fish n chips",
      color: "Green",
    },
    {
      id: 8,
      name: "Jane H Thomas",
      firstName: "Jane",
      surName: "Thomas",
      city: "New York",
      team: "Paris Cougars",
      age: 65,
      food: "Fish n chips",
      color: "Black",
    },
    {
      id: 9,
      name: "Lisa I Anderson",
      firstName: "Lisa",
      surName: "Anderson",
      city: "New York",
      team: "Stockholm Tigers",
      age: 14,
      food: "Burger",
      color: "Orange",
    },
    {
      id: 10,
      name: "Don J Thomas",
      firstName: "Don",
      surName: "Thomas",
      city: "Stockholm",
      team: "Barcelona Cougars",
      age: 45,
      food: "Salad",
      color: "Black",
    },
    {
      id: 11,
      name: "Doug K Jackson",
      firstName: "Doug",
      surName: "Jackson",
      city: "Barcelona",
      team: "Dubai Cats",
      age: 16,
      food: "Fish n chips",
      color: "Red",
    },
    {
      id: 12,
      name: "James L Ewans",
      firstName: "James",
      surName: "Ewans",
      city: "Dubai",
      team: "Dubai Dogs",
      age: 30,
      food: "Salad",
      color: "Black",
    },
    {
      id: 13,
      name: "Jenny M Brown",
      firstName: "Jenny",
      surName: "Brown",
      city: "Dubai",
      team: "Stockholm Eagles",
      age: 56,
      food: "Waffles",
      color: "Orange",
    },
    {
      id: 14,
      name: "Doug N Ewans",
      firstName: "Doug",
      surName: "Ewans",
      city: "Barcelona",
      team: "New York Dogs",
      age: 61,
      food: "Pancake",
      color: "Teal",
    },
    {
      id: 15,
      name: "Mike O Ewans",
      firstName: "Mike",
      surName: "Ewans",
      city: "Stockholm",
      team: "New York Roosters",
      age: 78,
      food: "Burger",
      color: "Green",
    },
  ],
};

export { gridProps };
```

<div class="note">

Next.js treats <code>gridConfig.ts</code> as a server module by default. Since functions cannot be passed from server modules to
Client Components due to serialization restrictions, any config containing functions (e.g., <code>renderer</code>) must be defined
or extended within the Client Component itself. Therefore, the columns definition should be moved to <code>Grid.tsx</code> to
ensure compatibility.

</div>

Create a file called `Grid.tsx` in the `app/components/` folder. Add the following lines of code to it:

```typescript
"use client";

import { BryntumGrid } from "@bryntum/grid-react";
import { useEffect, useRef, useState } from "react";

export default function Grid({ ...props }) {
    const [columns, _setColumns] = useState([
      { text : "Name", field : "name", flex: 2 },
      { text : "Age", field : "age", width: 100 },
      { text : "City", field : "city", flex: 1 },
      { text : "Food", field : "food", flex: 1 },
      {
        text     : "Color",
        field    : "color",
        flex     : 1,
        renderer : ({
          cellElement,
          value,
        } : {
          cellElement : HTMLElement;
          value       : string;
        }) => {
          // set the color based on the value (e.g. "Red" should be red)
          cellElement.style.color = value;
          return value;
        },
      },
    ]);
  const gridRef = useRef<BryntumGrid>(null);

  useEffect(() => {
    // Bryntum Grid instance
    const grid = gridRef?.current?.instance;
  }, []);

  return <BryntumGrid {...props} ref={gridRef} columns={columns}/>;
}
```

If you don't want to move the columns to `Grid.tsx`, remove the columns config from the above code and continue
following next steps. We will fix this later in `GridWrapper.tsx`.

The Grid component is a React
[client component](https://nextjs.org/docs/app/building-your-application/rendering/client-components) as it uses the
`"use client"` directive at the top of the file.

The code in the useEffect hook setup function shows you how to access the Bryntum Grid instance.

We need to create a wrapper component for the Bryntum Grid React component to render on the client only.
In the `components` folder, create a file called `GridWrapper.tsx` and add the following lines of code to it:

```typescript
'use client';

import dynamic from "next/dynamic";
import { gridProps } from "../gridConfig";

const Grid = dynamic(() => import("./Grid"), {
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

const GridWrapper = () => {
    return <Grid {...gridProps} />
};
export { GridWrapper };
```

<div class="note">

Make the <code>GridWrapper.tsx</code> a client component, if you haven't moved columns config to <code>Grid.tsx</code>.

</div>

The Bryntum Grid React component is
[dynamically imported](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#nextdynamic)
with server-side rendering (`ssr`) set to `false`. This is done to prevent the Bryntum Grid React client component
from being pre-rendered on the server as Bryntum components are client-side only.

<div class="note">

If the above throws an error, replace the <code>ssr: false,</code> with <code>ssr: !!false,</code>.

</div>

Next, replace the code in the `app/page.tsx` file with the following lines of code:

```typescript
import { GridWrapper } from "@/app/components/GridWrapper";
import "@bryntum/grid/grid.stockholm.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <GridWrapper />
    </main>
  );
}
```

We imported the CSS styles for the Bryntum Grid Stockholm theme, which is one of five available themes.

## Styling

To style the Bryntum Grid so that it takes up the whole page, replace the styles in the `app/globals.css`
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
Visit [Creating a custom theme](#Grid/guides/customization/styling.md#creating-a-custom-theme) section for more info.

You can learn more about styling your Bryntum Grid in our [style guide](#Grid/guides/customization/styling.md).

## Using ref outside Grid Component

To access the Bryntum Grid instance outside of `Grid.tsx`, you can use React’s `useRef` hook. Typically,
you would use `forwardRef`; however, in this case, the Grid component is lazy-loaded, so the ref needs to be
passed as a regular prop. To implement this, make the `GridWrapper.tsx` a client component, create a ref in the
`GridWrapper` function and pass it as a prop to the Grid:

```typescript
"use client"; // make it a client component

import { useEffect, useRef } from "react";
import { BryntumGrid } from "@bryntum/grid-react";

const GridWrapper = () => {
  const gridRef = useRef<BryntumGrid>(null);

  useEffect(() => {
    // For testing purposes, since Grid is lazy loaded, gridRef is null initially
    setTimeout(() => {
      console.log(gridRef);
    }, 2000);
  });

  return <Grid gridRef={gridRef} {...gridProps} />;
};
```

In `Grid.tsx`, define the `Props` type:

```typescript
type Props = {
  Grid: React.Ref<BryntumGrid>;
} & BryntumGridProps;
```

Next, pass and apply the `gridRef` within the `Grid` function and remove any existing ref used for
`BryntumGrid`.

```typescript
export default function Grid({ gridRef, ...props }: Props) {
  return (
    <BryntumGrid
      {...props}
      ref={gridRef}
      // additional config
    />
  );
}
```

Grid can now be accessed from `Grid`, letting you access Grid's events and configs.

## Run the application

Run the local development server:

```shell
npm run dev
```

You'll see the Bryntum Grid app at the URL [http://localhost:3000](http://localhost:3000/).

<p class="last-modified">Last modified on 2025-10-06 7:47:08</p>