const sqlite3 = require("sqlite3").verbose();
const path = require("node:path");

const db = new sqlite3.Database(path.join(__dirname, "sample.db"), sqlite3.OPEN_READWRITE, (error) => {
    if (error){
        return console.error(error);
    }
    console.log("Connected to database!");
})

/*
CRUD
CREATE
READ
UPDATE
DELETE
*/

const Timmy = {
    ID: "1234567",
    Username: "Timmy",
    Email: "timmy@failure.org",
    DOB: "2005-10-28"
}

function CallbackFunc(Error, Results){
    if (Error){
        console.error(Error);
        return;
    }
    console.log("Executed SQL Query successfully!");
    if (!Results) return;
    Results.forEach(data => console.log(data));
}

let sql = `
CREATE TABLE IF NOT EXISTS Users(
    ID TEXT PRIMARY KEY,
    username TEXT,
    Email TEXT,
    Dob TEXT 
);

`
let c = `ALTER TABLE Users
 RENAME COLUMN Email TO Emali;`

let x = `SELECT name FROM pragma_table_info("Users")`

let z = `INSERT INTO Users(ID, username, Emali, Dob)
VALUES ("APPLE", "apple123", "appletree.com.tw", 2028-7-8);`

let b = `SELECT * FROM Users;`

let a = `SELECT ID FROM Users WHERE username = 'apple123';`

let n = `UPDATE Users SET Emali ="appleyummy.com.tw" WHERE id = "APPLE";`
let o = `UPDATE Users SET Dob ="2030-07-08" WHERE id = "APPLE";`
let i = `DELETE FROM Users WHERE id = "APPLE";`

// db.all(c, CallbackFunc);
// db.all(x, CallbackFunc);
// db.all(b, CallbackFunc);
// db.all(a, CallbackFunc);
// db.all(n, CallbackFunc);
// db.all(o, CallbackFunc);
db.all(i, CallbackFunc);
// db.all(z, CallbackFunc);
db.exec(sql, CallbackFunc);                                       
