import React from "react";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies, setCookies, removeCookie] = useCookies();

  const handleRemoveCookie = () => {
    removeCookie("Password");
  };

  return (
    <div>
      <p>Terima cookies username : {cookies.Username}</p>
      <p>Terima cookies password : {cookies.Password}</p>
      <button onClick={() => handleRemoveCookie()}>Hapus Cookie</button>
    </div>
  );
};

export default Home;
