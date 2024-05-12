import React from "react";

const Output = () => {
  return (
    <>
      <div>
        <h1>Output</h1>
        <textarea
          className="border-4 bg-slate-800 rounded-xl"
          rows={8}
          cols={60}
          style={{ resize: "none" }}
        ></textarea>
      </div>
    </>
  );
};

export default Output;
