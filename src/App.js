import { useEffect, useState } from 'react';
import './App.css';
import { FEATURED_API } from './api/requests';
import axios from './api/axios';
import { Route, Routes } from 'react-router-dom';
import { SearchBar, SearchResult, Movie } from './components';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetch() {
      const { data } = await axios.get(FEATURED_API);
      setMovies(data.results);
      return data;
    }
    fetch();
  }, []);

  console.log(movies);

  const movie =
    movies.length && movies.map((movie) => <Movie key={movie.id} {...movie} />);

  return (
    <>
      {movies ? (
        <div className='App'>
          <SearchBar />
          <Routes>
            <Route path='/' exact element={movie} />
            <Route path='search/:searchTerm' exact element={<SearchResult />} />
          </Routes>
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </>
  );
}

export default App;
