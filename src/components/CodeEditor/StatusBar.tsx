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
// import {
//   Cloud,
//   CreditCard,
//   Github,
//   Keyboard,
//   LifeBuoy,
//   LogOut,
//   Mail,
//   MessageSquare,
//   Plus,
//   PlusCircle,
//   Settings,
//   User,
//   UserPlus,
//   Users,
// } from "lucide-react";

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

interface StatusBarProps {
  code: string;
  input: string;
  setOutput: (output: string) => void;
  setCode: (code: string) => void;
}

const StatusBar = ({ code, input, setOutput, setCode }: StatusBarProps) => {
  const [lang, setLang] = useState<string>("53");
  const [options, setOptions] = useState<any>(false);

  useEffect(() => {
    console.log(code);
  }, [code]);

  const handleRunCode = () => {
    let result = createSubmission(code, lang, input, setOutput);
    console.log(result);
  };

  const handleReset = ({}) => {
    setCode("");
  };

  const handleImageClick = () => {
    setOptions(!options);
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
                    <DropdownMenuContent className="w-50">
                      <DropdownMenuGroup>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <span>Theme</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>
                                <span>Light</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span>Dark</span>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            <span>Fonts</span>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>
                                <span>Low</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span>Medium</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span>Large</span>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
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
