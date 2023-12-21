import { userSchema } from "./UserValidation";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormContent from "../components/FormContent";

function Form() {
    const methods = useForm<DataForm>({
        resolver: yupResolver(userSchema),
    });

    return (
        <FormProvider {...methods}>
            <FormContent></FormContent>
        </FormProvider>
    );
}

export default Form;
