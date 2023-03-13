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
    refetch,
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
    <div className="w-3/4 mx-auto ">
      <div className="my-3 bg-[#FFFFFF] rounded-lg">
        {posts.map((post) => (
          <Post post={post} refetch={refetch} key={post._id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
