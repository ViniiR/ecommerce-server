import "../scss/SearchPage.scss";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import { resolveImages, retrieveQueryData } from "../utils/utils";
import InformeCep from "../components/InformeCep";

function SearchPage() {
    const [queryData, setQueryData] = useState<SPData[]>([])

    useEffect(() => {
        const query = window.location.search;
        const index = query.indexOf('=') + 1;
        const queryString = query.substring(index);
        retrieveQueryData(queryString).then((response) => {
            resolveImages(response).then((data) => {
                setQueryData(data)
            })
        })
    }, []);

    return (
        <main className="search-page">
            <header className="search-header">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </header>
            <InformeCep></InformeCep>
            <main>
                <ul>
                    {queryData ? (
                        queryData.map((product, index) => (
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
                        ))
                    ) : (
                        <></>
                    )}
                </ul>
            </main>
        </main>
    );
}

export default SearchPage;
