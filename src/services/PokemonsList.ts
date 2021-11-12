import api from "./api";

class PokemonsList{

    async getAllPokemons(){
        const pokemons = await api.get("/pokemon/?limit=151");
        return pokemons.data.results;
    }

}

export default PokemonsList;