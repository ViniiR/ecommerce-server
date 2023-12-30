import logo from '../assets/logo.svg'
import '../scss/carrinhoCompras.scss'

function CarrinhoDeCompras() {
    return(
        <main className='cart-page'>
            <header className="cart-header">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </header>
        </main>
    )
}

export default CarrinhoDeCompras;