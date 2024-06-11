import CodeArea from "@/components/CodeEditor/CodeArea";
import EditorHome from "@/components/CodeEditor/EditorHome";
import Header from "@/components/Header";
import { useSocket } from "@/context/SocketProvider";
import React, { useCallback, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import peer from "../service/peer";
import { useToast } from "@/components/ui/use-toast";
import CallAlert from "@/components/CodeEditor/CallAlert";
import axios from "axios";

const CodeEditor = () => {
  const { toast } = useToast();
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState<MediaStream>();
  const [remoteStream, setRemoteStream] = useState<MediaStream>();
  const location = useLocation();
  const navigate = useNavigate();
  const { roomId } = useParams();
  const [isAudioOn, setIsAudioOn] = useState<boolean>(true);
  const [isVideoOn, setIsVideoOn] = useState<boolean>(true);
  const [isAudioOnRemoteParty, setIsAudioOnRemoteParty] =
    useState<boolean>(true);
  const [isVideoOnRemoteParty, setIsVideoOnRemoteParty] =
    useState<boolean>(true);

  const [interviewInviteLink, setInterviewInviteLink] = useState<string>();

  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined room`);
    toast({
      title: "success",
      description: `${email} joined room`,
      variant: "default",
    });

    setRemoteSocketId(id);
  }, []);

  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

  function kickStrangerOut() {
    navigate("/", { replace: true });
  }

  function copyToClipboard(text) {
    try {
      navigator.clipboard.writeText(text);
      toast({
        title: "Interview Invite Link ",
        description: "Invite Link is Copied To Clipboard",
        variant: "default",
      });
    } catch (exp) {
      console.error(exp);
    }
  }

  const verifyRoomPassword = async () => {
    axios
      .post(
        BASE_URL + "/checkRoomInfo",
        {
          roomId,
          password: location.state.password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res: any) => {
        //set interview invite link
        console.log(res);
        if (res.data.success) {
          let host = import.meta.env.VITE_FRONTEND_BASE_URL;
          let customUrl =
            host + "/join/" + roomId + "/" + location.state.password;
          setInterviewInviteLink(customUrl);
          copyToClipboard(customUrl);

          socket.emit("when a user joins", {
            roomId,
            username: location.state.email,
          });
        } else kickStrangerOut();
      })
      .catch((e: any) => {
        console.log(e);
        kickStrangerOut();
      });
  };

  useEffect(() => {
    if (location.state && location.state.email && location.state.password) {
      verifyRoomPassword();
    } else {
      console.log("Before only !");
      console.log(location.state.email);
      console.log(location.state.password);
      kickStrangerOut();
    }
  }, [socket, location.state, roomId, navigate]);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      console.log("GOT TRACKS!!");
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    socket.on("on audio change", ({ audio }) => {
      setIsAudioOnRemoteParty(audio);
    });

    socket.on("on video change", ({ video }) => {
      setIsVideoOnRemoteParty(video);
    });

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
    isAudioOn,
    isVideoOn,
    isAudioOnRemoteParty,
    isVideoOnRemoteParty,
  ]);

  return (
    <>
      <div className="flex flex-col justify-center">
        <Header />
        <CallAlert
          remoteSocketId={remoteSocketId}
          handleCallUser={handleCallUser}
          isVideoOn={isVideoOn}
          isAudioOn={isAudioOn}
          setIsVideoOn={setIsVideoOn}
          setIsAudioOn={setIsAudioOn}
          interviewInviteLink={interviewInviteLink}
          copyToClipboard={copyToClipboard}
        />
        <EditorHome
          partyStream={myStream}
          remotePartyStream={remoteStream}
          remoteSocketId={remoteSocketId}
          handleCallUser={handleCallUser}
          isVideoOn={isVideoOn}
          isAudioOn={isAudioOn}
          isAudioOnRemoteParty={isAudioOnRemoteParty}
          isVideoOnRemoteParty={isVideoOnRemoteParty}
        />
      </div>
    </>
  );
};

export default CodeEditor;
