import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export default function BookList() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        console.log(res.data.books);
        setBook(res.data.books);
      })
      .catch((error) => {
        console.log(error, "Error");
      });
  }, []);
  return (
    <div>
      <div className="books-page">
        {book.map((books) => (
          <div key={books.id} className="book-div">
            <h1>{books.title}</h1>
            <div className="book-img-des">
              <img src={books.imageLinks.thumbnail} alt={books.title} />
              <p>{books.description}</p>
            </div>
            <p>
              <strong>Authors:</strong> {books.authors.join(", ")}
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
