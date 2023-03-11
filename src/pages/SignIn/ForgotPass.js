import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const ForgotPass = () => {
  const { ForgotPass } = useContext(AuthContext);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForgotPass = (data) => {
    ForgotPass(data.email)
      .then(() => {
        toast.success("Password reset email send!");
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      });
  };

  return (
    <div className="my-20  mx-auto lg:w-3/5 md:w-2/5 sm:w-11/12">
      <div className=" small-width bg-[#F3F4F6] dark:bg-black dark:border p-7 shadow-2xl border border-orange-400 rounded-xl">
        <h2 className="text-2xl font-bold text-orange-500 text-center dark:text-white">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit(handleForgotPass)}>
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
          <input
            className="btn  bg-orange-500 hover:bg-orange-500 w-full mt-5 border-none"
            value="Submit"
            type="submit"
          />

          <div>{setError && <p className="text-red-600">{error}</p>}</div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
