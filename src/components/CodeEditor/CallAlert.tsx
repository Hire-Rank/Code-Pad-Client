import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "../ui/button";

interface CallAlertProps {
  remoteSocketId: string;
  handleCallUser: () => void;
}

function CallAlert({ handleCallUser, remoteSocketId }: CallAlertProps) {
  const [callStarted, setCallStarted] = useState<boolean>(false);

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
          <Button variant="ghost" disabled onClick={handleStartCall}>
            Start Call{" "}
          </Button>
        </Alert>
      )}
      {remoteSocketId && !callStarted && (
        <Alert className="w-full flex justify-between items-center">
          <AlertTitle>Connect</AlertTitle>
          <AlertDescription>
            Click To Connect To Start The Interview
          </AlertDescription>
          <Button className="bg-blue-500" onClick={handleStartCall}>
            Start Call{" "}
          </Button>
        </Alert>
      )}
    </div>
  );
}

export default CallAlert;
