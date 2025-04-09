package main

import "fmt"

func main() {
	name := "Mahesh"
	age := 35
	// Basic output of fmt package
	fmt.Println("My name is", name, "and I am", age, "years old");
	fmt.Print("This is a line with out new line");
	fmt.Printf("My name is %s and i am %d years old", name, age); // formated string



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
