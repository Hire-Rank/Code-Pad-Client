import React from "react";
import { Editor } from "@monaco-editor/react";

interface CodeAreaProps {
  lang: string;
  code: string;
  theme: string;
  fontSize: number;
  setCode: (code: string) => void;
}

const CodeArea = ({ theme, fontSize, lang, code, setCode }: CodeAreaProps) => {
  const handleEditorChange = (value: string | undefined, event: any): void => {
    if (typeof value === "string") setCode(value);
  };

  const getLanguageFromCode = (code) => {
    if (code == "53") return "cpp";
    else if (code == "71") return "python";
    else if (code == "62") return "java";
    else return "javascript";
  };

  return (
    <>
      <Editor
        height="83vh"
        width="100%"
        className="border-2 rounded-md p-[2px] shadow-lg border-slate-400"
        defaultLanguage="cpp"
        defaultValue="//Welcome to Hire-Rank Code-Pad"
        language={getLanguageFromCode(lang)}
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
