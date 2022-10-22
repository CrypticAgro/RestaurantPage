import image from "./images1.jpeg";
export const menuPage = () => {
let coffeeMan = document.createElement("img");
let coffeeText = document.createElement("div");
let content = document.getElementById("content");

coffeeText.innerText = 
`coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee
coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee
coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee
coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee
coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee
coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee
coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee
coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee
coffee coffee coffee coffee coffee coffee coffee coffee coffee coffee`
coffeeMan.src = image;
content.appendChild(coffeeMan);
content.appendChild(coffeeText);
}