import React from "react";
import logo from "../media/logo.png";
import CODEPAD from "../media/CODEPAD.png";
import profile from "../media/profile.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between py-1 px-2 items-center	">
        <Link to={"/"}>
          <div className="logo-continer gap-2 flex flex-row justify-center w-80 items-center ">
            <div>
              <img className="h-[5rem]" src={logo} />
            </div>
            <div>
              <img className="h-[2.0rem]" src={CODEPAD} />
            </div>
          </div>
        </Link>

        {/* <div className='profile-continer '>
        <img src={profile} className='h-12'/>
      </div> */}
      </div>
    </>
  );
};

export default Header;
