import React, { useContext } from "react";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";

import BrandCarousel from "../BrandCarousel/BrandCarousel";

import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const RightSideNav = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIp = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Successfully signed In.");
        // navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mt-10">
      <div>
        <button
          onClick={handleGoogleSignIp}
          className="flex justify-center items-center  btn-outline btn-primary mb-2 px-7 border-2 rounded-t-lg py-2 text-lg"
        >
          <FaGoogle /> <p className="ml-3">Signin with Google</p>
        </button>
      </div>
      <div>
        <button className="flex justify-center items-center  btn-outline mb-2 px-[17.5px] border-2 rounded-b-lg py-2 text-lg">
          <FaGithub />
          <p className="ml-3">Signin with Facebook</p>
        </button>
      </div>

      <div>
        <h6 className="mt-3 text-base">Find us on</h6>
        <div className="space-y-3 py-3 w-60">
          <div className="border border-black">
            <a href="/" className="flex justify-center items-center py-2">
              <FaFacebook /> <p className="ml-3">Facebook</p>
            </a>
          </div>
          <div className="border border-black ">
            <a href="/" className="flex justify-center items-center py-2">
              <FaWhatsapp /> <p className="ml-3">WhatsApp</p>
            </a>
          </div>
          <div className="border border-black ">
            <a href="/" className="flex justify-center items-center py-2">
              <FaTwitter /> <p className="ml-3">Twitter</p>
            </a>
          </div>
          <div className="border border-black ">
            <a href="/" className="flex justify-center items-center py-2">
              <FaTwitch /> <p className="ml-3">Twitch</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-60">
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
