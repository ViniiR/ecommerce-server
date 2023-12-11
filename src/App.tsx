import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import CriarContaPage from "./pages/CriarContaPage";
import BemVindo from "./components/BemVindo";
import ProtectedRoutes from "./components/ProtectedRoutes";
import CarrinhoDeCompras from "./pages/CarrinhoDeCompras";

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route path="/crie-sua-conta" element={<CriarContaPage />}></Route>
                    <Route path="/bem-vindo" element={<BemVindo ></BemVindo>}></Route>
                    <Route element={<ProtectedRoutes/>}>
                        <Route element={<CarrinhoDeCompras/>} path="/carrinho"></Route>
                    </Route>
                </Routes>
            </Router>
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
