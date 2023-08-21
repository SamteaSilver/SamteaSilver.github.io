import { useState } from 'react';

function Form(props) {
    const [formData, setFormData] = useState({
        searchTerm: '',
    });

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (evt) => {
        //prevent page from refreshing on form submission
        evt.preventDefault();
        //pass the search term to moviesearch prop, which is app's getMovie function
        props.pokemonSearch(formData.searchTerm);
        props.pokedexSearch(formData.searchTerm)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={formData.searchTerm}
                    name="searchTerm"
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;