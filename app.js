const text = document.querySelector(".msg");
const desText = document.querySelector(".dec-text");
const encBtn = document.querySelector(".enc-btn");
const decBtn = document.querySelector(".dec-btn");
const noMsgSection = document.querySelector(".no-msg-section");
const copyBtn = document.querySelector(".copy-btn");
const imgSection = document.querySelector(".img-section");

const encryptText = (text) => {
  let textMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  text = text.toLowerCase();
  for (let i = 0; i < textMatrix.length; i++) {
    if (text.includes(textMatrix[i][0])) {
      text = text.replaceAll(textMatrix[i][0], textMatrix[i][1]);
    }
  }
  showText(text);
  copyBtn.style.display = "block";
};

const decryptText = (text) => {
  let textMatrix = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  text = text.toLowerCase();
  for (let i = 0; i < textMatrix.length; i++) {
    if (text.includes(textMatrix[i][0])) {
      text = text.replaceAll(textMatrix[i][1], textMatrix[i][0]);
    }
  }
  showText(text);
  copyBtn.style.display = "block";
};

const showText = (text) => {
  noMsgSection.style.display = "none";
  console.log(text);
  desText.innerText = text;
};

const copyText = () => {
  navigator.clipboard.writeText(desText.innerText).then(function () {
    alert("Texto copiado");
  });
};

encBtn.addEventListener("click", () => {
  if (text.value == "") {
    alert("Por favor digite un texto valido");
  } else {
    encryptText(text.value);
    imgSection.style.display = "none";
  }
});

decBtn.addEventListener("click", () => {
  if (text.value == "") {
    alert("Por favor digite un texto valido");
  } else {
    decryptText(text.value);
    imgSection.style.display = "none";
  }
});

copyBtn.addEventListener("click", () => {
  copyText();
});
