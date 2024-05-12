import React from "react";

const Input = () => {
  return (
    <div>
      <h1>Input</h1>
      <textarea
        className="p-1 border-yellow-400 text-white border-4 bg-slate-800 rounded-xl"
        rows={6}
        cols={60}
        style={{ resize: "none" }}
      ></textarea>
    </div>
  );
};

export default Input;
