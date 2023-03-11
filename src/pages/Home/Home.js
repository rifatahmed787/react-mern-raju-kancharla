import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Icon } from "@iconify/react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../components/spinner/Spinner";
import Post from "./Posts/Post";

const Home = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    isError,
    data: posts = [],
    error,
  } = useQuery({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allPost");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-3/4 mx-auto">
      {user?.email ? (
        <div className="flex  items-center mt-5 py-2 border-none rounded-lg shadow-md">
          <div className="mx-3">
            {user?.photoURL ? (
              <div className="flex items-center">
                {" "}
                <img
                  src={user.photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full lg:mt-2"
                />
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
          </div>
          <div className="">
            <label
              htmlFor="post-modal"
              className="border-none btn no-animation rounded-full pl-3 pr-40 bg-gray-200 hover:bg-gray-200 text-gray-500"
            >
              What's your mind, {user ? user?.displayName : ""}?
            </label>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </div>
      </div>
      <div className="mt-3">
        {posts.map((post) => (
          <Post post={post} key={post._id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
