import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoCallProps {
  partyStream: MediaStream;
  remotePartyStream: MediaStream;
  remoteSocketId: string;
  handleCallUser: () => void;
}

const VideoCall = ({
  partyStream,
  remotePartyStream,
  handleCallUser,
  remoteSocketId,
}: VideoCallProps) => {
  useEffect(() => {}, [partyStream, remotePartyStream, remoteSocketId]);

  return (
    <>
      <div className="flex border-yellow-400 items-center justify-center">
        {/* {!remoteSocketId ? "No one in the room" : ""} */}
        <div className="flex  gap-1 border-yellow-400 items-center justify-center">
          {partyStream ? (
            <ReactPlayer
              muted
              playing
              width={"230px"}
              height={"230px"}
              url={partyStream}
            />
          ) : (
            <div className="w-[230px] h-[230px] p-8">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/meetUserCandidate.jpg"
                  className="border-gray-500 p-4 border-2 rounded-md object-cover"
                ></img>
              </AspectRatio>
            </div>
          )}
          {remotePartyStream ? (
            <ReactPlayer
              mute
              playing
              width={"230px"}
              height={"230px"}
              url={remotePartyStream}
            />
          ) : (
            <div className=" w-[230px] h-[230px] p-8">
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/meetUserInterviewer.jpg"
                  className="border-gray-500 p-3 border-2 rounded-md object-cover"
                ></img>
              </AspectRatio>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoCall;
