import { useEffect, useState } from 'react';

function MeliPlus() {
    const [content, setContent] = useState<meliPlusNode[]>([]);

    useEffect(() => {
        async function fetchImages() {

            const promises: meliPlusNode[] = [
                {
                    icon: import('../assets/truckgiftv4@2x.png'),
                    description: 'Frete grátis em milhões de produtos a partir de R$ 29,00',
                },
                {
                    icon: import('../assets/combo-widgetl6@2x.jpg'),
                    description: 'Disney+ e Star+ sem custo',
                },
                {
                    icon: import('../assets/deezer-l6widget@2x.jpg'),
                    description: '12 Meses grátis da Deezer Premium',
                },
                {
                    icon: import('../assets/ultrapasse-widget@2x.png'),
                    description: '60% OFF no Ultrapasse e outros benefícios',
                },
            ];

            const resolvedData: meliPlusNode[] = [];
            const iconsPromises = promises.map((object) => object.icon)
            const resolvedIcons = await Promise.all(iconsPromises) as unknown as iconsObject[];
            const titles = promises.map((obj) => obj.description)
            titles.forEach((title, index) => {
                resolvedData.push({
                    icon: resolvedIcons[index].default,
                    description: title
                });
            });
            
            setContent(resolvedData)
        }

        fetchImages()

    }, []);

    return (
        <>
            <section className="meli-plus-container">
                <header>

                </header>
                <main>
                    <p>
                        Conte com os melhores benefícios no Mercado Livre e do Mercado Pago
                    </p>
                    <ul>
                        {
                            content.map((obj, key) => (
                                <li key={key}>
                                    <img src={obj.icon as string} alt="" />
                                    <p>{obj.description}</p>
                                </li>
                            ))
                        }
                    </ul>
                </main>
                <footer>
                    <a href="">Assinar o Meli+</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                </footer>
            </section>
        </>
    );
}

export default MeliPlus;