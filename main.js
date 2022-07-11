import { UTFChar, someUTFChar, translate } from "./translate.js";

const handleInput = (event) => {
  const pattern = /^[A-Za-z 0-9]*$/;
  if (!pattern.test(inputBox.value)) {
    event.path[1].style.backgroundColor = "#FF6961";
  } else {
    event.path[1].style.backgroundColor = "";
  }
  outputBox.innerText = translate(inputBox.value.toLowerCase());
};

const inputBox = document.querySelector(".translator__input");
const outputBox = document.querySelector(".translator__output");

inputBox.addEventListener("input", handleInput);
