import {string, object } from 'yup'

export const userSchema = object().shape({
    name: string().required("Nome é obrigatório"),
    email: string().email("Email inválido").required("Email é obrigatório"),
    password: string().min(8, "Mínimo de 8 caracteres").max(32, "Máximo de 32 caracteres").required("Senha obrigatória"),
});
