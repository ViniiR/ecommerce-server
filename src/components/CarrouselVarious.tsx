import { useEffect, useState } from "react";
import "../scss/various.scss";

async function loadImages() {
    const promises = [
        {
            image: import("../assets/home_row_mercado_pago_carousel_mobile.webp"),
            title: "Mercado Pago",
        },
        {
            image: import("../assets/home_row_ofertas_carousel_mobile.webp"),
            title: "Ofertas",
        },
        {
            image: import("../assets/home_row_armchair_carousel_mobile.webp"),
            title: "Lar",
        },
        {
            image: import("../assets/home_row_best_sellers_carousel_mobile.webp"),
            title: "Mais vendidos",
        },
        {
            image: import("../assets/home_row_celulares_carousel_mobile.webp"),
            title: "Celulares",
        },
        {
            image: import("../assets/home_row_computacion_carousel_mobile.webp"),
            title: "Computação",
        },
        {
            image: import("../assets/home_row_moda_carousel_mobile.webp"),
            title: "Moda",
        },
        {
            image: import("../assets/home_row_supermercado_carousel_mobile.webp"),
            title: "Mercado",
        },
        {
            image: import("../assets/home_row_tv_carousel_mobile.webp"),
            title: "Televisores",
        },
        {
            image: import("../assets/home_row_vehiculos_carousel_mobile.webp"),
            title: "Veículos",
        },
        {
            image: import("../assets/home_row_ver_mas_carousel_mobile.webp"),
            title: "ver mais",
        },
    ];
    const resolvedPromises = await Promise.all(
        promises.map(
            (promiseObj) => promiseObj.image
        )
    );
    const titles = [...promises.map(object => object.title)]
    return {resolvedPromises, titles};
}

function CarrouselVarious() {
    const [images, setImages] = useState<string[]>([]);
    const [titles, setTitles] = useState<string[]>([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const loadedObject = await loadImages();
                const loadedObjectArray = loadedObject.resolvedPromises.map(image => image.default);
                setImages(loadedObjectArray);
                setTitles(loadedObject.titles)
            } catch (err) {
                console.error("Error loading images:", err);
            }
        }

        fetchImages();
    }, []);

    return (
        <>
            <section className="various-carrousel-wrapper">
                <ul className="various-carrousel">
                    {
                        images.map(
                            (image, key) => (
                                <li key={key}>
                                    <img src={image} alt="" />
                                    <p>{titles[key]}</p>
                                </li>
                            )
                        )
                    }
                </ul>
            </section>
        </>
    );
}

export default CarrouselVarious;
