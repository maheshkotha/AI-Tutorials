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
  