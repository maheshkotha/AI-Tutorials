package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"golang.org/x/crypto/bcrypt"
	"golang-mysql-curd/database"
)

func main() {
	database.Connect()

	http.HandleFunc("/create", CreateUser)
}
