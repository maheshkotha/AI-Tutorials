package main

import "fmt"

func main() {
	age := 20

	age = 15
	if age >= 18 {
		fmt.Println("Your are an adult.")
	} else {
		fmt.Println("You are a minor")
	}

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

	if isEven := (6 % 2 == 0); isEven {
		fmt.Println("6 is an even number")
	}

	day := "Monday"
	switch day {
		case "Monday", "Wednesday", "Friday":
			fmt.Println("You have a class today")
		case "Sunday", "Saturday":
			fmt.Println("It's the Weekend!")
		default:
			fmt.Println("It's regular weekday")
	}

	switch {
	case age < 13:
		fmt.Println("Child")
	case age >= 13 && age < 20:
		fmt.Println("Teenager")
	default:
		fmt.Println("Adult")
	}

	for i := 0; i < 5; i++ {
		fmt.Println("i = ", i)
	}

	i := 0;
	for i < 5 {
		fmt.Println("i - ", i)
		i++
	}

	for {

		fmt.Println("i -- ", i)
		i++;
		if i == 8 {
			break;
		}
	}

	numbers := []int{1, 4, 10, 32, 43, 56}

	for index, value := range numbers {
		fmt.Printf("Index %d: value %d \n",index, value)
	}

	scores := map[string]int{"Alice": 90, "Bob": 85}

	for name, value := range scores {
		fmt.Printf("Name: %s and his Score: %d \n", name, value)
	}

	word := "GoLang"

	for index, char := range word {
		fmt.Printf("Index of %d is %c\n", index, char)
	}

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

	var table int;
	fmt.Print("Enter Table Number: ")
	fmt.Scanln(&table);
	for i := 1; i <= 10; i++ {
		fmt.Printf("%d * %d = %d\n", i, table, i * table)
	}

	// factorial of table
	var factorial int = 1;
	for i := 1; i <= table; i++ {
		factorial = factorial * i;
	}
	fmt.Println(factorial)

	// Prime Number

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
}

