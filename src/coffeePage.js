import image from "./images.jpeg";
export const coffeePage = () => {
let coffeeImage = document.createElement("img");
coffeeImage.src = image;
let content = document.getElementById("content")
let coffeeTitle = document.createElement("div");
coffeeTitle.innerText = "COFFEE COFFEE"
let coffeeWonderfulText = document.createElement("div");
coffeeWonderfulText.innerText = "coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee";
content.appendChild(coffeeImage);
content.appendChild(coffeeTitle);
content.appendChild(coffeeWonderfulText);
}