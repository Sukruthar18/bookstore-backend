const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let books = [
  {
    id: 1,
    title: "AI Fundamentals",
    author: "John Smith",
    price: 20
  }
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const book = {
    id: books.length + 1,
    ...req.body
  };

  books.push(book);
  res.status(201).json(book);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});