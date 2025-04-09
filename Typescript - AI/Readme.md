# Typescript

## Day 1
- Typescript is a superset of javascript developed by Microsoft
- It adds static typing and other features (such as interfaces, enums, etc) to Javascript.
- It helps developers catch errors at compile time rather than runtime.
- Typescript file (.ts) are transpiled into javascript files (.js) to be understood by browsers/Node.js

### Why Use Typescript?
- Typescript helps avoid bugs by verifying types during development.
- It makes your code more self-documenting.
- It enables developers to work faster with tool like Intellisense (auto-compiled and type-checking in editors like VS code)
- Scales better for larger projects due to better maintainability.

#### Step 1
* Make sure your system has Node.js installed. You can check this is by running.
```
node -v
npm -v
```
If Node.js is not installed, download and install it from [nodejs.org](https://nodejs.org/en)

Now install Typescript globally using npm:
```
npm i -g typescript
```
Verify the installation:
```
tsc -v
```
This will output the installed Typescript version.

#### Setp 2: Set up your first typescript project
1. Create a new folder for you project:
```
mkdir typescript-tutorial
cd typescript-tutorial
```
2. Create your first Typescript file:
```
touch index.ts
```
3. Write some Typescript code in `index.ts`

#### Step 3: Transpile Typescript to Javascript
- Tipescript needs to compile(transpiled) into Javascript to run. To do this:
- Run the Typescript compiler: `tsc index.ts`
- This will generate a file called `index.js`
- Now you can run the Javascript file using Node.js: node index.js

#### Step4: Typescript Playground






