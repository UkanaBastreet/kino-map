import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import { getMovies } from "./api/movie.api";
import { MovieItem } from "./components/MovieItem/MovieItem";

function App() {
  const [movies, setMovies] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setFetching(true);
    getMovies().then((res) => {
      setMovies(res.Search);
      setFetching(false);
    });
  }

  return (
    <div className="App">
      <Header />
      <SearchPanel />
      <main>{fetching ? <h2>loading...</h2> : movies.map(MovieItem)}</main>
    </div>
  );
}

export default App;
