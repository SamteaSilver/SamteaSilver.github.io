import { useState } from 'react';

function Form(props) {
    const [formData, setFormData] = useState({
        searchTerm: '',
    });

    const handleChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (evt) => {

        evt.preventDefault();
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