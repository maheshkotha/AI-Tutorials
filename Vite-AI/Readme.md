# Vite
## Day 1: What is Vite?
On day 1, you'll familiarize yourself with Vite is, why it's gaining popularity in the web development world, and what makes it different from traditional build tools like webpack, Rollup, and parcel. The goal is for you to build a strong fundamental understanding before diving into installaton and hands-on-coding.

### What is Vite?
Vite (pronounced `veet`, meaning `fast` in French) is a modern frontend build tool that provides:
1. A lightning-fast development environment using a develpment server powered by native ES modules.
2. Efficient production builds using Rollup.

It's known for:
* Instant dev server startup-no bundling required during development.
* Super-fast Hot Module Replacement(HMR) for updating changes instantly.
* A more modern development workflow compared to older tools like Webpack.
- - -
**Key Features of Vite**
1. HMR(Hot Module Replacement): Allows real-time updates to the app in the browser without refreshing the page.
2. Fast Development Server: Vite uses ES Module for serving files directly, making everything faster when starting the development server.
3. Out of the box setup: No need to configure everything manually--Vite provides a pre-configured setup for React, Vue, Svelte, and many others.
4. Production Optimization: Vite leverages Rollup to bundle code for production with minimal configuration.
5. Plugin Ecosystem: Vite supports a robust plugin API, so you can easily extend its functionality with plugins (e.g., for Tailwind, PWA, etc).

- - -
### Vite? (The Problems it Solves)
Traditional bundles like Webpack preprocess your code dureing development. This works well for small projects but becomes slow as your project grows:

1. Slow Cold Starts: Unlike Webpack, which process the entire app before you can load it in the browser, Vite skips the bundling step during development and leverages native ES module imports in modern browsers, meaning a faster dev server startup.
2. Complex Configuration: Setting up Webpack or Rollup can be tedious. Vite has sensible defaults and a better developer experience.
3. Faster Rebuild: Changes in code are reflected faster in vite, thanks to its Hot Module Replacement mechanism.


## Day 2: Installing and Setup Your First Project
Today, you're going to install Vite, setup your first project, and understand its basic folder structure. You're kicking off the hands-on part of this tutorial!

---
### Goals for Day 2
1. Install vite using its scaffolding command `npm create vite@latest`.
2. Understand the folder structure and default files.
3. Verify the Vite development server is working (`npm run dev`).
4. Experiment with basic Hot Module Replacement(HMR).
5. Make a simple modification to verify your setup (e.g., tweek the app UI)

