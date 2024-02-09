import React, { useEffect, useState } from "react";
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
  AiOutlineLoading3Quarters,
  AiFillStar,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { TiStarOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { updateDoc, doc } from "firebase/firestore";
import { firestore } from "../../../firebase/firebaseConfig";
import { setUserData } from "../../../redux/features/userSlice";
import { toast } from "react-toastify";

const DescriptionActions = ({ problem }) => {
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [starred, setStarred] = useState(true);

  const { id, totalLikes, totalDislikes,totalStarred, totalComments } = problem || {};

  const { userData } = useSelector((state) => state.user) || {};
  const dispatch = useDispatch();
  const { likedProblems, dislikedProblems, starredProblems } = userData || {};
  const likedCurrentProblem = likedProblems?.find((item) => item === id);
  const disLikedCurrentProblem = dislikedProblems?.find((item) => item === id);
  const starredCurrentProblem = starredProblems?.find((item) => item === id);

  useEffect(() => {
    if (likedCurrentProblem !== undefined) {
      setLiked(true);
    } else {
      setLiked(false);
    }
    if (disLikedCurrentProblem !== undefined) {
      setDisLiked(true);
    } else {
      setDisLiked(false);
    }

    // console.log("already liked  " + likedCurrentProblem);
    // console.log("already Disliked  " + disLikedCurrentProblem);
  }, [setLiked, setDisLiked, likedCurrentProblem, disLikedCurrentProblem]);

  useEffect(() => {
    if (starredCurrentProblem !== undefined) {
      setStarred(true);
    } else {
      setStarred(false);
    }
    console.log("already Starred  " + starredCurrentProblem);

  }, [setStarred, starredCurrentProblem]);

  const handleLike = async () => {
    if (!userData) {
      toast.error("Please login to like", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    const userRef = doc(firestore, "users", userData.uid);
    const problemRef = doc(firestore, "problems", id);

    const isLiked = likedCurrentProblem !== undefined;
    const isDisliked = disLikedCurrentProblem !== undefined;

    const newTotalLikes = likedCurrentProblem ? totalLikes - 1 : totalLikes + 1;
    const newTotalDislikes = isDisliked ? totalDislikes - 1 : totalDislikes;

    setLiked(!isLiked); // Toggle liked state
    if (isDisliked) setDisLiked(false); // Remove dislike if existed

    try {
      // Firestore update for user's liked/disliked problems
      const updatedLikedProblems = isLiked
        ? likedProblems.filter((item) => item !== id)
        : [...(likedProblems || []), id];
      const updatedDislikedProblems = isDisliked
        ? dislikedProblems.filter((item) => item !== id)
        : dislikedProblems;

      await updateDoc(userRef, {
        likedProblems: updatedLikedProblems,
        dislikedProblems: updatedDislikedProblems,
      });
      console.log("====================================");
      console.log("newTotalLikes" + newTotalLikes);
      console.log("newTotalDislikes" + newTotalDislikes);
      console.log("====================================");
      // Firestore update for problem's totalLikes and totalDislikes
      await updateDoc(problemRef, {
        totalLikes: newTotalLikes,
        totalDislikes: newTotalDislikes,
      });

    } catch (error) {
      console.error("Error updating like status: ", error);
      // Revert optimistic UI update in case of error
      setLiked(isLiked);
      setDisLiked(isDisliked);
    }
  };

  const handleDisLike = async () => {
    if (!userData) {
      toast.error("Please login to dislike", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    const userRef = doc(firestore, "users", userData.uid);
    const problemRef = doc(firestore, "problems", id);

    const isLiked = likedCurrentProblem !== undefined;
    const isDisliked = disLikedCurrentProblem !== undefined;

    const newTotalLikes = isLiked ? totalLikes - 1 : totalLikes;
    const newTotalDislikes = isDisliked ? totalDislikes - 1 : totalDislikes + 1;

    setLiked(false); // Remove like if existed
    setDisLiked(!isDisliked); // Toggle disliked state

    try {
      const updatedLikedProblems = isLiked
        ? likedProblems.filter((item) => item !== id)
        : likedProblems;
      const updatedDislikedProblems = isDisliked
        ? dislikedProblems.filter((item) => item !== id)
        : [...(dislikedProblems || []), id];

      await updateDoc(userRef, {
        likedProblems: updatedLikedProblems,
        dislikedProblems: updatedDislikedProblems,
      });

      await updateDoc(problemRef, {
        totalLikes: newTotalLikes,
        totalDislikes: newTotalDislikes,
      });

    } catch (error) {
      console.error("Error updating dislike status: ", error);
      setLiked(isLiked); // Revert optimistic UI updates in case of error
      setDisLiked(isDisliked);
    }
  };

  const handleStarred = async () => {
    if (!userData) {
      toast.error("Please login to star problems", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    const userRef = doc(firestore, "users", userData.uid);
    const problemRef = doc(firestore, "problems", id);

    const isStarred = starredCurrentProblem !== undefined;
    const newTotalStarred = isStarred ? totalStarred - 1 : totalStarred + 1;

    setStarred(!isStarred); // Toggle starred state

    try {
      // Update the user document in Firestore for starred problems
      const updatedStarredProblems = isStarred
        ? starredProblems.filter((item) => item !== id)
        : [...(starredProblems || []), id];

      await updateDoc(userRef, {
        starredProblems: updatedStarredProblems,
      });

      // Update the problem document in Firestore for totalStarred
      await updateDoc(problemRef, {
        totalStarred: newTotalStarred,
      });

    } catch (error) {
      console.error("Error updating starred status: ", error);
      // Revert optimistic UI update in case of error
      setStarred(isStarred);
    }
  };

  return (
    <div className="absolute bottom-0 left-0 px-4 py-2 gap-3 flex items-center text-[#fff9] bg-base-200 w-full *:cursor-pointer">
      <div className="flex gap-0.5">
        <button
          className="flex items-center gap-2 px-3 py-1 rounded-l-lg text-sm w-fit bg-[#39494f]"
          onClick={handleLike}
        >
          {liked ? (
            <AiFillLike size={18} className="text-blue-500" />
          ) : (
            <AiOutlineLike size={18} />
          )}

          <div className="font-semibold">{totalLikes}</div>
        </button>
        <button
          className="flex items-center gap-2 px-3 py-1 rounded-r-lg text-sm w-fit bg-[#39494f]"
          onClick={handleDisLike}
        >
          {disLiked ? (
            <AiFillDislike size={18} className="text-blue-500" />
          ) : (
            <AiOutlineDislike size={18} />
          )}

          <div className="font-semibold">{totalDislikes}</div>
        </button>
      </div>
      <div className="flex gap-0.5">
        <button className="flex text-[#fff9] items-center gap-2 px-3 py-1 rounded-lg text-sm w-fit  hover:bg-[#39494f]">
          <FaRegComment size={18} />

          <div className="font-semibold">{totalComments}</div>
        </button>
      </div>
      <span className="">|</span>
      <div onClick={handleStarred}>
        {starred ? (
          <AiFillStar size={18} className="text-warning" />
        ) : (
          <TiStarOutline size={18} />
        )}
      </div>
    </div>
  );
};

export default DescriptionActions;
