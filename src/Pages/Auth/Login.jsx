import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "./SocialLogin";

const Login = () => {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full mx-auto max-w-sm ">
      <h3 className="text-3xl text-center">Welcome back</h3>
      <p className="text-center">Please Login</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
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
            className="input w-full"
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
          <Link className="text-blue-500" to="/register">
            Register
          </Link>
        </p>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Login;
