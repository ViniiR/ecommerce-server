import { SubmitHandler, useFormContext, FieldValues } from "react-hook-form";
import InputForm from "../components/InputForm";
import { userSchema } from "../Validations/UserValidation";
function FormContent() {

    const {handleSubmit} = useFormContext()

    const submitForm: SubmitHandler<FieldValues> = async (event) => {
        try {
            await createUser(event);
        } catch (err) {
            console.error(err);
        }
    }

    async function createUser(data: FieldValues) {

        const formData: DataForm = {
            name: data.name,
            email: data.email,
            password: data.password,
        };
        const isValid = await userSchema.isValid(formData)
        console.log(isValid);
    }

    return (
        <form action="#" className="criar-conta-form" name="crie-conta"
            onSubmit={handleSubmit(submitForm)}
            noValidate
        >
            <label htmlFor="crie-conta">Crie sua conta</label>
            <InputForm label="Nome" type="text" name="name" id="nome-conta" />
            <InputForm label="E-mail" type="email" name="email" id="email-conta" />
            <InputForm label="Senha" type="password" name="password" id="password" />
            <input id="submit" type="submit" />
        </form>
    );
}

export default FormContent;

// event.preventDefault()

        // const target = event.target as HTMLFormElement;
        
        // const formData: DataForm = {
        //     name: (target[0] as HTMLInputElement).value,
        //     email: (target[1] as HTMLInputElement).value,
        //     password: (target[2] as HTMLInputElement).value,
        // };
        // const isValid = await userSchema.isValid(formData);
        // console.log(isValid);