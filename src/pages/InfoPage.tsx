import MobileFooter from "../components/MobileFooter";
import MobileHeader from "../components/MobileHeader";
import '../scss/infoPage.scss'

function InfoPage() {
    return (
        <main>
            <MobileHeader></MobileHeader>
            <main className="info-page">
                <h1>Suas informações não estão seguras, por favor não use credenciais reais neste website</h1>
            </main>
            <MobileFooter></MobileFooter>
        </main>
    )
}

export default InfoPage;