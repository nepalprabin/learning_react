import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always returns JSX
function Greeting() {
  return (
    <div>
      <h1>This is a React Component</h1>
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
