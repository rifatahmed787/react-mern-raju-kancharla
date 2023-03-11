import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideNavbar from "../pages/shared/LeftSideNavbar/LeftSideNavbar";
import Navbar from "../pages/shared/Navbar/Navbar";
import RightSideNav from "../pages/shared/RightSideNavbar/RightSideNav";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-4 gap-4">
        <div className="hidden lg:block">
          <LeftSideNavbar />
        </div>
        <div className="col-span-2">
          <Outlet />
        </div>
        <div className="hidden lg:block">
          <RightSideNav />
        </div>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Main;
