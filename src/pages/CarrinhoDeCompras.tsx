import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import InformeCep from "../components/InformeCep";
import "../scss/carrinhoCompras.scss";
import axios from "axios";
import MobileFooter from "../components/MobileFooter";
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";

function getDuplicatesAmount(dataSet: Set<string>, array: SPData[]) {
    const occurrences: { [key: string]: number } = {};
    [...dataSet].forEach((title) => {
        let duplicateOccurrences = 0;
        for (const object of array) {
            if (object.title === title) {
                duplicateOccurrences++;
            }
            if (object.occurrences) {
                duplicateOccurrences = object.occurrences;
            }
        }
        occurrences[title] = duplicateOccurrences;
    });
    return occurrences;
}

function checkForDuplicates(array: SPData[]) {
    const dataSet = new Set<string>(array.map((item) => item.title));
    const occurrences: Record<string, number | undefined> = {};
    array.forEach((item) => (occurrences[item.title] = item.occurrences));
    for (const i in occurrences) {
        if (!occurrences[i]) {
            return getDuplicatesAmount(dataSet, array);
        }
    }
    return occurrences;
}

function formSubmit() {
    window.alert('Sua compra seria realizada caso esse fosse um website real')
}

//FIXME: when i add more products i believe specially from product.tsx page the products on cart get their occurrences messed up for example some had 3 instead of 1, goodluck
function CarrinhoDeCompras() {
    const [data, setData] = useState<SPData[]>([]);

    function calculatePrice() {
        function convertToUSNumberFormat(ptBRNumberString: string) {
            const cleanNumberString = ptBRNumberString.replace(/\./g, "").replace(",", ".");

            const parsedNumber = parseFloat(cleanNumberString);

            const formattedNumber = parsedNumber.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });

            const cleanNumber = formattedNumber.replace(/,/g, "").replace(",", "");
            return Number(cleanNumber);
        }
        data.forEach((item) => {
            if (item.occurrences!) {
                console.log(item);
            }
        });
        const converted = data.map((item: SPData) => ({
            price: convertToUSNumberFormat(item.price),
            occurrences: item.occurrences,
        }));
        const multiplied = converted.map((item) => Number(item.price) * item.occurrences!);
        const finalPrice = multiplied.reduce((acc, price) => acc + price, 0);
        //FIXME: value becomes NaN if its too large/there too many products occurrences
        return finalPrice.toLocaleString("pt-BR");
    }

    function changeAmount(product: SPData, increase: boolean) {
        const updatedProduct = Object.assign({}, product);
        const dataCopy: SPData[] = Object.assign([], data);
        if (increase) {
            updatedProduct.occurrences = Number(updatedProduct.occurrences!) + 1;
        } else {
            updatedProduct.occurrences = Number(updatedProduct.occurrences!) - 1;
        }
        if (updatedProduct.occurrences! < 1) {
            if (updatedProduct.occurrences! < 1) {
                updatedProduct.occurrences = 0;
            }
            dataCopy.splice(dataCopy.indexOf(product), 1);
        }
        dataCopy[dataCopy.indexOf(product)] = updatedProduct;
        //dataCopy has the correct value but data does not get it for some reason
        //occurrences become NaN
        setData(dataCopy);
        localStorage.setItem("cart", JSON.stringify(dataCopy));
    }

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart") as string);
        const query = checkForDuplicates(cart);
        axios
            .get("http://localhost:5000/query-data/cart", {
                params: {
                    query: query,
                },
            })
            .then((response) => {
                Promise.all(
                    response.data.map(async (element: UnresolvedSPData) => ({
                        title: element.title,
                        price: element.price,
                        oldPrice: element.oldPrice,
                        percentOFF: element.percentOFF,
                        dividedPrice: element.dividedPrice,
                        image: await import(/* @vite-ignore */ element.imagePath),
                        occurrences: element.occurrences,
                    }))
                ).then((data) => {
                    setData(data);
                });
            });
    }, []);

    return (
        <main className="cart-page">
            <header className="cart-header">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </header>
            <InformeCep></InformeCep>
            {data?.length > 0 ? (
                <main className="cart-body">
                    <form className="cart-buy" onSubmit={formSubmit}>
                        <p>
                            preço total: <span>R$ {calculatePrice()}</span>
                        </p>
                        <input type="submit" value="Comprar" />
                    </form>
                    <ul className="cart-items">
                        {data.map((product, index) => (
                            <CartProduct key={index} product={product} changeAmount={changeAmount}>
                                
                            </CartProduct>
                            // <li key={index}>
                            //     <a href="#">
                            //         <section className="img-big-wrapper">
                            //             <img src={product.image.default} alt="" />
                            //         </section>
                            //         <div className="div-big-wrapper-description">
                            //             <h3>{product.title}</h3>
                            //             <p className="line-through-p">R$ {product.oldPrice}</p>
                            //             <p className="main-price-p">
                            //                 R$ {product.price}
                            //                 <span>{product.percentOFF}% OFF</span>
                            //             </p>
                            //             <div>
                            //                 <button
                            //                     onClick={() => {
                            //                         changeAmount(product, true);
                            //                     }}
                            //                 >
                            //                     +
                            //                 </button>
                            //                 <output>{product.occurrences}</output>
                            //                 <button
                            //                     onClick={() => {
                            //                         changeAmount(product, false);
                            //                     }}
                            //                 >
                            //                     -
                            //                 </button>
                            //             </div>
                            //         </div>
                            //     </a>
                            // </li>
                        ))}
                    </ul>
                </main>
            ) : (
                <main className="cart-empty">
                    <div>
                        <img src="/src/assets/shopping-cart.webp" alt="" />
                    </div>
                    <h1>Seu carrinho de compras está vazio</h1>
                    <Link to="/search?q=allProducts">Verifique nossos produtos</Link>
                </main>
            )}
            <MobileFooter></MobileFooter>
        </main>
    );
}

export default CarrinhoDeCompras;
