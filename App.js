import React from "react";
import ReactDOM from "react-dom/client";


const h1 = React.createElement("h1", { id: "title1" }, "Namaste React1");
const h2 = React.createElement("h2", { id: "title2" }, "Namaste React2");
const h3 = React.createElement("h3", { id: "title3" }, "Namaste React3");
const heading = React.createElement("div", { id: "container" }, [h1, h2, h3]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);