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
  isVideoOn: boolean;
  isAudioOn: boolean;
  isAudioOnRemoteParty: boolean;
  isVideoOnRemoteParty: boolean;
  handleCallUser: () => void;
}

const EditorHome = ({
  partyStream,
  remotePartyStream,
  remoteSocketId,
  handleCallUser,
  isVideoOn,
  isAudioOn,
  isVideoOnRemoteParty,
  isAudioOnRemoteParty,
}: EditorHomeProps) => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [theme, setTheme] = useState<string>("vs-dark");
  const [fontSize, setFontSize] = useState<number>(16);
  const [lang, setLang] = useState<string>("53");

  const socket = useSocket();

  const navigate = useNavigate();
  const { roomId } = useParams();

  const [fetchedUsers, setFetchedUsers] = useState(() => []);
  const [fetchedCode, setFetchedCode] = useState(() => "");
  // const [language, setLanguage] = useState(() => "javascript");

  useEffect(() => {}, [
    partyStream,
    remotePartyStream,
    remoteSocketId,
    input,
    isAudioOn,
    isVideoOn,
    isAudioOnRemoteParty,
    isVideoOnRemoteParty,
  ]);

  function onChange(newValue) {
    setFetchedCode(newValue);
    socket.emit("update code", { roomId, code: newValue });
    socket.emit("syncing the code", { roomId: roomId });
  }

  function handleLeave() {
    socket.disconnect();
    !socket.connected && navigate("/", { replace: true, state: {} });
  }

  function handleLanguageChange(val) {
    setLang(val);
    socket.emit("update language", { roomId, languageUsed: val });
    socket.emit("syncing the language", { roomId: roomId });
  }

  function handleInputChange(val) {
    setInput(val);
    socket.emit("update input", { roomId, input: val });
    socket.emit("syncing the input", { roomId: roomId });
  }

  function handleOutputChange(val) {
    setOutput(val);
    socket.emit("update output", { roomId, output: val });
    socket.emit("syncing the output", { roomId: roomId });
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
      setFetchedUsers(userslist);
    });

    socket.on("on language change", ({ languageUsed }) => {
      setLang(languageUsed);
    });

    socket.on("on code change", ({ code }) => {
      setFetchedCode(code);
    });

    socket.on("on input change", ({ input }) => {
      console.log("on change : ", input);
      setInput(input);
    });

    socket.on("on output change", ({ output }) => {
      setOutput(output);
    });

    socket.on("new member joined", ({ username }) => {
      // toast(`${username} joined`);
      console.log(`${username} Joined`);
    });

    socket.on("member left", ({ username }) => {
      // toast(`${username} left`);
      console.log(`${username} left`);
    });
  }, [socket]);

  return (
    <>
      <div className="flex flex-row justify-between py-5 px-8 h-full items-center gap-3">
        <div className="w-2/3 shrink flex flex-col justify-center items-center gap-3">
          <StatusBar
            code={fetchedCode}
            input={input}
            output={output}
            theme={theme}
            lang={lang}
            handleLanguageChange={handleLanguageChange}
            fontSize={fontSize}
            setFontSize={setFontSize}
            setOutput={handleOutputChange}
            setCode={onChange}
            setTheme={setTheme}
          />
          <CodeArea
            lang={lang}
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
            isVideoOn={isVideoOn}
            isAudioOn={isAudioOn}
            isVideoOnRemoteParty={isVideoOnRemoteParty}
            isAudioOnRemoteParty={isAudioOnRemoteParty}
          />
          <Input input={input} setInput={handleInputChange} />
          <Output output={output} />
        </div>
      </div>
    </>
  );
};

export default EditorHome;
