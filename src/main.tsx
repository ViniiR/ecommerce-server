import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/styles.scss";

const root = document.querySelector('#root');

ReactDOM.createRoot(root!).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);
