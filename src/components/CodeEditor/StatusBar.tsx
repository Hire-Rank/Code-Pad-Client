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

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatusBarProps {
  code: string;
  input: string;
  setOutput: (output: string) => void;
}

const StatusBar = ({ code, input, setOutput }: StatusBarProps) => {
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
        <div className="options flex flex-row gap-7  justify-center items-center">
          <div
            className="bg-gradient-to-r font-bold  from-cyan-500 to-blue-500 px-4 text-white flex items-center rounded-lg h-9 w-25 justify-center cursor-pointer hover:text-gray-200 hover:backdrop-brightness-75"
            onClick={handleRunCode}
          >
            Run Code
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <img src={reset} className="h-6 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset Code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <img src={dots} className="h-6 cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>More Options</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusBar;
