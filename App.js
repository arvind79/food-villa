import React from "react"
import ReactDOM from "react-dom/client"

// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements

const heading = React.createElement(
    "h1",
    {
        id: "title",
        key: "h1"
    },
    "Heading 1"
)

// React.createElement => Object => HTML(DOM)

const heading2 = (
    <h2 id="title" key="h2">
        Namaste React
    </h2>
)

// JSX => React.createElement => Object => HTML(DOM)

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)