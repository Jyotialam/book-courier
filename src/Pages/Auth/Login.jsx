import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";
import { toast } from "react-toastify";

const Login = () => {
  //
    const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | BookCourier";
  }, []);
  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //custom hook
  const { signInUser } = useAuth();

  const handleLogin = (data) => {
    console.log(data);
    //use contexts
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully signed in with Email");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
         toast.error(error.message);
      });
  };
  return (
    <div className="w-full mx-auto max-w-sm md:w-1/2">
      <h3 className="text-3xl md:text-4xl text-center">Welcome back</h3>
      <p className="text-center">Please Login</p>

      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required.</p>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            className="input w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2"
           
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be 6 character or longer
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must contain at least one uppercase,one lowercase, one
              number and one special character
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          New to Book Courier?
          <Link className="text-blue-500 font-semibold hover:text-blue-700" to="/register">
            Register
          </Link>
        </p>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Login;
