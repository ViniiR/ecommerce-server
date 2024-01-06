import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import '../scss/product.scss'
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";
import ServerURL from "../config";

function formSubmit(event: FormEvent) {
    event.preventDefault()
    const time = new Date().getHours()
    const mensagens = [
        "um bom dia",
        "uma boa tarde",
        "uma boa noite",
    ];
    window.alert(`Sua compra seria realizada caso esse website não fosse fictício, tenha ${
        time < 12 ? mensagens[0] : time < 17 ? mensagens[1] : mensagens[2]
    }`);
}

function setItem(name: string, data: unknown[] | SPData | undefined) {
    if (!Array.isArray(data)) {
        data = [data]
    }
    const stringed = JSON.stringify(data)
    localStorage.setItem(name, stringed)
}

function getItem(name: string): SPData[] {
    return JSON.parse(localStorage.getItem(name) as string)
}

function Product() {
    const [data, setData] = useState<SPData>()
    useEffect(() => {
        axios.get(`${ServerURL}product/${window.location.href.split('/')[4]}`)
            .then(async (data) => {
                const resolvedData: SPData = {
                    title: data.data.product.title,
                    price: data.data.product.price,
                    percentOFF: data.data.product.percentOFF,
                    oldPrice: data.data.product.oldPrice,
                    image: await import(/* @vite-ignore */data.data.product.imagePath),
                    dividedPrice: data.data.product.dividedPrice
                }
                setData(resolvedData)
            }).catch((err) => {
                console.error(err)
            });
    }, []);

    function addToCart() {
        const cart = getItem('cart')
        const cartExists = cart ? cart!.length > 0 : false
        if (cartExists) {
            const cartArray: SPData[] = getItem('cart')
            cartArray.push(data!)
            setItem('cart', cartArray)
        } else {
            setItem('cart', data)
        }
    }

    return (
        <main>
            {
                data 
                ? 
                <section className="product-full-page">
                    <MobileHeader></MobileHeader>
                    <main className="product-body">
                        <h1>{data.title}</h1>
                        <div className="img-wrapper-full">
                            <img src={data.image.default} alt="" />
                        </div>
                        <section className="prices-full-sect">
                            <p className="full-old-price">R$ {data.oldPrice}</p>
                            <p className="full-main-price">
                                <strong>R$ {data.price}</strong>
                                <span>{data.percentOFF}% OFF</span>
                            </p>
                            <p className="full-divided-price">
                                em <span>10x R$ {data.dividedPrice} sem juros</span>
                            </p>
                            <a href="#">Ver os meios de pagamento</a>
                            <p className="oferta-do-dia-lie">
                                OFERTA DO DIA
                            </p>
                        </section>
                        <form className="comprar-button-product" onSubmit={formSubmit}>
                            <input type="submit" value="Comprar" />
                        </form>
                        <button className="adicionar-carrinho-product" onClick={addToCart}>
                            Adicionar ao carrinho
                        </button>
                    </main>
                    <MobileFooter></MobileFooter>
                </section> 
                :
                <section className="product-not-found">
                    nenhum produto encontrado
                </section>
            }
        </main>
    )
}

export default Product;