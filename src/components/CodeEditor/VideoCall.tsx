import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoCallProps {
  partyStream: MediaStream;
  remotePartyStream: MediaStream;
  remoteSocketId: string;
  handleCallUser: () => void;
  isVideoOn: boolean;
  isAudioOn: boolean;
  isVideoOnRemoteParty: boolean;
  isAudioOnRemoteParty: boolean;
}

const VideoCall = ({
  partyStream,
  remotePartyStream,
  handleCallUser,
  remoteSocketId,
  isVideoOn,
  isAudioOn,
  isAudioOnRemoteParty,
  isVideoOnRemoteParty,
}: VideoCallProps) => {
  useEffect(() => {}, [
    partyStream,
    remotePartyStream,
    remoteSocketId,
    isAudioOn,
    isVideoOn,
    isAudioOnRemoteParty,
    isVideoOnRemoteParty,
  ]);

  return (
    <>
      <div className="flex border-yellow-400 items-center justify-center">
        {/* {!remoteSocketId ? "No one in the room" : ""} */}
        <div className="flex  gap-1 border-yellow-400 items-center justify-center">
          {partyStream ? (
            isVideoOn ? (
              <ReactPlayer
                muted={!isAudioOn}
                playing={true}
                width={"230px"}
                height={"230px"}
                url={partyStream}
              />
            ) : (
              <>
                <ReactPlayer
                  muted={!isAudioOn}
                  playing={true}
                  width={"0px"}
                  height={"0px"}
                  url={partyStream}
                />
                <div className="w-[230px] h-[230px] p-8">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="/meetUserCandidate.jpg"
                      className="border-gray-500 p-4 border-2 rounded-md object-cover"
                    ></img>
                  </AspectRatio>
                </div>
              </>
            )
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
            isVideoOnRemoteParty ? (
              <ReactPlayer
                muted={!isAudioOnRemoteParty}
                playing={isVideoOnRemoteParty}
                width={"230px"}
                height={"230px"}
                url={remotePartyStream}
              />
            ) : (
              <>
                <ReactPlayer
                  muted={!isAudioOnRemoteParty}
                  playing={isVideoOnRemoteParty}
                  width={"00px"}
                  height={"00px"}
                  url={remotePartyStream}
                />
                <div className=" w-[230px] h-[230px] p-8">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src="/meetUserInterviewer.jpg"
                      className="border-gray-500 p-3 border-2 rounded-md object-cover"
                    ></img>
                  </AspectRatio>
                </div>
              </>
            )
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
