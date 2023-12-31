import { useEffect, useState } from 'react';
import logo from '../assets/logo.svg'
import InformeCep from '../components/InformeCep';
import '../scss/carrinhoCompras.scss'

function CarrinhoDeCompras() {
    const [data, setData] = useState<SPData[]>();

    useEffect(() => {
        // get the name of all cart products from localStorage cart
    }, []);

    return(
        <main className='cart-page'>
            <header className="cart-header">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </header>
            <InformeCep></InformeCep>
            <main>
                <form action="" method="post">
                    <p>preço total</p>
                    <input type="submit" value="Comprar" />
                </form>
                <ul>
                    {
                        data ? data.map((product, index) => (
                            <li key={index}>
                                <a href="#">
                                    <section className="img-big-wrapper">
                                        <img src={product.image.default} alt="" />
                                    </section>
                                    <div className="div-big-wrapper-description">
                                        <h3>{product.title}</h3>
                                        <p className="line-through-p">
                                            R$ {product.oldPrice}
                                        </p>
                                        <p className="main-price-p">
                                            R$ {product.price}
                                            <span>
                                                {product.percentOFF}% OFF
                                            </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        )) : <p>vazio</p>
                    }
                </ul>
            </main>
        </main>
    )
}

export default CarrinhoDeCompras;