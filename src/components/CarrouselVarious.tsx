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
    const images = resolvedPromises.map((image) => image.default)
    const titles = [...promises.map(object => object.title)]
    const objects: scrollNode[] = images.map((image, index) => ({
        image,
        title: titles[index],
    }))
    return objects;
}

function CarrouselVarious() {
    const [scrollNodes, setScrollNodes] = useState<scrollNode[]>([]);

    useEffect(() => {
        async function fetchImages() {
            try {
                const loadedObjects = await loadImages();
                setScrollNodes([...loadedObjects])
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
                        scrollNodes.map(
                            (obj, key) => (
                                <li key={key}>
                                    <img src={obj.image} alt="" />
                                    <p>{obj.title}</p>
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
