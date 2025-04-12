# Webpack
## Day 1
### What is Webpack? Basic overflow
The gole for today is to understand the functional concepts of webpack, its benefits, and the problems it solve in web development.

**What is Webpack**
- Webpack is a module bundler for modern Javascript applications.
- It takes your javascript, CSS, images, and other files and bundles them efficiently into optimized files for the browser.

**Why use Webpack**
- It manages dependencies for you app (e.g. javascript modules or imported assets).
- Helps you organize code into smaller modules.
- Optimize app performance by removing unnecessary code, compressing assets, tree-shaking, and more .
- Enable features hotreloading and dynamic imports.

**Key Webpack Concepts**
- Entry: The starting point of your application (e.g. index.js)
- Output: The bundled file that Webpack generates.
- Loaders: Transform files before bundling (e.g Transform JS, process CSS)
- Plugins: Extend Webpack's functcionality (e.g optimize builds, generate HTML)
- Mode: Controls build settings for development or production (`development`, `production`)

### Task for Today
#### Read/Watch Resources
- visit [Webpack](https://webpack.js.org/) 
- Watch [WebpackVideo](https://www.youtube.com/watch?v=MpGLUVbqoYQ)

#### Understand the problem Webpack solves
- Imagine a scenario:
  - Before webpack, developers had to manually juggle and link javascript and css file with `<script>` and `<link>` tag in HTML
  - If your app has dependencies (like React, Lodash or CSS preprocesser), manage them manually becomes complex.
  - Webpack automates this process and optimize files for development.

#### Setup your Environment
- Install Node.js (if not already installed). Download form [Node.js](https://nodejs.org/en)
- Install npm (Node Package Manager ships with Node.js)
- Verify installation
```
node -v
npm -v
```

#### Install Webpack (Optional for Beginner Testing)
- Open your terminal and create a new folder for your project.
```
mkdir webpack-learning
cd webpack-learning
npm init -y
```
- Install Webpack and Webpack CLI globally or locally
```
npm install webpack webpack-cli --save-dev
```
- You have installed Webpack, but we'll start using it properly in later days.

## Day 2
### Set Up Webpack and Build Your First Project
Today, You'll hands-on with Webpack by installing it and setting up a simple project from scratch. By the end of the day, you'll have a basic Webpack environment running and learn how to bundle files.

### What you will learn Today
- Installing Webpack 
  - Install Webpack and Webpack CLI on a project.
  - Understand the role of `package.json` for managing dependencies.
- Setting up a single Project
  - Learn how webpack processes an entry file and generates an output files.
- Running Webpack from the Command Line
  - Generate your first bundle file using `webpack` commands.

#### Initialize a New Project
- you'll create a project to learn Webpack step by step.
- Step 1: Open your terminal create project folder 
```
mkdir webpack-app
cd webpack-app
```
- Step 2: Initialize `package.json`
```
npm init -y
```
- This will create a `package.json` file in your project to manage your dependencies.

#### Install Webpack
You need two packages `webpack` and `webpack-cli`
- Install these two packages as development dependencies.
```
npm install webpack webpack-cli --save-dev
```
- What happens?
  - `webpack`: The core library for processing and bundling files.
  - `webpack-cli`: Provides command-line interface support to run Webpack commands.
- Verify the `node_modules` folder and `package.json` file have updated.

#### Set Up the Project structure.
Create the following files and folder structure inside your project.
- Create a `src` folder where the source files are located.
- Add an `index.js` file to `src/` with the following simple Javascript code:
```
console.log("Hello Webpack");
```
- Add a basic HTML file in the `dist` folder named `index.html`
* "Note: You'll be telling Webpack to output your bundled Javascript to a file named `main.js` (We will configure this soon)"

#### Run Your first Webpack build
- Now let's use Webpack to bundle your Javascript (`src/index.js`) into single file.

- In your terminal, run the following:
```
npx webpack --entry ./src/index.js --output ./dist/main.js --mode=development
```
*What is Does*
  - `--entry`: Specifies the file where Webpack starts bundling (`src/index.js`)
  - `--output`: Tells Webpach whre to output the bundled file (`dist/main.js`)
  - `--mode`: Specifies the environment (`development` or `prodution`).

*After Running the commands*
  - Open the `dist` folder in your project.
  - You'll see a new `main.js` file (The bundle output).
  - Open `dist/index.html` in your browser. Check the Console (DevTools) to see the "Hello Webpack".

#### Add a basic Webpack Config file
Typing long commands every time is tedious, so you'll create a Webpack configuration file to simplify things.
1. Create `webpack.config.js` in the project root
```
const path = require('path');

module.exports = {
  entry: '.src/index.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development'
}
```
*entry*: Specifies the entry file(`src/index.js`)
*output*: Defines the output bundle file and its folder path.
*mode* : Sets development or production mode.

2. Update your `package.json` to include a custom script for building the project.
```
"scripts: {
  "build": "webpack"
}
```

3. Now run the build process using:
```
npm run build
```
### Hands-On Testing 
- Make a change to `src/index.js` (e.g another console log or simple function)
```
function addTwoNumbers(a, b) {
  return a + b
}
```
- Run `npm run build` again
- Open `dist/main.js` and verify the changes in the browser's Console.

## Day 3
### Webpack CLI and Webpack Dev Server Basics
- Today, you'll learn how to streamline your development workflow by using Webpack CLI effectiely and configuring Webpack Dev Server for live reloading and an excellent local development experiment. By the end of the day, You'll have a fully functional development server running.

### What you'll learn today
- Running webpack effeciently using the CLI
- Automating your development process with Webpack Dev Server.
- Configuring automatic reloading (Hot Module Replacement - HMR)

### Understanding Webpack CLI
The Webpack CLI is a command-line interface that allows you to run Webpack commands quickly.
You've already used it with `npx webpack` or `npm run build`. Let's explore some common commands.

*What `npm run build` Does (using Webpack Config)*
- You define a script in `package.json`as `"build": "webpack"`. When you run this, 
Webpack:
  1. Uses `webpack.config.js` for configuration
  2. Bundles the file s defined in `entry` and generates the `output`.
  3. Process everything according to the `mode` (development or production).

**Common CLI Commands**
- Try running these commands in the terminal to explore their behaviors:
  1. To run Webpack in Development mode:
  ```
  npx webpack --mode=development
  ```
  2. To run webpack in production mode
  ```
  npx webpack --mode=prouction
  ```
  3. To watch for file changes and rebuild upon saving:
  ```
  npx webpack --watch
  ```
- This is fine, but Webpack Dev server is much more efficient.

### Install and Configure Webpack Dev Server
Webpack Dev Server creates a local web server for your project, automatically rebuilding and reloading your app in the browser when files change.

#### Install Webpack Dev Server
- Install Webpack Dev Server package as a development dependency:
```
npm install webpack-dev-server --save-dev
```
- After installation, you'll configure it to run in your project.

**Update `webpack.config.js`**
Add the `devServer` configuration section to `webpack.config.js` to define server options:

```
const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: "main.js", // Name of the output file
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  mode: 'development', // Set mode (development or production)
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')  // Save fire from dist directory
    },
    compress: true, // Enable gzip compression for faster loading
    port: 9000, // Run the server on localhost:9000
    open: true, // Automatically open the browser
  }
}
```
**Key Options in `devServer`**
  - `static`: Define the directory to serve static files from (`dist` in this case).
  - `compress`: Enable gzip compression for faster file serving.
  - `port`: Specifies the port number (default: 8080; hre we'll use 9000)
  - `open`: Automatically opens the browser upon starting the server.

**Add a Dev Server script**
Update `package.josn` to include a new script for running the dev server.
```
"scripts": {
  "build": "webpack",
  "start": "webpack serve"
}
```
- `webpack serve`: Runs Webpack Dev Server.

**Run Webpack Dev Server**
- Start the server by running:
```
npm run start
```
- what happens:
1. The server starts and servers the contents of the `dist/` folder at `http://localhost:9000`
2. Your browser opens automatically (due to the `open: true` option)
3. The app is running, and any changes to your code will automatically rebuild the bundle and reload the browser.


### Adding Live Reloading/Hot Module Replacement (HMR)
Hot Module Replacement (HMR) allows Webpack Dev Server to reload only the changed modules insted of reloading the entire page.

1. **Enable HRM**
Modify your `webpack.config.js` to include the `hot` option in `devServer`:
```
devServer: {
  static: {
    directory: path.join(__dirname, 'dist')  // Save fire from dist directory
  },
  compress: true, // Enable gzip compression for faster loading
  port: 9000, // Run the server on localhost:9000
  open: true, // Automatically open the browser
  hot: true, // Enables Hot Module Replacement
}
```
2. **Test Hot Module Replacement**
  - Start the dev server:
  ```
  npm run start
  ```
  - Modify the `src/index.js` file with new code (for example):
  ```
  console.log("Hello Webpack Dev Server")
  document.body.innerHTML = `<h1>Hot Module Replace ment is Live</h1>`;
  ```
  - Save your changes Observe that:
    * The page updates instantly without a full reload.
    * The new message or DOM changes apper immediately in the broser.

### Hands-On Experiment
- Add new files or dependencies to test how Webpack Dev Server handles them.
  * Add a new `style.css` file in `src`:
  ```
  body {
    background-color: lightblue
  }
  ```
  * Import it in `src/index.js`:
  ```
  import './styles.css'
  console.log("Webpack Dev Server with CSS");
  ```
  * Install support for CSS files by adding:
  ```
  npm install css-loader style-loader --save-dev
  ```
  * Update `webpack.config.js` to handle CSS files:
  ```
  module: {
    rules: [
      {
        test: /\.css$/
        use: ['style-loader', 'css-loader'],  // Load and inject CSS files
      }
    ]
  }
  ```
  Resatart the Dev Server with `npm run start` and test the changes.

