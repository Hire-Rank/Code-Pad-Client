import React, { useState, useEffect } from "react";
import CodeArea from "./CodeArea";
import StatusBar from "./StatusBar";
import VideoCall from "./VideoCall";
import Input from "./Input";
import Output from "./Output";

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

  useEffect(() => {}, [partyStream, remotePartyStream, remoteSocketId, input]);

  return (
    <>
      <div className="flex flex-row justify-between py-5 px-8 h-full items-center gap-3">
        <div className="w-2/3 shrink flex flex-col justify-center items-center gap-3">
          <StatusBar
            code={code}
            input={input}
            setOutput={setOutput}
            setCode={setCode}
          />
          <CodeArea setCode={setCode} />
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
