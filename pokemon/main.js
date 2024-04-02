const urlParams = new URL(location.href).searchParams;
const n = parseInt(urlParams.get('n'));

var img = document.createElement("img");
img.src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n+1}.png`
img.alt = data[n].name;
document.querySelector(".img-wrapper").appendChild(img);

var h2 = document.createElement("h2");
h2.innerText = data[n].name;
document.querySelector("main").appendChild(h2);

var table = document.createElement("table");
var tbody = document.createElement("tbody");
table.appendChild(tbody)
for (const key in data[n]) {
    var tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${key}</td>
    <td>${data[n][key]}</td>
    `
    tbody.appendChild(tr);
  }
document.querySelector("main").appendChild(table);