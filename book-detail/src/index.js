import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import './index.css';

// stateless functional component
// always returns JSX

const books = [
    {
      id:1,
      img: "https://m.media-amazon.com/images/I/81-lFNjZorL._AC_UL640_FMwebp_QL65_.jpg",
      title: "I'm Glad My Mom Died",
      author: "Jennette McCurdy"
    },
    {
      id:2,
      img: "https://m.media-amazon.com/images/I/91+NmjDsLOL._AC_UL640_FMwebp_QL65_.jpg",
      title: "Regretting You",
      author: "Colleen Hoover"
    } 
  ]


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

const Book = (props) => {
  const {img, title, author} = props
  return (<div>
    <article className="book">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  </div>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />)
// ReactDOM.render(<BookList />, document.getElementById("root"));
