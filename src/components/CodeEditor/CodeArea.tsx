import React from "react";
import { Editor } from "@monaco-editor/react";

interface CodeAreaProps {
  setCode: (code: string) => void;
}

const CodeArea = ({ setCode }: CodeAreaProps) => {
  function handleEditorChange(value: string | undefined, event: any): void {
    if (typeof value === "string") setCode(value);
  }
  return (
    <>
      <Editor
        height="83vh"
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
