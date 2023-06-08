// DOM Elements
let zeroToNine = document.getElementById("zeroToNine");
let oneToTen = document.getElementById("oneToTen");
let oneToHundred = document.getElementById("oneToHundred");
let oneToThousand = document.getElementById("oneToThousand");
let minMax = document.getElementById("minToMax");
let arrLength = document.getElementById("arrayLength");

const btn = document.getElementById("randomBtn");

function zeroToNineRange() {
  const random = Math.random();
  const value = Math.floor(random * 10);
  zeroToNine.innerText = value;
}

function oneToTenRange() {
  const random = Math.random();
  const value = Math.floor(random * 10 + 1);
  oneToTen.innerText = value;
}

function oneToHundredRange() {
  const random = Math.random();
  const value = Math.floor(random * 100 + 1);
  oneToHundred.innerText = value;
}

function oneToThousandRange() {
  const random = Math.random();
  const value = Math.floor(random * 1000 + 1);
  oneToThousand.innerText = value;
}

function minToMax(min, max) {
  const random = Math.random();
  const value = Math.floor(random * (max - min + 1)) + min;
  minMax.innerText = value;
}

function basedOnArrLength() {
  const numbers = [
    110, 21, 32, 43, 57, 60, 70, 85, 212, 325, 225, 91, 28, 63, 56, 7, 5, 1, 29,
    47, 237,
  ];
  const random = Math.random();
  const randomIndex = Math.floor(random * numbers.length);
  // console.log(randomIndex);
  // const randomNumber = numbers[randomIndex]; // to get the value in that index
  arrLength.innerText = randomIndex;
}

function generateNumber() {
  zeroToNineRange();
  oneToTenRange();
  oneToHundredRange();
  oneToThousandRange();
  minToMax(350, 450);
  basedOnArrLength();
}

// button event listener
btn.addEventListener("click", generateNumber);


generateNumber()