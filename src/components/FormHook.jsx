import React,{useState} from 'react'
import { useForm } from "react-hook-form";

const FormHook = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [actividad, setactividad] = useState('')

    const onSubmit = (data,e) => {
         console.log(data);
        console.log(e.target.titulo.value);
        e.target.reset();
    
        
       
    }
    return (
        <div className="container mt-5">
            <h1>Formulario</h1>

            <form action="" onSubmit={handleSubmit (onSubmit)}>
                <input type="text" 
                    name = "titulo"
                    className="form-control my-2"
                    {...register("titulo",{ pattern: /^[A-Za-z]+$/i , required:true})}
                    ref={input => input && input.focus()}
                />
                <span className="text-danger text-small d-block mb-2">
                    {errors.titulo && <span>Error</span>}
                   
                    
                </span>
            
                  <div className="">
                      <button className="btn btn-primary" type="submit">Enviar</button>
                  </div>
                
            </form>
        </div>
    )
}

export default FormHook
