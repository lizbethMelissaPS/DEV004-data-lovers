// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  return 'example';
};

export const sortData = (data, sortBy, sortOrder) => {
  return 'OMG';
};

export const computeStats = (data) => {
  return 'OMG';
};


const pokeball = document.querySelector('.pokeball')

function fetchPokemon(id) {
  fetch('../pokemon.json')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }
    )

}