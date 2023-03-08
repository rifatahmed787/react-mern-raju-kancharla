import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNavbar = () => {
  //   const [categories, setCategories] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       "https://react-auth-router-dragon-news-server.vercel.app/news-categories"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => setCategories(data));
  //   }, []);

  return (
    <div className="mt-5">
      <p>hello</p>
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
