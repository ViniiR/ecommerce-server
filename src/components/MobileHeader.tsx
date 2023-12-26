import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import InformeCep from "./InformeCep";
import HeaderMenu from "./HeaderMenu";
import axios from "axios";
import "../scss/MobileHeader.scss";

function openAnimation(spans: HTMLElement[]) {
    const [span1, span2, span3] = spans;

    span1.style.transform = "translateY(15px)";
    spans.forEach((span) => (span.style.position = "absolute"));
    setTimeout(() => {
        span1.style.transform = "rotate(45deg)";
        span2.style.display = "none";
        span3.style.transform = "rotate(-45deg)";
    }, 2);
}

function closeAnimation(spans: HTMLElement[]) {
    const [span1, span2, span3] = spans;
    span1.style.transform = "rotate(0deg)";
    span2.style.display = "block";
    span3.style.transform = "rotate(0deg)";

    setTimeout(() => {
        span1.style.transform = "translateY(-10px)";
        span3.style.transform = "translateY(10px)";
    }, 200);
}

async function retrieveQueryData(inputValue: string){
    try {
        const res = await axios.get("http://localhost:5000/query-data", {
            params: {
                query: inputValue,
            },
        });
        return res.data;
    } catch (err) {
        console.error(err);
    }
}

function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [queryData, setQueryData] = useState<SPData[]>([])
    const inputRef = useRef<HTMLInputElement>(null);
    const rootProductsRef = useRef<HTMLDivElement>(null);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        toggleMenu();
        const spans = Array.from(event.currentTarget.children);
        isMenuOpen ? closeAnimation(spans as HTMLElement[]) : openAnimation(spans as HTMLElement[]);
    };

    useEffect(() => {
        function inputHandler(event: Event) {
            event.stopPropagation();
            const target = event.currentTarget as HTMLInputElement;
            const inputValue = target.value.trim();
            if (inputValue.length < 2) {
                setQueryData([])
                return;
            }
            async function resolveImages(products: UnresolvedSPData[]) {
                const resolved = await Promise.all(products.map(async (product: UnresolvedSPData) => ({
                    title: product.title,
                    price: product.price,
                    oldPrice: product.oldPrice,
                    percentOFF: String(product.percentOFF),
                    dividedPrice: product.dividedPrice,
                    image: await import(/* @vite-ignore */product.imagePath),
                })));
                setQueryData(resolved)
            }
            retrieveQueryData(inputValue)
                .then((data) => {
                    resolveImages(data);
                }).catch((err) => {
                    console.error(err);
                });
            
        }
        function focusHandler(event: FocusEvent) {
            event.stopPropagation();
            setIsInputFocused(true);
            event.target!.removeEventListener("input", inputHandler);
            event.target!.addEventListener("input", inputHandler);
        }
        function blurHandler(event: Event) {
            event.stopPropagation();
            setIsInputFocused(false);
        }
        if (inputRef && inputRef.current) {
            inputRef.current.removeEventListener("focus", focusHandler);
            inputRef.current.addEventListener("focus", focusHandler);

            inputRef.current!.addEventListener("blur", blurHandler);
        }
    }, [inputRef]);

    useEffect(() => {
        if (queryData) {
            rootProductsRef.current //
        }
    }, [queryData]);

    return (
        <>
            <header id="mobile-header">
                <section className="header-wrapper">
                    <img src="./src/assets/logo.png" alt="" id="logo" />
                    <div id="query-wrapper">
                        <div id="query-icon">
                            {!isInputFocused ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 24 24">
                                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                                </svg>
                            )}
                        </div>
                        <input type="text" name="query" id="query" placeholder="Estou buscando" autoComplete="off" ref={inputRef} />
                        <div className="input-results-root" ref={rootProductsRef}>
                            <ul>
                                {
                                    queryData ? queryData.map((product, index) => (
                                        <li key={index}>
                                            <a href="#">
                                                <section className="img-mini-wrapper">
                                                    <img src={product.image.default} alt="" />
                                                    </section>
                                                <div>
                                                    <h3>{product.title}</h3>
                                                    <p>R$ {product.price}
                                                        <span>{product.percentOFF}% OFF</span>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                    )) : null
                                }
                            </ul>
                        </div>
                    </div>
                    <button className={`hamburguer-menu`} onClick={handleButtonClick}>
                        <span id="first-span"></span>
                        <span id="second-span"></span>
                        <span id="third-span"></span>
                    </button>
                    <Link className="shopping-cart" to="/carrinho">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" style={{ fill: "rgba(67,67,67,1)" }}>
                            <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path>
                        </svg>
                    </Link>
                </section>
            </header>
            {isMenuOpen ? <HeaderMenu></HeaderMenu> : <InformeCep></InformeCep>}
        </>
    );
}

export default MobileHeader;
