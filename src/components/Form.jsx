import { useState } from 'react';

function Form(props) {
    const [formData, setFormData] = useState({
        searchTerm: '',
    });

    const handleChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {

        event.preventDefault();
        props.pokemonSearch(formData.searchTerm.toLowerCase());
        props.pokedexSearch(formData.searchTerm.toLowerCase())
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={formData.searchTerm}
                    name="searchTerm"
                    placeholder='Enter pokemon in lower case'
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;