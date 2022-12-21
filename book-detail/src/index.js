import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import './index.css';
import {books} from './books';
import Book from './Book';

// stateless functional component
// always returns JSX


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (<Book key={book.id} {...book}></Book>)
      })
    }
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)
// ReactDOM.render(<BookList />, document.getElementById("root"));
