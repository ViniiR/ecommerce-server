import Form from '../Validations/Form.tsx';
import logo from "../assets/logo.png";
import "../scss/crieSuaContaPage.scss";

function CriarContaPage() {

    return (
        <>
            <section className="crie-conta-main-wrapper">
                <header className="crie-conta-header">
                    <img src={logo} alt="" />
                </header>
                <main className="crie-conta-main">
                    <Form/>
                </main>
            </section>
        </>
    );
}

export default CriarContaPage;
