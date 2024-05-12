import React, { useState, useEffect } from "react";
import CodeArea from "./CodeArea";
import StatusBar from "./StatusBar";
import VideoCall from "./VideoCall";
import Input from "./Input";
import Output from "./Output";

const EditorHome = () => {
  const [code, setCode] = useState<string>("");
  useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <>
      <div className="flex flex-row justify-between py-5 px-8 h-full items-center gap-3">
        <div className="w-2/3 shrink flex flex-col justify-center items-center gap-3">
          <StatusBar />
          <CodeArea setMyCode={setCode} />
        </div>

        <div className="flex flex-col shrink justify-start">
          <VideoCall />
          <Input />
          <Output />
        </div>
      </div>
    </>
  );
};

export default EditorHome;
