// Manipulação de HTML

function convertList (pokemon) {
    return `<li class="${pokemon.types[0]}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div>
                    <ul class="types">
                        ${pokemon.types.map((type) => `<li>${type}</li>`).join('')}
                    </ul>
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                </div>
            </li>`
}


const list = document.getElementById('list');
const loadMoreButton = document.getElementById('loadMoreButton');
let offset = 0;
const limit = 5;

pokeApi.getPokemons(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    pokeApi.getPokemons(offset, limit)
});
