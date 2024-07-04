let container = document.querySelector("#container");

for (let i = 1; i <= 256; i++) {
    let squares = document.createElement("div");
    squares.setAttribute("class", "squares");
    container.appendChild(squares);
}
