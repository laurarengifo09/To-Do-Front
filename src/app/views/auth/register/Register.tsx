import { AuthCard } from "../components/AuthCard";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../store/contexts/AuthContexts";
import SignUpImg from '../../../assets/SignUp.png'; 

export function Register() {
  const { dispatchUser }: any = useContext(AuthContext);

  const handleSubmit = () => {

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <AuthCard>
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full mx-4 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <form className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center md:items-start">
            <h2 className="font-bold text-2xl mb-6">REGISTRATE</h2>
            <p className="mb-6">Crea una nueva cuenta, ahora!</p>
            <div className="space-y-6 w-full">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="fullname">Nombre Completo</label>
                <div className="flex gap-4">
                  <input className="mt-1 w-full p-2 border rounded-lg" type="text" id="firstname" placeholder="Nombre" />
                  <input className="mt-1 w-full p-2 border rounded-lg" type="text" id="lastname" placeholder="Apellido" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input className="mt-1 w-full p-2 border rounded-lg" type="email" id="email" placeholder="correo@uao.edu.co" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="password">Contraseña</label>
                <input className="mt-1 w-full p-2 border rounded-lg" type="password" id="password" placeholder="Ingresa tu contraseña" />
              </div>
              <div className="flex items-center space-x-4">
                <input type="checkbox" className="form-checkbox" id="terms" />
                <label htmlFor="terms" className="text-xs">
                  Acepto los términos de servicio y la política de privacidad del lugar
                </label>
              </div>
            </div>
            <div className="mt-4">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:w-auto">Registrarse</button>
            </div>
          </form>
          <div className="hidden md:block w-full md:w-1/2 md:flex justify-end">
            <img src={SignUpImg} alt="Login" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
    </AuthCard>
  );
  
  

  
}


