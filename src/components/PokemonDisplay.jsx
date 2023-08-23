import { useEffect } from "react";

function PokemonDisplay({ pokemon, pokedex }) {
    let num = 0;
    {/* gen 1 to gen 4 is 0th index, gen 5 is 1st index, gen 6 is 6th index, gen 7 is 7th index legends arceus and gen 9 is 0th index */ }
    function flavorTextNum() {
        if (pokedex.id >= 1 && pokedex.id <= 493) {
            num = 0
        }
        else if (pokedex.id >= 494 && pokedex.id <= 649) {
            num = 1
        }
        else if (pokedex.id >= 650 && pokedex.id <= 720) {
            num = 6
        }
        else if (pokedex.id >= 721 && pokedex.id <= 898) {
            num = 7
        }
        else {
            num = 0
        }
    }
    const loaded = () => {
        return (
            <>
                {flavorTextNum()}
                {/* Pokemon types */}
                {pokemon.types.map((typeEle, index) => {
                    return (
                        <div key={index} className={typeEle.type.name}>{typeEle.type.name}</div>
                    )
                })}
                {/* name of the pokemon */}
                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                {/* pokedex entry # */}
                <h2>Dex number: #{pokedex.id}</h2>
                {/* official artwork of the pokemon */}
                <img src={pokemon.sprites.other['official-artwork']['front_default']} />
                {/* Display the pokedex entry here */}
                <h2>{pokedex.flavor_text_entries[num].flavor_text}</h2>
                <div id="info">
                    <p>Height: ~{Math.round(pokemon.height * 0.328084)} ft </p>
                    <p>Weight: ~{Math.round(pokemon.weight * 0.220462)} lb</p>

                    <p>Category</p>
                    {/* <p>{pokedex.genera[7].genus}</p> */}
                    {/* Map over the abilities to display all abilities */}
                    {pokemon.abilities.map((abi, index) => {
                        return (
                            <p key={index}>Ability {index + 1}: {abi.ability.name.charAt(0).toUpperCase() + abi.ability.name.slice(1)}</p>
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