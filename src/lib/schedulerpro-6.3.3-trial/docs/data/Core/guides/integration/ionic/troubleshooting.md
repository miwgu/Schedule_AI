# Troubleshooting Bryntum Core with Ionic

## Installing, building or running

If you encounter issues with installing or building your application, they can often be resolved by clearing the npm
cache for the project and global npm packages.

Run the following commands in your application folder to clean the package cache, remove installed packages, and
reinstall all project dependencies:

<div class="docs-tabs" data-name="cleanup">
<div>
    <a>MacOS/Linux</a>
    <a>Windows</a>
</div>
<div>

<strong>npm</strong>

```shell
npm cache clean --force
rm -rf node_modules
rm package-lock.json
npm install
```

<strong>yarn</strong>

```shell
yarn cache clean
rm -rf node_modules
rm package-lock.json
yarn install
```

</div>
<div>

<strong>npm</strong>

```shell
npm cache clean --force
rmdir node_modules /s /q
del package-lock.json
npm install
```

<strong>yarn</strong>

```shell
yarn cache clean
rmdir node_modules /s /q
del package-lock.json
yarn install
```
</div>
</div>

## The Bryntum Core bundle was loaded multiple times

```text
The Bryntum Core bundle was loaded multiple times by the application.
```

The error above usually means that somewhere you have imported both the module and UMD versions of the Bryntum Core 
package. Inspect the code and import from a single version of the Bryntum Core bundle. We recommend using the default
module of the `@bryntum/core` package (points to the module bundle):

```javascript
import { Core } from '@bryntum/core';
```

For more information on other causes of the error, please see
[this guide](#Core/guides/gettingstarted/es6bundle.md#troubleshooting).

## A property added to coreConfig has no effect

If you have added a new property, for example `listeners` to the configuration object, make sure that you also have
added it to the component template, for example:

```html
<bryntum-core>
    [listeners] = "coreProps.listeners!"
</bryntum-core>
```

Angular does not process `coreConfig` file as a whole but we need to use individual properties in the template.

## JavaScript heap out of memory

"JavaScript heap out of memory" error occurs on large projects where the default amount of memory allocated by node is
not sufficient to complete the command successfully.

You can increase this amount by running the following command:

**For Linux/macOS:**

```shell
export NODE_OPTIONS=--max-old-space-size=8192
```

**For Windows powershell:**

```shell
$env:NODE_OPTIONS="--max-old-space-size=8192"
```

Alternatively you can increase the amount of memory by adding the following
`NODE_OPTIONS='--max-old-space-size=8192'` config to `scripts` section in **package.json** file:

**For example change used build script:**

```json
{
  "scripts": {
    "build": "your-build-script"
  }
}
```

**to:**

```json
{
  "scripts": {
    "build": "cross-env NODE_OPTIONS='--max-old-space-size=8192' your-build-script"
  }
}
```

To apply this environment config you need `cross-env` npm library which can be installed to devDependencies with:

```shell
nmp install cross-env --save-dev
```

## Legacy peer dependencies

When you use **npm** v7 or above to install application, it checks that application dependencies have valid versions
compared to the other packages used.

If you want change some dependency version you may use
[npm-shrinkwrap](https://docs.npmjs.com/cli/v9/commands/npm-shrinkwrap) for this to set the valid version you want.

Another approach is to install other dependency packages for new **npm** versions above v7 with the
`--legacy-peer-deps` config flag enabled. Please read information in
[npm documentation](https://docs.npmjs.com/cli/v9/using-npm/config#legacy-peer-deps).

**Example:**

Create **.npmrc** in application folder with the following code:
```
legacy-peer-deps=true
```

This will allow using `npm install` without errors.

<div class="note">

We recommend upgrading your application to use a newer framework version instead of working around it. This will help to resolve issues with outdated
peer dependencies

</div>

## Openssl legacy provider

When using Node 18+ for application which uses legacy dependencies, you may receive this error during compilation:

```bash
Error: error:0308010C:digital envelope routines::unsupported
```

To resolve this issue create `.npmrc` file in the application folder and put this inside:

```txt
node-options="--openssl-legacy-provider"
```

Alternate solution is to open a terminal and export the environment variable before running your Node.js application:

**Mac, Ubuntu (and other Linux distributions):**

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

**Windows (command prompt)**

```bash
set NODE_OPTIONS=--openssl-legacy-provider
```

**Windows (PowerShell)**

```bash
$env:NODE_OPTIONS="--openssl-legacy-provider"
```

## Icons missing

Bryntum uses [Dart SASS](https://sass-lang.com/dart-sass) to compile CSS from SCSS for the included themes. It outputs 
CSS encoded with UTF-8. The encoding is specified at the top of the CSS file as a `@charset` tag:

```css
@charset "UTF-8";
```

It is important that this tag is preserved in the CSS used on page, to guarantee that font icons render as intended.

Minified CSS instead uses a byte order mark to specify encoding, which although invisible to the eye should be preserved
in the file used on page.

If you use a custom build process that includes our CSS and icons are not rendered correctly in all browsers, the issue
is most likely caused by missing encoding info. Try adding it back or serving the CSS with correct encoding specified
in the HTTP header.



<p class="last-modified">Last modified on 2025-10-06 7:46:59</p>