---
### Step 1: Install Vite
Prerequisites, Before you start, ensure: You have Node.js installed.
```
node -v
npm -v
```
**Install Vite Using npm**
1. Open your terminal/command prompt.
2. Run the following command to scaffold a new Vite project
```
npm create vite@latest
```
This will prompt you for some options:
* Project Name: Enater a name of your project
* Select a Framework: Choose the framework you'll work with for now(e.g., `Vanilla` if you're using plain HTML/JS initially).
* Navigate to your project directory
```
cd vite-project-day2
```
* Install project dependencies:
```
npm install
```
### Setp 2: Run the Development Server
Now that the project is setup, let's run the Vite dev server:
1. Start the server
```
npm run dev
```
2. Vite will provide a local development URL (http://localhost:5173/) in the terminal output. Open this URL in browser.

Your browser should now display the basic Vite welcome page or your chosen framework's starter template.

### Setp 3: Understand your project folder structure
Let's go through the default folders and files created by Vite:
* index.html
  * The main HTML file for your app.
  * Note that Vite uses this file as the entry point, not `src/index.js` or `src/main.js` like other bundlers.
  * The `<script type="module" src="src/main.js"></script> tag links to your Javascript entry file.

* src/
  * The main directory for your project's source code.
  * Contains your `main.js` entry file and other components, assets and modules.
* vite.config.js
  * The configuration file for Vite. (Optional unless you need to customize the setup).
* package.json
  * Holds project metadata and scripts:
    * `scripts` contains commands like `npm run dev`, `npm run build`
    * `devDependencies` lists the dependencies that Vite uses in development.

### Step 4: Test Hot Module Replacement(HMR)
One of Vite's best features is Hot Module Replacement (HMR). It instantly updates your page in the browser without a full refresh when you change files. Lets test it.

### Setp 5: Explore Basci Styling
To add styles, let's create a new CSS file and include it in your project
1. Inside the `src` folder, create a file name `style.css`
2. Import the CSS file in your `src/main.js`
3. Save all files and check your browser-you'll see the button styles.

### Setp 6: Experiment With Public Assets
Vite provides a `public` directory where you can easily host static assets like images, videos, and more.
1. Create a `public` folder in your project root.
2. Place an image file inside `public`(e.g., logo.png);
3. Access the image in your HTML or Javascript using `logo.png`

## Day 3: Understanding Vite's Developoment Server and Basic Features
Today, you'll deepen your understanding of how Vite's development server works, explore the concept of Hot Module Replacement (HMR) in more detail, and begin to understand Vite's performance advantages.

### Goals for Day 3
1. Understand Vite's development server works.
2. Learn more about Hot Module Replacement in action.
3. Experiment with dependencies and ES-Module pre-building
4. Explore how Vite optimize the development experience.

### Step 1: How Vite's Development server works
The Magic Behind Vite
* Instant Dev Server start.
  * Unlike traditional bundllers like Webpack, vite starts instantly with no preprocessing or bundling of your files during development. It leverages native ES Modules in modern browsers.
  * When your browser requests a `.js` file, Vite delivers the raw files and resolves imports dynamically (on-demand)
* Hot Module Replacement(HMR)
  * Vite automatically detects file changes and updates only the affected parts of the app without reloading the entire page.
  * This makes development faster because the browser doesn't have to lose its state(e.g., actie input forms, scroll positions)

**How File Serving Works**
Here's a simplified breakdown:
1. You open `http://localhost:5173`.
2. Vite serves the `index.html` file (which references `src/main.js`).
3. The browser requests `main.js`, and Vite serves it directly.
4. When `main.js` imports other files (e.g., CSS, JS modules), Vite processes and serves only what is needed.

**Tasks Observe File Serving**
1. Run your Vite Project `npm run build`
2. Open `http://localhost:5173` in your browser
3. Open developer tools 
  * Check the Network tab.
  * Refresh the page and observe how files like `index.html`, `main.js` dependencies, and assets are requested by the brwoser.

### Step 2: Experiment With Hot Module Replacement (HMR)
**What does HMR do?**
Whenever you save changes to a file (Javascript, CSS or even HTML), Vite Updates only the parts affected by the change., without doing a full browser reload. This allow faster feedback during development.

**Tasks: Test HMR in Action**
Let's create an example to see HMR in action step by step.
1. Open your Vite Project's `src/main.js` file.
2. Update the file and save.
3. Open your app in the browser
4. Modify the `renderMessage` string in `src/main.js` e.g., changes `Hello Vite!` to `Hot Module Replacement Action` and save the file.
5. Observe how the browser instantly updates your app without refreshing.
6. Same like CSS file as well.

### Step 3: Dependency Pre-Bundling
**What is Dependency Pre-Bundling**
Vite automatically pre-bundles dependencies to optimize performance. When the development server starts:
1. Vite looks at your `package.json` and identifies dependencies.
2. It pre-bundles these dependencies using the ultra-fast esbuild tool.
3. This improves performance because all your app's imports are resolved faster.

**Tasks: Observes pre-bundling**
1. Run your project `npm run dev`
2. Check out the terminal 
  * Vite may show a list of dependencies pre-bundled.
  * for example something like 
  ```
    Pre-bundling dependencies:
    react, react-dom (common dev setup for React apps)
  ```
3. Open Developer tools and go to the Network tab.
  * Refresh the page and check for `node_modules` dependencies (e.g., `react.js`, `react-dom.js`) being loaded.

**Task: Add a Dependency**
Let's add a new dependency (e.g, `lodash`, a popular utility library) and observe how it behaves.
1. install `npm install lodash`
2. Add the following to `main.js`
```
import _ from 'lodash';

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = _.map(numbers, (n) => n * 2);

console.log('Original:', numbers);
console.log('Doubled:', doubledNumbers);

document.querySelector('#app').innerHTML = `
  <h1>Check the console for lodash map output!</h1>
`;
```
3. Save and observe the terminal 
  * Vite should mention that it is pre-bundling (lodahs)

4. Refresh your browser and check the console logs for output fro `lodash`

### Step 4: Explore Vite's Performance
**Why Vite is Fast**
1. esbuild: Vite uses esbuild (written in go) to pre-bundle dependencies, significantly faster than Javascript-based tools like Webpack or Rollup.
2. Native ES Modules: In development, Vite serves your javascript files as native ES Modules without bundling. This eliminates unnecessary overhead.
3. Lazy loading: Vite resolves file imports dynamically, only when needed.

**Task: Compare a Change Performance**
Try commenting out dependencies `lodash` and adding a new one (e.g., `axios` or any library) to observe how Vite efficiently handles pre-bundling.

## Day 4: Understanding and Configuring `vite.config.js`
Today, you'll dive into Vite's configuration file, `vite.config.js`. You'll learn how to customize your Vite project, set up path aliases for cleaner imports, and gain an introduction to Vite plugins to extend functionality. By the endof this lession, you'll confidently tweak Vite's configuration as per your requirements.

### Goals of the Day 4
1. Understand the purpose of the `vite.config.js` file.
2. Learn how to setup path aliases for cleaner imports.
3. Modify the default development server options (e.g., change port or host)
4. Explore how to add plugins for extending Vite's functionality.
5. Test changes in your project

### Setp 1: Understanding `vite.config.js`
The `vite.config.js` file is the heart of the Vite's configuration. It is where you can:
* Customize project settings like root directories, output directories, and ports.
* Define build rules for production.
* Add Plugins to extend functionality.
* Teak almost every aspect of how Vite works in the development and production phases.

**Default Configuration**
If you haven't already explored it, create the file `vite.config.js` in your project root (if it doesn't already exist for your setup)
A Simple `vite.config.js` file looks like this:
```
import { defineConfig } from 'vite';
export default defineConfig({
  // vite settings go here
});
```
`defaultConfig` is just a helper function to give you type hints and improved DX(Developer Experience)

