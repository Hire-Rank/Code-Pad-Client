import React from "react";

interface CodeAreaProps {
  setInput: (input: string) => void;
}

const Input = ({ setInput }: CodeAreaProps) => {
  function handleInputChange(value: string | undefined): void {
    if (typeof value === "string") setInput(value);
  }

  return (
    <div>
      <h1>Input</h1>
      <textarea
        className="p-1 border-gray-300 text-white border-4 bg-[#1E1E1E] rounded-xl"
        rows={6}
        cols={60}
        style={{ resize: "none" }}
        onChange={(e) => handleInputChange(e.target.value)}
        wrap="hard"
      ></textarea>
    </div>
  );
};

export default Input;
