import React from "react";
import room from "../../media/room.png";

const Bottom = () => {
  return (
    <>
      <div className="h-max bg-gradient-to-t from-blue-200  flex flex-row">
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
              fields, you can create, manage, and edit what ever you want inside
              the channel. Create as many as you want
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
