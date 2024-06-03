import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../context/SocketProvider";
import Header from "../Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

function LandingPage() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const { toast } = useToast();

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(() => {
    if (!email || !room) {
      toast({
        title: "Missing Fields",
        description: "Email and Room ID are required !",
        variant: "destructive",
      });
    } else {
      socket.emit("room:join", { email, room });
    }
  }, [email, room, socket]);

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/codeeditor/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="flex h-full w-full flex-col justify-center">
      <Header />
      <div
        className="flex items-center justify-center bg-cover bg-center h-screen"
        style={{
          backgroundImage: "url('./bgLanding.png')",
        }}
      >
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Create New Room</CardTitle>
            <CardDescription>
              Create the interview room instantly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="roomId">Room ID</Label>
                  <Input
                    id="roomId"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    placeholder="ENTER ROOM ID"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    placeholder="ENTER EMAIL ID"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button className="w-[120px]" variant="outline">
              Back
            </Button>
            <Button
              className="w-[120px] bg-blue-600"
              onClick={handleSubmitForm}
            >
              Join
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
