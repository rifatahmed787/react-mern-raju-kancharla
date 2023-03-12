import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Icon } from "@iconify/react";
import { toast } from "react-hot-toast";

const TweetCard = ({ tweet, refetch }) => {
  const { user } = useContext(AuthContext);
  const { photoURL, name, caption, quantity, img, like, _id } = tweet;

  const handleDelete = (id) => {
    fetch(
      `https://react-internshala-assignment-raju-server.vercel.app/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("post deleted");
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            {user?.photoURL ? (
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-1">
              <button title="Open options" type="button">
                <Icon icon="bi:three-dots-vertical" width="25" />
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => handleDelete(_id)}>Delete</button>
              </li>
              <li>
                <a href="/">Edit post</a>
              </li>
            </ul>
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
              <button
                type="button"
                title="Like post"
                className="flex items-center justify-center"
              >
                <Icon icon="mdi:like-outline" width="25" />
              </button>
              <p className="text-lg">{quantity}</p>
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
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?2"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?3"
                />
              </div>
              <span className="text-sm">
                Liked by
                <span className="font-semibold">Mamba UI</span>and
                <span className="font-semibold">86 others</span>
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

export default TweetCard;
