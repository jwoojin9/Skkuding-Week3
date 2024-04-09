const urlParams = new URL(location.href).searchParams;
const n: number = parseInt(urlParams.get('n') as string);

const img = document.createElement("img");
img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n+1}.png`
img.alt = data[n].name as string;
document.querySelector(".img-wrapper")?.appendChild(img);

const h2 = document.createElement("h2");
h2.innerText = data[n].name as string;
document.querySelector("main")?.appendChild(h2);

const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody)
for (const key in data[n]) {
  const tr = document.createElement("tr");
  tr.insertAdjacentHTML('afterbegin', `
  <td>${key}</td>
  <td>${data[n][key]}</td>
  `);
  tbody.appendChild(tr);
}
document.querySelector("main")?.appendChild(table);