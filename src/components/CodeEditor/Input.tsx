import React, { useEffect } from "react";

interface CodeAreaProps {
  input: string;
  setInput: (input: string) => void;
}

const Input = ({ input, setInput }: CodeAreaProps) => {
  function handleInputChange(value: string | undefined): void {
    if (typeof value === "string") setInput(value);
  }

  useEffect(() => {
    // console.log("In Input: ", input);
  }, [input]);

  return (
    <div>
      <h1 className="px-1 text-gray-600 font-mono">Input</h1>
      <textarea
        className="p-1 border-gray-300 text-white border-4 bg-[#1E1E1E] rounded-xl"
        rows={6}
        cols={60}
        style={{ resize: "none" }}
        value={input}
        onChange={(e) => handleInputChange(e.target.value)}
        wrap="hard"
      ></textarea>
    </div>
  );
};

export default Input;
