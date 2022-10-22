import { coffeePage } from "./coffeePage";
import { menuPage } from "./menuPage";

coffeePage();

let coffeePageButton = document.createElement("button");
let menuPageButton = document.createElement("button");
coffeePageButton.innerText = "Coffee!!!";
menuPageButton.innerText = "Coffee Coffee";


let container = document.getElementById("content");
container.appendChild(coffeePageButton);
container.appendChild(menuPageButton);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const goToCoffeePage = () => {
    removeAllChildNodes(container);
    coffeePage();
    container.appendChild(coffeePageButton);
    container.appendChild(menuPageButton);
}

const goToMenuPage = () => {
    removeAllChildNodes(container);
    menuPage();
    container.appendChild(coffeePageButton);
    container.appendChild(menuPageButton);
}

coffeePageButton.onclick = goToCoffeePage;
menuPageButton.onclick = goToMenuPage;



