import React, { useState } from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const SignInPage = () => {
  const navigate = useNavigate();

  // State for input values and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [randomValue, setRandomValue] = useState(generateRandomString(5)); // Default length is 5
  const [error, setError] = useState("");
  console.log(randomValue);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (email === "f2022266201@umt.edu.pk" && password === "ayan0786") ||
      code === randomValue
    ) {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="bg-[url('https://online.umt.edu.pk/assets/img/backgrounds/1.jpg')] bg-no-repeat bg-cover w-[100%] m-h-[100vh] flex justify-center overflow-y-scroll px-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white/70 border-t-6 border-[#2978A5] p-5 flex flex-col gap-3 my-10 h-[100vh]"
      >
        <div className="w-34 mx-auto">
          <img
            src="https://online.umt.edu.pk/img/UMT_Logo.png"
            alt="UMT Logo"
          />
        </div>
        <h1 className="text-center text-[40px] text-[#4D5197] font-[400]">
          Participant Sign in
        </h1>

        {/* Email Input */}
        <div className="relative flex items-center w-[100%]">
          <span className="absolute left-3 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>
          <input
            className="border-[0.5px] w-[100%] text-[28px] font-[500] opacity-[0.6] lg:py-5 py-3 px-3 pl-12 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-none transition duration-300 all ease"
            type="text"
            placeholder="UMT Student ID / Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="relative flex items-center w-[100%]">
          <span className="absolute left-3 text-gray-500">
            <IoLockClosedOutline size={30} />
          </span>
          <input
            className="border-[0.5px] w-[100%] text-[28px] font-[500] opacity-[0.6] lg:py-5 py-3 px-3 pl-12 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-none transition duration-300 all ease"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Code Input & Generated Code */}
        <div className="flex gap-4 lg:gap-10 lg:flex-row flex-col">
          {/* User Code Input */}
          <div className="relative flex items-center lg:w-[200px] mx-auto text-center">
            <span className="absolute left-3 text-gray-500">
              <IoLockClosedOutline size={30} />
            </span>
            <input
              className="border-[0.5px] w-[100%] text-[28px] font-[500] opacity-[0.6] lg:py-5 py-3 px-3 pl-12 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-none transition duration-300 all ease"
              type="text"
              placeholder="Code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {/* Randomly Generated Code (Read-Only) */}
          <div className="relative flex items-center lg:w-[200px] mx-auto text-center">
            <input
              className="border-[3px] border-[#0043A8] text-[#0043A8] w-[100%] text-[28px] font-[700] opacity-[0.6] lg:py-5 py-3 px-3 pl-12 bg-white rounded-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-none transition duration-300 all ease"
              type="text"
              value={randomValue}
              readOnly
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col ml-5">
          <a className="text-[#393F89] text-xl" href="">
            Create New Account.
          </a>
          <a className="text-[#393F89] text-xl" href="">
            Forgot Password?
          </a>
          <a className="text-[#393F89] text-xl" href="">
            Click Here For Alumni Access
          </a>
        </div>

        {/* Error Message */}
        {error && (
          <div className="text-red-600 text-xl text-center">{error}</div>
        )}

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-[100%] bg-[#0043A8] text-white py-5 text-xl cursor-pointer"
        >
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default SignInPage;
