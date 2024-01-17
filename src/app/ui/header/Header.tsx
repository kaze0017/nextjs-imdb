import React from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <div>
      <Menu />
      <Navbar />
      <SearchBox placeholder="Search movies..." />
    </div>
  );
}
