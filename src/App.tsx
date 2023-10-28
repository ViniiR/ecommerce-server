import { useState } from "react";
import InformeCep from "./components/InformeCep";
import Ofertas from "./components/Ofertas";
import Frete from "./components/Frete";
import CarrouselVarious from "./components/CarrouselVarious";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            
        </>
    );
}

export function Menu() {
    return (
        <>
            <InformeCep></InformeCep>
        </>
    )
}

export function OfertasCarrousel() {
    return (
        <Ofertas></Ofertas>
    );
}

export function TextoFrete() {
    return (
        <Frete></Frete>
    );
}

export function CarrouselVariety() {
    return (
        <CarrouselVarious></CarrouselVarious>
    );
}

export default App;
