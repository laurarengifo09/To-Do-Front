import { AuthCard } from "../components/AuthCard";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/contexts/AuthContexts";
import loginImg from '../../../assets/iniciars.png'; 
import { AuthService } from "../../../services/AuthService";

export function Login() {
  const { dispatchUser }: any = useContext(AuthContext);

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })

  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try{
      const {email, password} =formState;
      const loggedIn = await AuthService.login(email,password);
      if (loggedIn){

      }else{

      }
    }catch (error){
      console.error('error en el incio de sesion', error);
    }

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value}= e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]:value,
    }))
  };

  return (
    <AuthCard>
      <section className="min-h-screen flex items-center justify-center ">
        <div className="max-w-4xl w-full mx-4 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start">
            <h2 className="font-bold text-2xl mb-6">INICIAR SESION</h2>
            <p className="mb-6">Bienvenido a tu gestor de tareas</p>
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div className='mb-3 w-full'>
                <label className='block text-sm font-medium mb-1'>Email</label>
                <input className="mt-1 w-full p-2 border rounded-lg" type="email" name="email" placeholder="ejemplo@uao.edu.co" onChange={handleChange} required />
              </div>
              <div className='mb-3 w-full'>
                <label className='block text-sm font-medium mb-1'>Contraseña</label>
                <input className="mt-1 w-full p-2 border rounded-lg" type="password" name="password" placeholder="ingresa tu contraseña" onChange={handleChange} required />
              </div>
              <div className="flex items-center justify-between w-full">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Recordarme</span>
                </label>
                <Link to="/recoverPassword" className="text-indigo-600 hover:underline text-sm">Olvidaste tu contraseña?</Link>
              </div>
              <Link to="/register" className="block text-center my-8 text-sm font-semibold text-black"> Aun no tienes cuenta?
              </Link>
              <button type="submit" className="bg-custom-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">Iniciar Sesión</button>
            </form>
          </div>
          <div className="hidden md:block w-full md:w-1/2 md:flex justify-end">
            <img src={loginImg} alt="Login" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
    </AuthCard>
  );
}


