import React, { useState } from "react";

function Search({ cardLocation, search }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  return (
    <div className="flex">
      <input
        type="text"
        name="username"
        value={input.username}
        onChange={(e) => handleChange(e)}
        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      />
      <button
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        onClick={() => search(input, cardLocation)}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
