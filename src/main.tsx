import React from "react";
import ReactDOM from "react-dom/client";
// import {Menu, OfertasCarrousel, TextoFrete, CarrouselVariety, Andes, CriarConta, MeliRoot} from "./App.tsx";

import App from "./App";
import "./scss/styles.scss";

const root = document.querySelector('#root');

ReactDOM.createRoot(root!).render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
);
