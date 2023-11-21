import { MouseEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import InformeCep from "./InformeCep";
import HeaderMenu from "./HeaderMenu";
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

function MobileHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
        toggleMenu();
        const spans = Array.from(event.currentTarget.children);
        isMenuOpen ? closeAnimation(spans as HTMLElement[]) : openAnimation(spans as HTMLElement[]);
    };

    return (
        <>
            <header id="mobile-header">
                <section className="header-wrapper">
                    <img src="./src/assets/logo.png" alt="" id="logo" />
                    <div id="query-wrapper">
                        <div id="query-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" viewBox="0 0 24 24">
                                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                            </svg>
                        </div>
                        <input type="text" name="query" id="query" placeholder="Estou buscando" />
                    </div>
                    <button className={`hamburguer-menu`} onClick={handleButtonClick}>
                        <span id="first-span"></span>
                        <span id="second-span"></span>
                        <span id="third-span"></span>
                    </button>
                    <Link className="shopping-cart" to="/login">
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
