import { useEffect, useState } from 'react';
import '../scss/fourProducts.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ServerURL from '../config';

type ResponseData = {
    data: [
        {
            title: string;
            price: string;
            oldPrice: string;
            percentOFF: string;
            dividedPrice: string;
            imagePath: string;
        }
    ]
};

function FourProducts() {
    //const [content, setContent] = useState<SPData[]>([])
    const [content, setContent] = useState<SPData[]>([])

    useEffect(() => {
        async function fetchProductsData() {
            const res: ResponseData = await axios.get(`${ServerURL}retrieve-data`);
            const data = res.data

            const updatedData = await Promise.all(data.map(async (obj) => ({
                title: obj.title,
                price: obj.price,
                oldPrice: obj.oldPrice,
                percentOFF: obj.percentOFF,
                dividedPrice: obj.dividedPrice,
                image: await import(/* @vite-ignore */obj.imagePath),
            })));
            setContent(updatedData)
        }
        fetchProductsData()
    }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         const data: SPData[] = [
    //             {
    //                 image: await import('../assets/D_Q_NP_2X_629974-MLU72755866665_112023-T.webp'),
    //                 title: 'Notebook Aspire 5 A315-57-57T3 i5 8GB RAM 512GB SSD',
    //                 price: '2.499',
    //                 oldPrice: '5.582',
    //                 percentOFF: '58',
    //                 dividedPrice: '249,99',
    //             },
    //             {
    //                 image: await import('../assets/D_Q_NP_2X_855430-MLU72675476336_112023-T.webp'),
    //                 title: 'Caixa De Som Boombox 3 Bluetooth Preta jbl Bivolt',
    //                 price: '2.129',
    //                 oldPrice: '3.299',
    //                 percentOFF: '35',
    //                 dividedPrice: '212,90',
    //             },
    //             {
    //                 image: await import('../assets/D_Q_NP_2X_928869-MLU69966645745_062023-V.webp'),
    //                 title: 'Smartphone E22 128GB 4g 6,5 HD+ Câmera Dupla 16MP',
    //                 price: '718',
    //                 oldPrice: '999',
    //                 percentOFF: '28',
    //                 dividedPrice: '71,80',
    //             },
    //             {
    //                 image: await import('../assets/D_Q_NP_2X_889330-MLU72821325449_112023-T.webp'),
    //                 title: 'Micro-ondas Panasonic 21| 700w Branco Espelhado',
    //                 price: '529',
    //                 oldPrice: '739',
    //                 percentOFF: '28',
    //                 dividedPrice: '52,90',
    //             },
    //         ];

    //         setContent(data)

    //     }

    //     fetchData()

    // }, [])

    return (
        <>
            <section className="four-products-container">
                <h2>Ofertas do dia</h2>
                <section className="four-products-wrapper">
                    {
                        content.map((contentNode, index) => (
                            <Link to={`/product/${contentNode.title}`} className='inner-four-products' key={index}>
                                <section className="img-four-products-wrapper">
                                    <img src={contentNode.image.default} alt="" />
                                </section>
                                <h3> {contentNode.title} </h3>
                                <small> R$ {contentNode.oldPrice} </small>
                                <section className="price-four-products-wrapper">
                                    <span className='four-products-price'>R$ {contentNode.price} </span>
                                    <span className="four-products-off-green">{contentNode.percentOFF}% OFF</span>
                                </section>
                                <p className='four-products-sem-juros'>
                                    em <span className='green-four-products-juros'>10x R${contentNode.dividedPrice} sem juros</span>
                                </p>
                                <p className='frete-gratis-four-products'>
                                    Frete grátis FULL
                                </p>
                            </Link>
                        ))
                    }
                </section>
            </section>
        </>
    );
}

export default FourProducts;