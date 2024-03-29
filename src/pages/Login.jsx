import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContexte } from "../context/AuthContext";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";

function Login() {
  const [inputs, setInput] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContexte);

  const handelChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <section className="bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">

            </h1> */}
            <Stack className="text-center justify-center items-center" >
              <Avatar  src="/broken-image.jpg " style={{ width: '60px', height: '60px' }}/>
            </Stack>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  name="username"
                  className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="votre nom"
                  required=""
                  onChange={handelChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handelChange}
                  placeholder="•••••••"
                  className=" border  sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  required=""
                />
              </div>
              <button
                onClick={handelSubmit}
                class="w-full text-white bg-[#1D4ED8] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Se connecter
              </button>
              {err && <p>{err}</p>}
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Vous n'avez pas encore de compte ?{" "}
                <Link
                  to="/register"
                  className="font-bold text-primary-600 hover:underline dark:text-primary-500"
                >
                  S'inscrire
                </Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
