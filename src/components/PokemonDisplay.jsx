
function PokemonDisplay({ pokemon, pokedex }) {
    // const num = pokedex.id >= 1 && pokedex.id <= 493 ? 0 : pokedex.id >= 494 && pokedex.id <= 649 ? 1 : pokedex.id >= 650 && pokedex.id <= 898 ? 7 : 0
    const num = 0;
    const loaded = () => {
        return (
            <>
                {/* name of the pokemon */}
                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                {/* pokedex entry # */}
                <h2>Dex number: #{pokedex.id}</h2>
                {/* official artwork of the pokemon */}
                <img src={pokemon.sprites.other['official-artwork']['front_default']} />
                {/* gen 1 to gen 4 is 0th index, gen 5 is 1st index, gen 6 through gen 8 is 7th index, legends arceus and gen 9 is 0th index */}
                <h2>{pokedex.flavor_text_entries[0].flavor_text}</h2>
                <div id="info">
                    {/* <p>Height</p> */}
                    <p>Height: ~{Math.round(pokemon.height * 0.328084)} ft </p>
                    {/* <p>Weight</p> */}
                    <p>Weight: ~{Math.round(pokemon.weight * 0.220462)} lb</p>
                    <p>Category</p>
                    {/* <p>{pokedex.genera[7].genus}</p> */}
                    {/* <p>Abilities</p> */}
                    {/* Map over the abilities to display all abilities */}
                    {pokemon.abilities.map((abi, index) => {
                        return (
                            <p>Ability {index + 1}: {abi.ability.name.charAt(0).toUpperCase() + abi.ability.name.slice(1)}</p>
                        )
                    })}
                </div>

            </>
        )
    }

    const loading = () => {
        <h1>No pokemon to display.</h1>
    }

    return pokemon ? loaded() : loading();
}

export default PokemonDisplay