# Go - Lang
## Day 1
  - Go or Golang, is a modern programming language developed by Google. It is designed to be simple, efficient and scalable. Go is often used for system programming, clud application, web services and distributed systems.

### Key Features of Go
  * Compiled Language: Generates fast, optimized machine code.
  * Concurrency: Native support for handling multiple tasks with `goroutines` and `channels`
  * Garbage Collection: Automatic memory management.
  * Simplicity: Easy to read, write and understand.
  * Cross-Platform: Code once, run anyware (`Linux`, `Windows`, `MacOS`).

### Install Go
  - Visit [Golang](#https://golang.org/dl/)
  - Download the Go installer for your OS
  - Run the installer and follow instructions.
  - Verify installation: Open terminal and run `go version`
  - It should print someting like `go version go1.x.y`

### Set Up an IDE for Go
  - You can write Go code in any text editor, but using an IDE will make develpment easier.
  1. VS Code
  2. GoLand (Jet Brains)
  3. Alternatively: Use plain text editors like Sumlime, Vim...

### Write Your First Program "Hello World"
  #### Steps:
  1. Open your terminal and create a directory for your project.
  2. Create a go file: `touch main.go`
  3. Open main.go file and write following snippet
  ``` 
    package main
    import "fmt"
    func main() {
      fmt.Println("Hello World")
    } 
  ```
    * `package.main`: Defines the entry point of the application
    * `import "fmt"`: Imports the `fmt` package for formatted I/O(print functions, etc...)
    * `func main()`: The entry point function - code inside runs when the program starts.
    * `fmt.Println("Hello World")`: Prints text on screen.
  4. Run you program
    * Navigate to your program directory via terminal
    * execute the program using `go run main.go`
    * out put `Hello World`
  5. Build you Program
    * Compile your Go code into binary file:
      `go build main.go`
    * Run the binary 
      `./main

### Explore Go Toolchain
  #### Common Go Commands
  * `go run filename.go`: Run the program without compile
  * `go build filename.go`: Compile the program and generate a binary
  * `go fmt filename.go`: Formats the code (Enforces standardized formatting)

### Resources
  * Official Go Documentation: (https://go.dev/doc/)
  * Playground (Run Go programs online): https://go.dev/play/ 
  * Community: Join Gopher slack or explore Go forums.

### Challenge for Day 1
  - Build a simple program that prints the following
  ```
    My name is [your name].
    I am learing Go
  ```
  * Example Code
  ```
    package main
    import "fmt"

    func main() {
      fmt.Println("My name is Mahesh")
      fmt.Println("I am learning Go")
    }
  ```
## Day 2
  ### What you'll learn today
  * Packages and imports
  * Declaring Variables
  * Constants
  * Data Types
  * Basic Output with `fmt`

  ### Packages and Imports
  * In Go, all files belog to a package. A package is a way to group related code together. At the top of every file, we declare the package name. The `main` is special because it designates an executable application.

     Exampele
      ``` 
        package main
      ```
    * To include code from other packages, we use the `import` statement. Commonly used packages include:
      * * `fmt`: for printing and formating output
      * * `math`: for mathematical operations
      * * `time`: for working with dates and time
    * Example
    
      ```
        import (
          "fmt" // used for input/output
          "math" // used for math operations
        )
      ```
  ### Declaring Variables
  - Go has simple syntax for declaring variables with `var`, or you can use shorthand syntax `:=`. Here's how variable work in Go:
    ```
      package main
      import "fmt"
      func main() {
        var name string = "Mahesh"
        var age int = 35
        fmt.Println(name, age)
      }

    ```
    - Type Inference: You don't always need to specify the type explicitly.
    ```
      package main
      import "fmt"
      func main() {
        var country = "India" // Type is inferred as string
        var yearOfBirth = 1996
        fmt.Println(country, yearOfBirth)
      }
    ```

    * Shorthand Declaration (`:=`)
    * you can use shorthand declaration inside functions:
    ```
      package main
      import "fmt"
      func main() {
        city := "Vijayawada"
        population := 30_00_000
        fmt.Println(city, population)
      } 
    ```

    * Zero values in Go : Variables declared without an initial value are automatically set to their "zero value"
    - Numeric Types (`int`, `float`): 0
    - String Types (`string`): `""` (empty string)
    - Boolean Types (`bool`): `false`
    - Pointers: nil
  
    ```
      package main
      import "fmt"
      func main() {
        var age int
        var name string
        var isStudent bool
        fmt.Println(age, name, isStudent)  // output should be: 0 "" false
      }
    ```
  ### Constants
  - Constants are immutable once declared. Use `const` to define constants.
    ```
      package main
      import "fmt"
      func main() {
        const pi = 3.14
        const name = "Mahesh"
        fmt.Println(pi, name)
      }
    ```
    * They can't reassigned or modified
    * They must be a compile-time value (not derived from runtime computation)
  
  ### Go's Data Types
  - Primitive Types
    - Integer Types: `int`, `int8`, `int16`, `int32`, `int64`
    - Unsigned Integers: `uint`, `uint8`, `uint16`, `uint32`

    - Floating-Point types: `float32`, `float64`

    - String: Represent test, Strings are immutable (cannot be changed after creation)

    - Boolean: `true` or `false`

    * Example with Primitive Types
    ```
      package main
      import "fmt"

      func main() {
        var x int = 10
        var y float64 = 3.14
        var isAvailable bool = true
        var greeting string = "Hello, Go!"
        fmt.Println(x, y, isAvailable, greeting)
      }
      ```
  - Composite Types
    - In Go, you can create more complex data types:
    - `Arrays`: Fixed-length collections.
    - `Slices`: Dynamically sized collections.
    - `Maps`: Key-Value pairs.
    - `Structs`: Custome data structures.
  * * We'll explore these advanced types in detail later.

  ### Basic Output with the "fmt" Package 

  #### Printing Output
  - The `fmt` package provides several functions to print data:
    - `fmt.Println()`: Print and adds a new line
    - `fmt.Print()`: Prints without adding a new line.
    - `fmt.Printf()`: Prints formatted string (using placeholders like `%d`, `%s` etc).
    ```
    package main

    import "fmt"

    func main() {
    name := "Mahesh"
    age := 35
    // Basic output of fmt package
    fmt.Println("My name is", name, "and I am", age, "years old");
    fmt.Print("This is a line with out new line");
    fmt.Printf("My name is %s and i am %d years old", name, age); // formated string
    }
    ```
    - Formated placeholders
      - `%s`: String.
      - `%d`: Integer.
      - `%f`: Float.
      - `%.2f`: Float with 2 decimal points.
      - `%t`: Boolean.
  
  ###  Hands-On Practice
  - Exercise 1: Declare and Display variable
  - - Write a program to assign and display:
    * A string: Your name
    * An Integer: Your age
    * A float: your height in meters
    * A boolean: Whether you're currently studing (tru/false). Use `fmt.Println()` and `fmt.Printf()`
  - Exercise 2: Using Constants
  - - Write a program that uses constants to define.
    * A Mathematical constant (linke pi=3.14).
    * A descriptive constant (like "PromgrammingLanguage" = "Go").
  
  ### Challenge for Day 2
  - Write a program that asks for your name, age and favorite number from the user using `fmt.Println`. Then print: "My name is [Name], I am [age] years old, and my favorite number is [Number]."

  ```
  package main

  import "fmt"

  func main() {
    name := "Mahesh"
    age := 35
    // Basic output of fmt package
    fmt.Println("My name is", name, "and I am", age, "years old");
    fmt.Print("This is a line with out new line");
    fmt.Printf("My name is %s and i am %d years old", name, age); // formated string

    // task
    var myName string
    var myAge int
    var myFavoriteNumber int
    
    fmt.Println("")
    fmt.Print("Enter your Name: ");
    fmt.Scanln(&myName);

    fmt.Print("Enter you Age: ");
    fmt.Scanln(&myAge);

    fmt.Print("Enter your favorite Number: ")
    fmt.Scanln(&myFavoriteNumber)

    fmt.Printf("My name is %s, and I am %d years old, and my favorite number is %d", myName, myAge, myFavoriteNumber )
  }

  ```

## Day 3
  We will dive deeper into the fundamental data types in Go, including arrays, slices, maps and structs. These data types will enable you to handle, store, and manipulate collections of data efficiently.

  ---
  What we will learn today
  - Arrays
  - Slices
  - Maps
  - Structs (Introduction)

  ---
  ### Arrays in Go
  - An array in Go is a fixed-length collection of items of the same type. Once an array is created, its size cannot be changed.

  #### Syntax
  ```
    var arrayName [size]dataType
  ```
  #### Example
  - Declaring and Initializing an Array
  ```
    package main

    import "fmt"

    func main() {
      var numbers [3]int
      numbers[0] = 10
      numbers[1] = 20
      numbers[2] = 30

      fmt.Println("Numbers: ", numbers)
    }
  ```
  - Shortened Declaration
  ```
    package main

    import "fmt"

    func main() {
      cities := [3]string{"Hyd", "Vij", "Kkl"}
      fmt.Println("Cities: ", cities)
    }
  ```
  - Accessing Element
  * Use arrayName[index] to access elemnts.
  * Index starts from 0.
  ```
    package main

    import "fmt"

    func main() {
      cities := [3]string{"Hyd", "Vij", "Kkl"}
      fmt.Println("Cities: ", cities)

      fmt.Println("First city: ",cities[0])
      fmt.Println("Second city: ", cities[1])
    }
  ```
  - Iterating Through an Array
  * use a `for` loop to iterate through elements:
  ```
    package main

    import "fmt"

    func main() {
      numbers := [5]int{1, 2, 3, 4, 5}

      for i := 0; i < len(numbers); i++ {
        fmt.Println("Elements at index", i, ":", numbers[i] )
      }

      fmt.Println("Numbers: ", numbers)
    }
  ```
  * Arrays are fixed size.
  * Arrays cannot grow or shrink in Go.
  * To overcome this limitation, you can use slices.

  ### Slices in Go
  - A slice is more flexible, dynamic version of an array. Slices can grow or shrink and are commonly used in Go.
  #### Syntax
  ```
    sliceName := []dataType{values}
  ```
  #### Example - Declaring a slice
  ```
    package main
    import "fmt"

    func main() {
      fruits := []string{"Apple", "Banana", "Cherry"}
	    fmt.Println("Fruits Slice: ", fruits)
    }
  ```
  #### Creating Slice from an array
  ```
    package main
    import "fmt"

    func main() {
      numbers := [5]int{1, 2, 3, 4, 5}
      slice := numbers[1:4]
	    fmt.Println(slice)
      
	    fmt.Println("Length: ", len(slice))
	    fmt.Println("Capacity: ", cap(slice))
    }
  ```
  * `len(slice)`: Return the current length of the slice.
  * `cap(slice)`: Returns the capacity of underlying array.

  #### Adding elements to a Slice
  - Use the `append()` function to add elements:
  ```
      slice = append(slice, 8, 9)
	  fmt.Println("Updated Slice: ", slice)  // output: Updated Slice:  [2 3 4 8 9]
  ```
  #### Iterating Through a Slice
  - you can use `for` or `for range`:
  ```
    for i, ele := range slice {
      fmt.Printf("Index %d: %d \n", i, ele)
    }
  ```
  ### Maps in Go
  A `map` is a collection of key-value pairs, similar to dictionaries in Python or hash tables in other languages.
  #### syntax
  ```
  mapName := make(map[keyType]valueType)
  ```
  #### Examples
  * Declaring and Initializing a Map
  ```
  package main
  import "fmt"

  func main() {
    studentGrades := map[string]int{"Alice": 90, "Bob": 85}
	  fmt.Println("Students Grades:", studentGrades)
  }
  ```
  * Adding and Updating Map Entries
  ```
  studentGrades := map[string]int{"Alice": 90, "Bob": 85}
  fmt.Println("Students Grades:", studentGrades)

  studentGrades["John"] = 80 // Add entry
  fmt.Println("Added John into StudentGrades: ", studentGrades)

  studentGrades["John"] = 95 // Update Entry
  fmt.Println("After update John entry, Students Grades: ", studentGrades)
  ```  
  * Retrieving Values
  ```
  sgrade, exists := studentGrades["abc"];

  if exists {
    fmt.Println("Abc's grade: ", sgrade)
  } else {
    fmt.Println("abc Not found")
  }
  ```
  * Deleting a key Use the `delete()` function:
  ```
  delete(studentGrades, "Alice")
  fmt.Println("Delet after Alice: ", studentGrades)
  ```
### Structs
  * A `Struct` is a composite data type that groups related fields together. Think of it was a way to create a custome data types.

  #### syntax
  ```
  type StructName struct {
    Field1 dataType
    Field2 dataType
  }
  ```
  #### Example
  ```
  type Person struct {
  Name string
  Age int
  }

  person1 := Person{"Alice", 25} // Create an instance of Person
  fmt.Println("Person1: ", person1)

  person2 := Person{"Bob", 35}
  fmt.Println("Person2: ", person2)
  ```
  #### Accessing Struct Fields
  ```
  fmt.Println("Person1 Name: ", person1.Name)
  fmt.Println("Person2 Name: ", person2.Name)

  fmt.Println("Person1 Age: ", person1.Age)
  fmt.Println("Preson2 Age: ", person2.Age)
  ```
### Hands-On Practice
  #### Exercise: Working with Arrays
  - Write a program to store the marks of 5 subjects in an array and calculate the total marks.
  ```
  subjects := [5]int{100, 89, 98, 79, 88}
  var total int;
  for i := 0; i < len(subjects); i++ {
    total += subjects[i]
  }

  fmt.Println("Total Marks: ", total)
  ```
  #### Modifying Slices
  * Write a program to take a slice of integers, and a few more integers using `append`, and then print the updated slice.
  ```
  tSlice := []int{3, 5, 7, 9, 11, 13, 15}
  fmt.Println("tSlice: ", tSlice)

  tSlice = append(tSlice, 17, 19, 21)
  fmt.Println("Updated tSlice: ", tSlice)
  ```
  #### Maps
  * Create a map to store names and phone numbers of your friends. Write a program to: 
    - Add a new entry.
    - Print the entire map.
    - Check if a friend's contact exists.
  ```
  phoneBook := map[string]int64{"malli": 1234567890}
  fmt.Println("Phone Book: ", phoneBook)

  // append new entry
  phoneBook["satya"] = 9876543210
  fmt.Println("Updated Phone book: ", phoneBook)

  satesh, exists := phoneBook["satesh"]

  if exists {
    fmt.Println("exists phone number: ", satesh)
  } else {
    fmt.Println("Name Not found")
  }

  fmt.Println("Phone book: ", phoneBook)
  ```
  #### Structs
  * Create a `Car` struct with fields like `Brand`, `Model`, and `Year`. Write a program to initialize a car struct and display its details.
  ```
  type Car struct {
    Brand string
    Model string
    Year int
  }

  // Create instance
  audi := Car{"Audi", "Model-1", 2025}
  fmt.Println("Audi Car Details: ", audi)

  bmw := Car{"BMW", "Model-2025", 2025}
  fmt.Println("BMW Car Details: ", bmw)
  ```

### Challenge of Day 3
- Build a program that maintains a list of students and their grades using maps. Allow the program to:
* Add a new Student
* Update an existing grade
* Display all students and grades.
```
  cGrades := make(map[string]int)

  // Add Students
  cGrades["Alice"] = 90
  cGrades["Bob"] = 80

  // Update Alice grad
  cGrades["Alice"] = 85

  // Print all students
  for name, grade := range cGrades {
    fmt.Printf("\nName: %s and grde: %d", name, grade)
  }
```
## Day 4
- Controlling the flow of your Go programming using `if`, `else`, `switch`, and `for` loops. Control structures are one of the most critical aspects of programming, enabling you to write dynamic and decision-based programs.
---

  * if-else statements
  * Switch statements
  * for loops 
  * nested loops
  * Loop control (break and continue)

  ### If-else Statements
  - The if-else statement is used to execute a block of code based on condition.
  #### syntax
  ```
  if condition {
    // code is executed if condition is true
  } else if anotherCondition {
    // code is executed if another condition is true
  } else {
    // code is executed if none of the conditions are true
  }
  ```
  #### Example
  * Basic If Statement
  ```
  package main

  import "fmt"

  func main() {
    age := 20

    if age >= 18 {
      fmt.Println("Your are an adult.")
    } 
  }
  ```
  * if-else
  ```
  age = 15
  if age >= 18 {
    fmt.Println("Your are an adult.")
  } else {
    fmt.Println("You are a minor")
  }
  ```
  #### if-else if-else
  ```
  score := 75
  if score >= 90 {
    fmt.Println("Grade A")
  } else if score >= 80 {
    fmt.Println("Grad B")
  } else if score >= 70 {
    fmt.Println("Grade C")
  } else {
    fmt.Println("Grade D")
  }
  ```
  #### Short Statement in if
  * You can include a short statement right before the condition.
  ```
  if isEven := (6 % 2 == 0); isEven {
    fmt.Println("6 is an even number")
  }
  ```
  ### Switch Statements
  - The switch statement is a cleaner way to write multiple `if-else if` condition.
  #### syntax
  ```
  switch variable {
    case value1: 
      // code to execute if variable == value1
    case value2:
      // code to execute if variable == value2
    default:
      // code to execute if none of the values match
  } 
  ```
  #### Example
  ```
  day := "Monday"
  switch day {
    case "Monday", "Wednesday", "Friday":
      fmt.Println("You have a class today")
    case "Sunday", "Saturday":
      fmt.Println("It's the Weekend!")
    default:
      fmt.Println("It's regular weekday")
  }
  ```
  - Switch with condition: you can use `switch` with a conditon which works like chained `if` statements.

  ```
  switch {
  case age < 13:
    fmt.Println("Child")
  case age >= 13 && age < 20:
    fmt.Println("Teenager")
  default:
    fmt.Println("Adult")
  }
  ```
  ### For loop
  - Go has one looping construct: `for`. It can be uses as a traditional loop, a range-based loop, or infinite loop.
  #### Traditional for loop
  ```
  for initialization; condition; post {
    // code to execute
  }
  ```
  #### Example
  - Basic For loop
  ```
  for i := 0; i < 5; i++ {
    fmt.Println("i = ", i)
  }
  ```
  - While loop Equivalent: Go doesn't have `while` keyword, but you can achive the same result with `for`.
  ```
  i := 0;
  for i < 5 {
    fmt.Println("i - ", i)
    i++
  }
  ```
  - Infinite loop
  ```
  for {
    fmt.Println("i -- ", i)
    i++;
    if i == 20 {
      break;
    }
  }
  ```
  ### Range in For loop
  - The `range` keyword is used to iterate over arrays, slices, maps, or strings.
  #### Example
  - Iterating over a slice
  ```
  numbers := []int{1, 4, 10, 32, 43, 56}

  for index, value := range numbers {
    fmt.Printf("Index %d: value %d \n",index, value)
  }
  ```
  - Iterating over a Map
  ```
  scores := map[string]int{"Alice": 90, "Bob": 85}

  for name, value := range scores {
    fmt.Printf("Name: %s and his Score: %d \n", name, value)
  }
  ```
  - Iterating over a string
  ```
  word := "GoLang"

  for index, char := range word {
    fmt.Printf("Index of %d is %c\n", index, char)
  }
  ```
  ### Loop Control (Break and Continue)
  - Break Statement: Exit the loop immediately when `break` is encountered:
  ```
  for i := 1; i <= 10; i++ {
    if i == 5 {
      break;
    }
    fmt.Println(i)
  }
  ```
  - Continue Statement: Skip the current iteration and move to the next:
  ```
  for i := 1; i <=10; i++ {
    if i == 5 {
      continue;
    }
    fmt.Println(i)
  }
  ```
  ### Hands on Practice 
  **Exercise** Even or odd
  - Write a program that takes a number as input and prints whether the number is even or odd using an `if-else` statement.

  ```
  var number int
  fmt.Println("Enter a Number");
  fmt.Scanln(&number);
  if number % 2 == 0 {
    fmt.Println("Even");
  } else {
    fmt.Println("Odd");
  }
  ```
  - Write a program that takes a score (0-100) as input and prints the grade (`A`, `B`, `C`, `F`) using a switch Statement.
  ```
  var marks int;
  fmt.Print("Enter Marks: ");
  fmt.Scanln(&marks);

  switch {
  case marks >= 75 :
    fmt.Println("A")
  case marks >= 50 :
    fmt.Println("B")
  case marks >= 35 :
    fmt.Println("C")
  default:
    fmt.Println("F")
  }
  ```
  - Write a program to print the multiplication table for a number (from 1 to 10) using `foor` loop
  ```
  var table int;
  fmt.Print("Enter Table Number: ")
  fmt.Scanln(&table);
  for i := 1; i <= 10; i++ {
    fmt.Printf("%d * %d = %d\n", i, table, i * table)
  }
  ```
  - Write a program that calculates the factorial of a given number using a `for` loop.
  ```
  var factorial int = 1;
  for i := 1; i <= table; i++ {
    factorial = factorial * i;
  }
  fmt.Println(factorial)
  ```

  ### Challenge for Day 4
  Create a Prime Number Checker: Write a program that takes a number as input and checks if it is a prime number using a `for` loop and `if-else` lobic.
  ```
  var num int;
  var isPrime bool = true;

  fmt.Print("enter a number: ");
  fmt.Scanln(&num);

  if num < 2 {
    isPrime = false;
  } else {
    for i := 2; i * i <= num; i++ {
      if num % i == 0 {
        isPrime = false;
        break;
      }
    }
  }

  if isPrime {
    fmt.Println("Is Prime")
  } else {
    fmt.Println("Is Not a Prime")
  }
  ```

## Day 5
### Functions In Go
- Welcome to Day 5! Functions are a critical building block in any programming language, and Go provides powerful functionality to define, use, and reuse functions. Today, we'll dive into how functions work in Go, including defining functions, passing parameters, returning values, and working with advance function features like variadic parameters.

### What you will learn today
* What are Functions?
* Define Functions
* Parameters and Arguments
* Return Values
* Named Return Values
* Variadic Functions
* Anonymous Functions

### What Are Functions
- A function is a reusable block of code that perform a specific task. Functions allow you to organize code into logical pieces, makeit more readable and modular.

### Define Function
- In Go, functions must be defined inside a package, typically `main`. A function consists of:
  * **Keyword** `func`: indicates it's a function
  * **Name**: The name of the function
  * Opionally: 
    - Parameters
    - Return values
  * Syntax
  ```
  func functionName(parameters) returnType {
    // code to execute
  }
  ```
  **Example**
  ```
  package main

  import "fmt"

  func greet() {
    fmt.Println("Hello Go!");
  }

  func main() {
    greet(); // Call the function
  }
  ```
### Parameters and Arguments
Functions in Go can accept input values as parameters. Parameters are declare inside parameters after the function name.

#### Function with parameter
```
  package main

  import "fmt"

  func greet(name string) {
    fmt.Printf("Hello, %s!\n", name);
  }

  func main() {
    greet("mahesh"); // Call the function
  }
```
#### Multiple parameters
```
  func add(a int, b int) {
    fmt.Printf("The sum of %d and %d is %d \n", a, b, a + b)
  }

  func main() {
    add(5, 10)
  }
``` 
**Important Notes**
- Parameters are passed by value (a copy is sent to the function)
- The original variable in the caller is not modified.

### Return Values
Function can also return values. Use the return statement to send data back to the caller.

#### Function with return value
```
  func add(a int, b int) int {
    return a + b;
  }

  func main() {
    sum := add(1, 2)
    fmt.Printf("Sum: %d", sum)
  }
```
#### Multiple return values
```
  func add(a int, b int) (int, int) {
    return a + b, a - b;
  }

  func main() {
    sum, difference := add(1, 2)
    fmt.Printf("Sum: %d\n", sum)
    fmt.Printf("Difference %d \n", difference)
  }
```
#### Named return values
Named return values allow you to predefine the name of the variables that a function will return.
```
  func calc(a int, b int)(sum int, product int) {
    sum = a + b
    product = a * b

    return // No need to explicitly return variables as names are used
  }

  func main() {
    s, p := calc(1, 2)
    fmt.Printf("Sum: %d\n", s)
    fmt.Printf("Product %d \n", p)
  }
```

### Variadic Functions
Variadic functions can accept a variable number of arguments. Use `...` in the parameter list to define one.
```
  func variadic(numbers ...int) {
    total := 0;
    for _, num := range numbers {
      total += num;
    }

    fmt.Printf("Total Sum: %d\n", total);
  }

  func main() {
    variadic(1, 2, 3, 4)
  }
```
**Notes on the Variadic functions** 
- The type of the variadic parameter must be consistent.
- The `numbers` parameter is treated as a slice.

### Anonymous Functions
In Go, you can create anonymous functions, which are functions without a name, They are defined inline and often used for short-lived purposes like callbacks.
```
  func main() {
    func (message string) {
      fmt.Println(message)
    }("Hello from an anonymous function!")
  }
```
### Advanced function concept 
**Function as a Value**
Functions can be assigned to a variable
```
  func main() {
    add := func(a int, b int) int {
      return a + b
    }

    result := add(4, 5);
    fmt.Println("Sum: ", result)
  }
```
**Function as a parameter**
You can pass a function as an argument to another function:
```
  func applyOperation(a int, b int, operation func(int, int) int) int {
    return operation(a, b)
  }

  func main() {
    add := func(a int, b int) int { return a + b}

    result := applyOperation(5, 8, add)

    fmt.Println("Result: ", result)
  }
```
### Hands on Practice
**Exercise 1: Gereeting function**
Write a function that takes a `name` as an argument and return a greeting message like `Hello, [name]`

```
  func ex1(name string) string {
    return "Hello " + name
  }
  func main() {
    fmt.Println(ex1("Mahesh"));
  }
```
**Exercise 2: Simple Calculator**
Write afunction `calculator` that takes:
- Two numbers as input.
- An operatior (`add`, `subtract`, `multiply`, `divide`) as input 
- Return  the result of the operation.
```
  func calculator(a float64, b float64, operation string) float64 {
    switch operation {
    case "add":
      return a + b;
    case "sub":
      return a - b;
    case "mul":
      return a * b;
    case "divide":
      if b != 0 {
        return a / b;
      } else {
        fmt.Println("Division by Zero!...")
        return 0
      }
    default:
      fmt.Println("Unknown Operation")
      return 0
    }
  }
  func main() {
    fmt.Println(calculator(10, 5, "add"))
    fmt.Println(calculator(10, 5, "sub"))
    fmt.Println(calculator(10, 5, "mul"))
    fmt.Println(calculator(10, 5, "divide"))
  }
```
**Build a temprature Converter**
- Convert celsius to fahrenheit.
- Convert Fahrenheit to Celsius

```
  func CelsiusToFahrenheit(celsius float64) float64 {
    return (celsius * 9 / 5) + 32
  }

  func FahrenheitToCelsius(fahrenheit float64) float64 {
    return (fahrenheit - 32) * 5 / 9
  }

  func main() {
    fmt.Println("25 C to Fahrenheit: ", CelsiusToFahrenheit(25))
    fmt.Println("77 F to Celsius:", FahrenheitToCelsius(77))
  }
```

## Day 6

