import React from "react";
import people from "../../media/people.png";
import controls from "../../media/controls.png";
const VideoCall = () => {
  return (
    <>
        <div className="flex border-yellow-400 flex-col items-center justify-center">
          <div>
            <img src={people} height={"119px"} width={"451px"}/>
          </div>
          <div>
            <img src={controls} className="h-10" />
          </div>
        </div>
    </>
  );
};

export default VideoCall;
