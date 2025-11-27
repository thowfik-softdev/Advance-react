import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
  <h1 id="heading" tabIndex="5">
    Hello from JSX!
  </h1>
);

// React Functional Component
const HeadingComponent = () => {
  return <h1>React Functional Component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); // root.render(HeadingComponent());
