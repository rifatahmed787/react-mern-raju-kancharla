import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SmallSpinner from "../../components/spinner/SmallSpinner";
import { AuthContext } from "../../context/AuthProvider";

const LogIn = () => {
  const { signIn, loading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  navigate(from, { replace: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    setError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully loged in");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-20  mx-auto lg:w-3/5 md:w-2/5 sm:w-11/12">
      <div className=" small-width bg-[#F3F4F6] dark:bg-black dark:border p-7 shadow-2xl border border-orange-400 rounded-xl">
        <h2 className="text-2xl font-bold text-orange-500 text-center dark:text-white">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control ">
            <label className="label">
              <span className="label-text dark:text-white">Email</span>
            </label>
            <input
              type="Email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="border-b border-b-orange-500 bg-orange-100 pl-2 border-transparent outline-none"
              style={{ fontSize: "14px", height: "50px" }}
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label flex justify-between">
              <span className="label-text dark:text-white">Password</span>
              <Link
                to="/forgotpass"
                className="label-text dark:text-white link"
              >
                Forgot Password?
              </Link>
            </label>
            <input
              type="password"
              placeholder="******"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters or more",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message:
                    "Password must have a number and a special character",
                },
              })}
              className="border-b border-b-orange-500 bg-orange-100 pl-2 border-transparent outline-none"
              style={{ fontSize: "20px", height: "50px" }}
            />

            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>

          {loading ? (
            <button className="btn bg-orange-500 hover:bg-orange-500 w-full mt-5 border-none">
              <SmallSpinner />
            </button>
          ) : (
            <input
              className="btn bg-orange-500 hover:bg-orange-500 w-full mt-5 border-none"
              value="Sign In"
              type="submit"
            />
          )}

          <div>{setError && <p className="text-red-600">{error}</p>}</div>
        </form>
        <p className="mt-5 dark:text-white">
          Don't have an account Please{" "}
          <Link
            className=" dark:text-primary link text-orange-700"
            to="/signup"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
