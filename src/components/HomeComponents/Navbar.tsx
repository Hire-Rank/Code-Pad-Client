import React, { useEffect, useState } from "react";
import logo from "../../media/logo.png";
import CODEPAD from "../../media/CODEPAD.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { Button } from "../ui/button";

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/auth");
  };

  const [email, setEmail] = useState<string>(null);

  const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

  const fetchLoggedInUserDetails = async () => {
    //user details
    await axios
      .get(BASE_URL + "/userdashboard", { withCredentials: true })
      .then((res) => {
        setEmail(res.data.user.email);
        sessionStorage.setItem(
          "HireRankCodePad_UserEmail",
          res.data.user.email
        );
        sessionStorage.setItem("HireRankCodePad_UserName", res.data.user.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchLoggedInUserDetails();
    return () => {};
  }, [email]);

  const handleLogOut = async () => {
    await axios
      .get(BASE_URL + "/logout", { withCredentials: true })
      .then((res) => {
        sessionStorage.clear();
        window.location.href = "/auth";
      })
      .catch((err) => {
        window.location.href = "/auth";
        console.log(err);
      });
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
          {email ? (
            <div className="flex items-center justify-between gap-2">
              <Badge
                className="px-6 text-sm py-2 text-gray-700 font-semibold min-w-[120px] text-center"
                variant="outline"
              >
                {email}
              </Badge>
              <Button
                className="px-6 py-2 rounded-lg text-white font-semibold min-w-[120px] text-center bg-gradient-to-r from-rose-600 to-red-600"
                // className="button-64"
                onClick={handleLogOut}
              >
                Log Out
              </Button>
            </div>
          ) : (
            <button
              className="px-6 py-2 rounded-lg text-white font-semibold min-w-[120px] text-center bg-gradient-to-r from-blue-400 to-indigo-600"
              // className="button-64"
              onClick={handleClick}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
