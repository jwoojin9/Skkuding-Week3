  for (let i = 1; i <= data.length; i++) {
    const pokemon = data[i-1];
    const a = document.createElement("a");
    a.className += "card";
    a.href = `./pokemon/index.html?n=${i-1}`;
    a.insertAdjacentHTML('afterbegin', 
    `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png" alt="${pokemon.name}">
    <div class="info-wrapper">
      <h2>${pokemon.name}</h2>
      <p>Height: ${pokemon.height}</p>
      <p>Weight: ${pokemon.weight}</p>
      <p>Types: ${(pokemon.types as string[]).join(", ")}</p>
    </div>
    `);
    const cardWrapper: HTMLElement = document.getElementById("card-wrapper") as HTMLElement;
    cardWrapper.appendChild(a);
  }