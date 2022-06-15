<p align='center'>
  <b>Vide</b>
</p>

<p align='center'>
Vue3 + Vite Starter Template, super leightweight Targeted for beginners
</p> 

<br>

<p align='center'>
The Goal was to create a super lightweight Vite Starter template with as few dependencies as possible, but at the same time provide a good amount of utility.
To provide a clean entry point for newcomers and advanced Vue + Vite users.
</p>

<br>

<p align='center'>
<a href="https://enchanting-semifreddo-05116e.netlify.app/">Live Demo</a>
</p>

<br>


## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite)

- 🌙 Easy Custumizable Dark Mode

- 🗂 <del>[File based routing]</del> (cooming soon)

- 📦 [Components auto importing](./src/components)

- 🌬️ [WindiCSS](https://github.com/windicss/windicss)

- 😮 [Iconify Components](https://github.com/iconify) 

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 💪 TypeScript

<br>


## Pre-packed

### UI Frameworks

- [WindiCSS](https://github.com/windicss/windicss) - Next generation utility-first CSS framework.

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)

- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete


> Vide requires Node >=14

### GitHub Template



### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit nico-mayer/vide my-vide-app
cd my-vide-app
yarn i # If you don't have yarn installed, run: npm install
```


### Development

Just run and visit http://localhost:3000

```bash
yarn dev
```

### Build

To build the App, run

```bash
yarn build
```

And you will see the generated file in `dist` that ready to be served.

<br>

<p align="center">This template is inspired by <a href="https://github.com/antfu/vitesse">vitesse</a> and <a href="https://github.com/alvarosabu/vitesome">vitesome</a></p>
