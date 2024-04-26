import { AuthCard } from "../components/AuthCard";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../../assets/iniciars.png";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { login } from "../store/thunks/login.thunk";
import { selectLoading } from "../store/userSlice";
import { useEffect } from "react";
import { loginWithJwt } from "../store/thunks/login-with-jwt.thunk";

export function Login() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector<boolean>(selectLoading);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      //@ts-ignore
      dispatch(loginWithJwt());
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(login(formState));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <AuthCard>
      <section className="min-h-screen flex items-center justify-center ">
        <div className="max-w-4xl w-full mx-4 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 flex-col justify-center items-center ">
            <div className="  md:items-start">
              <h2 className="font-bold text-2xl mb-6">INICIAR SESION</h2>
              <p className="mb-6">Bienvenido a tu gestor de tareas</p>
            </div>
            <form className="space-y-6 w-full" onSubmit={handleSubmit}>
              <div className="mb-3 w-full">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  className="mt-1 w-full p-2 border rounded-lg"
                  type="email"
                  name="email"
                  placeholder="ejemplo@uao.edu.co"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 w-full">
                <label className="block text-sm font-medium mb-1">
                  Contraseña
                </label>
                <input
                  className="mt-1 w-full p-2 border rounded-lg"
                  type="password"
                  name="password"
                  placeholder="ingresa tu contraseña"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Recordarme</span>
                </label>
                <Link
                  to="/recoverPassword"
                  className="text-indigo-600 hover:underline text-sm"
                >
                  Olvidaste tu contraseña?
                </Link>
              </div>
              <Link
                to="/register"
                className="block text-center my-8 text-sm font-semibold text-black"
              >
                {" "}
                Aun no tienes cuenta?
              </Link>
              <button
                type="submit"
                disabled={loading}
                className={`bg-custom-primary hover:bg-blue-700 text-white justify-center font-bold py-2 px-4 rounded mx-auto flex w-full disabled:bg-slate-600`}
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
          <div className="hidden w-full md:w-1/2 md:flex justify-end">
            <img
              src={loginImg}
              alt="Login"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </AuthCard>
  );
}
