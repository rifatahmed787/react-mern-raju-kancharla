import React from "react";

import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/spinner/Spinner";
import Post from "./Posts/Post";
import ErrorPage from "../ErrorPage/ErrorPage";

const Home = () => {
  const {
    isLoading,
    isError,
    data: posts = [],
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await fetch(
        "https://react-internshala-assignment-raju-server.vercel.app/allPost"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="w-3/4 mx-auto bg-[#FFFFFF]">
      <div className="my-3">
        {posts.map((post) => (
          <Post post={post} key={post._id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
