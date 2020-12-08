import {useState, useEffect} from 'react'
const API_KEY = 'a5549d08';

export default function useMovieApi() {
  const [search, setSearch] = useState('BatMan')
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const fetchMovies = () => {
    const MOVIE_API_URL = `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`;
    setIsLoading(true)
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovies(jsonResponse.Search);
        setIsLoading(false)
      });
  };

  useEffect(fetchMovies, [search])

  return {
    isLoading,
    search,
    setSearch,
    movies
  };
};