let container = document.querySelector("#container");

function createGrade(quantity) {

    let gradeSize = quantity();
    for (let i = 1; i <= gradeSize; i++) {
        let squares = document.createElement("div");
        squares.setAttribute("class", "squares");
        container.appendChild(squares);
    }
}

let size = function() {
    let size = prompt("Enter the number of squares: ");
    return +size;   
}

createGrade(size);
