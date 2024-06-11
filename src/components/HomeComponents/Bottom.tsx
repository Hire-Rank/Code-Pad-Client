import React from "react";
import room from "../../media/room.jpg";
import realTimeCode from "../../media/realTimeCode.jpg";
import realTimeVideoCall from "../../media/videoCall.jpg";
import languages from "../../media/languages.png";
import { NavLink } from "react-router-dom";

const Bottom = () => {
  return (
    <>
      <div className="px-10 flex flex-col items-center justify-center gap-[10rem] h-max  rounded-b-full bg-gradient-to-t from-indigo-100 ">
        <div className="flex flex-row items-center justify-between">
          <div
            className="w-1/2 py-8 flex items-center justify-center rounded-xl px-5 bg-cover bg-center"
            style={{
              transform: "rotate(180deg)",
              backgroundImage: "url('./bgLanding.png')",
            }}
          >
            <img
              src={room}
              style={{
                transform: "rotate(180deg)",
              }}
              alt=""
              className="rounded-xl  h-[380px] w-[500px]"
            />
          </div>
          <div className="w-1/2 flex flex-col">
            <div className=" font-bold text-6xl  flex  justify-center items-center">
              <p className="w-3/5 leading-tight">Secure Interview Room</p>
            </div>
            <div className="flex justify-evenly ">
              <p className="p-4 w-3/5 text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                Strong password protected rooms to maintain the privacy
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/2 flex flex-col ">
            <div className=" font-bold text-6xl pt-20 flex  justify-center items-center">
              <p className="w-3/5 leading-tight">Real Time Code Editor </p>
            </div>
            <div className="flex justify-evenly ">
              <p className="p-4 w-3/5 text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                See the live changes of code reflecting instantly !
              </p>
            </div>
          </div>
          <div
            className="w-1/2 py-8 flex items-center justify-center rounded-xl px-5 bg-cover bg-center"
            style={{
              backgroundImage: "url('./bgLanding.png')",
            }}
          >
            <img
              src={realTimeCode}
              alt=""
              className="rounded-xl h-[360px] w-[530px]"
            />
          </div>
        </div>

        <div className=" pt-4 flex flex-row">
          <div
            className="w-1/2 py-8 rounded-xl px-5 bg-cover bg-center"
            style={{
              transform: "rotate(180deg)",
              backgroundImage: "url('./bgLanding.png')",
            }}
          >
            <img
              src={realTimeVideoCall}
              alt=""
              style={{
                transform: "rotate(180deg)",
              }}
              className="rounded-xl h-[360px] w-[530px]"
            />
          </div>
          <div className="w-1/2 flex flex-col ">
            <div className=" font-bold text-6xl flex  justify-center items-center">
              <p className="w-3/5 leading-tight">In-built video meet</p>
            </div>
            <div className="flex justify-evenly ">
              <p className="p-4 w-3/5 text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                Secure video meet using peer-to-peer connection
              </p>
            </div>
          </div>
        </div>

        <div className=" pt-4  flex flex-row">
          <div className="w-1/2 flex flex-col ">
            <div className=" font-bold text-6xl  flex  justify-center items-center">
              <p className="w-3/5 leading-tight">
                Compile and Run popular languages
              </p>
            </div>
            <div className="flex justify-evenly ">
              <p className="p-4 w-3/5 text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                Supports C++, Python, Java and Javascript with lightning fast
                Judge
              </p>
            </div>
          </div>
          <div
            className="w-1/2 py-8 flex items-center justify-center rounded-xl px-5 bg-cover bg-center"
            style={{
              backgroundImage: "url('./bgLanding.png')",
            }}
          >
            <img
              src={languages}
              alt=""
              className="rounded-xl h-[360px] w-[530px]"
            />
          </div>
        </div>
        <div className=" font-bold text-5xl w-3/5 border-2 rounded-xl px-2 bg-[url('/bgLanding.png')] py-20 flex flex-col leading-tight h-2/4 items-center justify-center m-auto">
          <p className="bg-gradient-to-tr from-indigo-700 to-cyan-400 bg-clip-text text-transparent">
            Don't miss the opportunity!
          </p>
          <p className="bg-gradient-to-tr from-indigo-700 to-cyan-400 bg-clip-text text-transparent">
            Join us now
          </p>
          <NavLink to="/auth">
            <button className=" inline-block mt-8 text-2xl font-semibold w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
              Try Now
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Bottom;
