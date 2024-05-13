import React from "react";

const Output = () => {
  return (
    <>
      <div>
        <h1>Output</h1>
        <textarea
          className="border-gray-300 p-1 text-white border-4 bg-[#1E1E1E] rounded-xl"
          rows={6}
          cols={60}
          style={{ resize: "none" }}
          wrap="hard"
        ></textarea>
      </div>
    </>
  );
};

export default Output;
