import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always returns JSX
function BookList() {
  return (
    <div>
      <h1>This is a Book List interface (like a clone of Amazon book detail page.</h1>
    </div>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
