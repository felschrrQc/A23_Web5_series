import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout({ loggedIn, onLogout }) {
  return (
    <>
      <Navbar loggedIn={loggedIn} onLogOut={onLogout} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;