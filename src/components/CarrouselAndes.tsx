import '../scss/andes.scss'

function getContent() {
    const content: contentNode[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path></svg>,
            title: 'Insira a sua localização',
            description: 'Você poderá ver custos e prazos de entrega',
            buttonText: 'Inserir localização',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path><path d="M6 14h6v2H6z"></path></svg>,
            title: 'MENOS DE R$ 100',
            description: 'Confira produtos com preços baixos',
            buttonText: 'Mostrar produtos',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path><path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"></path></svg>,
            title: 'COMPRA GARANTIDA',
            description: 'Cuidamos de você',
            buttonText: 'Saiba mais',
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 2H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9.424c.618-.735 1-1.692 1-2.746V5c0-1.654-1.346-3-3-3zm1 3v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1zM10 8V4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831V5zm6 11H6v-3h4v3z"></path></svg>,
            title: 'LOJAS OFICIAIS',
            description: 'Suas marcas preferidas',
            buttonText: 'Mostrar lojas',
        },
    ];
    return content;
}

function CarrouselAndes() {
    const contentArray = getContent();

    return (
        <>
            <section className='andes-wrapper'>
                <ul className='andes-ul'>
                    {
                        contentArray.map(
                            (obj, key) => (
                                <li key={key}>
                                    <div className="svg-andes-wrapper">
                                        {obj.icon}
                                    </div>
                                    <div className='content-andes-wrapper'>
                                        <h2>{obj.title}</h2>
                                        <p>{obj.description}</p>
                                    </div>
                                    <div className="button-andes-wrapper">
                                        <button>{obj.buttonText}</button>
                                    </div>
                                </li>
                            )
                        )
                    }
                </ul>
            </section>
        </>
    );
}

export default CarrouselAndes;