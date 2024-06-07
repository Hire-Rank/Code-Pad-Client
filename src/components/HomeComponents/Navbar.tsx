import React from "react";
import logo from "../../media/logo.png";
import CODEPAD from "../../media/CODEPAD.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

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
            className="px-6 py-2 rounded-lg text-white font-semibold min-w-[120px] text-center bg-gradient-to-r from-blue-400 to-indigo-600"
            // className="button-64"
            onClick={handleClick}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
