const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);
console.log(heading); // returns an object

/* {
  $$typeof: Symbol(react.element),
  key: null,
  ref: null,
  type: "h1",
  props: {
    id: "heading",
    children: "Hello from React"
  },
  _owner: null,
  _store: {
    validated: false
  },
  _self: null,
  _source: null
} */

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(heading);
