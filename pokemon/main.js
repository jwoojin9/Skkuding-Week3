"use strict";
var _a, _b, _c;
const urlParams = new URL(location.href).searchParams;
const n = parseInt(urlParams.get('n'));
const img = document.createElement("img");
img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n + 1}.png`;
img.alt = data[n].name;
(_a = document.querySelector(".img-wrapper")) === null || _a === void 0 ? void 0 : _a.appendChild(img);
const h2 = document.createElement("h2");
h2.innerText = data[n].name;
(_b = document.querySelector("main")) === null || _b === void 0 ? void 0 : _b.appendChild(h2);
const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);
for (const key in data[n]) {
    const tr = document.createElement("tr");
    tr.insertAdjacentHTML('afterbegin', `
  <td>${key}</td>
  <td>${data[n][key]}</td>
  `);
    tbody.appendChild(tr);
}
(_c = document.querySelector("main")) === null || _c === void 0 ? void 0 : _c.appendChild(table);
