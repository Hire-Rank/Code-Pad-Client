import CodeArea from "@/components/CodeEditor/CodeArea";
import EditorHome from "@/components/CodeEditor/EditorHome";
import Header from "@/components/CodeEditor/Header";
import React from "react";

const CodeEditor = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <Header />
        <EditorHome />
      </div>
    </>
  );
};

export default CodeEditor;
