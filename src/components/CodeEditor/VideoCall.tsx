import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Button } from "../ui/button";
import { boolean } from "zod";
import { set } from "react-hook-form";
import { Title } from "@radix-ui/react-toast";

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

  const [callStarted, setCallStarted] = useState<boolean>(false);

  const handleStartCall = () => {
    if (callStarted) setCallStarted(false);
    else setCallStarted(true);
    handleCallUser();
  };

  return (
    <>
      <div className="flex border-yellow-400 items-center justify-center">
        {!remoteSocketId ? "No one in the room" : ""}
        {remoteSocketId && !callStarted ? (
          <div className="flex justify-between">
            <Title>Click on Call to start !</Title>
            <Button onClick={handleStartCall}>Start Call </Button>
          </div>
        ) : (
          ""
        )}
        <div className="flex  gap-1 border-yellow-400 items-center justify-center">
          {partyStream && (
            <>
              <ReactPlayer
                playing
                width={"230px"}
                height={"230px"}
                url={partyStream}
              />
            </>
          )}
          {remotePartyStream && (
            <>
              <ReactPlayer
                playing
                height="230px"
                width="230px"
                url={remotePartyStream}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoCall;
