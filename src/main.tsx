import React from "react";
import ReactDOM from "react-dom/client";
import {Menu, OfertasCarrousel, TextoFrete, CarrouselVariety} from "./App.tsx";
import "./scss/styles.scss";

const menuRoot = document.querySelector('#menu-root');

ReactDOM.createRoot(menuRoot!).render(
    <React.StrictMode>
        <Menu />
    </React.StrictMode>
);

const ofertasRoot = document.querySelector('#ofertas-do-dia-root');

ReactDOM.createRoot(ofertasRoot!).render(
    <React.StrictMode>
        <OfertasCarrousel></OfertasCarrousel>
    </React.StrictMode>
);

const freteRoot = document.querySelector('#frete-root');

ReactDOM.createRoot(freteRoot!).render(
    <React.StrictMode>
        <TextoFrete></TextoFrete>
    </React.StrictMode>
);

const variousRoot = document.querySelector('#carrousel-various-root');

ReactDOM.createRoot(variousRoot!).render(
    <React.StrictMode>
        <CarrouselVariety></CarrouselVariety>
    </React.StrictMode>
);