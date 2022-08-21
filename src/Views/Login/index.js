import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import React from "react";

const LoginContainer = () => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const {errors, isDirty, dirtyFields, isValid} = formState
    const onSubmit = data => {
        if (isValid) {
            navigate('/movies-list')
        }
    };

    const LabelizeInput = useCallback(
        ({name, defaultValue, register, dirtyFields, errors, required}) => {
        return (
            <div className="relative flex flex-col mb-30 z-2">
                <label className={!dirtyFields?.[name] ? "bg-transparent text-teal-500 text-sm bg-white translate-x-[-70px] translate-y-[25px] w-24" : "block text-teal-500 text-sm font-bold mb-2 w-24" }>{name}</label>
                <input className="px-0 py-4 h-8 border" defaultValue={defaultValue} {...register(name, {required: required})}/>
                {errors?.[name] && <span className="text-sm text-red-500">Le champ {name} est obligatoire</span>}
            </div>
        )
    },[])

    return (
        <div className="flex flex-1 h-screen justify-center bg-[url('https://flying-for-you-data.s3.eu-west-3.amazonaws.com/website-images/bulle-google-avis.webp')]">
            <div className="relative self-center align-center p-50 border-1 border-solid border-black rounded-3xl">
                    <div className="w-full max-w-xs text-center text-teal-500 mb-5 text-xl">Bienvenue jeune padawan</div>

                        <form className="bg-white opacity-80 hover:opacity-100 text-center shadow-md shadow-teal-500 rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
                            <LabelizeInput name="email" defaultValue="" register={register} dirtyFields={dirtyFields} isDirty={isDirty} errors={errors} required={true}/>
                            <LabelizeInput name="mot de passe" defaultValue="" register={register} dirtyFields={dirtyFields} isDirty={isDirty} errors={errors} required={true}/>
                            <button className="mt-5 bg-teal-300 border-none px-6 py-2.5 rounded-3xl cursor-pointer text-white hover:text-black" type="submit">Accéder à la suite</button>
                        </form>
            </div>
        </div>
    )
}

export default LoginContainer