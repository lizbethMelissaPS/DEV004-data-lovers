import { filterDataType, filterDataGeneration, sortData, computeStats } from './data.js';
//import data from './data/pokemon/pokemon.js';

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
                <div class="pokemon">
                    <div class="pokeball">
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

    /* const filtrar = (arr)=> {
      arr.forEach((element)=>{
        const newArr = element.type
        for (let i = 0; i < newArr.length; i++) {
          const element = newArr[i];
          console.log(newArr);
        }
        console.log(newArr);
        //const x= "grass"
      //filterData (newArr , x)
      
      })
    }
    filtrar(arr) */

    //const x= "psychic"
    /*const y= "generation ii" */
    
    const listType = document.getElementById('filterListType');
    
    listType.addEventListener('change', () => {
      
      const condicion = listType.value //"psychic"
      
      mostrar(filterDataType(arr, condicion))
    })

    const listGeneration = document.getElementById('filterListGeneration');
    console.log(listGeneration);
    listGeneration.addEventListener('change', () => {
      console.log("aqui");
      const condicion = listGeneration.value //"psychic"
      console.log(condicion);
      mostrar(filterDataGeneration(arr, condicion))
    })
   

    //document.getElementById('filterListGeneration').addEventListener('change', mostrar(filterDataGeneration(arr, y)))


    const ordenar = (a, b) => a.name - b.name
    sortData(arr, ordenar)
  })






