import express from 'express'
import mysql from 'mysql'
import cors from 'cors'


const app = express();

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root123",
    database : "bookstore"
})


app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/books", (req, res) => {
    const  q = "SELECT * FROM books"

    db.query(q, (err, data) => {
        if(err) return  res.json(err);
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `dese`, `cover`, `price`)  VALUES(?)";

    const values = [
        req.body.title,
        req.body.dese,
        req.body.cover,
        req.body.price
    ]

    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("book has been created successfully")
    })
})


app.delete("/books/:id", (req,res) => {
    const q = "DELETE FROM books WHERE id = ? ";

    db.query(q, [req.params.id], (err, data) => {
        if(err) return res.json(err)

        return res.json("book has been deleted successfully status 200")
    })
})




app.listen(5000, () => {
    console.log("connected to the backend! congratulation")
})




