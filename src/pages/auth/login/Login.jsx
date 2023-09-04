import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { loginUser } from "../../../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const message = useLoaderData();

  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    loginUser(loginFormData)
      .then((data) =>{
        console.log(data)
        navigate("/")
      })
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <section className="w-full h-[100vh] bg-[#c3c1abb4] flex flex-col justify-center items-center">
      {message && error == null && (
        <p className="text-red-500 font-thin font-serif text-[20px]">
          {message}
        </p>
      )}

      {error && (
        <p className="text-red-700 font-thin font-serif text-[20px]">
          {error.message}
        </p>
      )}

      <p className="font-bold font-serif text-[40px] mb-[20px]">
        Sign in to your account
      </p>
      <form className="max-container w-full " onSubmit={handleSubmit}>
        <div className="mb-6 w-[50%] m-auto">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your username
          </label>
          <input
            name="username"
            type="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="blazskills"
            required
            onChange={handleChange}
            value={loginFormData.username}
          />
        </div>
        <div className="mb-6 w-[50%] m-auto">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your password
          </label>
          <input
            name="password"
            autoComplete="true"
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={handleChange}
            value={loginFormData.password}
          />
        </div>
        <div className="flex items-start mb-6 w-[50%] m-auto">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Remember me
          </label>
        </div>
        <button
          disabled={status === "submitting"}
          type="submit"
          className=" bg-[#000000d1] w-[200px] h-[50px] mx-[50%] text-white-400 rounded-2xl"
        >
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
    </section>
  );
};
