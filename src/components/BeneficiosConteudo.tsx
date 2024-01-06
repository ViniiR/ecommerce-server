import { useEffect, useState } from "react";
import '../scss/beneficiosConteudo.scss'
import { Link } from "react-router-dom";

function BeneficiosConteudo() {

    const [content, setContent] = useState<beneficiosNode[]>([])

    useEffect(() => {
        async function fetchImages() {

            const data: beneficiosNode[] = [
                {
                    background: await import('../assets/disney_star_widgetmulti_mobdsk_mlb_@2x.jpg'),
                    icon: await import('../assets/combo-widgetl6@2x.jpg'),
                    title: 'Sem custo com V+',
                    description: 'Mercado+ e Mercado Estrela+',
                },
                {
                    background: await import('../assets/HBOMax_widgetmulti_mobdsk_mlb_@2x.jpg'),
                    icon: await import('../assets/logoSquare@2x.png'),
                    title: 'Até 30% OFF',
                    description: 'Mercado Max',
                },
                {
                    background: await import('../assets/paramount_widgetmulti_mobdsk_brasil_@2x.jpg'),
                    icon: await import('../assets/paramount-logo-vdp-56-x-56-filled@2x.png'),
                    title: 'Até 30% OFF',
                    description: 'Mountain+',
                }
            ];

            setContent(data);
        }

        fetchImages();
    }, []);

    return (
        <>
            <Link to='/v-plus' className="beneficios-container">
                <h2>
                    Benefícios em conteúdo
                </h2>
                <ul>
                    {
                        content.map((object, index) => (
                            <li key={index} style={{
                                backgroundImage: `url(${object.background.default})`,
                            }}>
                                <section>
                                    <img src={object.icon.default} alt="" />
                                    <section>
                                        <h2>
                                            {object.title}
                                        </h2>
                                        <p>
                                            {object.description}
                                        </p>
                                    </section>
                                </section>

                            </li>
                        ))
                    }
                </ul>
            </Link>
        </>
    );
}

export default BeneficiosConteudo;