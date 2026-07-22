import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  // Form and movie display share information
  const getMovie = (searchTerm) => {
    console.log("Search received by App:", searchTerm);
  };

  return (
    <main>
      <h1>React Movie Search</h1>

      {/* We pass the getMovie function down to Form using a prop. */}
      <Form moviesearch={getMovie} />

      <MovieDisplay />
    </main>
  );
}