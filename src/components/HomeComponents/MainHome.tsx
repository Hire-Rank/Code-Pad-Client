import React from "react";
import ss from "../../media/ss.png";
import Navbar from "@/components/HomeComponents/Navbar";

const MainHome = () => {
  return (
    <>
      <div className="bg-gradient-to-tl from-indigo-100  h-4/6 border rounded-b-full">
        {/* <div className="bg-gradient-to-l from-blue-200 h-3/5 border-3  "> */}
        <Navbar />
        <div className=" first-div  text-center py-20 m-auto p-auto flex flex-col justify-center items-center w-1/2  ">
          <p className="font-bold text-8xl bg-gradient-to-tr from-indigo-700 to-cyan-400 bg-clip-text text-transparent	">
            Connect with your team
          </p>
          <p className="my-10  w-3/5 m-auto text-gray-500 font-semibold ">
            CodePad is the platform that provides efficient way for the
            recuriters to conduct the coding interviews.
          </p>
          <div className="cursor-pointer relative inline-flex">
            <button className=" inline-block text-2xl font-semibold w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
              Create Interview
            </button>
            <div className="min-w-[200px] h-20 rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-300 to-blue-400 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px absolute top-0 left-0 animate-ping"></div>
          </div>
        </div>
        {/* </div> */}
        <div className="w-3/4 justify-center m-auto z-0">
          <img
            src={ss}
            className="border-2 shadow-2xl rounded-xl p-3 bg-background"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MainHome;
