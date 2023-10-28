import "../scss/ofertas.scss";
import { useState, useRef, useEffect, useCallback,  } from "react";

function Ofertas() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState<string []>([]);
    const carrouselRef = useRef<HTMLUListElement | null>(null);
    // study this
    useEffect(() => {
        async function importImages() {
            const isLargecreen = window.innerWidth >= 1024;
            const importPromises = isLargecreen 
            ? [
                import("../assets/D_NQ_611349-MLA72385176019_102023-OO.webp"),
                import("../assets/D_NQ_647650-MLA72298609918_102023-OO.webp"),
                import("../assets/D_NQ_685600-MLA72200576413_102023-OO.webp"),
                import("../assets/D_NQ_759127-MLA72300974920_102023-OO.webp"),
                import("../assets/D_NQ_805332-MLA72321836084_102023-OO.webp"),
                import("../assets/D_NQ_867249-MLA72362976911_102023-OO.webp"),
            ]
            : [
                import("../assets/mobile1 (1).webp"),
                import("../assets/mobile1 (2).webp"),
                import("../assets/mobile1 (3).webp"),
                import("../assets/mobile1 (4).webp"),
                import("../assets/mobile1 (5).webp"),
                import("../assets/mobile1 (6).webp"),
            ];
            const resolvedPromises = await Promise.all(importPromises);
            const images = resolvedPromises.map(promise => promise.default);
            setImages(images)
        }
        importImages()
    }, []);

    const moveToNextImage = useCallback(() => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    }, [currentImageIndex, images]);

    useEffect(() => {
        const intervalId = setInterval(moveToNextImage, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentImageIndex, moveToNextImage]);

    useEffect(() => {
        if (carrouselRef.current) {
            const scrollX = currentImageIndex * window.innerWidth;
            carrouselRef.current.scrollTo({
                left: scrollX,
                behavior: "smooth",
            });
        }
    }, [currentImageIndex]);

    return (
        <>
            <section className="ofertas-carrousel">
                <ul className="ofertas-ul" ref={carrouselRef}>
                    {images.map((image, index) => (
                        <li key={index}>
                            <a href="">
                                <img src={image} alt="" />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Ofertas;
