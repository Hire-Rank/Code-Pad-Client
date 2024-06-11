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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Title } from "@radix-ui/react-toast";
import { useSocket } from "@/context/SocketProvider";
import { useParams } from "react-router-dom";

interface StatusBarProps {
  code: string;
  input: string;
  theme: string;
  output: string;
  fontSize: number;
  lang: string;
  setTheme: (theme: string) => void;
  setOutput: (output: string) => void;
  setCode: (code: string) => void;
  setFontSize: (fontSize: number) => void;
  handleLanguageChange: (val: string) => void;
}

const StatusBar = ({
  code,
  input,
  output,
  theme,
  fontSize,
  lang,
  setOutput,
  setCode,
  setTheme,
  setFontSize,
  handleLanguageChange,
}: StatusBarProps) => {
  useEffect(() => {}, [lang]);

  const handleRunCode = () => {
    setOutput("Running...");
    let result = createSubmission(code, lang, input, setOutput);
    console.log(result);
  };

  const handleReset = ({}) => {
    setCode("");
  };

  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <div className="select">
          <Select
            value={lang}
            defaultValue={lang}
            onValueChange={handleLanguageChange}
          >
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
                  <img
                    src={reset}
                    className="h-6 cursor-pointer"
                    onClick={handleReset}
                  />
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <img src={dots} className="h-6 cursor-pointer" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-60">
                      <DropdownMenuGroup>
                        <div className="text-gray-700 flex items-center justify-between w-full gap-4 py-2 px-2">
                          <Title className="font-medium text-sm">
                            Choose Theme :{" "}
                          </Title>
                          <Select
                            defaultValue={theme}
                            onValueChange={(value) => setTheme(value)}
                          >
                            <SelectTrigger className="w-[90px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem
                                  defaultChecked={
                                    theme === "vs-dark" ? true : false
                                  }
                                  value="vs-dark"
                                >
                                  Dark
                                </SelectItem>
                                <SelectItem
                                  defaultChecked={
                                    theme === "light" ? true : false
                                  }
                                  value="light"
                                >
                                  Light
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>

                        <DropdownMenuSub>
                          <div className="text-gray-700 flex items-center justify-between w-full gap-4 py-2 px-[8px]">
                            <Title className="font-medium text-sm">
                              Font Size :{" "}
                            </Title>
                            <Select
                              defaultValue={fontSize.toString()}
                              onValueChange={(value) =>
                                setFontSize(parseInt(value))
                              }
                            >
                              <SelectTrigger className="w-[90px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem
                                    defaultChecked={
                                      fontSize === 12 ? true : false
                                    }
                                    value="12"
                                  >
                                    Extra-small
                                  </SelectItem>
                                  <SelectItem
                                    defaultChecked={
                                      fontSize === 14 ? true : false
                                    }
                                    value="14"
                                  >
                                    Small
                                  </SelectItem>
                                  <SelectItem
                                    defaultChecked={
                                      fontSize === 16 ? true : false
                                    }
                                    value="16"
                                  >
                                    Normal
                                  </SelectItem>
                                  <SelectItem
                                    defaultChecked={
                                      fontSize === 18 ? true : false
                                    }
                                    value="18"
                                  >
                                    Large
                                  </SelectItem>
                                  <SelectItem
                                    defaultChecked={
                                      fontSize === 24 ? true : false
                                    }
                                    value="24"
                                  >
                                    Extra-large
                                  </SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </div>
                        </DropdownMenuSub>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