### Step 2: Adding Path Aliases 
**What are path aliases?**
Path aliases let you replace long and repititive relative import paths (e.g., '../../components/Button') with shorter, easier-to-read aliases (like '@/components/Button')

**Modify `vite.config.js` to Add Aliases**
Let's configure an aliases for easier imports:
1. Install the Node.js `path` module (If it's not built into your environment):
`npm install path --save-dev`
2. Update your `vite.config.js` as follows:
```
import { defaultConfig } from 'vite'
import path from 'path'

export default defaultConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // '@' now points to './src'
    }
  }
})
```
**Test the Alias**
1. Change a relative import in your project to use the alias. For example:
* Convert this
```
import Button from '../../components/Button'
```
* To This
```
import Button from '@/components/Button'
```
2. Save and check if your app works as expected. If you're using HMR, you should not even to refresh the browser manually.

Path aliases can simplify imports in large projects, especially when you have deeply nested folder structure.

### Step 3: Configure the Development Server
The dev server can be easily customized through `vite.config.js`.

**Example Settings for the Vite Dev Server**
You can configure various server settings, like the port, host, proxy, and more.

Add the following inside `vite.config.js`

```
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,           // Sets the dev server to run on port 3000
    open: true,           // Automatically opens the browser when the server starts
    host: 'localhost',    // Default host (you can also use '0.0.0.0' to make it accessible on your local network)
    strictPort: true,     // Fails if the port is already in use (otherwise, Vite will try another port)

    // Example proxy setup:
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com', // Target backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Rewrite path
      },
    },
  },
});
```
