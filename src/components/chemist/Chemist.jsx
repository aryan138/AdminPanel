import React from "react";
import Navbar from "../../Layout/Home/components/Navbar";
import UserProfileDiv from "../../Layout/Home/components/EditProfile";
import IconGrid from "./components/IconGrid";
import Footer from "../../Layout/Home/components/Footer";
function chemist() {
  return (
    <>
      <Navbar />
      <UserProfileDiv />
      <IconGrid/>
      <Footer/>
    </>
  );
}

export default chemist;
