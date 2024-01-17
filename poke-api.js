
const pokeApi = {}

pokeApi.organizePokemons = (pokemon) => {
    const item = new Pokemon;
    item.number = pokemon.id;
    item.name = pokemon.name;
    item.types = pokemon.types.map((typeSlot) => typeSlot.type.name);
    item.image = pokemon.sprites.other.dream_world.front_default;

    return item;
}

pokeApi.getPokemonDetails = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
}

pokeApi.getPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

    fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemonList) => pokemonList.map(pokeApi.getPokemonDetails))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDetails) => {
            list.innerHTML += pokemonDetails.map(pokeApi.organizePokemons).map(convertList).join(``)
        })
        .catch((error) => console.error(error))

}


