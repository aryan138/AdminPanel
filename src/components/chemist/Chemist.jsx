import React from "react";
import Navbar from "../../Layout/Home/components/Navbar";
import UserProfileDiv from "../../Layout/Home/components/EditProfile";
import IconGrid from "./components/IconGrid";
function chemist() {
  return (
    <>
      <Navbar />
      <UserProfileDiv />
      <IconGrid/>
    </>
  );
}

export default chemist;
