import React from "react";
import { Editor } from "@monaco-editor/react";

interface CodeAreaProps {
  code: string;
  theme: string;
  fontSize: number;
  setCode: (code: string) => void;
}

const CodeArea = ({ theme, fontSize, code, setCode }: CodeAreaProps) => {
  const handleEditorChange = (value: string | undefined, event: any): void => {
    if (typeof value === "string") setCode(value);
  };

  return (
    <>
      <Editor
        height="83vh"
        width="100%"
        defaultLanguage="cpp"
        defaultValue="//Welcome to Hire-Rank Code-Pad"
        theme={theme}
        value={code}
        options={{
          fontSize,
        }}
        onChange={handleEditorChange}
      />
    </>
  );
};

export default CodeArea;
