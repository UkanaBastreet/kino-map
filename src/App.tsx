import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchPanel } from "./components/SearchPanel/SearchPanel";
import { movieApi } from "./api/movie.api";
import { MovieList } from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setFetching(true);
    // instance.get("&s=yes&type=series&page=2").then((res) => {
    //   setMovies(res.data.Search);
    //   setFetching(false);
    // });
    movieApi
      .getItems(page, "movie")
      .then((res) => {
        setMovies(res.Search);
        setFetching(false);
      })
      .catch(console.log);
  }

  function onSearchHandler(value: string) {
    if (value === "") {
      movieApi.getItems(page).then((res) => {
        setMovies(res.Search);
        setFetching(false);
      });
    }
    setFetching(true);

    movieApi.getItems(page, value).then((res) => {
      setMovies(res.Search);
      setFetching(false);
    });
  }

  return (
    <div className="App">
      <Header />
      <SearchPanel onSearch={onSearchHandler} />
      <main>
        {fetching ? (
          <h2>loading...</h2>
        ) : movies?.length ? (
          <MovieList movies={movies} />
        ) : (
          <h2>No results...</h2>
        )}
      </main>
    </div>
  );
}

export default App;
