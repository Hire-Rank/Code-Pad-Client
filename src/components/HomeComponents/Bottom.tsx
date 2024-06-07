import React from "react";
import room from "../../media/room.png";

const Bottom = () => {
  return (
    <>
      <div className="h-max  rounded-b-full bg-gradient-to-t from-indigo-100 ">
        <div className="  flex flex-row">
          <div className="w-1/2 ml-20 py-10 ">
            <img
              src={room}
              alt=""
              className="border-1 rounded-r-full rounded-l-full mix-blend-multiply opacity-80"
            />
          </div>
          <div className="w-1/2 flex flex-col ">
            <div className=" font-bold text-6xl pt-20 flex  justify-center items-center">
              <p className="w-3/5 leading-tight">
                Easy and effortless way to conduct the coding test
              </p>
            </div>
            <div className="flex justify-evenly ">
              <p className="p-4 w-3/5 text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                With hush you can easliy connect with your team in a different
                fields, you can create, manage, and edit what ever you want
                inside the channel. Create as many as you want
              </p>
            </div>
          </div>
        </div>

        <div className=" pt-4  flex flex-row">
          <div className="w-1/2 flex flex-col ">
            <div className=" font-bold text-6xl pt-20 flex  justify-center items-center">
              <p className="w-3/5 leading-tight">
                Real time code synchronization
              </p>
            </div>
            <div className="flex justify-evenly ">
              <p className="p-4 w-3/5 text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                With hush you can easliy connect with your team in a different
                fields, you can create, manage, and edit what ever you want
                inside the channel. Create as many as you want
              </p>
            </div>
          </div>
          <div className="w-1/2 ml-20 py-10 ">
            <img
              src={room}
              alt=""
              className="border-1 rounded-r-full rounded-l-full mix-blend-multiply opacity-80"
            />
          </div>
        </div>

        <div className=" pt-4 flex flex-row">
          <div className="w-1/2 ml-20 py-10 ">
            <img
              src={room}
              alt=""
              className="border-1 rounded-r-full rounded-l-full mix-blend-multiply opacity-80"
            />
          </div>
          <div className="w-1/2 flex flex-col ">
            <div className=" font-bold text-6xl pt-20 flex  justify-center items-center">
              <p className="w-3/5 leading-tight">Live Video call</p>
            </div>
            <div className="flex justify-evenly ">
              <p className="p-4 w-3/5 text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                With hush you can easliy connect with your team in a different
                fields, you can create, manage, and edit what ever you want
                inside the channel. Create as many as you want
              </p>
            </div>
          </div>
        </div>

        <div className=" pt-4  flex flex-row">
          <div className="w-1/2 flex flex-col ">
            <div className=" font-bold text-6xl pt-20 flex  justify-center items-center">
              <p className="w-3/5 leading-tight">
                Compile and Run 30+ languages
              </p>
            </div>
            <div className="flex justify-evenly ">
              <p className="p-4 w-3/5 text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                With hush you can easliy connect with your team in a different
                fields, you can create, manage, and edit what ever you want
                inside the channel. Create as many as you want
              </p>
            </div>
          </div>
          <div className="w-1/2 ml-20 py-10 ">
            <img
              src={room}
              alt=""
              className="border-1 rounded-r-full rounded-l-full mix-blend-multiply opacity-80"
            />
          </div>
        </div>
        <div className=" font-bold text-6xl w-3/5 border-2 rounded-xl bg-[url('./bgLanding.png')] py-20 flex flex-col leading-tight h-2/4 items-center justify-center m-auto">
          <p className="bg-gradient-to-tr from-indigo-700 to-cyan-400 bg-clip-text text-transparent">
            Don't miss the opportunity!
          </p>
          <p className="bg-gradient-to-tr from-indigo-700 to-cyan-400 bg-clip-text text-transparent">
            Join us now
          </p>
          <button className=" inline-block mt-8 text-2xl font-semibold w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px">
            Register
          </button>
        </div>
        {/* <img
            src={room}
            className="border-2 shadow-2xl rounded-xl p-3 bg-background"
            alt="" */}
        {/* /> */}
      </div>
    </>
  );
};

export default Bottom;
