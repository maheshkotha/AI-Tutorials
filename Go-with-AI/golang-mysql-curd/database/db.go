package database

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func Connect() {
	// Configure the mysql connection
	dsn := "root:Mahesh@89@tcp(127.0.0.1:3306)/"
	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Failed to connect to MySql: ", err)
	}

	// Create a database if it doesn't exist
	_, err = db.Exec("CREATE DATABASE IF NOT EXISTS usercurd")
	if err != nil {
		log.Fatal("Failed to create Database: ", err)
	}

	fmt.Println("Database usercurd created or already exists")

	db.Close()

	dsn = "root:Mahesh@89@tcp(127.0.0.1:3306)/usercurd"
	DB, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	// Create the user table
	createTable := `
		CREATE TABLE IF NOT EXISTS user (
			id INT AUTO_INCREMENT PRIMARY KEY,
			name VARCHAR(100) NOT NULL,
			email VARCHAR(100) NOT NULL UNIQUE,
			password VARCHAR(255) NOT NULL
		);
	`
	_, err = DB.Exec(createTable)
	if err != nil {
		log.Fatal("Failed to create table: ", err)
	}

	fmt.Println("Table users created or already exists")
}

