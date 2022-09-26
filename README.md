# Commerce7 Admin UI

<br />

## Installation

To install and save in your package.json dependencies, run:

```
npm install @commerce7/admin-ui
```

<br />

## Nunito Font

Commerce7 Admin UI was designed to be used with Nunito, available for free from <a href='https://fonts.google.com/specimen/Nunito' target='_blank'>Google Fonts</a>. Nunito can be included in your application inside of HTML or from NPM.

In HTML:

```
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;600&display=swap" rel="stylesheet">
```

With NPM:

```
npm install @fontsource/nunito
```

```
import "@fontsource/nunito/300.css"
import "@fontsource/nunito/600.css"
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

At times it may be required to link an external pacakge to a local version of the admin ui for testing. To do this have 2 terminals open. One terminal should be in the root of your local folder of the admin ui package and the other should be in the root to the project you would like to use the local package in. VS code should also be open.

Examples used here are admin and admin-ui.

### Linking

```
In admin-ui terminal
    1. npm build
    2. npm link
```

```
In admin terminal
    3. npm build
```

```
In VS code -> admin repo
    4. Go to node modules, @commerce7, admin-ui and delete this folder
```

```
In admin terminal
    5. npm link @commerce7/admin-ui
```

```
In VS code
    6. Restart VS code
```

After rebooting VS code the @commerce7 admin-ui folder should have an arrow icon beside it. This shows it is properly linked.

### Unlinking

```
In admin terminal
    1. npm unlink
```

```
In admin terminal
    2. npm unlink
```

```
In VS code in admin project
    1. Delete @commerce7 admin ui
    2. Restart vs code
```

After restarting the arrow icon should be removed. This means the project has successfully be unlinked from the local version of admin ui.
