import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api/axios';
import { SEARCH_API } from '../api/requests';
import Movie from './Movie';

function SearchResult() {
  const [movies, setMovies] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    async function getMovie() {
      const { data } = await axios.get(`${SEARCH_API}=${searchTerm}`);
      setMovies(data.results);
      console.log(data);
      return data;
    }
    getMovie();
  }, [searchTerm]);

  console.log(movies);

  return (
    <div>
      Results For {searchTerm} :
      {movies && movies.map((movie) => (
        <Movie key={movie.id} {...movies} />
      ))}
    </div>
  );
}

export default SearchResult;
