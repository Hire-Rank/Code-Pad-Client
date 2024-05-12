import React from "react";
import people from "../../media/people.png";
import controls from "../../media/controls.png";
const VideoCall = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src={people} className="h-[12rem]" />
          </div>
          <div>
            <img src={controls} className="h-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCall;
