import React, { useContext } from "react";

import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
// import ListGroup from "react-bootstrap/ListGroup";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  //   const { GoogleProvider } = useContext(AuthContext);

  const provider = new GoogleAuthProvider();

  //   const GoogleHandler = () => {
  //     GoogleProvider(provider)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //       })
  //       .catch((error) => console.error(error));
  //   };

  return (
    <div className="mt-10">
      <div>
        <button
          //   onClick={GoogleHandler}

          className="flex btn btn-outline btn-primary mb-2 px-7"
        >
          <FaGoogle /> <p className="ml-3 text-sm">Signin with Google</p>
        </button>
      </div>
      <div>
        <button className="flex btn btn-outline px-8">
          <FaGithub />
          <p className="ml-3 text-sm">Signin with Github</p>
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
