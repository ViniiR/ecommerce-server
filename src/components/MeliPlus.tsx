import { useEffect, useState } from 'react';
import '../scss/meliPlus.scss'
import { Link } from 'react-router-dom';

function MeliPlus() {
    const [content, setContent] = useState<dataObject[]>([]);

    useEffect(() => {
        async function fetchImages() {

            const content: meliPlusNode[] = [
                {
                    icon: await import('../assets/truckgiftv4@2x.png'),
                    description: 'Frete grátis em milhões de produtos a partir de R$ 29,00',
                },
                {
                    icon: await import('../assets/combo-widgetl6@2x.jpg'),
                    description: 'Mercado+ e Mercado Estrela+ sem custo',
                },
                {
                    icon: await import('../assets/deezer-l6widget@2x.jpg'),
                    description: '12 Meses grátis de Musicas Top Premium',
                },
                {
                    icon: await import('../assets/ultrapasse-widget@2x.png'),
                    description: '60% OFF no Lojapasse e outros benefícios',
                },
            ];

            const resolvedData: dataObject[] = content.map((object) => (
                    {
                        icon: object.icon.default,
                        description: object.description
                    }
                )
            );
            
            setContent(resolvedData)
        }

        fetchImages()

    }, []);

    return (
        <>
            <section className="meli-plus-image-container">
                <header>
                    <section>
                        <p className='assine-o'>
                            Assine o
                        </p>
                        <div className='meli-plus-icon'>
                            V+
                        </div>
                    </section>
                    <section>
                        <p>
                            | R$ 17 <sup>99</sup> <small>/mês</small>
                        </p>
                    </section>
                </header>
                <main>
                    <p>
                        Conte com os melhores benefícios no Loja Top e do Mercado Top
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
                <Link to="/v-plus">
                    <p>Assinar o V+</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                    </svg>
                </Link>
            </section>
        </>
    );
}

export default MeliPlus;