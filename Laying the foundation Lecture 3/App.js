import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello World from React"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Uncomment the line below to render the heading element
// root.render(heading);

// To avoid this kind of mess we have JSX

// React Element
const jsxHeading =  (
<h1 className="root">Namaste react</h1>
);

// This is how we write code using jsx
console.log(jsxHeading);

root.render(jsxHeading);


// React Components
// Class Components
// Funtional Components


const HeadingComponent = ()=>{
    return <h1>Namaste Bitch</h1>;
};

// another way of wrting it

// const Heading = () => <h1>Hello MF</h1>;


// another eg

// const Headding = ()=> (
//     <div className="container">
//         <h1>You are awesome</h1>
//     </div>
// );

// root.render(<Headding/>);


// How to render a Func component inside another component or upper Heading component
// Know as Component Composition (means a func component in a func component)
const Title = ()=>(
    <h1>Namaste</h1>
);

const Headding = ()=> (
    <div className="container">
        <Title/>
        <Title></Title>
        {Title()}
        <h1>You are awesome</h1>
    </div>
);

// root.render(<Headding/>);



