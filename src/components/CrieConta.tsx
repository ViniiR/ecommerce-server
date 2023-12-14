import { Link } from 'react-router-dom';
import '../scss/crieConta.scss'

function CrieConta() {
    
    return (
        <>
            <section className="crie-conta-wrapper">
                <section className="crie-conta-container">
                    <h2>Crie uma conta para melhorar sua experiência!</h2>
                    <Link to='/crie-sua-conta' className="criar-conta-button">
                        Criar conta
                    </Link>
                    <p>
                        Já tem uma conta? <Link to='/login' className="entrar-blue-link">Entrar</Link>
                    </p>
                </section>
            </section>
        </>
    );
}

export default CrieConta;