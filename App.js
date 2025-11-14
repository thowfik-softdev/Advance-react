const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);
root.render(parent);

/* 
console.log(heading); // returns an object

{
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
