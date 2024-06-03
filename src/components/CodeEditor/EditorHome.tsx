import React, { useState, useEffect } from "react";
import CodeArea from "./CodeArea";
import StatusBar from "./StatusBar";
import VideoCall from "./VideoCall";
import Input from "./Input";
import Output from "./Output";
import { useNavigate, useParams } from "react-router-dom";
import { useSocket } from "@/context/SocketProvider";

interface EditorHomeProps {
  partyStream: MediaStream;
  remotePartyStream: MediaStream;
  remoteSocketId: string;
  handleCallUser: () => void;
}

const EditorHome = ({
  partyStream,
  remotePartyStream,
  remoteSocketId,
  handleCallUser,
}: EditorHomeProps) => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [theme, setTheme] = useState<string>("vs-dark");
  const [fontSize, setFontSize] = useState<number>(16);

  const socket = useSocket();

  const navigate = useNavigate();
  const { roomId } = useParams();

  const [fetchedUsers, setFetchedUsers] = useState(() => []);
  const [fetchedCode, setFetchedCode] = useState(() => "");
  // const [language, setLanguage] = useState(() => "javascript");

  useEffect(() => {}, [partyStream, remotePartyStream, remoteSocketId, input]);

  function onChange(newValue) {
    setFetchedCode(newValue);
    socket.emit("update code", { roomId, code: newValue });
    socket.emit("syncing the code", { roomId: roomId });
  }

  function handleLeave() {
    socket.disconnect();
    !socket.connected && navigate("/", { replace: true, state: {} });
  }

  function copyToClipboard(text) {
    try {
      navigator.clipboard.writeText(text);
      // toast.success("Room ID copied");
    } catch (exp) {
      console.error(exp);
    }
  }

  useEffect(() => {
    socket.on("updating client list", ({ userslist }) => {
      console.log(userslist);
      setFetchedUsers(userslist);
    });

    socket.on("on code change", ({ code }) => {
      setFetchedCode(code);
    });

    socket.on("new member joined", ({ username }) => {
      // toast(`${username} joined`);
      console.log(`${username} Joined`);
    });

    socket.on("member left", ({ username }) => {
      // toast(`${username} left`);
      console.log(`${username} left`);
    });

    // const backButtonEventListner = window.addEventListener(
    //   "popstate",
    //   function (e) {
    //     const eventStateObj = e.state;
    //     if (!("usr" in eventStateObj) || !("username" in eventStateObj.usr)) {
    //       socket.disconnect();
    //     }
    //   }
    // );

    return () => {
      // window.removeEventListener("popstate", backButtonEventListner);
    };
  }, [socket]);

  return (
    <>
      <div className="flex flex-row justify-between py-5 px-8 h-full items-center gap-3">
        <div className="w-2/3 shrink flex flex-col justify-center items-center gap-3">
          <StatusBar
            code={fetchedCode}
            input={input}
            theme={theme}
            fontSize={fontSize}
            setFontSize={setFontSize}
            setOutput={setOutput}
            setCode={onChange}
            setTheme={setTheme}
          />
          <CodeArea
            theme={theme}
            fontSize={fontSize}
            code={fetchedCode}
            setCode={onChange}
          />
        </div>

        <div className="flex flex-col shrink justify-start">
          <VideoCall
            partyStream={partyStream}
            remotePartyStream={remotePartyStream}
            remoteSocketId={remoteSocketId}
            handleCallUser={handleCallUser}
          />
          <Input setInput={setInput} />
          <Output output={output} />
        </div>
      </div>
    </>
  );
};

export default EditorHome;
