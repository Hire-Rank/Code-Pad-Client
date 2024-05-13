import React, { useState, useEffect } from "react";
import reset from "../../media/reset.png";
import dots from "../../media/dots.png";
import { createSubmission } from "../../api/JudgeApi";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface StatusBarProps {
  code: string;
  input: string;
  setOutput:(output:string)=>void;
}

const StatusBar = ({ code, input, setOutput}: StatusBarProps) => {
  const [lang, setLang] = useState<string>("53");

  useEffect(() => {
    console.log(code);
  }, [code]);

  const handleRunCode = () => {
    let result = createSubmission(code, lang, input, setOutput);
    console.log(result);
  };

  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <div className="select">
          <Select defaultValue={"53"} onValueChange={(value) => setLang(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem defaultChecked={true} value="53">
                  C++
                </SelectItem>
                <SelectItem value="71">Python</SelectItem>
                <SelectItem value="62">Java</SelectItem>
                <SelectItem value="93">Javascript</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="options flex flex-row gap-7 ">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white flex items-center rounded-lg h-9 w-25 justify-center cursor-pointer"
            onClick={handleRunCode}
          >
            Run Code
          </div>
          <div>
            <img src={reset} className="h-8" />
          </div>
          <div>
            <img src={dots} className="h-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusBar;
