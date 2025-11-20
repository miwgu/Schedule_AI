# Using Bryntum NPM repository and packages

## Repository access

Bryntum components are commercial products, hosted in a private Bryntum repository. To get repository access, you need
to complete these **two steps**:
* [Configure npm](#Grid/guides/npm-repository.md#configure-npm)
* [Login](#Grid/guides/npm-repository.md#login)

You may access the repository with a single login, or if your team contains multiple developers, you may follow the
instructions in this [multi-user access](##multi-user-access) guide.

## Repositories

Bryntum has two repositories located in Europe and US:

<div class="docs-tabs" data-name="repository">
<div>
    <a>Europe location</a>
    <a>US location</a>
</div>
<div>

```
https://npm.bryntum.com
```

</div>
<div>

```
https://npm-us.bryntum.com
```
</div>
</div>

<div class="note">

Please change repository URL for the commands in this guide accordingly.

</div>

## Configure npm

Configure **npm** to download packages for the `@bryntum` scope from the Bryntum registry with this command which will
store the npm configuration in your local machine:

```shell
npm config set "@bryntum:registry=https://npm.bryntum.com"
```

<div class="note">

Do not forget to put the config value in quotes as shown above (required for Windows PowerShell).

</div>

Check that **npm** uses correct Bryntum repository setting with:

```shell
npm config list
```

Command console output should contain this setting:

```shell
@bryntum:registry = "https://npm.bryntum.com"
```

Check [npm-config](https://docs.npmjs.com/cli/v10/commands/npm-config) online documentation.

## Login

Login to the registry using this command, which will create and store login credentials on your local machine:

```shell
npm login --registry=https://npm.bryntum.com
```

<div class="note">

Bryntum repository does not support the web login protocol used by a few npm v9.x versions as a default.
If you are on such version, please add <code>--auth-type=legacy</code> option to authenticate, or upgrade your npm client to 9.5 or newer:

```shell
npm login --auth-type=legacy --registry=https://npm.bryntum.com
```

</div>

Login example:

<div class="note">

Do not use <code>user..yourdomain.com</code> and <code>user@yourdomain.com</code> from the example below to login! Use your own email address.

</div>

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

Use your email as the login but replace the <code>@</code> with <code>..</code> (double dot) and use <code>trial</code> as password.

For example, if your email is <code>user@yourdomain.com</code>, use the following:

```shell
$ npm login --registry=https://npm.bryntum.com
npm notice Log in on https://npm.bryntum.com/
Username: user..yourdomain.com
Password: trial
```

</div>
<div>

Use your <a href="https://customerzone.bryntum.com">Bryntum Customer Zone</a> email as login but replace <code>@</code> with <code>..</code>
(double dot). Use your Bryntum Customer Zone password.

For example, if your username in Customer Zone is <code>user@yourdomain.com</code>, use the following:

```shell
$ npm login --registry=https://npm.bryntum.com
npm notice Log in on https://npm.bryntum.com/
Username: user..yourdomain.com
Password: your-customer-zone-password
```

<div class="note">

If you purchased a product and registered a new email at <a href="https://customerzone.bryntum.com">Bryntum Customer Zone</a>, then you
should re-login with new email to gain full registry access.

</div>

<div class="note">

Access to the licensed packages requires an active support subscription. After your subscription expires, you will only
have access to packages, which were published before subscription expiry date.

</div>
</div>
</div>

<div class="note">

If you see a rotating spinner after the password prompt in the console (introduced in npm 10.7), enter your password and
press <code>[Enter]</code>. The spinner is not indicating any progress, it's a part of the prompt display waiting for your input

</div>

## NPM Requirements

Bryntum demo applications use package aliasing for trial Bryntum Grid packages. This requires **npm** versions that 
support aliases.

Minimum supported **npm** versions are `v6.9.0` or `v7.11.0`.

Check installed **npm** version with:

```shell
npm -v
```

Use [npm upgrade guide](https://docs.npmjs.com/try-the-latest-stable-version-of-npm) for **npm** upgrade
instructions and check Docs for [package alias](https://docs.npmjs.com/cli/v10/commands/npm-install) syntax.

## Yarn Package Manager

To access the Bryntum repository with **yarn** we recommend use authorization with **npm** as described above. 
This step is mandatory. 
After you have been authorized with **npm** you will be able to install packages with **yarn**.

Please note that **yarn** uses an npm authorization token to access private repository.

### Yarn v1

Yarn v1 uses npm authorization token to access private repository, so no additional steps required.

### Yarn v2+

Yarn v2 and newer requires additional steps to configure access. 

Create a **.yarnrc.yml** file in user home or project directory with this content:

`npmRegistryServer` should match the npm server, which you use.

```yaml
npmScopes: 
  bryntum: 
    npmRegistryServer: https://npm.bryntum.com
    npmAlwaysAuth: true
    npmAuthIdent: YOUR-USER-NAME
    npmAuthToken: AUTH-TOKEN-VALUE
```

If you have authorized at the Bryntum repository using npm, then copy `AUTH-TOKEN-VALUE` from the `.npmrc` file.
This file is located in user home directory.

```ini
@bryntum:registry="https://npm.bryntum.com"
//npm.bryntum.com/:_authToken=AUTH-TOKEN-VALUE
```

You may also [create new token](#Grid/guides/npm-repository.md#creating-an-access-token).

Yarn documentation for [npmScopes](https://yarnpkg.com/configuration/yarnrc#npmScopes) config parameter.

## Components

Bryntum components (libraries) for web applications are built using pure JavaScript and can be used in any modern web
application without requiring any special JS framework. These components are packaged as follows:

| _Component_                | _Package_                       | Description                          |
|----------------------------|---------------------------------|--------------------------------------|
| Bryntum Grid            | **@bryntum/grid**            | Full licensed component version      |
| Bryntum Grid Trial      | **@bryntum/grid-trial**      | Trial limited component version      |
| Bryntum Grid Thin       | **@bryntum/grid-thin**       | Thin licensed component version      |
| Bryntum Grid Thin Trial | **@bryntum/grid-thin-trial** | Thin trial limited component version |

## Frameworks Wrappers

To integrate Bryntum components with all major frameworks including Angular, Ionic, React and Vue, we provide
framework specific wrappers in the following packages:

| _Framework_           | _Package_                         | Integration guide                                                                           |
|-----------------------|-----------------------------------|---------------------------------------------------------------------------------------------|
| Angular (IVY)         | **@bryntum/grid-angular**      | [Angular integration guide](#Grid/guides/integration/angular/guide.md)                   |
| Angular (View Engine) | **@bryntum/grid-angular-view** | [Angular integration guide](#Grid/guides/integration/angular/guide.md)                   |
| Angular (Thin)        | **@bryntum/grid-angular-thin** | [Angular multiple products guide](#Grid/guides/integration/angular/multiple-products.md) |
| Ionic with Angular    | **@bryntum/grid-angular**      | [Ionic integration guide](#Grid/guides/integration/ionic/guide.md)                       |
| React                 | **@bryntum/grid-react**        | [React integration guide](#Grid/guides/integration/react/guide.md)                       |
| React (Thin)          | **@bryntum/grid-react-thin**   | [React multiple products guide](#Grid/guides/integration/react/multiple-products.md)     |
| Vue 2.x               | **@bryntum/grid-vue**          | [Vue integration guide](#Grid/guides/integration/vue/guide.md)                           |
| Vue 3.x               | **@bryntum/grid-vue-3**        | [Vue integration guide](#Grid/guides/integration/vue/guide.md)                           |
| Vue 3.x (Thin)        | **@bryntum/grid-vue-3-thin**   | [Vue multiple products guide](#Grid/guides/integration/vue/multiple-products.md)         |

<div class="note">

Wrapper packages require installing <strong>@bryntum/grid</strong> but it is not listed in the package dependencies.
This was done to support trial package aliasing. You have to manually add the <strong>@bryntum/grid</strong> dependency to the 
application's <strong>package.json</strong> file to use the wrapper packages.

</div>

## Demo resources

Bryntum demo applications use resources such as images, fonts and styling from the **demo-resources** npm package.
This package is **optional** and it is not necessary to add it in your application.

| _Description_  | _Package_                   |
|----------------|-----------------------------|
| Demo Resources | **@bryntum/demo-resources** |

<div class="note">

Demo Resources package does not contain framework demos and they are bundled within distribution zip

</div>

## Installing trial packages

Trial packages require using npm package aliasing to install the `"@bryntum/grid-trial"` using
the `"@bryntum/grid"` alias.

<div class="note">

The trial Bryntum Grid package should be installed first

</div>

Example: For Angular framework integration it can be done with:

Install using **npm**:

```shell
npm install @bryntum/grid@npm:@bryntum/grid-trial@6.3.3
npm install @bryntum/grid-angular@6.3.3
```

<div class="note">

We recommend to use npm <code>--save-exact</code> arguments to install the precise package versions and take upgrades fully under control.

</div>

or add using **yarn**:

```shell
yarn add @bryntum/grid@npm:@bryntum/grid-trial@6.3.3
yarn add @bryntum/grid-angular@6.3.3
```

<div class="note">

We recommend using yarn <code>--exact</code> argument to install the specific package versions and keep upgrades fully under control.

</div>

Alternatively, you can directly add entries to the `"dependencies"` section of the `package.json` project file as follows:

```json
"dependencies": {
  "@bryntum/grid": "npm:@bryntum/grid-trial@6.3.3",
  "@bryntum/grid-angular": "6.3.3"
}
```

<div class="note">

We recommend against prefixing package versions with the caret character (<code>^</code>) to install the precise package versions 
and take upgrades fully under control.

</div>

To install Bryntum trial products use the trial product packages `@bryntum/grid-trial`, `@bryntum/gantt-trial`,
`@bryntum/scheduler-trial`, `@bryntum/schedulerpro-trial`, `@bryntum/calendar-trial` or `@bryntum/taskboard-trial`.

<div class="note">

To avoid compatibility issues, please make sure that you use the same version for all installed Bryntum product
packages.

</div>

Packages for other frameworks are listed in the
[Frameworks Wrappers](#Grid/guides/npm-repository.md#frameworks-wrappers) table.

## Migrating from trial to licensed packages

The benefit of using npm package aliasing for trial packages above is that we create an alias for the `grid-trial` 
package using the name of the licensed `grid` package. This means there is no need to change your application code 
after getting a license, and you will only change the alias in `package.json` to the package version number.

Change this:

```json
"dependencies": {
  "@bryntum/grid": "npm:@bryntum/grid-trial@6.3.3",
}
```

to:

```json
"dependencies": {
  "@bryntum/grid": "6.3.3",
}
```

<div class="note">

<strong>Frameworks Wrappers</strong> and <strong>Bryntum Demo Resources</strong> packages do not have trial versions.

</div>

## Installing licensed packages

All published packages in the private Bryntum npm repository can be installed as any other regular npm packages.

Example: For Angular framework integration it can be done with:

Install using **npm**:

```shell
npm install @bryntum/grid@6.3.3
npm install @bryntum/grid-angular@6.3.3
```

<div class="note">

We recommend to use npm <code>--save-exact</code> arguments to install the specific package versions and keep upgrades fully under
control.

</div>

or add using **yarn**:

```shell
yarn add @bryntum/grid@6.3.3
yarn add @bryntum/grid-angular@6.3.3
```

<div class="note">

We recommend to use yarn <code>--exact</code> arguments to install the specific package versions and keep upgrades fully under 
control.

</div>

Alternatively, you can directly add entries to the `"dependencies"` section of the `package.json` project file as follows:

```json
"dependencies": {
  "@bryntum/grid": "6.3.3",
  "@bryntum/grid-angular": "6.3.3"
}
```

<div class="note">

We recommend not to prefix package versions with caret character (<code>^</code>) to install the precise package versions and 
take upgrades fully under control.

</div>

To install Bryntum products use the product packages `@bryntum/grid`, `@bryntum/gantt`, `@bryntum/scheduler`,
`@bryntum/schedulerpro`, `@bryntum/calendar` or `@bryntum/taskboard`.

<div class="note">

To avoid compatibility issues make sure that you use same version for all installed Bryntum product packages

</div>

Packages for other frameworks are listed in the
[Frameworks Wrappers](#Grid/guides/npm-repository.md#frameworks-wrappers) table.

## Multi-user access

The Bryntum npm repository requires authentication to install packages. For teams working on projects with Bryntum Suite
packages, there are two recommended approaches to manage repository access:

1. Individual Developer Access: Each team member can set up their own login through
   the [Bryntum Customer Zone](https://customerzone.bryntum.com). Navigate to **Licenses** - **Seats** - **Manage** to add/remove
   team members and manage user licenses. However, using individual developer credentials for repository access is not
   recommended for shared projects or development teams since `package-lock.json` will contain user-specific
   authentication hashes. Instead, use shared access tokens as described in option 2 below.

2. Shared Token Access: For CI/CD pipelines or development teams, use access tokens for authentication. 

These secure tokens can be:

  * Stored in individual `.npmrc` files in each developer's home directory. This allows access to be shared with a 
    limited number of developers
  * Added to a shared `.npmrc` file in the project directory and committed to version control. This enables access for
    everyone working on the project
  * Used in CI/CD pipeline configurations. The pipeline can copy the token file into the project folder before 
    running `npm install`, limiting token exposure to the CI/CD process without sharing it with the entire development
    team

Tokens provide several benefits:

  * No expiration date
  * Can be created or deleted as needed
  * More secure than sharing login credentials
  * Ideal for automated build processes
  * One developer seat/license in the Bryntum Customer Zone allows the creation of an unlimited number of tokens for
    accessing the repository

For detailed instructions on creating and managing tokens and using CI/CD pipelines, please see
[Access tokens](#Grid/guides/npm-repository.md#access-tokens),
[Access tokens CI/CD](#Grid/guides/npm-repository.md#access-tokens-for-cicd) and
[Artifactory integration](#Grid/guides/npm-repository.md#artifactory-integration) guides below.

## Access tokens

Access tokens may be used instead of password authentication for CI/CD environment or multi-user repository access for
secure authorization to the Bryntum repository.

You can create a token and save it as a `.npmrc` file in your project
directory to be able to install Bryntum packages with **npm** or **yarn**. Please follow the instructions below.

<div class="note">

You are required to configure and login to the npm server before you are able to use tokens. Please follow the
<a href="#Grid/guides/npm-repository.md#repository-access">Repository access</a> instructions.

</div>

See also [npm token documentation](https://docs.npmjs.com/creating-and-viewing-access-tokens).

### Creating an access token

To create a new token using the command line, run:

```shell
$ npm token create --registry=https://npm.bryntum.com
npm password: Enter your password here
```

Copy the token from the console, which is displayed after this command:

```shell
┌──────────┬─────────────────────────┐
│ token    │ eyJhb...                │
├──────────┼─────────────────────────┤
│ user     │ user..example.com       │
├──────────┼─────────────────────────┤
│ cidr     │                         │
├──────────┼─────────────────────────┤
│ readonly │ false                   │
├──────────┼─────────────────────────┤
│ created  │ 2021-07-20T01:02:03.00Z │
└──────────┴─────────────────────────┘
```

### Viewing access tokens

To view all available tokens using the command line, run:

```shell
npm token list --registry=https://npm.bryntum.com
```

All available tokens will be displayed in the console:

```shell
┌────────┬─────────┬────────────┬──────────┬────────────────┐
│ id     │ token   │ created    │ readonly │ CIDR whitelist │
├────────┼─────────┼────────────┼──────────┼────────────────┤
│ b54f12 │ eyJhb.… │ 2021-07-20 │ no       │                │
└────────┴─────────┴────────────┴──────────┴────────────────┘
```

### Removing an access token

To remove a created token using the command line, run:

<div class="note">

Replace <strong>tokenId</strong> with <strong>id</strong> from the tokens table displayed after <strong>npm token list</strong> command

</div>

```shell
npm token delete tokenId --registry=https://npm.bryntum.com
```

### `.npmrc` locations

The `npm` package manager uses a configuration file named `.npmrc` that stores information of repositories,
authTokens and other configuration options. `npm` uses this file from the following locations in this order:

* per-project config file (`/path/to/my/project/.npmrc`)
* per-user config file (`~/.npmrc`)
* global config file (`$PREFIX/etc/npmrc`)
* npm builtin config file (`/path/to/npm/npmrc`)

See also [npmrc documentation](https://docs.npmjs.com/cli/v10/configuring-npm/npmrc).

### Listing the npm configuration

Use `npm config ls` to see the following information:

```ini
; "user" config from /Users/user/.npmrc

@bryntum:registry = "https://npm.bryntum.com"
//npm.bryntum.com/:_authToken = (protected)

; node bin location = /Users/user/.nvm/versions/node/v12.22.1/bin/node
; cwd = /Users/Shared/data/devel/bryntum-suite
; HOME = /Users/user
; Run `npm config ls -l` to show all defaults.
```

The first line shows that the `.npmrc` from the user's home directory will be used and we can also see that we
have configured the registry for `@bryntum` namespace and that we have logged-in because we have an authToken.

If we had `.npmrc` in the project directory, `/Users/Shared/data/devel/bryntum-suite` in this case,
then the output would look like:

```ini
; "user" config from /Users/user/.npmrc

@bryntum:registry = "https://npm.bryntum.com"
//npm.bryntum.com/:_authToken = (protected)

; "project" config from /Users/Shared/data/devel/bryntum-suite/.npmrc

legacy-peer-deps = true

; node bin location = /Users/user/.nvm/versions/node/v12.22.1/bin/node
; cwd = /Users/Shared/data/devel/bryntum-suite
; HOME = /Users/user
; Run `npm config ls -l` to show all defaults.
```

Both user and project configs are used at this time, `legacy-peer-deps` configured in the project directory
and repository and authToken used from the user home directory.

## Access tokens for CI/CD

You may use [Access tokens](#Grid/guides/npm-repository.md#access-tokens) stored in `.npmrc` in Continuous
Integration/Continuous Delivery (CI/CD) systems.

The automated CI/CD process will run `npm install` at some point. This command will execute in a project directory and
as a particular user. You can manually verify if the `.npmrc` file used by the process contains the `@bryntum`
repository configuration, and the correct authToken.

**`.npmrc` file should contain this code:**

```ini
@bryntum:registry="https://npm.bryntum.com"
//npm.bryntum.com/:_authToken=AUTH-TOKEN-VALUE
```

## Artifactory integration

To use Bryntum NPM registry as a remote repository please follow this instruction.

### Add Bryntum registry as a remote repository

In Artifactory admin console navigate to **Administration - Repositories** and click **Add repositories - Remote
repository**.

Check [Remote Repositories](https://www.jfrog.com/confluence/display/JFROG/Remote+Repositories) docs from Artifactory.

Configure the repository with:

| Parameter      | Value                                                                                                  |
|----------------|--------------------------------------------------------------------------------------------------------|
| Package Type   | **npm**                                                                                                |
| Repository Key | **bryntum** (or any other name you prefer)                                                             |
| URL            |  https://npm.bryntum.com                                                                               |
| Username       |  Username for [Bryntum repository authentication](#Grid/guides/npm-repository.md#repository-access) |
| Password       |  Password for [Bryntum repository authentication](#Grid/guides/npm-repository.md#repository-access) |

### Setup credentials for `@bryntum` package access

After creating the remote repository, click the wrench icon (Set Me Up) in the line with the repository to get 
credentials for accessing the repository.

Create `.npmrc` file in the project's folder and add credentials there for `@bryntum` scope packages:
For example if you use JFrog Platform for hosting your Artifactory registry (e.g. `yourregistry.jfrog.io`) for
Artifactory with the username `user@example.com` than you will have similar config:
```
@bryntum:registry=https://yourregistry.jfrog.io/artifactory/api/npm/bryntum/
//yourregistry.jfrog.io/artifactory/api/npm/bryntum/:_password=<BASE64_PASSWORD>
//yourregistry.jfrog.io/artifactory/api/npm/bryntum/:username=user@example.com
//yourregistry.jfrog.io/artifactory/api/npm/bryntum/:email=user@example.com
//yourregistry.jfrog.io/artifactory/api/npm/bryntum/:always-auth=true
```

`<BASE64_PASSWORD>` will be generated for you in Artifactory console if you enter your credentials there.

After these actions you will be able to install `@bryntum\Grid` package with your Artifactory login from `.npmrc`
file.

Later you may add `bryntum` Artifactory remote repository to any virtual repository to have access to several
repositories with the same Artifactory credentials.

Check [Virtual Repositories](https://www.jfrog.com/confluence/display/JFROG/Virtual+Repositories) docs from Artifactory.

## Offline packages

If you do not have an internet connection on your development computer, CI/CD system, or you want to use **@bryntum**
offline packages to build your application you may use the instructions below.

Install packages on a computer with access to the Bryntum repository. Installation will store all required packages
under the **node_modules/@bryntum** folder located in your application's root path.

Navigate to **each sub folder** inside the **node_modules/@bryntum** folder and run:

```shell
npm pack
```

This will create a **\*.tgz** file inside the folder where you ran the command. Files should be copied and stored in
version control to be used as local npm packages.

Please check documentation for the `npm pack` command [docs here](https://docs.npmjs.com/cli/v10/commands/npm-pack).

For example if you copied the **\*.tgz** files to the **lib/** folder inside your project's root alongside
with `package.json` you need to modify the `package.json` file to use offline packages as shown below.

<div class="docs-tabs" data-name="licensed">
<div>
    <a>Trial version</a>
    <a>Licensed version</a>
</div>
<div>

```json
"dependencies": {
  "@bryntum/grid-lib-trial": "file:./lib/bryntum-grid-lib-trial-6.3.3.tgz"  
  "@bryntum/grid": "file:./lib/bryntum-grid-trial-6.3.3.tgz"
}
```

</div>
<div>

```json
"dependencies": {
  "@bryntum/grid-lib": "file:./lib/bryntum-grid-lib-6.3.3.tgz"  
  "@bryntum/grid": "file:./lib/bryntum-grid-6.3.3.tgz"
}
```
</div>
</div>

## Troubleshooting

### Project cleanup

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

### 403 Forbidden. Cannot authorize

```shell
npm error 403 --------------------------------------------------------
npm error 403                   BRYNTUM NPM REGISTRY
npm error 403 --------------------------------------------------------
npm error 403 Cannot authorize "user..yourdomain.com"
npm error 403 Wrong password
npm error 403 Please use Bryntum Customer Zone password
npm error 403 --------------------------------------------------------
npm error 403   Npm server login guide: https://npm.bryntum.com/help
npm error 403   Get support at: https://forum.bryntum.com/
npm error 403 --------------------------------------------------------
```

The error above means you need to check your password. For trial access type `trial` as password or use your
[CustomerZone](https://customerzone.bryntum.com) password to gain licensed access.

<div class="note">

If you purchased a product and registered a new email at <a href="https://customerzone.bryntum.com">Bryntum Customer Zone</a>, then you
should re-login with new email to gain full registry access.

</div>

### 403 Forbidden. Not allowed to install

```text
npm error 403 403 Forbidden - GET https://npm.bryntum.com/@bryntum/grid/-/grid-6.3.3.tgz -
npm error 403
npm error 403 --------------------------------------------------------
npm error 403                   BRYNTUM NPM REGISTRY
npm error 403 --------------------------------------------------------
npm error 403 "user..yourdomain.com" only has access for trial packages
npm error 403 It is not allowed to install licensed package "@bryntum/grid"
npm error 403 Use "@bryntum/grid-trial" package instead or contact support
npm error 403 --------------------------------------------------------
npm error 403   Npm server login guide: https://npm.bryntum.com/help
npm error 403   Get support at: https://forum.bryntum.com/
npm error 403 --------------------------------------------------------
```

The error above means, that you are not allowed to access licensed package when logged in as **trial** or your 
[CustomerZone](https://customerzone.bryntum.com) account has no valid Bryntum Grid license.

### 404 Not Found

<div class="docs-tabs" data-name="packagemanager">
<div>
    <a>npm</a>
    <a>yarn</a>
</div>
<div>

```shell
Not Found - GET https://registry.npmjs.org/@bryntum%2fgrid"
npm ERR! 404
npm ERR! 404 ‘@bryntum/grid@6.3.3’ is not in the npm registry.
```

This error means that <strong>npm</strong> tries to get package from public repository at <code>https://registry.npmjs.org</code> but not from
Bryntum private repository at <code>https://npm.bryntum.com</code>.

</div>
<div>

```shell
➤ YN0000: ┌ Resolution step
➤ YN0035: │ @bryntum/grid@npm:6.3.3: Package not found
➤ YN0035: │   Response Code: 404 (Not Found)
➤ YN0035: │   Request Method: GET
➤ YN0035: │   Request URL: https://registry.yarnpkg.com/@bryntum%grid
➤ YN0000: └ Completed in 0s 303ms
```
This error means that <strong>yarn</strong> tries to get package from public repository at <code>https://registry.yarnpkg.com</code> but not from
Bryntum private repository at <code>https://npm.bryntum.com</code>.
</div>
</div>

To fix this problem, configure your package manager as stated above in
[Configure npm](#Grid/guides/npm-repository.md#configure-npm) guide and reinstall the package.

### ERR! Web login not supported

Bryntum repository does not support the web login protocol used by a few npm v9.x versions as a default.
If you are on such version, please add `--auth-type=legacy` option to authenticate, or upgrade your npm client to 9.5 or
newer.

```shell
npm login --auth-type=legacy --registry=https://npm.bryntum.com
```

### Other problems

If you have problems with accessing Bryntum NPM repository, please check these first:

* Install a supported **npm** version as stated above in
  [NPM Requirements](#Grid/guides/npm-repository.md#npm-requirements)
* You cannot have access to full package `@bryntum/grid` from a trial account. Use `@bryntum/grid-trial`
  package as described above in [Installing trial packages](#Grid/guides/npm-repository.md#installing-trial-packages)
* Check you have typed a correct password from [Bryntum Customer Zone](https://customerzone.bryntum.com)
* To access full packages, check if you are a real [Bryntum Customer Zone](https://customerzone.bryntum.com) user.
  Register or ask a license owner to add you there
* If you use **yarn** please check [Yarn Package Manager](#Grid/guides/npm-repository.md#yarn-package-manager)
  information above
* Contact us at [Bryntum Support Forum](https://forum.bryntum.com/) for any questions. Please attach **npm** console log
  to your question

## Online references

* Visit [npm Package Manager homepage](https://npmjs.com)
* Read [npm Documentation](https://docs.npmjs.com)
* Visit [yarn Package Manager homepage](https://yarnpkg.com)
* Read [yarn Documentation](https://yarnpkg.com/getting-started)
* Check all available packages in [Bryntum npm Repository](https://npm.bryntum.com)
* Browse [Bryntum Grid examples](https://bryntum.com/products/grid/examples/)
* Browse [All Bryntum products examples](https://bryntum.com/examples/)
* Purchase licensed components in our [Store](https://bryntum.com/store/)
* Read [Bryntum Grid Online Documentation](https://bryntum.com/products/grid/docs/)
* Post your questions to [Bryntum Support Forum](https://forum.bryntum.com/)
* Access [Bryntum Customer Zone](https://customerzone.bryntum.com)
* [Contact us](https://bryntum.com/contact/)


<p class="last-modified">Last modified on 2025-10-06 7:47:08</p>