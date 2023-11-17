import Ofertas from "./components/Ofertas";
import Frete from "./components/Frete";
import CarrouselVarious from "./components/CarrouselVarious";
import CarrouselAndes from "./components/CarrouselAndes";
import CrieConta from "./components/CrieConta";
import MeliPlus from './components/MeliPlus'
import BeneficiosConteudo from "./components/BeneficiosConteudo";
import MobileFooter from "./components/MobileFooter";
import SingleProduct from "./components/SingleProduct";
import FourProducts from "./components/FourProducts";
import MobileHeader from "./components/MobileHeader";

function App() {
    

    return (
        <>
            <MobileHeader></MobileHeader>
            <main>
                <Ofertas></Ofertas>
                <Frete></Frete>
                <CarrouselVarious></CarrouselVarious>
                <CarrouselAndes></CarrouselAndes>
                <CrieConta></CrieConta>
                <MeliPlus></MeliPlus>
                <SingleProduct></SingleProduct>
                <FourProducts></FourProducts>
                <BeneficiosConteudo></BeneficiosConteudo>
            </main>
            <MobileFooter></MobileFooter>
        </>
    );
}

export default App;
