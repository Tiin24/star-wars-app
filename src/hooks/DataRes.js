import axios from "axios";

export async function getAllCharacters() {
  const response = await axios.get(
    "https://akabab.github.io/starwars-api/api/all.json"
  );
  return response.data
}
