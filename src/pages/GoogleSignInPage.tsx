import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const GoogleSignInPage = () => {
  const { token } = useParams();
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("jwtToken", token);
    }
    window.location.href = "/";
    return () => {};
  }, []);

  return <div></div>;
};

export default GoogleSignInPage;
