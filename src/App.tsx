import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ofertas from "./components/Ofertas";
import Frete from "./components/Frete";
import CarrouselVarious from "./components/CarrouselVarious";
import CarrouselAndes from "./components/CarrouselAndes";
import CrieConta from "./components/CrieConta";
import MeliPlus from "./components/MeliPlus";
import BeneficiosConteudo from "./components/BeneficiosConteudo";
import MobileFooter from "./components/MobileFooter";
import SingleProduct from "./components/SingleProduct";
import FourProducts from "./components/FourProducts";
import MobileHeader from "./components/MobileHeader";
import LoginPage from "./pages/LoginPage";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage></HomePage>}></Route>
                    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function HomePage() {
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
