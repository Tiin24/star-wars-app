import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  async function getAllCharacters() {
    const allData = await axios.get(
      "https://akabab.github.io/starwars-api/api/all.json"
    );
    // console.log(allData);
    setCharacters(allData.data);
  }

  useEffect(() => {
    getAllCharacters();
  }, []);

  const [chars, setChars] = useState({
    cardLeft: {},
    cardRight: {},
  });

  function search(name, cardLocation) {
    const findCharacter = characters.find((c) =>
      c.name.toLowerCase().includes(name.toLowerCase())
    );
    if (cardLocation === "left" && findCharacter)
      setChars({ ...chars, cardLeft: findCharacter });
    if (cardLocation === "right" && findCharacter)
      setChars({ ...chars, cardRight: findCharacter });
  }

  const random = function (cardLocation) {
    function getNumRandom(max) {
      return Math.floor(Math.random() * max);
    }
    const idRandom = getNumRandom(87) + 1;
    const findCharacter = characters.find((c) => c.id === idRandom);
    if (cardLocation === "left") {
      setChars({ ...chars, cardLeft: findCharacter });
    }
    if (cardLocation === "right") {
      setChars({ ...chars, cardRight: findCharacter });
    }
  };

  return (
    <BrowserRouter>
      <NavBar search={search} random={random} />
      <Routes>
        <Route path="/" element={<Home allcharacters={chars} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
