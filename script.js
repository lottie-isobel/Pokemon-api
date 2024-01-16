const pokeForm = document.querySelector("#inputSection form");
const pokeList = document.querySelector("#pokemonSection ul");
pokeForm.addEventListener("submit", extractPokemon);

function extractPokemon(e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target[0].value);
  fetchPokemonData(e.target.pokemonInput.value);
  e.target.pokemonInput.value = "";
}

async function fetchPokemonData(pokemon) {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (resp.ok) {
      const data = await resp.json();
      addPokemon(data);
    } else {
      throw "Error: http status code:" + resp.status;
    }
  } catch (e) {
    console.log(e);
  }
}

function addPokemon(pokemon) {
  if (!pokemon.error) {
    const li = document.createElement("li");
    console.log(pokemon);
    const capitalisedName = `${pokemon.name
      .charAt(0)
      .toUpperCase()}${pokemon.name.slice(1)}`;
    const capitalisedType = `${pokemon.types[0].type.name
      .charAt(0)
      .toUpperCase()}${pokemon.types[0].type.name.slice(1)}`;
    li.textContent = `Name: ${capitalisedName}, Type: ${capitalisedType}`;
    pokeList.appendChild(li);
  }
}

//let apiUrl;
// const pokeForm = document.querySelector("#inputSection form");
// pokeForm.addEventListener("submit", extractPokemon);

// // function extractPokemon(e) {
// //   e.preventDefault();
// //   const pokemon = document.querySelector("#pokemonInput").value;
// //   console.log(e);
// // }
// function extractPokemon(e) {
//   e.preventDefault();
//   console.log(e);
//   const pokemon = document.querySelector("#pokemonInput").value;
//   const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//   fetchPokemonData(apiUrl);
// }

// async function fetchPokemonData(pokemon) {
//   try {
//     const resp = await fetch(apiUrl);

//     if (resp.ok) {
//       const data = await resp.json();
//       addPokemon(data);
//     } else {
//       throw new Error("Error: HTTP status code: " + resp.status);
//     }
//   } catch (e) {
//     console.log(e);
//   }
//
