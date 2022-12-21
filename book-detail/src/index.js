import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';

// stateless functional component
// always returns JSX

const books = [
    {
    img: "https://m.media-amazon.com/images/I/81-lFNjZorL._AC_UL640_FMwebp_QL65_.jpg",
    title: "I'm Glad My Mom Died",
    author: "Jennette McCurdy"
    },
    {
      img: "https://m.media-amazon.com/images/I/91+NmjDsLOL._AC_UL640_FMwebp_QL65_.jpg",
      title: "Regretting You",
      author: "Colleen Hoover"
    } 
  ]


function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (<Book book={book}></Book>)
      })
    }
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props.book
  return (<div>
    <article className="book">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  </div>)
}

ReactDOM.render(<BookList />, document.getElementById("root"));
