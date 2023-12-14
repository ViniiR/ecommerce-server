import { SubmitHandler, useFormContext, FieldValues } from "react-hook-form";
import InputForm from "../components/InputForm";
import { userSchema } from "../Validations/UserValidation";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

function FormContent() {

    const {handleSubmit} = useFormContext()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const submitForm: SubmitHandler<FieldValues> = async (event) => {
        try {
            await createUser(event);
        } catch (err) {
            console.error(err);
        }
    }

    async function createUser(data: FieldValues) {

        const formData: DataForm = {
            name: data.name.trim(),
            email: data.email.trim(),
            password: data.password.trim(),
        };

        const isValid = await userSchema.isValid(formData)

        if (isValid) {
            try {
                await axios.post('http://localhost:5000/user', data);
                navigate('/')
            } catch (err) {
                setErrorMessage('Nome ou Email já estão em uso')
                console.error(err);
            }
        }
    }

    return (
        <form method="POST" className="criar-conta-form" name="crie-conta"
            onSubmit={handleSubmit(submitForm)}
            noValidate
        >
            <label htmlFor="crie-conta">Crie sua conta</label>
            <InputForm label="Nome" type="text" name="name" id="nome-conta" />
            <InputForm label="E-mail" type="email" name="email" id="email-conta" />
            <InputForm label="Senha" type="password" name="password" id="password" />
            <p id="duplicate-name-email-error">{errorMessage}</p>
            <input id="submit" type="submit" />
        </form>
    );
}

export default FormContent;
