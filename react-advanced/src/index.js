import React from "react";
import ReactDOM from "react-dom/client";

// CSS
import './index.css';
import App from './App';

// stateless functional component
// always returns JSX


function RootApp() {
  return (
      <App />
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RootApp />)
// ReactDOM.render(<BookList />, document.getElementById("root"));
