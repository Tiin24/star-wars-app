import React from "react";
import Search from "../Search/Search";
import Random from "../Random/Random";

function NavBar({ search, random }) {
  console.log("soy ranfom",random)
  return (
    <div className="border-2 border-solid border-indigo-500 h-15 p-3 flex justify-around bg-black">
      <div className="flex gap-3 items-center">
        <Search search={search} cardLocation="left" />
        <Random random={random} cardLocation="left" />
      </div>

      <div className="flex gap-3 items-center">
        <Search search={search} cardLocation="right" />
        <Random random={random} cardLocation="right" />
      </div>
    </div>
  );
}

export default NavBar;
