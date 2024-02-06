import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";
import validator from "validator";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatched, setPasswordMatched] = useState(false);
  const [emailValidate, setEmailValidate] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false); // Track focus state
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordMatched(true);
    } else {
      setPasswordMatched(false);
    }
  }, [password, confirmPassword]);
  const handleEmailInput = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValidate(validator.isEmail(newEmail));
  };

  const handleEmailFocus = () => {
    setEmailFocus(true);
  };

  const handleEmailBlur = () => {
    setEmailFocus(false);
  };

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailFocus(true);
    if (email && emailValidate && passwordMatched && password) {
      try {
        dispatch(signUp({ email, password })).then(navigate("/"));
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div
      className="w-screen h-full flex justify-center items-center"
      style={{ height: `calc(100vh - 3rem)` }}
    >
      <div className="bg-white rounded shadow-lg p-10">
        <img
          src="https://leetcode.com/static/webpack_bundles/images/logo.c36eaf5e6.svg"
          alt=""
          className="w-5/12 mx-auto"
        />
        <form onSubmit={handleSubmit} className="flex flex-col mt-6 text-black">
          <div className="h-14">
            <input
              id="emailField"
              type="text"
              value={email}
              placeholder="Email"
              onChange={handleEmailInput}
              onFocus={handleEmailFocus}
              onBlur={handleEmailBlur}
              className={`flex items-center py-2 px-4 w-64 bg-gray-200 mt-2 rounded-lg focus:outline-none focus:shadow-lg ${
                !emailValidate && emailFocus ? "ring-2 ring-red-500" : ""
              }`}
            />
            {!emailValidate && emailFocus && (
              <p className="text-red-500 text-xs ">Invalid email address</p>
            )}
          </div>

          <input
            id="passwordField"
            type="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordInput}
            className="flex items-center py-2 px-4 w-64 bg-gray-200 mt-4 rounded-lg focus:outline-none focus:shadow-lg"
          />
          <input
            id="passwordField"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="flex items-center py-2 px-4 w-64 bg-gray-200 mt-4 rounded-lg focus:outline-none focus:shadow-lg"
          />
          {!passwordMatched && confirmPassword.length > 0 && (
            <p className="text-red-500 text-xs mt-1">Password do not match!</p>
          )}
          <button
            type="submit"
            className="flex items-center justify-center py-3 px-6 w-64 bg-[#3f525b] mt-8 rounded font-semibold text-sm text-blue-100 duration-200 hover:bg-[#3f525be7]"
          >
            Sign Up
          </button>
          <div className="flex mt-3 text-sm gap-1 w-fit mx-auto">
            {/* <Link to="/forgot-password" className=" hover:text-blue-500">
              Forgot Password
            </Link> */}
            <span className="text-[#c1cbdb]">Already have an account? </span>
            <Link to="/signin" className=" hover:text-blue-500">
              Sign In
            </Link>
          </div>
          <p className="text-xs text-center my-2 text-[#c1cbdb]">
            Or sign in with
          </p>
          <button className="w-fit mx-auto">
            <svg
              className="h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="-0.5 0 48 48"
              version="1.1"
            >
              {" "}
              <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
              <defs> </defs>{" "}
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                {" "}
                <g id="Color-" transform="translate(-401.000000, -860.000000)">
                  {" "}
                  <g id="Google" transform="translate(401.000000, 860.000000)">
                    {" "}
                    <path
                      d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                      id="Fill-1"
                      fill="#FBBC05"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                      id="Fill-2"
                      fill="#EB4335"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                      id="Fill-3"
                      fill="#34A853"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                      id="Fill-4"
                      fill="#4285F4"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
