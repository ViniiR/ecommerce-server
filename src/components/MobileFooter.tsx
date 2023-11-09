import '../scss/mobileFooter.scss'
import logo from '../assets/logo.png'

function MobileFooter() {
    return (
        <>
            <footer id='mobile-footer'>
                <section className="compre-venda">
                    <a href="https://play.google.com/store/apps/details?id=com.mercadolibre&hl=pt_BR">
                        <img src={logo} alt="" />
                        <p>Compre e venda com o app!</p>
                    </a>
                </section>
                <section className="footer-mobile-links">
                    <ul>
                        <li><a href="#">Minha conta</a></li>
                        <li><a href="#">Compras</a></li>
                        <li><a href="#">Histórico</a></li>
                        <li><a href="#">Ofertas do dia</a></li>
                        <li><a href="#">Favoritos</a></li>
                        <li><a href="#">Lojas oficiais</a></li>
                        <li><a href="#">Categorias</a></li>
                        <li><a href="#">Meli+</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Vender</a></li>
                    </ul>
                </section>
                <section className="crie-conta">
                    <a href="">Entre</a>
                    <a href="">Crie sua conta</a>
                </section>
                <footer className="terms-conditions">
                    <small>
                        <p>
                            Termos e condições Como cuidamos da sua privacidade Acessibilidade Informações sobre seguros Blog Afiliados Tendências
                        </p>
                        <p className="ltda-paragraph">
                            © 1999-2023 Ebazar.com.br LTDA.
                        </p>
                        <p className="faded-terms">
                            CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.
                        </p>
                    </small>
                </footer>
            </footer>
        </>
    );
}

export default MobileFooter;