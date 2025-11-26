import React from "react";
import ReactDOM from "react-dom/client";

//heading
const heading = React.createElement("h1", { id: "heading" }, "Hello React!");
console.log(heading); // return object

//JSX - HTML like or XML like syntax, JSX is not html inside js
const jsxHeading = <h1 id="heading">Hello from JSX!</h1>;
console.log(jsxHeading); // return object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
