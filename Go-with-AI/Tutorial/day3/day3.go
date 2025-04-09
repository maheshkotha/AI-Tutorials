package main

import "fmt"

func main() {
	numbers := [5]int{1, 2, 3, 4, 5}

	for i := 0; i < len(numbers); i++ {
		fmt.Println("Elements at index", i, ":", numbers[i] )
	}

	fmt.Println("Numbers: ", numbers)

	// shortened declaration
	cities := [3]string{"Hyd", "Vij", "Kkl"}
	fmt.Println("Cities: ", cities)

	fmt.Println("First city: ",cities[0])
	fmt.Println("Second city: ", cities[1])

	fruits := []string{"Apple", "Banana", "Cherry"}
	fmt.Println("Fruits Slice: ", fruits)

	slice := numbers[1:4]
	fmt.Println(slice)

	fmt.Println("Length: ", len(slice))
	fmt.Println("Capacity: ", cap(slice))

	slice = append(slice, 8, 9)
	fmt.Println("Updated Slice: ", slice)

	for i, ele := range slice {
		fmt.Printf("Index %d: %d \n", i, ele)
	}

	studentGrades := map[string]int{"Alice": 90, "Bob": 85}
	fmt.Println("Students Grades:", studentGrades)

	studentGrades["John"] = 80 // Add entry
	fmt.Println("Added John into StudentGrades: ", studentGrades)

	studentGrades["John"] = 95 // Update Entry
	fmt.Println("After update John entry, Students Grades: ", studentGrades)

	grade := studentGrades["Alice"] // Retrieve Alice's grade
	fmt.Println("Alice's grade: ",grade)

	sgrade, exists := studentGrades["abc"];
	
	if exists {
		fmt.Println("Abc's grade: ", sgrade)
	} else {
		fmt.Println("abc Not found")
	}

	delete(studentGrades, "Alice")
	fmt.Println("Delet after Alice: ", studentGrades)

	// Structures
	type Person struct {
		Name string
		Age int
	}

	person1 := Person{"Alice", 25} // Create an instance of Person
	fmt.Println("Person1: ", person1)

	person2 := Person{"Bob", 35}
	fmt.Println("Person2: ", person2)

	// Accessing struct fields
	fmt.Println("Person1 Name: ", person1.Name)
	fmt.Println("Person2 Name: ", person2.Name)

	fmt.Println("Person1 Age: ", person1.Age)
	fmt.Println("Preson2 Age: ", person2.Age)

	//Write a program to store the marks of 5 subjects in an array and calculate the total marks.

	subjects := [5]int{100, 89, 98, 79, 88}
	var total int;
	for i := 0; i < len(subjects); i++ {
		total += subjects[i]
	}

	fmt.Println("Total Marks: ", total)

	// Write a program to take a slice of integers, and a few more integers using `append`, and then print the updated slice.

	tSlice := []int{3, 5, 7, 9, 11, 13, 15}
	fmt.Println("tSlice: ", tSlice)

	tSlice = append(tSlice, 17, 19, 21)
	fmt.Println("Updated tSlice: ", tSlice)

	//   * Create a map to store names and phone numbers of your friends. Write a program to: 
	// - Add a new entry.
	// - Print the entire map.
	// - Check if a friend's contact exists.

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

	// Create a `Car` struct with fields like `Brand`, `Model`, and `Year`. Write a program to initialize a car struct and display its details.

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


	// 	Build a program that maintains a list of students and their grades using maps. Allow the program to:
	// * Add a new Student
	// * Update an existing grade
	// * Display all students and grades.
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
}
