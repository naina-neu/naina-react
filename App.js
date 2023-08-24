import React from "react";
import ReactDOM from "react-dom";

// React.createElement => ReactElement => Object => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// JSX - is not HTML in JS but HTML like syntax
// JSX (traspiled before it reaches the JS) - parcel - babel
// JSX => Babel transpiles it to React.createElement => ReactElement =>  Object => HTMLElement(render)
// Attributes in JSX is in Camel Case
const Title = () => (
  <h1 id="heading" className="head" tabIndex="1">
    Namaste React using JSX
  </h1>
);

const elem = <span>React Element</span>;
// React Component
// Class Based Component - OLD
// Functional Component - NEW
const HeadingComponent = () => {
  return <h1>Namaste React Functional Component 1</h1>;
};

const number = 10000;
// Component Composition
const HeadingComponent2 = () => (
  <div id="container">
    <Title />
    <h2>
      {number}
      {Title}
      {elem}
      {console.log("fsasdfsdfasdfsd")}
    </h2>
    <h1>Namaste React Functional Component 2</h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
