import React from "react";
import ReactDOM from "react-dom";

// CSS
import './index.css';

// stateless functional component
// always returns JSX
function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (<div>
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/81-lFNjZorL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
      <h3>I'm Glad My Mom Died</h3>
      <h4>Jennette McCurdy</h4>
    </article>
  </div>)
}

ReactDOM.render(<BookList />, document.getElementById("root"));
