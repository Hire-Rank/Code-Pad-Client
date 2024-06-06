import React from "react";
import ss from "../../media/ss.png";
import Navbar from "@/components/HomeComponents/Navbar";

const MainHome = () => {
  return (
    <>
      <div className="bg-gradient-to-l from-blue-200 h-4/6 border rounded-b-full">
        {/* <div className="bg-gradient-to-l from-blue-200 h-3/5 border-3  "> */}
        <Navbar />
        <div className="first-div  text-center py-20 m-auto p-auto flex flex-col justify-center w-1/2  ">
          <p className="font-bold text-8xl  bg-gradient-to-r from-blue-700  to-blue-200 text-transparent bg-clip-text	">
            Connect with your team
          </p>
          <p className="my-10  w-3/5 m-auto  text-gray-500 font-semibold ">
            CodePad is the platform that provides efficient way for the
            recuriters to conduct the coding interviews.
          </p>
          <button className="p-2 w-1/3 font-semibold text-2xl  bg-blue-300 hover:bg-gray-100 px-2 m-auto border-2 rounded-full">
            Create Interview
          </button>
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
