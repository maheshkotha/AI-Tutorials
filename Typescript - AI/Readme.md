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
Before diving deeper into Typescript concepts, spend a little time experimenting with the Typescript **Playground:** [Typescript Playground](https://www.typescriptlang.org/play)

You can write Typescript code directly in the Playground and see its javascript output live.

Example code to try in the playground.
```
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(5, 10)); // Output: 15
```
#### Quick Task: Convert Javascript to Typescript
```
let message = "Hello World!";
console.log(message)
```
convert to typescript
```
const message: string = "Hello World!";
console.log(message)
```

## Day 2
You'll explore the **type annotations,**  which from the backend of Typescript's static typing system. Type annotations help you define and enforce types explicitly, making your code more predictable and easier to debug.

### Whta are Type Annotations
Type annotations allows you to explicitly define the type of variable, function argument, or return value in Typescript. 
#### Example:
```
let message: string = "Hello Typescript";
```
Here the type annotation `: string` enforces that `message` only holds a string value.

Types are checked at compile time, and Typescript will generate an error if a mismatch occurs.

- Understanding the basic types (`number`, `string`, `boolean`, etc.).
- Learn the difference between `explicit types` and `type inference`
- Apply types to variable, constants, and function parameters/return values.

### Step 1: Basic Types in Typescript
Here are some commonly used types in Typescrip:
#### Number
```
let age: number = 25;
let pi: number = 3.14
```
#### String
```
let name: string = "Mahesh"
let greeting: string = `Hello ${name}`;
```
#### Boolean
```
let isOnline: boolean = true;
let isAdmin: boolean = false;
```
#### Any
- The `any` type disables type checking and allow any value.
```
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;
```
- use this sparingly; it defeats the purpose of Typescript's static typeing.

#### Void
Represents no value. Often used for function that don't return anythind.
```
function logMessage(message: string) {
  console.log(message);
}
```
#### Null or Undefined
- `null` and `undefined` are their own types in Typescript and are rarely used explicitly.
```
let a: null = null
let b: undefined = undefined;
```
### Explicit Types vs Type Inference
**Explicit Types**  You declare the type explicity using `: <type>`:
```
let score: number = 100
let username: string = "mahesh"
```
**Type Inference**: Typescript can infer the type based on the value assigned. you don't need to declare the type explicitly.
```
let scroe = 100; // Automatically inferred as number
let username = "mahesh" // Automatically inferred as string
```
**Best Practice:** Use type annotation for clarity, especially when working on large projects.
you can rely on type inference for simple calss.

### Type Annotations with Functions
You can annotate function parameter and return types:
**Function With Annotatin**
```
function addNumber(a: string, b: string): number {
  return a + b;
}
console.log(addNumber(5, 10))  // Output: 15
```
**Optional Parameters:** Use `?` to indicate that a parameter is optional:
```
function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}` 
}
console.log(greet("John")); // Output Hello John
console.log(greet("John", 25));  // Output Hello John, age 25
```
**Default Parameters:** You can set a default value for a parameter:
```
function greet(name: string = "Guest"): string {
  return `Hello ${name}`
}
console.log(greet()) // Output Hello Guest
console.log(greet("John")); // output Hello John
```
### Working With Arrays
You can specify the type of array elements:
**Number Array**
```
let numbers: number[] = [1, 2, 3, 4, 5]
```
**String Array**
```
let fruits: string[] = ["Apple", "Banana", "Cherry"];
```
**Using Array Generics** You can also define arrays using generics:
```
let colors: Array<string> = ["Red", "Green", "Blue"];
```
### Practice Excercise
Try writing these Typescript snippets yourself:
1. Define a variable with an explicit `boolean` type that only holds `true` or `false`.
```
let isAdmin: boolean;
```

2. Create a function called `multiplyNumbers` that accepts two `numbers` parameters and returs their product
```
function multiplyNumbers(a: number, b: number):number {
  return a * b;
}
console.log(multiplyNumber(5, 10)) // Output 50
```

3. Define an array of string called `countries` with three values: "USA", "India", "Australia"
```
let countries: string[] = ["USA", "India", "Australia"];
```
### Common Mistake to avoid
**Type mismatch** If you assign the wrong type, Typescript will throw an error.
```
let isDone: boolean = "Yes"  // Error: Type 'string' is not assigned to type boolean
```
**Assign** `null` or `undefined` to a variable: By default, `null` and `undefined` cannot be assigned unless you use the `stricktNullCheck` option in `tsconfig.json`
```
let value: number = null; // Error: Type null is not assignable to type 'number'
```

