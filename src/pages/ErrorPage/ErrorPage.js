import React from "react";
import Lottie from "lottie-react";
import { Link, useRouteError } from "react-router-dom";
import png from "../../assets/images/computer.json";
import { Icon } from "@iconify/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <div className="flex flex-col lg:min-h-[700px] justify-center items-center">
        <br />
        {error && (
          <>
            <div className="w-full mr-28 lg:w-9/12 lg:mr-60">
              <Lottie animationData={png} loop={true} />
            </div>
            <div className="text-center  mb-40 ">
              <Link to="/">
                <button className="btn btn-wide bg-violet-700">
                  <Icon icon="ic:outline-keyboard-arrow-left" width="24" />
                  Back To Home
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ErrorPage;
