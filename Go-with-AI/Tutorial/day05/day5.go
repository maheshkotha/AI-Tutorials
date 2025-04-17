package main

import "fmt"

func greet(name string) {
	fmt.Printf("Hello, %s!\n", name);
}
func add(a int, b int) (int, int) {

return a + b, a - b;
}

func calc(a int, b int)(sum int, product int) {
	sum = a + b
	product = a * b

	return // No need to explicitly return variables as names are used
}

func variadic(numbers ...int) {
	total := 0;
	for _, num := range numbers {
		total += num;
	}

	fmt.Printf("Total Sum: %d\n", total);
}

func applyOperation(a int, b int, operation func(int, int) int) int {
	return operation(a, b)
}

func ex1(name string) string {
	return "Hello " + name
}

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

func CelsiusToFahrenheit(celsius float64) float64 {
	return (celsius * 9 / 5) + 32
}

func FahrenheitToCelsius(fahrenheit float64) float64 {
	return (fahrenheit - 32) * 5 / 9
}

func main() {
	// add := func(a int, b int) int { return a + b}

	// result := applyOperation(5, 8, add)

	// fmt.Println("Result: ", result)

	// fmt.Println(ex1("Mahesh"));
	// fmt.Println(calculator(10, 5, "add"))
	// fmt.Println(calculator(10, 5, "sub"))
	// fmt.Println(calculator(10, 5, "mul"))
	// fmt.Println(calculator(10, 5, "divide"))

	fmt.Println("25 C to Fahrenheit: ", CelsiusToFahrenheit(25))
	fmt.Println("77 F to Celsius:", FahrenheitToCelsius(77))
	
}