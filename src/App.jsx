import { useEffect, useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  // Coded OMDb API key from .env file
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  // Movie information from the API.
  const [movie, setMovie] = useState(null);

  // Async functions to search for the movie name
  const getMovie = async (searchTerm) => {
    // Search and locate movie by using API key
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`,
    );

    // The API sends JSON
    const data = await response.json();

    // Save the movie information
    setMovie(data);
  };

  // Starting movie information to display
  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <main>
      <h1>React Movie Search</h1>

      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </main>
  );
}