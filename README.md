# Commerce7 Admin UI

<br />

## Installation

To install and save in your package.json dependencies, run:

```
npm install @commerce7/admin-ui
```

<br />

## Inter Font

Commerce7 Admin UI was designed to be used with Inter, available for free from <a href='https://fonts.google.com/specimen/Inter' target='_blank'>Google Fonts</a>. Inter can be included in your application inside of HTML or from NPM.

In HTML:

```
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
```

With NPM:

```
npm install @fontsource/inter
```

```
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
```

<br />

## Setup

Wrap your application with `Commerce7AdminUI`:

```
import React from 'react';
import { Commerce7AdminUI } from '@commerce7/admin-ui';
import App from './App'

function Index() {
    return (
        <Commerce7AdminUI>
            <App/>
        </Commerce7AdminUI>
    );
}
```

<br />

## Usage

Import components individually to use them inside your application:

```
import React from 'react';
import { Button } from '@commerce7/admin-ui';

function SaveButton() {
    return <Button>Hello World</Button>;
}
```

<br />

## Linking and Unlinking for Local Packages

At times in may be required to link a project to admin-ui locally for development testing purposes. To do this have 2 terminals open. One terminal should be in the root of your local folder of the admin ui package and the other should be in the root to the project you would like to use the local package in. VS code should also be open.

Examples used here are admin and admin-ui.

### Linking

```
In admin-ui terminal
1. npm link
```

```
In admin terminal
2. npm link @commerce7/admin-ui@{version-number}
```

```
In VS code
3. Restart VS code
4.After rebooting VS code, the @commerce7/admin-ui folder in the admin/@node_modules should have an arrow icon beside it. This shows it is properly linked.
```

```
In admin
5. In order to test locally, add **path.resolve('./node_modules/@commerce7/admin-ui/node_modules')** to webpack.{project-name}.config.js. Ex:  webpack.admin.dev.js
6. Run npm run frontend-admin
```

```
In admin-ui
5. When you change something in admin-ui and want to see the changes in admin, you need to run  **npm run build** in admin-ui to sync with admin. After you run **npm run build**, when you have symbolic link, the admin page will automatically be refreshed and will get the latest changes.
```

### Unlinking

```

In admin terminal
1. npm unlink --no-save @commerce7/admin-ui@{version-number}

```

```

In admin-ui terminal
2. npm unlink @commerce7/admin-ui@{version-number}

```

```

In VS code
3. Restart VS code

```

```

In VS code in admin project
4. Run npm install

```

After restarting the arrow icon should be removed. This means the project has successfully be unlinked from the local version of admin ui.
