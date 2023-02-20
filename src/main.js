import {
  filterDataType,
  filterDataGeneration,
  sortData,
  search,
} from "./data.js";

let pokeData;

// Extraccion de data json con metodo fetch
fetch("./data/pokemon/pokemon.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    pokeData = data.pokemon;
    show(pokeData);
  });

function backCard(pokemon) {
  return `
  <div class="pokemon-info" id="superposition">
    <div id="popup-info">
    <div class="${pokemon.type[0]} type square-right"></div>
    <div class="${pokemon.type[0]} type square-left"></div>
    <img class="img-ball" src="./images/Pokeball.png" alt=""></img> 
    
    <img class="img-p" src="${pokemon.img} " alt="${pokemon.name}" >
    
      <h1> #${pokemon.num} ${pokemon.name} </h1>
      <div class="box-container">
          <div class="box-data-left">
              <h3>About</h3>
              <p>${pokemon.about}</p>
          </div>

        <div class="box-data-right">
          <h3>Size</h3>
          <div class="size">
            <div class="height">
            <h4>height</h4>
              <p>${pokemon.size.height}</p>
            </div>
          <div class="weight">
            <h4>weight</h4>
              <p>${pokemon.size.weight}</p>
            </div>
          </div>
        </div>
        <div class="box-data-left">
          <h3>Resistant</h3>
          <div class="type-info">
            ${pokemon.resistant
    .map((type) => `<p class="${type} type">${type}</p>`)
    .join("")}
          </div>
        </div>
        <div class="stats">
          <h3>Statistics</h3>
          <table>
            <tr>
              <th>attack</th>
              <td>${pokemon.stats["base-attack"]}</td>
            </tr>
            <tr>
              <th>defense</th>
              <td>${pokemon.stats["base-defense"]}</td>
            </tr>
            <tr>
              <th>stamina</th>
              <td>${pokemon.stats["base-stamina"]}</td>
            </tr>
            <tr>
              <th>cp</th>
              <td>${pokemon.stats["max-cp"]}</td>
            </tr>
              <tr>
                <th>hp</th>
                <td>${pokemon.stats["max-hp"]}</td>
              </tr>
          </table>
        </div>
        <div class="box-data-left">
          <h3>Weaknesses</h3>
          <div class="type-info">
            ${pokemon.weaknesses
    .map((type) => `<p class="${type} type">${type}</p>`)
    .join("")}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}

function frontCard(element) {
  return `<div class="pokemon">
            <div class="name-container">
              <p class="num">#${element.num}</p>
              <p class="name">${element.name}</p>
            </div>
            <div class="img-container">
              <img src='${element.img}' alt="${element.name}"/>
            </div>
            <div class="type-container">
              ${element.type
    .map((type) => `<p class="${type} type">${type}</p>`)
    .join("")}
            </div>
          </div>`;
}

// Vizualizar pokemones
const show = (pokeData) => {
  let templateListPoke = "";
  // recorremos nuestro pokeData con forEach
  pokeData.forEach((pokemon) => {
    // creamos un template(string) por cada elemento del pokeData
    const card = `<div class="pokeball front">
                    ${frontCard(pokemon)}
                    ${backCard(pokemon)}
                  </div>`;
    templateListPoke += card;
  });
  document.getElementById("listPokemon").innerHTML = templateListPoke;
  popUpDescription();
};

// Popup con decripcion de pokemones
function popUpDescription() {
  const pokeball = document.querySelectorAll(".pokeball");
  pokeball.forEach((element) => {
    element.addEventListener("click", function (e) {
      if (element.classList.contains("front")) {
        element.classList.remove("front");
        element.classList.add("back");
        element.querySelector(".pokemon").style.display = "none";
        element.querySelector(".pokemon-info").style.display = "flex";
      } else {
        element.classList.remove("back");
        element.classList.add("front");
        element.querySelector(".pokemon").style.display = "flex";
        element.querySelector(".pokemon-info").style.display = "none";
      }
      e.preventDefault;
    });
  });
}

// Filtro por tipo
const listType = document.getElementById("filterListType");
listType.addEventListener("change", () => {
  const condition = listType.value;
  show(filterDataType(pokeData, condition));
});

// Filtro por generacion
const listGeneration = document.getElementById("filterListGeneration");
listGeneration.addEventListener("change", () => {
  const condition = listGeneration.value;
  show(filterDataGeneration(pokeData, condition));
});

// Filtro por orden
const listOrder = document.getElementById("order");
listOrder.addEventListener("change", () => {
  const sortOrder = listOrder.value;
  show(sortData(pokeData, sortOrder));
});

// Buscar pokemon por nombre y numero
const pokeSearch = document.getElementById("pokeSearch");
pokeSearch.addEventListener("input", () => {
  const condition = pokeSearch.value.toLowerCase();
  show(search(pokeData, condition));
});

// Boton hamburguesa
const menu_toggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

menu_toggle.addEventListener("click", () => {
  menu_toggle.classList.toggle("is-active");
  sidebar.classList.toggle("is-active");
});

// Show Popup superpositioPopup
const popup = document.getElementById("btnPopup");
const res = document.getElementById("res");
const superpositionPopup = document.getElementById("superposition");

const showPopup = () => {
  superpositionPopup.style.display = "flex";
  const heightUser = document.getElementById("idInput").value;
  if (heightUser > 0.41) {
    const tall = `<h1>Congrats! You are taller than pikachu!</h1>
    <img class="pikachu"  src="./images/exito.gif" alt=""/>`;
    res.innerHTML = tall;
  } else {
    const short = `<h1>You are shorter than pikachu!</h1> 
    <img class="pikachu" src="./images/pikachu-sad.gif" alt=""/>`;
    res.innerHTML = short;
  }
};
popup.addEventListener("click", showPopup);

// Hide On Blur hidePopup
const hidePopup = (e) => {
  if (e.target === e.currentTarget) {
    superpositionPopup.style.display = "none";
  }
};
superpositionPopup.addEventListener("click", hidePopup);
