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

## Day 3
### Variables and Constants in Typescript
Today, we'll focus on variables, constants and how they work in Typescript. You'll learn how to define and use variables effectively with type annotation and understand conceps like mutability, scope, and the importance of constant types.

* Understand the difference between `let`, `const` and `var`
* Use type annotations for variables and constants
* Learn about mutability in Typescript
* Explore best practice for defining variables.

### Step 1: let vs const vs var
Typescript uses the same variable declaration keyword as javascript `let`, `const`, and  `var`.
#### let
- Allow variables to e declared that can be reassigned later.
- Has `block scope`. This means the variable is only accessible inside the block where it's declared.
- Recommended when you expect the value to change.
```
let count: number = 0;
count = 5;
console.log(count)
```
#### const
- Used to declare constants (variable whose value cannot be reassigned after initialization).
- Has `block scope`.
- Best practice: Use `const` for values that will not change.
```
const pi: number = 3.14
// pi = 3.15   // Error Cannot assign to pi because it is a constant
console.log(pi)
```
#### var
- Declare variables that are function scoped.
- `var` does not respect block scope and is considered outdated.
- Avoiding using `var` in modern Typescript code.

```
var message: string = "Hello"
if (treu) {
  var message: string = "Hey"
}
console.log(message) // Hey
```
### Declare Variable with Type Annotations
When declaring a variable, you can use type annotations to specify the variable's type explicitly.
```
let age: number = 10; // Type number
let username: string = "mahesh" // Type string
let isActie: boolean = true  // Type boolean
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8] // Type number[]
```
**Typescript enforces strict type checking:**
```
let name: string = "Alice";
// name = 42  // Error Type 'number' is not assignable to type 'string'
```

### Type Inference
Typescript can automatically infer the type based on initial value assigned to the variable.
```
let city = "New York" // Typescript inference the type 'string'
let year = 2025 // Typescript inference the type 'number'
```
```
let country: string = "USA" // Explicit type annotation
let population = 331 // Inferred type
```
### Constants and Their Behavior
Constants (`const`) are immutable, meaning their value cannot be reassigned. However, if the constant is an object or array, you can modify its contents.

```
const settings = {
  theme: "light",
  language: "en",
};

settings.theme = "dark"  // Valid (modifying boject content)
settings.language = "fr"; // Valid
console.log(settings) // output {theme: "dark", language: "fr"}

// settings = {}  // Error: Cannot reassign a constant
```

### Scope of let and const
Typescript follows Javascript's scope rules:
**Block Scope**
- Variable declared with `let` or `const` are only accessable within the block they are defined in.
```
{
  let a = 10;
  const b = 20;
  console.log(a) // 10
  console.log(b)  // 20
}
console.log(a) // Error 'a' is not defined
console.log(b) // Error 'b' is not defined
```
**Function Scope**
- Variable declared with `var` can be accessed from outside the block (not recommended).
```
function doSomething() {
  var x = 10;
  console.log(x); // output 10
}

doSomething();
console.log(x) // Error: 'x' is not defined
```
### Tips for Working with Variables
- Use `const` for values that shouldn't change - this ensure immutability.
- Use `let` for variables whose value will change
- Avoid `var` -- stick to `let` and `const` for predictable behavior.
- Always include type annotations for complex or ambiguous types.
- Avoid relying too much on type inference for production-level code - explicit types make your code clearer add easir to debug.

### Practice Tasks
Try out the following exercises to strengthen your understanding.
* Declare the variables
  - A `string` variable named `user` with the value "Alice".
  - A `number` variable name `score` with the value 100.
  - A`boolean` variable name 'isActive` with the value true.
* Check a block scope variable using `let` inside a conditional block. Check if it is accessible outside the block.
* Define a immutable constant `items` as an array containing three strings: `"Apple"`, `"Orange"`, and `"banana"`. Modify its content by adding `"grape"`
* Write a typescript snippet that throws an error when type missmatch occurs:
```
let myage: number = 25;
myAge = "twenty-five" // Force the error
```
### Common Mistakes and Pitfalls
* Forgetting to use type annotations: While Typescript can infer types, explicit type declarations improve redability in large projects.
* Modifying a constant incorrectly
* Using `var` in modern Typescript: Avoid using `var` since its function-scoped behavior can lead to unexpected bugs.

## Day 4 : Objects and Arrays in Typescript
Today we'll focux on objects and arrays in Typescript, enableing you to define and work with more complex data structures. These are fundamentals in Typescript and give you tools to model real-world data effectively.

