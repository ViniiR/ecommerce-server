import { useFormContext } from "react-hook-form";

const InputForm = ({ label, id, name, type }: InputProps)  => {

    const { register, formState: {errors}} = useFormContext()
    return(
        <section>
            <div className="separate-error-wrapper">
                <label htmlFor={id}>{label}:</label>
                <input id={id} {...register(name)} type={type} />
            </div>
            {errors[name]?.message && <p className="error-p">{String(errors[name]?.message)}</p>}
        </section>
    )
}   

export default InputForm;