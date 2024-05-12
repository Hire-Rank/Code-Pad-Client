import React from "react";

const Input = () => {
  return (
    <div>
      <h1>Input</h1>
      <textarea
        className="border-4 bg-slate-800 rounded-xl"
        rows={0}
        cols={60}
        style={{ resize: "none" }}
      ></textarea>
    </div>
  );
};

export default Input;
