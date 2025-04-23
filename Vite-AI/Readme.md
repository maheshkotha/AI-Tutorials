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

