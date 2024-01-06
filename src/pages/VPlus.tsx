import MobileFooter from '../components/MobileFooter';
import MobileHeader from '../components/MobileHeader';
import '../scss/vPlus.scss'

function VPLus() {

    function formSubmit() {
        window.alert("Obrigado porem nosso website não possui nenhuma forma de compra ou venda")
    }

    return (
        <main>
            <MobileHeader></MobileHeader>
            <main className='vp-page'>
                <section className='upper-vp-page'>
                    <p>V+</p>
                    <h1>Consiga frete grátis, filmes, séries e músicas</h1>
                    <div>
                        <img src="/src/assets/logo.svg" alt="" />
                        <p>FRETE GRÁTIS</p>
                    </div>
                </section>
                <section className='lower-vp-page'>
                    <ul>
                        <li>
                            <img src="/src/assets/combo-widgetl6@2x.jpg" alt="" />
                            <p>SEM CUSTO</p>
                        </li>
                        <li>
                            <img src="/src/assets/logoSquare@2x.png" alt="" />
                            <p>SEM CUSTO</p>
                        </li>
                        <li>
                            <img src="/src/assets/deezer-l6widget@2x.jpg" alt="" />
                            <p>SEM CUSTO</p>
                        </li>
                    </ul>
                    <section className='assine-vp-preço'>
                        <p>Assine por</p>
                        <strong>R$ 17 <sup>99</sup><span>/mês</span></strong>
                    </section>
                </section>
            </main>
            <section className='frete-section'>
                <h2>Frete grátis em milhões de produtos a partir de R$ 29</h2>
                <img src="/src/assets/shipping-img-por-mobile@2x.png" alt="" />
                <p>Você também pode escolher um dia da semana para receber suas compras com seu dia de entregas</p>
                <footer>
                    <div>V+</div>
                    <p>Busque este logo para encontrar o frete grátis quando você for V+.</p>
                </footer>
            </section>
            <form  className='vp-submit' onSubmit={formSubmit}>
                <input type="submit" value="Assinar o V+" />
            </form>
            <MobileFooter></MobileFooter>
        </main>
    )
}

export default VPLus;