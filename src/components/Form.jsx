import { useState } from "react";

export default function Form() {
    // Search box
    const [formData, setFormData] = useState({
        searchterm: "",
    });

    // Function for the search box
    const handleChange = (event) => {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // Function runs when the user clicks the Search button
    const handleSubmit = (event) => {
        event.preventDefault();

        // Checks the form sends the correct movie title
        console.log("Movie searched:", formData.searchterm);
    };

    return (
        <section>
            <h2>Search for a Movie</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="searchterm">Movie title:</label>

                <input
                    id="searchterm"
                    type="text"
                    name="searchterm"
                    placeholder="Enter a movie title"
                    value={formData.searchterm}
                    onChange={handleChange}
                />

                <input type="submit" value="Search" />
            </form>
        </section>
    );
}