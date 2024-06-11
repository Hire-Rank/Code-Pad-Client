import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import axios from "axios";

function JoinRoom() {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");
  const [password, setPassword] = useState("");

  const { toast } = useToast();

  const socket = useSocket();
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

  const verifyRoomPassword = async () => {
    axios
      .post(
        BASE_URL + "/checkRoomInfo",
        {
          roomId: room,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res: any) => {
        //set interview invite link
        console.log(res);
        if (res.data.success) {
          socket.emit("room:join", { email, room });
        } else {
          toast({
            title: "Invalid Interview ID or Password !",
            description: "Try again with fresh invite link",
            variant: "destructive",
          });
        }
      })
      .catch((e: any) => {
        toast({
          title: "Invalid Interview ID or Password !",
          description: "Try again with fresh invite link",
          variant: "destructive",
        });
        console.log(e);
      });
  };

  const handleSubmitForm = useCallback(() => {
    if (!email || !room || !password) {
      toast({
        title: "Missing Fields",
        description: "Email ,Room ID and Password are required !",
        variant: "destructive",
      });
    } else {
      verifyRoomPassword();
    }
  }, [email, room, socket, password]);

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/codeeditor/${room}`, {
        state: { email, password },
      });
    },
    [navigate, password]
  );

  const { roomId, roomPassword } = useParams();

  useEffect(() => {
    if (!roomId || !roomPassword) {
      toast({
        title: "Interview Link is invalid !",
        description: "Room ID and Password were tampered",
        variant: "destructive",
      });
    } else {
      setRoom(roomId);
      setPassword(roomPassword);
    }
    return () => {};
  }, [room, password, email]);

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
          backgroundImage: "url('/bgLanding.png')",
        }}
      >
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle>Join Interview</CardTitle>
            <CardDescription>
              All interviews are secured with end-to-end encryption and password
              protection
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="roomId">INTERVIEW ID</Label>
                  <Input
                    id="roomId"
                    className="bg-slate-200"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="roomId">INTERVIEW PASSWORD</Label>
                  <Input
                    id="roomPassword"
                    className="bg-slate-200"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

export default JoinRoom;
