import React from "react";
import ReactDOM from "react-dom/client";

//Element
const title = (
    <h2 id="title" key="h2">
        Namaste React
    </h2>
);

//Functional Component - this is returning the JSX and this component has arrow function
const Title = () => (
    <h2 id="title" key="h2">
        Namaste React
    </h2>
);

// React Component
// - Functional - NEW - I will use this most of the time
// - Class Based Component - OLD

// Functional Components
// Name of component starts with capital letters - it's not mandatory, but it is good practice
// Functional component is a normal javascript function
// It is just returning a piece of jsx or react createElement

// <Title /> is known as Composing Components or Component Composition
const HeaderComponent = () => {
    return (
        <div>
            {title}
            <Title />
            {/*OR  {Title()}  Inside these outer curly braces it is javascript*/}
            {/* {We can write any piece of javascript code inside these curly braces} */}
            {console.log(1+2+5, "any js code")}
            <h1>Namaste React functional component</h1>
            <h2>This is a h2 tag</h2>
        </div>
    );
}; 

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //heading is react element
root.render(<HeaderComponent />) //HeaderComponent is a functional component
// OR root.render(HeaderComponent())
