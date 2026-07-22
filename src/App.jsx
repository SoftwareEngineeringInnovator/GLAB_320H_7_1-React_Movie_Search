import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
  // Form and movie display share information
  return (
    <main>
      <h1>Movie Search</h1>

      <Form />
      <MovieDisplay />
    </main>
  );
}