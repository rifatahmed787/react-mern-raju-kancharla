import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../../components/spinner/Spinner";
import TweetCard from "./TweetCard";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Icon } from "@iconify/react";
import ErrorPage from "../ErrorPage/ErrorPage";

const MyTweet = () => {
  const { user } = useContext(AuthContext);
  const [fileList, setFileList] = useState();
  const [preview, setPreview] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!fileList) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(fileList);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [fileList]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setFileList(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setFileList(e.target.files[0]);
  };

  //remove selected image
  const removeSelectedImage = () => {
    setFileList();
  };

  const {
    data: tweets = [],
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["mytweet"],
    queryFn: async () => {
      const res = await fetch(
        `https://react-internshala-assignment-raju-server.vercel.app/mytweet/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  //handel tweet
  const handleAddTweet = (data) => {
    const img = fileList;
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "jujslbiy");

    const url = "https://api.cloudinary.com/v1_1/dztlowlu0/image/upload";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.asset_id) {
          const tweet = {
            img: imgData.url,
            name: user?.displayName,
            photoURL: user?.photoURL,
            caption: data.caption,
            quantity: 0,
            like: false,
            email: user.email,
          };
          fetch(
            "https://react-internshala-assignment-raju-server.vercel.app/tweet",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(tweet),
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Tweet placed successfully");
                refetch();
                navigate("/");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="lg:w-3/4 sm:w-full mx-auto bg-[#FFFFFF]">
      <div className="flex  items-center my-3  py-2 border-none rounded-lg shadow-md">
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
            className="border-none btn no-animation text-md rounded-full pl-3 pr-40 bg-gray-200 hover:bg-gray-200 text-gray-500"
          >
            What's your mind, {user ? user?.displayName : ""}?
          </label>
        </div>
      </div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="post-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="post-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex  items-center mt-5 py-2 mb-5">
            <div className="mx-3">
              {user?.photoURL ? (
                <div className="flex items-center ml-14">
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
              <label htmlFor="post-modal" className="  pl-3">
                {user ? user?.displayName : ""}
              </label>
            </div>
          </div>
          <form onSubmit={handleSubmit(handleAddTweet)}>
            <div className="form-control w-full max-w-xs mx-auto pb-3">
              <input
                placeholder="What's your mind?"
                type="text"
                {...register("caption", { required: "text is required" })}
                className="input w-full max-w-xs focus:outline-none dark:bg-black dark:text-white"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              {fileList ? (
                <>
                  <img src={preview} alt="/" className="w-full mx-auto" />
                  <button onClick={removeSelectedImage}>
                    <p className="text-red-600 py-3"> Remove This Image</p>
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="file"
                    {...register("image")}
                    onChange={onSelectFile}
                    id="files"
                    className="hidden"
                  />
                  <label
                    htmlFor="files"
                    className="flex justify-center px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
                  >
                    <Icon icon="material-symbols:image" width="32" />
                  </label>
                </>
              )}
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.img?.message}
                </p>
              )}
            </div>
            <div className="text-center">
              <input
                className="btn max-w-xs border-none bg-orange-500 hover:bg-orange-500 w-full mt-5"
                value="Post"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="">
        {tweets.length < 0 ? (
          <p className="text-lg font-serif font-semibold">
            You have no tweet to show.
          </p>
        ) : (
          tweets?.map((tweet) => (
            <TweetCard key={tweet._id} tweet={tweet} refetch={refetch} />
          ))
        )}
      </div>
    </div>
  );
};

export default MyTweet;
