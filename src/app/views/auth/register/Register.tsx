import { AuthCard } from "../components/AuthCard";
import { FormEvent, useState } from "react";
import SignUpImg from "../../../assets/SignUp.png";
import { useAppDispatch } from "../../../store/hooks";
import { register } from "../store/thunks/register.thunk";

type FormState = {
  email: string;
  password: string;
  name: string;
  lastname: string;
};

export function Register() {
  const dispatch = useAppDispatch();

  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    name: "",
    lastname: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //@ts-ignore
    dispatch(register(formState));
  };

  return (
    <AuthCard>
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full mx-4 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          <form
            className="w-full md:w-1/2 p-8 flex-col justify-center items-center md:items-start"
            onSubmit={handleSubmit}
          >
            <div className="  md:items-start">
              <h2 className="font-bold text-2xl mb-6">REGISTRATE</h2>
              <p className="mb-6">Crea una nueva cuenta, ahora!</p>
            </div>
            <div className="space-y-6 w-full">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="fullname"
                >
                  Nombre Completo
                </label>
                <div className="flex gap-4">
                  <input
                    onChange={(e) =>
                      setFormState((v) => ({ ...v, name: e.target.value }))
                    }
                    className="mt-1 w-full p-2 border rounded-lg"
                    type="text"
                    id="firstname"
                    placeholder="Nombre"
                  />
                  <input
                    onChange={(e) =>
                      setFormState((v) => ({ ...v, lastname: e.target.value }))
                    }
                    className="mt-1 w-full p-2 border rounded-lg"
                    type="text"
                    id="lastname"
                    placeholder="Apellido"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={(e) =>
                    setFormState((v) => ({ ...v, email: e.target.value }))
                  }
                  className="mt-1 w-full p-2 border rounded-lg"
                  type="email"
                  id="email"
                  placeholder="correo@uao.edu.co"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  onChange={(e) =>
                    setFormState((v) => ({ ...v, password: e.target.value }))
                  }
                  className="mt-1 w-full p-2 border rounded-lg"
                  type="password"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                />
              </div>
              <div className="flex items-center space-x-4">
                <input type="checkbox" className="form-checkbox" id="terms" />
                <label htmlFor="terms" className="text-xs">
                  Acepto los términos de servicio y la política de privacidad
                  del lugar
                </label>
              </div>
            </div>
            <div className="justify-center mt-4 items-center">
              <button
                type="submit"
                className="bg-custom-primary hover:bg-blue-700 text-white justify-center font-bold py-2 px-4 rounded mx-auto flex w-full"
              >
                Registrarse
              </button>
            </div>
          </form>
          <div className="hidden w-full md:w-1/2 md:flex justify-end">
            <img
              src={SignUpImg}
              alt="Login"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
    </AuthCard>
  );
}
