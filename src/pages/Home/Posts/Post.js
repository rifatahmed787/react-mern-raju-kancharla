import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Post = ({ post, refetch }) => {
  const { user } = useContext(AuthContext);
  const [likePost, setLikePost] = useState(false);

  const { name, photoURL, like, caption, img, _id } = post;

  //like post
  const handleLike = (id) => {
    const userData = {
      userName: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };
    fetch(`http://localhost:5000/likepost/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  useEffect(() => {
    console.log("start");

    const likedpost = like.find((votes) => votes.userEmail === user?.email);
    console.log("likedpost", likedpost);

    if (likedpost) {
      setLikePost(true);
      console.log("liked");
      return;
    } else {
      setLikePost(false);

      console.log("false");
      return;
    }
  }, [user?.email, like]);

  return (
    <div>
      <div className=" shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            {photoURL ? (
              <div className="flex items-center">
                {" "}
                <img
                  src={photoURL}
                  alt=""
                  className="w-10 h-10 rounded-full lg:mt-2"
                />
                <h3 className="pl-2 text-lg font-bold">{name}</h3>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Icon
                  title="user?.displayName"
                  icon="iconoir:profile-circle"
                  width="40"
                  className="lg:mt-2"
                />
                <h3 className="pl-2 text-lg font-bold">{name}</h3>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="text-md px-3 pb-5">{caption}</p>
        </div>
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full h-72 dark:bg-gray-500"
        />
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center space-x-3">
              {user?.uid || user?.email ? (
                <button
                  type="button"
                  title="Like post"
                  onClick={() => handleLike(_id)}
                  className="flex items-center justify-center"
                >
                  <Icon
                    icon="mdi:like-outline"
                    width="25"
                    className={`${likePost ? "text-blue-700" : "text-black"}`}
                  />
                </button>
              ) : (
                <div>
                  <Link to="login">
                    <button
                      type="button"
                      title="Like post"
                      className="flex items-center justify-center"
                    >
                      <Icon
                        icon="mdi:like-outline"
                        width="25"
                        className={`${
                          likePost ? "text-blue-700" : "text-black"
                        }`}
                      />
                    </button>
                  </Link>
                </div>
              )}
              <p className="text-lg">{like?.length}</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              >
                <Icon icon="uil:comment" width="25" />
              </button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              >
                <Icon icon="mdi:share" width="25" />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {like?.slice(0, 3).map((li) => (
                  <>
                    {li?.photo ? (
                      <img
                        key={li._id}
                        alt=""
                        className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                        src={li.photo}
                      />
                    ) : (
                      <Icon
                        title="user?.displayName"
                        icon="iconoir:profile-circle"
                        width="40"
                        className="w-5 h-5 border rounded-full"
                      />
                    )}
                  </>
                ))}
              </div>
              <span className="text-sm">
                Liked by,
                {like?.slice(0, 1).map((lik) => (
                  <>
                    <span key={lik._id} className="font-semibold">
                      {lik.userName} and {like?.length} others
                    </span>
                  </>
                ))}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-semibold">leroy_jenkins72</span>
              Nemo ea quasi debitis impedit!
            </p>
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
