let number = document.getElementById("number");

const units = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "tewlve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const tens = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

const hundreds = [
  "One Hundred",
  "Two Hundred",
  "Three Hundred",
  "Four Hundred",
  "Five Hundred",
  "Six hundered",
  "Seven Hundred",
  "Eigth Hundred",
  "Nine Hundred",
];

const getUnit = (unit) => {
  result = units[unit];
  return result;
};

const getTens = (ten) => {
  let firstDigit = ten.charAt(0);
  let secondDigit = ten.charAt(1);
  let unitResult = getUnit(secondDigit);
  result = `${tens[firstDigit - 2]}-${unitResult}`;
  return result;
};

const getHundreds = (hundred) => {
  let firstDigit = hundred.charAt(0);
  let otherDigit = hundred.charAt(1, 2);
  console.log(firstDigit, otherDigit);
};

number.onkeyup = () => {
  let num = number.value;
  let result;
  if (num != "") {
    if (num < 20) {
      result = getUnit(num);
    } else if (num < 100) {
      result = getTens(num);
    } else if (num < 1000) {
      getHundreds(num);
    }
    console.log(result);
  }
};
