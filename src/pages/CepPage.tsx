import { FormEvent } from "react";
import logo from "../assets/logo.svg";
import "../scss/cepPage.scss";
import { useNavigate } from "react-router-dom";

function isValidCEP(value: string) {
    return value.match(/^\d{5}-\d{3}$/);
}

function CepPage() {
    const navigate = useNavigate()
    function formSubmit(event: FormEvent) {
        event.preventDefault()
        const target = (event.target as HTMLFormElement).querySelector('#cep-input') as HTMLInputElement
        if (target.value && isValidCEP(target.value)) {
            localStorage.setItem('cep', target.value)
            navigate('/')
        }
    }
    
    return (
        <>
            <main className="cep-page">
                <header className="cep-header">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </header>
                <main className="cep-body">
                    {/* fix problem with post method */}
                    <form method="POST" onSubmit={formSubmit}>
                        <h1 className="cep-title">Selecione onde quer receber suas compras</h1>
                        <p className="cep-description">Você poderá ver custos e prazos de entrega precisos em tudo que procurar.</p>
                        <section className="cep-wrapper">
                            <label htmlFor="cep-input">Código de Endereçamento Postal</label>
                            <input type="text" name="cep-input" id="cep-input" placeholder="Informar um CEP: [00000-000]" />
                            <input type="submit" value="Usar" id="input-submit" />
                        </section>
                    </form>
                </main>
            </main>
        </>
    );
}

export default CepPage;
