import { Link } from "react-router-dom";
import { AuthCard } from "../components/AuthCard";
import Recover from "../../../assets/Recover.png";

export function RecoverPassword() {
  return (
    <AuthCard>
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full mx-4 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row ">
          <form className="w-full md:w-1/2 p-8  flex-col justify-center items-center md:items-start">
            <h2 className="font-bold text-2xl mb-6">Recuperacion de Cuenta</h2>
            <p className="mb-6">¿Olvidaste tu cuenta? No te preocupes </p>
            <div className="mb-3 w-full">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="mt-1 w-full p-2 border rounded-lg"
                type="email"
                id="email"
                placeholder="elpepe@gmail.com"
              ></input>
            </div>
            <div className="justify-center mt-4 items-center">
              <button
                type="submit"
                className="bg-custom-primary hover:bg-blue-700 text-white justify-center font-bold py-2 px-4 rounded mx-auto flex w-full"
              >
                Enviar
              </button>
            </div>
            <Link
              to="/login"
              className="block text-center my-8 text-sm font-semibold text-black"
            >
              {" "}
              ¿Ya tienes cuenta?{" "}
            </Link>
          </form>
          <div className="hidden md:block w-full md:w-1/2 md:flex justify-end">
            <img
              src={Recover}
              alt="Login"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </AuthCard>
  );
}
