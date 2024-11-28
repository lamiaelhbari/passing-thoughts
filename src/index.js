import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './CSS/style.css';



// ReactDOM.createRoot is used to create a root element for React to render into
ReactDOM.createRoot(
  document.querySelector("#app")// Selects the HTML element with the id of 'app' where the app will be rendered
).render(<App />)// Renders the App component inside the root element