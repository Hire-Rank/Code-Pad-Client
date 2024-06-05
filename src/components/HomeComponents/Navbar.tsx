import React from "react";
import logo from "../../media/logo.png";
import CODEPAD from "../../media/CODEPAD.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  return (
    <>
      <div className="flex flex-row justify-between pt-5 px-2 items-center 	">
        <Link to={"/"}>
          <div className="logo-continer gap-1 flex flex-row justify-center w-80 items-center ">
            <div>
              <img className="h-[4rem]" src={logo} />
            </div>
            <div>
              <img className="h-[1.8rem]" src={CODEPAD} />
            </div>
          </div>
        </Link>
        <div className="profile-continer ">
          <button
            className="rounded-full mx-5 bg-blue-300 border-2 py-1 px-3 hover:bg-gray-100 font-medium"
            onClick={handleClick}
          >
            Create Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
