import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';

// stateless functional component
// always returns JSX

const firstBook = {
  img: "https://m.media-amazon.com/images/I/81-lFNjZorL._AC_UL640_FMwebp_QL65_.jpg",
  title: "I'm Glad My Mom Died",
  author: "Jennette McCurdy"
}

const secondBook = {
  img: "https://m.media-amazon.com/images/I/91+NmjDsLOL._AC_UL640_FMwebp_QL65_.jpg",
  title: "Regretting You",
  author: "Colleen Hoover"
}

function BookList() {
  return (
    <section className="booklist">
      <Book 
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Beloved #1 bestselling author James Patterson delivers a thrilling novel about a teen caught between two worlds and the truths that could set her free—or trap her forever</p>
      </Book>

      <Book 
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (<div>
    <article className="book">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      {props.children}
    </article>
  </div>)
}

ReactDOM.render(<BookList />, document.getElementById("root"));
