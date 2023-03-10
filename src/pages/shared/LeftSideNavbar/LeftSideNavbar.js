import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { AuthContext } from "../../../context/AuthProvider";

const LeftSideNavbar = () => {
  const { user } = useContext(AuthContext);
  //   const [categories, setCategories] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       "https://react-auth-router-dragon-news-server.vercel.app/news-categories"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setCategories(data));
  //   }, []);

  return (
    <div className="mt-5 pl-16">
      {user?.photoURL ? (
        <div className="flex items-center">
          {" "}
          <img
            src={user.photoURL}
            alt=""
            className="w-10 h-10 rounded-full lg:mt-2"
          />
          <h3 className="pl-2 text-lg font-bold">{user?.displayName}</h3>
        </div>
      ) : (
        <div>
          <Icon
            title="user?.displayName"
            icon="iconoir:profile-circle"
            width="40"
            className="lg:mt-2"
          />
        </div>
      )}
      {/* <h3>All Categories: {categories.length}</h3>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))} */}
    </div>
  );
};

export default LeftSideNavbar;
