
function PokemonDisplay({ pokemon, pokedex }) {


    const loaded = () => {
        // let num;
        // if ({ pokedex.id } >= 1 && { pokedex.id } <= 493) {
        //     num = 0
        // }
        // else if ({ pokedex.id } >= 494 && { pokedex.id } <= 649) {
        //     num = 1
        // }
        return (
            const num;
        <>



            <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
            <h2>#{pokedex.id}</h2>
            <img src={pokemon.sprites.other['official-artwork']['front_default']} />
            {/* gen 1 to gen 4 is 0th index, gen 5 is 1st index, gen 6 through gen 8 is 7th index, legends arceus and gen 9 is 0th index */}
            <h2>({pokedex.id}){pokedex.flavor_text_entries[num].flavor_text}</h2>
        </>
        )
}

const loading = () => {
    <h1>No pokemon to display.</h1>
}

return pokemon ? loaded() : loading();
}

export default PokemonDisplay