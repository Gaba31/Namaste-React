import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React"
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // console.log(heading); //returns a object
  root.render(heading);
  
  // How do you create this type of structure in react
  
  // <div id="parent">
  //     <div id="child">
  //          <h1></h1>
  //      </div>
  // </div>
  
  // const parent   = React. createElement("div",{id:"parent"},
  //     React.createElement("div",{id:"child"},
  //         React.createElement("h1",{},"Kya haal chal")
  //     )
  // );
  // console.log(parent);
  // root.render(parent);
  
  // how to add sibbling inside div id = child
  
  // const parent   = React. createElement("div",{id:"parent"},
  //     React.createElement("div",{id:"child"},
  //        [ React.createElement("h1",{},"Kya haal chal"),
  //         React.createElement("h2",{},"Yes sir"),
  //        ])
  // );
  // root.render(parent);
  
  // <div id="parent">
  //     <div id="child">
  //          <h1></h1>
  //           <h2></h2>
  //      </div>
  //     <div id="child2">
  //          <h1></h1>
  //           <h2></h2>
  //      </div>
  // </div>
  
  // how to create it like this
  
  const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "THis is namaste react"),
      React.createElement("h2", {}, "Yes sir"),
    ]),
    React.createElement("div", { id: "chi ld2" }, [
      React.createElement("h1", {}, "Kya haal"),
      React.createElement("h2", {}, "Yes"),
    ]),
  ]);
  root.render(parent);
  
  
  // To avoid this kind of mess we have JSX