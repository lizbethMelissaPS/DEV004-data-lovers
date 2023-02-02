import { filterData, sortData, computeStats } from './data.js';
//import data from './data/pokemon/pokemon.js';

fetch("./data/pokemon/pokemon.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const arr = data.pokemon
        /*  */
        const mostrar = function (arr) {
            let templateListPoke = '';
            // recorremos nuestro array con forEach
            arr.forEach((element) => {
                // creamos un template(string) por cada elemento del array
                const card = `
            <div class='card-link'>
              <article class='blog-card'>
                <img class='post-image' src='${element.img}' />
                <h3 class='post-id'>${element.id}</h3>
                <div class='article-details'>
                  <h4 class='post-title'>${element.name}</h4>
                  <h6 class='post-category'>${element.type}</h6>
                </div>
              </article>
            </div>
          `;
                templateListPoke += card;
            });
            document.getElementById('allThePokemones').innerHTML = templateListPoke;
        };
        mostrar(arr);
        /*  */


    })

/* for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  console.log(element.num);
  
} */






