import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../scss/loginPage.scss";
import axios from "axios";
import { FieldValues, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

type UserLoginData = {
    name?: string;
    email?: string;
    password: string;
};

function LoginPage() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const onSubmit = async (data: FieldValues) => {
        setErrorMessage("");
        const userData: UserLoginData = {
            password: data.password.trim(),
        };
        if (emailRegex.test(data.email)) {
            userData.email = data.email.trim();
        } else {
            userData.name = data.email.trim();
        }
        if (userData.password == "" || userData.name == "") {
            return;
        }
        try {
            const res = await axios.post("http://localhost:5000/user/login", userData);
            if (res.status === 201) {
                navigate("/");
                localStorage.setItem("loginToken", res.data.accessToken);
                localStorage.setItem('isLoginForAd', 'yes')
            }
        } catch (err) {
            console.error(err);
            setErrorMessage("Usuário não encontrado");
        }
    };

    useEffect(() => {
        const handleNavigation = (event: Event) => {
            if (event.type === "popstate") {
                navigate("/");
            }
        };

        window.addEventListener("popstate", handleNavigation);

        return () => {
            window.removeEventListener("popstate", handleNavigation);
        };
    }, [navigate]);

    return (
        <>
            <main className="login-page">
                <header className="login-header">
                    <a href="/">
                        <img src={logo} alt="" />
                    </a>
                </header>
                <main>
                    <form onSubmit={handleSubmit(onSubmit)} id="telefone-email" name="telefone-email" method="POST" noValidate>
                        <label htmlFor="telefone-email" id="form-title">
                            Olá! digite o seu e-mail ou usuário e senha
                        </label>
                        <section className="form-wrapper">
                            <section className="email-wrapper">
                                <label htmlFor="email" id="telefone-usuario">
                                    E-mail ou usuário
                                </label>
                                <input type="text" id="email" {...register("email")} />

                                <label htmlFor="password" id="password-login-input">
                                    Senha
                                </label>
                                <input type="password" id="password" {...register("password")} />
                            </section>
                            <p id="error-paragraph-login">{errorMessage}</p>
                            <section className="low-buttons-wrapper">
                                <input type="submit" value="Continuar" id="continuar-button" />
                                <Link to="/crie-sua-conta" id="criar-conta-button">
                                    Criar conta
                                </Link>
                            </section>
                        </section>
                    </form>
                    <section className="relatar-problema">
                        <h2>Reportar um problema</h2>
                        <ul>
                            <li>
                                <a href="">
                                    <section className="not-chevron-wrapper">
                                        <svg className="not-chevron" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                {" "}
                                                <path d="M5.5 0c-.542 0-.984.064-1.36.23a1.72 1.72 0 0 0-.837.797C2.963 1.707 3 2.5 3 3.5v9c0 1-.037 1.796.303 2.475.17.34.462.628.838.795.375.166.817.23 1.359.23h5c.542 0 .984-.064 1.36-.23.375-.167.668-.456.837-.795.34-.68.303-1.475.303-2.475v-9c0-1 .037-1.794-.303-2.473a1.72 1.72 0 0 0-.838-.796C11.484.064 11.042 0 10.5 0zM4.07 2h7.86c.05.373.07.87.07 1.5v9c0 .63-.02 1.126-.07 1.5H4.07c-.05-.374-.07-.87-.07-1.5v-9c0-.63.02-1.127.07-1.5z" color="#000000" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible" fill="black"></path>{" "}
                                            </g>
                                        </svg>
                                        <span>Roubo ou perda de celular</span>
                                    </section>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <section className="not-chevron-wrapper">
                                        <svg className="not-chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path>
                                        </svg>
                                        <span>Roubo de conta</span>
                                    </section>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </section>
                </main>
                <footer className="login-footer">
                    <small>
                        <a href="">Como cuidamos da sua privacidade</a>
                        Copyright &copy 1999-2023 Ebazar.com.br LTDA.
                    </small>
                </footer>
            </main>
        </>
    );
}

export default LoginPage;
