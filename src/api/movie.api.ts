import axios from "axios";

export async function getMovies() {
  let res = await axios
    .get("http://www.omdbapi.com/?apikey=430fbce6&s=yes&type=series")
    .then((r) => r.data);
  return res;
}
