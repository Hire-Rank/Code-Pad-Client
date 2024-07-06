import { NavLink } from "react-router-dom";

const Bottom = () => {
  return (
    <>
      <div className="px-10 w-full flex flex-col items-center justify-center gap-[10rem] h-max">
        <div className="flex flex-row items-center justify-between">
          <div
            className="w-1/2 py-8 flex items-center justify-center rounded-xl px-5 bg-cover bg-center"
            style={{
              transform: "rotate(180deg)",
              backgroundImage: "url('./bgLanding.png')",
            }}
          >
            <img
              src={"/secure.png"}
              style={{
                transform: "rotate(180deg)",
              }}
              alt=""
              className="rounded-xl  h-[380px] w-[380px]"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className=" font-bold text-6xl  flex justify-center items-center">
              <p className="w-full leading-tight text-left">
                Secure Interview Room
              </p>
            </div>
            <div className="flex justify-evenly ">
              <p className="w-full text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                Strong password protected rooms to maintain the privacy
              </p>
            </div>
          </div>
        </div>

        <div className="w-[80%]  flex flex-row items-center justify-between">
          <div className="w-1/2 flex flex-col gap-4">
            <div className=" font-bold text-6xl  flex  justify-center items-center">
              <p className="w-full leading-tight">In-built video meet</p>
            </div>
            <div className="flex justify-evenly">
              <p className="w-full text-gray-500 font-normal text-xl flex  r leading-8">
                Secure video meet using peer-to-peer connection
              </p>
            </div>
          </div>

          <div
            className="w-1/2 py-8 flex items-center justify-center rounded-xl px-5 bg-cover bg-center"
            style={{
              transform: "rotate(360deg)",
              backgroundImage: "url('./bgLanding.png')",
            }}
          >
            <img
              src={"/videocall.png"}
              alt=""
              className="rounded-xl  h-[380px] w-[380px]"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div
            className="w-1/2 py-8 flex items-center justify-center rounded-xl px-5 bg-cover bg-center"
            style={{
              transform: "rotate(180deg)",
              backgroundImage: "url('./bgLanding.png')",
            }}
          >
            <img
              src={"/realtime.png"}
              style={{
                transform: "rotate(180deg)",
              }}
              alt=""
              className="rounded-xl  h-[380px] w-[380px]"
            />
          </div>
          <div className="w-1/2 flex flex-col gap-4">
            <div className="w-full font-bold text-6xl  flex justify-center items-center">
              <p className="leading-tight text-right">Real Time Code Editor</p>
            </div>
            <div className="w-full flex justify-evenly ">
              <p className="w-full text-gray-500 font-normal text-xl flex  justify-center items-center leading-8">
                See the live changes of code reflecting instantly !
              </p>
            </div>
          </div>
        </div>

        <div className="w-[80%]  flex flex-row items-center justify-between">
          <div className="w-1/2 flex flex-col gap-4">
            <div className=" font-bold text-6xl  flex  justify-center items-center">
              <p className="w-full leading-tight"> Compile and Run</p>
            </div>
            <div className="flex justify-evenly">
              <p className="w-full text-gray-500 font-normal text-xl flex  r leading-8">
                Supports C++, Python, Java and Javascript with lightning fast
                Judge
              </p>
            </div>
          </div>

          <div
            className="w-1/2 py-8 flex items-center justify-center rounded-xl px-5 bg-cover bg-center"
            style={{
              transform: "rotate(360deg)",
              backgroundImage: "url('./bgLanding.png')",
            }}
          >
            <img
              src={"/languages.png"}
              alt=""
              className="rounded-xl  h-[380px] w-[380px]"
            />
          </div>
        </div>

        <div className=" font-bold text-5xl w-3/5 border-2 rounded-xl px-2 rounded-b-full bg-gradient-to-t from-indigo-100 py-20 flex flex-col leading-tight h-2/4 items-center justify-center m-auto">
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
