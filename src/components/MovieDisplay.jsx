export default function MovieDisplay({ movie }) {
  // This function displays the movie after the data has loaded
  const loaded = () => {
    return (
      <>
        <h1>{movie.Title}</h1>
        <h2>{movie.Genre}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </>
    );
  };

  // This function displays a message before a movie has loaded
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  // Ternary operator
  return movie ? loaded() : loading();
}