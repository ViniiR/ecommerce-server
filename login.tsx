import logo from './src/assets/logo.png'
import './src/scss/loginPage.scss'

function LoginPage() {
    return (
        <>
            <main className="login-page">
                <header className="login-header">
                    <img src={logo} alt="" />
                </header>
                <main>
                    <form action="#" id='telefone-email' name='telefone-email'>
                        <label htmlFor="telefone-email">Olá! digite o seu telefone, e-mail ou usuário</label>
                        <input type="email" name="input-email" id="input-email" />
                        <label htmlFor="input-email">Telefone, e-mail ou usuário</label>
                        <input type="submit" value="Continuar" />
                        <a href="#">Criar conta</a>
                    </form>
                    <section className='relatar-problema'>
                        <h2>
                            Reportar um problema
                            <a href="">
                                <svg viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.5 0c-.542 0-.984.064-1.36.23a1.72 1.72 0 0 0-.837.797C2.963 1.707 3 2.5 3 3.5v9c0 1-.037 1.796.303 2.475.17.34.462.628.838.795.375.166.817.23 1.359.23h5c.542 0 .984-.064 1.36-.23.375-.167.668-.456.837-.795.34-.68.303-1.475.303-2.475v-9c0-1 .037-1.794-.303-2.473a1.72 1.72 0 0 0-.838-.796C11.484.064 11.042 0 10.5 0zM4.07 2h7.86c.05.373.07.87.07 1.5v9c0 .63-.02 1.126-.07 1.5H4.07c-.05-.374-.07-.87-.07-1.5v-9c0-.63.02-1.127.07-1.5z" color="#000000" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible" fill="black"></path> </g></svg>
                                <span>Roubo ou perda de celular</span>
                            </a>
                        </h2>
                    </section>
                    <footer className='login-footer'>
                        <small>
                            <a href="">Como cuidamos da sua privacidade</a>
                            Copyright &copy 1999-2023 Ebazar.com.br LTDA.
                        </small>
                    </footer>
                </main>
            </main>
        </>
    );
}

export default LoginPage;