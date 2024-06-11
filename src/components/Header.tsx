import React, { useEffect, useState } from "react";
import logo from "../media/logo.png";
import CODEPAD from "../media/CODEPAD.png";
import profile from "../media/profile.png";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";

const Header = () => {
  const [email, setEmail] = useState<string>(null);

  useEffect(() => {
    const userEmail = sessionStorage.getItem("HireRankCodePad_UserEmail");
    if (userEmail) setEmail(userEmail);
    return () => {};
  }, [email]);

  return (
    <>
      <div className="flex flex-row justify-between py-1 px-2 items-center	">
        <Link to={"/"}>
          <div className="logo-continer gap-2 flex flex-row justify-center w-80 items-center ">
            <div>
              <img className="h-[4rem]" src={logo} />
            </div>
            <div>
              <img className="h-[1.8rem]" src={CODEPAD} />
            </div>
          </div>
        </Link>
        {email && (
          <div className="profile-continer ">
            <Badge
              className="px-6 text-sm py-2 text-gray-700 font-semibold min-w-[120px] text-center"
              variant="outline"
            >
              {email}
            </Badge>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
