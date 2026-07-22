export default function Form() {
  // Displays the input and the button
  return (
    <section>
      <h2>Search for a Movie</h2>

      <form>
        <label htmlFor="searchterm">Movie title:</label>

        <input
          id="searchterm"
          type="text"
          name="searchterm"
          placeholder="Enter a movie title"
        />

        <input type="submit" value="Search" />
      </form>
    </section>
  );
}