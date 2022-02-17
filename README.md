# Frontend Boilerplate

this boilerplate was created using Vite and React, and it contains :
+ React Router DOM v5
+ Eslint, prettier, Husky to format and lint code before commit
+ Redux, Redux Saga for state management
+ Cypress for testing
+ Material UI and Styled Components for Styling
+ React next i18n for internationalization


## Installation
```bash
git clone https://github.com/Nie-Mand/Frontend-Boilerplate.git
npm install
```

## Run
```bash
npm run dev
```


## Project Structure
```
.
├── cypress                 # for writing tests
├── public                  # Static assets (images, fonts...)
├── src                     # Source files
│   ├── components          # Components folder
│   ├── locales             # Locales folder (en, fr)
│   ├── pages               # Pages folder
│   ├── redux               # Redux folder
│   ├── scripts             # tools and utilities to generate code
│   ├── types               # Types folder for custom types
│   └── ui                  # Design System folder
│   
├── index.html
└── README.md
```

### Pages
Every page is structured as follow:
```
.
└── home                    # root folder of the page
    ├── index.tsx           # Root file of the component
    ├── Home.tsx            # Main code of the component
    ├── Home.test.tsx       # Test suite of the component
    ├── messages.json       # messages of the component
    ├── Home.styled.tsx     # Styled components to be used
    └── components          # Components folder
```

Pages are managed in `src/routes.json` where every route is defined by a component, path, roles (by default everything is accessible), and a layout (layouts are defined as components inside the `src/components/layouts` folder))

#### Create a new page
```sh
$npm run make

? What do you want to create? route
? What is the name of the page? home
? What is the path of the page? (could contain parameters) /
? What is the layout of the page? Default

```


### Components
Every component is structured as follow:
```
.
└── block                   # root folder of the component
    ├── index.tsx           # Main code of the component
    ├── Block.test.tsx      # Test suite of the component
    ├── messages.json       # messages of the component
    └── Block.styled.tsx    # Styled components to be used
```

Components can be scoped for a specific page (in the `src/pages/**page-name**/components` folder) or globally (in the `src/components/shared` folder)

#### Create a new Component (Page Scope)
```sh
$ npm run make

? What do you want to create? component
? What is the scope of the component? page
? What is the page that this component belongs to? home
? What is the name of the component? hero
✔ created index.tsx
✔ created Hero.styled.tsx
✔ created messages.json
✔ created Hero.test.tsx
✔ updated components/index.ts

```

#### Create a new Component (Global Scope)
```sh
$ npm run make

? What do you want to create? component
? What is the scope of the component? shared
? What is the name of the component? switch
⠋ creating switch..
✔ created index.tsx
✔ created messages.json
✔ created Switch.styled.tsx
✔ created Switch.test.tsx
✔ updated components/index.ts

```



### Messages
- Messages are the way to make translations for your application.
- you define every message with an id and a default value, inside the `messages.json` file.
- Then you use the custom hook **useMessage**
```ts
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const MyComponent = () => {
  const t = useMessages('scope')
  return (
    <div>
      <h1>{t(messages.messageName)}</h1>
    </div>
  )
}
```

### Features
- Every feature is a scoped redux reducer, and it is defined in the `src/redux/features/**feature-name**` folder as follows:
```
.
└── users                   # root folder of the feature
    ├── users.actions.ts  
    ├── users.constants.ts
    ├── users.hooks.ts    
    ├── users.reducer.ts  
    ├── users.sagas.ts    
    ├── users.services.ts 
    └── users.state.ts    
```

#### Create a new Feature
```sh
$ npm run make

? What do you want to create? feature
? What is the name of the feature? users
✔ created /users.constants.ts
✔ created /users.reducer.ts
✔ created /users.actions.ts
✔ created /users.state.ts
✔ created /users.services.ts
✔ created /users.sagas.ts
✔ created /users.hooks.ts
✔ updated /users.sagas.ts
✔ updated /users.reducer.ts
✔ updated /users.hooks.ts

```


- All the services' endpoints are defined in the `src/endpoints.ts` file
- All hooks are exported from 'app/hooks'
