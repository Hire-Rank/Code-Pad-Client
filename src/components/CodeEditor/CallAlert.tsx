import React, { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "../ui/button";
import { useSocket } from "@/context/SocketProvider";
import { useNavigate, useParams } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CallAlertProps {
  remoteSocketId: string;
  isVideoOn: boolean;
  isAudioOn: boolean;
  interviewInviteLink: string;
  copyToClipboard: (text: string) => void;
  setIsVideoOn: (isVideoOn: boolean) => void;
  setIsAudioOn: (isAudioOn: boolean) => void;
  handleCallUser: () => void;
}

function CallAlert({
  handleCallUser,
  remoteSocketId,
  isAudioOn,
  isVideoOn,
  setIsAudioOn,
  setIsVideoOn,
  interviewInviteLink,
  copyToClipboard,
}: CallAlertProps) {
  useEffect(() => {}, [isAudioOn, isVideoOn, remoteSocketId]);

  const [callStarted, setCallStarted] = useState<boolean>(false);

  const socket = useSocket();

  const navigate = useNavigate();
  const { roomId } = useParams();

  const handleAudioToggle = () => {
    let val = !isAudioOn;
    setIsAudioOn(val);
    socket.emit("update audio", { roomId, audio: val });
    socket.emit("syncing the audio", { roomId: roomId });
  };

  const handleVideoToggle = () => {
    let val = !isVideoOn;
    setIsVideoOn(val);
    socket.emit("update video", { roomId, video: val });
    socket.emit("syncing the video", { roomId: roomId });
  };

  function handleLeave() {
    socket.disconnect();
    if (!socket.connected) {
      window.opener = null;
      window.open("/", "_self");
      window.close();
    }
  }

  const handleStartCall = () => {
    if (callStarted) setCallStarted(false);
    else setCallStarted(true);
    handleCallUser();
  };

  return (
    <div className="w-full justify-center items-center px-8">
      {!remoteSocketId && !callStarted && (
        <Alert className="w-full flex justify-between items-center">
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>
            Waiting for the candidate to Join / Interviewer to Start Call
          </AlertDescription>
          <div className="flex items-center justify-center gap-8">
            <div onClick={() => copyToClipboard(interviewInviteLink)}>
              <img src={"/share.png"} className="w-6 cursor-pointer"></img>
            </div>
            <Button variant="ghost" disabled onClick={handleStartCall}>
              Start Call{" "}
            </Button>
          </div>
        </Alert>
      )}
      {remoteSocketId && !callStarted && (
        <Alert className="w-full flex justify-between items-center">
          <AlertTitle>Connect</AlertTitle>
          <AlertDescription>Click Start Interview to begin !</AlertDescription>
          <div className="flex items-center justify-center gap-8">
            <div onClick={() => copyToClipboard(interviewInviteLink)}>
              <img src={"/share.png"} className="w-7 cursor-pointer"></img>
            </div>
            <Button className="bg-blue-500" onClick={handleStartCall}>
              Start Interview{" "}
            </Button>
          </div>
        </Alert>
      )}
      {remoteSocketId && callStarted && (
        <Alert className="w-full flex justify-between items-center">
          <AlertTitle>Interview in Progress</AlertTitle>
          <AlertDescription></AlertDescription>
          <AlertDialog>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you absolutely sure to leave ?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. Once interview is left cannot be
                  rejoined.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-blue-500"
                  onClick={handleLeave}
                >
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
            <div className="flex items-center justify-center gap-8">
              <div onClick={() => copyToClipboard(interviewInviteLink)}>
                <img src={"/share.png"} className="w-7 cursor-pointer"></img>
              </div>
              <div onClick={handleAudioToggle}>
                <img
                  src={isAudioOn ? "/mic.png" : "/micOff.png"}
                  className="w-7 cursor-pointer"
                ></img>
              </div>
              <div onClick={handleVideoToggle}>
                <img
                  src={isVideoOn ? "/video.png" : "/videoOff.png"}
                  className="w-10 cursor-pointer"
                ></img>
              </div>
              <AlertDialogTrigger>
                <Button className="bg-red-500">Leave Interview</Button>
              </AlertDialogTrigger>
            </div>
          </AlertDialog>
        </Alert>
      )}
    </div>
  );
}

export default CallAlert;
