import data from "emoji.js";

let main = document.querySelector("main");
main.className = "main";

let input = document.querySelector(".input");

function createElem(symbol, title, keywords) {
  let div = document.createElement("div");
  div.className = "divCard";

  let img = document.createElement("div");
  img.textContent = symbol;
  img.className = "divCard__img";

  let nameCard = document.createElement("div");
  nameCard.textContent = title;
  nameCard.className = "divCard__titel";

  let description = document.createElement("div");
  description.textContent = keywords;
  description.className = "divCard__desc";

  main.append(div);

  div.append(img);
  div.append(nameCard);
  div.append(description);
}

data.forEach((elem) => {
    createElem(elem.symbol, elem.title, elem.keywords);
  });

let listElem = document.querySelectorAll(".divCard");

function inputInput() {
    let value = input.value;
    for (let item of listElem) {
      if (value !== item.querySelector(".divCard__titel").textContent) {
        item.style.display = "none";
      }
    }
  };

  input.addEventListener ('change', inputInput )

  
  // input.onchange = function () {
  //   let value = input.value;
  //   for (let item of listElem) {
  //     if (value !== item.querySelector(".divCard__titel").textContent) {
  //       item.style.display = "none";
  //     }
  //   }
  // };