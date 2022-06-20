import data from "./emoji.js";
const dataUniq = changeUniqKeywords();

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

dataUniq.forEach((elem) => {
  createElem(elem.symbol, elem.title, elem.keywords);
});

let listElem = document.querySelectorAll(".divCard");

function inputInput() {
  let value = input.value;
  let filterEmoji = dataUniq.filter((elem) => elem.title.includes(value));
  console.log(filterEmoji);

  main.innerHTML = "";

  filterEmoji.forEach((elem) => {
    createElem(elem.symbol, elem.title, elem.keywords);
  });
}

input.addEventListener("input", inputInput);

function changeUniqKeywords() {
  return data.map((elem) => {
    return {
      ...elem,
      keywords: [...new Set(elem.keywords.split(" "))].join([" "]),
    };
  });
}

// console.log(data);

// for (let i = 0; i < 1; i++) {
//   let test = data[i];
//   let testTwo = test.keywords.split(" ");
//   const set1 = new Set(testTwo);
//   let set2 = [...set1];
//   let testThree = set2.join([" "]);
//   let result = { ...data[i], keywords: testThree };
// }