### Learning Objectives
- Understand how to define and annotate objects.
- Learn array types and operations.
- Explore readonly properties in Objects and arrays
- Understand and utilize Typescript tuples.

### Defining and Typing Objects
You can define objects and annotate their property types explicitly:
```
let user: {name: string; age: number; isActive: boolean} = {
  name: "Alice",
  age: 25,
  isActive: true
};
console.log(user.name) // Alice
```
**Optional Properties**
Use `?` to define optional properties in an object:
```
let product: {id: number; name: string; price?: number } = {
  id: 1,
  name: "Laptop"
};
console.log(product.price) // undefined
```
**Readonly Properties**
Typescript allows you to define properties as `readonly` meaning their values cannot be changed after initialization:
```
let userProfile: {readonly id: number; name: string} = {
  id: 101,
  name: "Bob"
}
// userProfile.id = 102 // Error: cannot assign to id because it is a read-only property
```
### Working with Arrays
Typescript allows you to define arrays with explicit types to ensure the array contains elements of a specific type.
**Define Array Types**
- Simple Array (Type followed by `[]`):
```
let scores: number[] = [ 10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
```
- Array using Generics (`Array<Type>`):
```
let fruits: Array<string> = ["Apple", "Banana", "Cherry"];
```
**Read Only Arrays**
To make an array immutable, use the `readonly` modifier:
```
const numbers: readonly number[] = [1, 2, 3];
numbers.push(4) // Error: Cannot modify a readonly array
```
**Multidimentional Arrays**
Multidimentional arrays can be typed by nesting array types:
```
let matrix: number[][] = [
  [1, 3],
  [2, 4],
];
console.log(matrix[0][1]); // Output: 3
```
**Union Type in Array**
You can define arrays that hold multiple types using union types:
```
let mixedArray: (number|string)[] = ["Alice", 10, "Bob", 20];
console.log(mixedArray)// Output: ["Alice", 10, "Bob", 20]
```
### Tuples
A Tuple is a fixed-length array with specific types for each position. Tuple allows you to strictly define the structure and type of data.
```
let userTuple: [string, number, boolean] = ["Alice", 23, true]
console.log(userTuple[0]) // output: Alice
```
**Accessing Tuple Values**
You can access tuple values like array elements:
```
console.log(userTuple[2]) // Output : true
```
**Optional Values in Tuples**
```
let logData: [string, number?] = [Error, 404];
console.log(logData[1]) // Output: 404
```
**Using Tuple with Destructuring**
You can destructure tuple into variables:
```
let userInfo: [string, number] = ["Alice", 24];
let [name, age] = userInfo;
console.log(name) // Alice
console.log(age) // 24
```
### Combining Objects and Arrays
You can work with objects and arrays together to model complex data.
**Example 1: Arfray Of Objects**
```
let users : {name: string, age: number}[] = [
  {name: "Alice", age: 24},
  {name: "Bob", age:32},
];
console.log(users[1]) // Output: {name: "Bob", age: 32}
```
**Example 2: Objects with Array Properties**
```
let team: {name: string, members: string[]} = {
  name: "Developers",
  members: ["Alice", "Bob", "Charlie"],
};
console.log(team.members) // Output: ["Alice", "Bob", "Charlie"]
```
### Practice Tasks
Try the following exercises to build your understanding:
1. Create an object that represents a car with the following properties:
  * `brand` (string)
  * `model` (string)
  * `year` (number)
  * `features?` (optional array of strings)
2. Define an array of objects where each object represents a `student` with `name` (string), and `grade` (number).
3. Create tuple to represent a blog post with the following data:
  * `title` (string),
  * `views` (number),
  * `published` (boolean)
4. Create a readonly array containing three favorite colors.
5. Write a function that accepts an array of `{id: number, name: string}` and returns a string array of the names.

### Common Mistakes
1. Mixing Types in an Array Without Union Types:
```
let values: string[] = [1, "Alice"] // Error: Type "number" is not assignable to type 'string'
```
2. Using Arrays in Place of Tuples: Arrays can hold a variable number of elements, so tuples should be used when a fixed length and type are required.
3. Modifying Readonly Arrays or Properties:
```
const nums: readonly number[] = [1, 2, 3];
num.push(4) // Error: Cannot modify a readonly array
```
## Day 5: Functions in Typescript


