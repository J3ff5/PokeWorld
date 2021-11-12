import React from "react";

import PokemonsList from "../../services/PokemonsList";

const HomePage: React.FC = () => {

    const pokemons = new PokemonsList();

    function callPokemons() {
        const allPokemons = pokemons.getAllPokemons();
        console.log(allPokemons);
    }


    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={() => callPokemons()}>Get Pokemons</button>
        </div>
    )
}

export default HomePage;