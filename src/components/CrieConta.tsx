import '../scss/crieConta.scss'

function CrieConta() {
    
    return (
        <>
            <section className="crie-conta-wrapper">
                <section className="crie-conta-container">
                    <h2>Crie uma conta para melhorar sua experiência!</h2>
                    <button className="criar-conta-button">
                        Criar conta
                    </button>
                    <p>
                        Já tem uma conta? <a className="entrar-blue-link">Entrar</a>
                    </p>
                </section>
            </section>
        </>
    );
}

export default CrieConta;