import axios from "axios";
import { useEffect, useState } from "react";
import '../scss/product.scss'
import MobileHeader from "../components/MobileHeader";
import MobileFooter from "../components/MobileFooter";

function Product() {
    const [data, setData] = useState<SPData>()
    useEffect(() => {
        axios.get(`http://localhost:5000/product/${window.location.href.split('/')[4]}`)
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