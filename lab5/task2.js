let wrapper = document.querySelector(".wrapper__inner");
let inputColor = document.getElementById("color");

createTable();
let cell = document.getElementById("2");
cell.addEventListener("mouseover", changeCellColor);
cell.addEventListener("click", setInputedColor);
cell.addEventListener("dblclick", setRowsColor);

function createTable() {
    let table = document.createElement("table");
    table.classList.add("table");

    for (let i = 0; i < 6; i++) {
        let trEl = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            let tdEl = document.createElement("td");
            tdEl.innerHTML = j + 1 + i * 6;
            tdEl.id = j + 1 + i * 6;
            trEl.appendChild(tdEl);
        }
        table.appendChild(trEl);
    }
    wrapper.appendChild(table);
}

function changeCellColor() {
    cell.style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}

function setInputedColor() {
    cell.style.backgroundColor = inputColor.value;
}
function getRandomColor() {
    return Math.round(Math.random() * (256 - 1) + 1).toString();
}