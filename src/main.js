import { filterDataType, filterDataGeneration, sortData, computeStats } from './data.js';
fetch("./data/pokemon/pokemon.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const arr = data.pokemon
    const mostrar = (arr) => {
      let templateListPoke = '';
      // recorremos nuestro array con forEach
      arr.forEach((element) => {
        const listTypes = element.type.map((type) => `<p class="${type} type">${type}</p>`);
        // creamos un template(string) por cada elemento del array
        const card = `
                <div class="pokeball">
                    <div class="pokemon">
                        <div class="name-container">
                            <p class="num">#${element.num}</p>
                            <p class="name">${element.name}</p>
                        </div>
                        <div class="img-container">
                            <img src='${element.img}' alt="${element.name}"/>
                        </div>
                        <div class="type-container">
                            ${listTypes.join('')}
                        </div>
                    </div>
                </div>
          `;
        templateListPoke += card;
      });
      document.getElementById('listaPokemon').innerHTML = templateListPoke;
    };
    mostrar(arr)

    const listType = document.getElementById('filterListType');
    listType.addEventListener('change', () => {
      const condicion = listType.value
      mostrar(filterDataType(arr, condicion))
    })

    const listGeneration = document.getElementById('filterListGeneration');
    listGeneration.addEventListener('change', () => {
      const condicion = listGeneration.value
      mostrar(filterDataGeneration(arr, condicion))
    })
    const campo = 'name'
    const ordenar = (a, b) => a.name - b.name
    sortData(arr, campo, ordenar)
    
  })
