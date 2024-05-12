import React from "react";
import reset from "../../media/reset.png";
import dots from "../../media/dots.png";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const StatusBar = () => {
  const [position, setPosition] = React.useState("bottom");

  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <div className="select">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Select Languages</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem value="top">C++</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Python
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Java
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="options flex flex-row gap-7 ">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 text-white flex items-center rounded-lg h-9 w-25 justify-center">
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
