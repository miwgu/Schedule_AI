# Getting started with Bryntum Grid in Remix

This quick start guide will show you how to build a basic Bryntum Grid in a Remix TypeScript application.

## Version requirements

Bryntum Grid requires React `16.0.0` or higher and TypeScript `3.6.0` or higher for applications written in
TypeScript and Remix version `2.15.0` requires [Node LTS version](https://nodejs.org/en).

## Getting started

To get started, we will follow these steps to create a basic Bryntum Grid Remix app:

1. [Setup a Remix application](##setup-a-remix-application)
2. [Install the Bryntum Grid component](##install-the-bryntum-grid-component)
3. [Create a Bryntum Grid component](##create-a-bryntum-grid-component)
4. [Run the application](##run-the-application)

The basic Bryntum Grid starter template that we'll build will look like this:

<img src="Grid/getting-started-result-react-cra.png" class="b-screenshot" alt="Getting Started on 
Bryntum Grid with React Result">

## Setup a Remix application

We'll use the [Remix quick start guide](https://remix.run/docs/en/main/start/quickstart) to create a Remix application.
Create a Remix application by running the following command:

```shell
npx create-remix@latest
```

This command will prompt a few questions:

```bash
- Where should we create your new project?
 my-remix-grid
- Initialize a new git repository?
 Yes
- Install dependencies with npm?
 Yes
```

After you've selected your answers for the prompt questions, `create-remix` will create a folder with your 
project name and install the dependencies. 

Change your current working directory to the new Remix project directory:

```shell
cd my-remix-grid
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

You'll also need to install `remix-utils` to do client-side rendering.

```shell
npm install remix-utils
```

### Dependencies

The application configuration may add a caret `^` as a prefix of the dependencies version in your `package.json` file.
We recommend removing the caret character as a version prefix so that you have full control over package updates.

## Create a Bryntum Grid component

Let's start by creating a config file called `app.config.tsx`.
Create a `components` folder in the `app` folder and add the following lines of code to it:

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

This object will be used for configuration of the Bryntum Grid component.

Next, we'll create a Bryntum Grid React component. Create a file called `bryntum.client.tsx` in the
`app/components/` folder. Add the following lines of code to it:

```typescript
import { BryntumGrid } from '@bryntum/grid-react';
import { gridProps } from './app.config';

const BryntumClient = () => {
    return (
        <BryntumGrid
            {...GridProps}
        />
    );
};

export default BryntumClient;
```

The file extension is `.client.tsx` becase Bryntum components are rendered on **client-side** only and Remix uses
`.client.tsx` for client side files.

We need to create a wrapper component for the Bryntum Grid React component to render on the client only.
Replace the `app/routes/_index.tsx` file with the following code:

```typescript
import { ClientOnly } from 'remix-utils/client-only';
import BryntumClient from '~/components/bryntum.client';

export default function Index() {
    return (
        <ClientOnly fallback={<h1>Loading Bryntum Grid</h1>}>
            {() => <BryntumClient/>}
        </ClientOnly>
    );
}
```

Where the `ClientOnly` lets you render the components on the client-side only.

### Styling

To style the Bryntum Grid, create a `app/styles/` folder and add `index.css` file:

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
import "@bryntum/grid/grid.stockholm.css";
import "../styles/index.css";
```

If you want to customize the default theme, you can replace the `stockholm.css` with the sass version.
Visit [Creating a custom theme](#Gantt/guides/customization/styling.md#creating-a-custom-theme) section for more info.

You can learn more about styling your Bryntum Grid in our [style guide](#Grid/guides/customization/styling.md). 

## Run the application

Run the local development server:

```shell
npm run dev
```

You'll see the Bryntum Grid app at the URL [http://localhost:5173/](http://localhost:5173/).

## Troubleshooting

Please refer to this [Troubleshooting guide](#Grid/guides/integration/react/troubleshooting.md).

## What to do next?

### Further on integration with React

Do you want to know more about how Bryntum Grid integrates with react and start to customize your application? We
provide you with a [complete React guide here](#Grid/guides/integration/react/guide.md).

### Learn about Data

Bryntum components often use multiple collections and entities.

The [Data guide](#Grid/guides/data/displayingdata.md) explains how they all fit together.



<p class="last-modified">Last modified on 2025-10-06 7:47:08</p>