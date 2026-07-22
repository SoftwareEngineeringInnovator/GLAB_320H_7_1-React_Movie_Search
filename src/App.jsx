import { useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  // Coded OMDb API key from .env file
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  // Movie information from the API.
  const [movie, setMovie] = useState(null);

  // Async functions to search for the movie name
  const getMovie = async (searchTerm) => {
    try {

      const safeSearchTerm = encodeURIComponent(searchTerm);

      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${safeSearchTerm}`,
      );

      // Catches server error
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      // The API sends JSON
      const data = await response.json();

      // Save the movie
      setMovie(data);
      // Display movie information
      console.log("Movie data received:", data);
    } catch (error) {
      // Error message
      console.error("Unable to get the movie:", error);
    }
  };

  return (
    <main>
      <h1>React Movie Search</h1>

      {/* Form receives the function it should run when we submit a title. */}
      <Form moviesearch={getMovie} />

      {/* MovieDisplay will use this movie information in the next step. */}
      <MovieDisplay movie={movie} />
    </main>
  );
}