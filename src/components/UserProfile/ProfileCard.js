import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/userSlice";
import { useNavigate } from "react-router-dom";

const gridItems = [
  {
    imgSrc:
      "https://leetcode.com/_next/static/images/starred-2e4c5ddcac0ba3a09087d8ff98eff50c.png",
    alt: "My Lists",
    label: "My Lists",
    path: "/mylist",
  },
  {
    imgSrc:
      "https://leetcode.com/_next/static/images/notebook-92e90c87d33d7403f2f016c245b203a7.png",
    alt: "Notebook",
    label: "Notebook",
    path: "/mylist",
  },
  {
    imgSrc:
      "https://leetcode.com/_next/static/images/answer-9dab99b273b399a43f8826c193d187d5.png",
    alt: "Submissions",
    label: "Submissions",
    path: "/mylist",
  },
  {
    imgSrc:
      "https://leetcode.com/_next/static/images/progress-106c8d8956a5f08d22006a6ea911e6c3.png",
    alt: "Progress",
    label: "Progress",
    path: "/mylist",
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/14250/14250709.png",
    alt: "Collaborate",
    label: "Collaborate",
    path: "/mylist",
  },
  {
    imgSrc: "https://cdn-icons-png.flaticon.com/512/6568/6568636.png",
    alt: "Log Out",
    label: "Log Out",
    onClick: (handleLogOut) => handleLogOut(),
  },
];



const ProfileCard = ({ userData }) => {
    const { displayName,email } = userData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleItemClick = (item) => {
    if (item.path) {
      navigate(item.path);
    } else if (item.onClick) {
      item.onClick(handleLogOut);
    }
  };

  return (
    <div  className= {`absolute right-6 top-full z-[100] w-80 bg-none`}>
      <div className="mt-4 bg-[#313130] rounded-xl overflow-hidden shadow-inner shadow-[#ffffff4b] text-white">
        <div className="p-2.5 items-center">
          <div className="flex items-center">
            <div className="w-3/12 flex items-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://assets.leetcode.com/users/default_avatar.jpg"
                alt="Rounded avatar"
              />
            </div>
            <div className="w-8/12">
              <h2 className="text-xl font-semibold">{displayName}</h2>
              <p className="text-sm my-1">{email}</p>
              <p className="text-xs text-warning leading-4 cursor-pointer">
                Access all features with our Premium subscription!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 w-full mt-6">
            {gridItems.map((item, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(item)}
                className="flex flex-col items-center bg-[#404141] p-1 shadow-md rounded-lg cursor-pointer hover:scale-95 duration-200"
              >
                <img src={item.imgSrc} alt={item.alt} className="w-10 h-auto" />
                <span className="text-[11px]">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
