import React from "react";
import { Editor } from "@monaco-editor/react";

interface CodeAreaProps {
  setMyCode: (code: string) => void;
}

const CodeArea = ({ setMyCode }: CodeAreaProps) => {
  function handleEditorChange(value: string | undefined, event: any): void {
    if (typeof value === "string") setMyCode(value);
  }
  return (
    <>
      <Editor
        height="80vh"
        width="100%"
        defaultLanguage="cpp"
        defaultValue="//Write your code here"
        theme="vs-dark"
        onChange={handleEditorChange}
      />
    </>
  );
};

export default CodeArea;
