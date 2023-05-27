// //alert("let`s go!");

// // let you = "you";

// // let result;
// // result = "Hello! ".concat("Bebra", " is waiting for ", you);
// // result = result.toLocaleUpperCase();
// // const colors = "red, blue, gray, white";

// // result = colors.split(",");
// // result = colors.replace("gray", "yellow");

// // result = colors.includes("gray");

// // console.log(result);

// const brand = "Toyota";
// const model = "Camry";
// const color = "gray";
// const year = "2019";

// let carHtml;

// carHtml = `
// <h3>Car Description</h3>
// <ul>
// <li>Brand: ${brand}</li>
// <li>Model: ${model}</li>
// <li>Color: ${color}</li>
// <li>Year: ${year}</li>
// <li>Doors: ${getDoorsNumber()}</li>
// <li>Tax: ${year < 2000 ? "20%" : "10%"}</li>
// </ul>`;

// function getDoorsNumber() {
//   return 5;
// }

// document.body.innerHTML = carHtml;

// let yourName = prompt("What is your name?");
// let yourSecondName = prompt("What is your second name?");

// console.log("Hello, " + yourName + yourSecondName + "! Nice to meet you!");

// alert("Your indexBodyWeight: " + areYouOverweight);
// console.log(indexBodyWeght);

// const birthday = 20;
// const yearNow = 2023;
// const age = yearNow - birthday;

// let answer;

// if (age >= 18) {
//   answer = "Yes.";
// } else {
//   answer = "No.";
// }

// console.log(`Am I adult? - ${answer}`);

// const age = prompt("Text your age.");

// alert(`You can${age >= 18 ? " " : " not "}buy alcohol.`);

// const getAverage = (a, b, c) => (a + b + c) / 3;

// const firstQuarterDept1 = getAverage(35367, 29842, 38501);
// const firstQuarterDept2 = getAverage(70533, 50121, 33899);

// const secondQuarterDept1 = getAverage(50301, 21984, 19207);
// const secondQuarterDept2 = getAverage(72381, 41381, 29465);

// const printBonusbyfirstQuarter = (a, b) => {
//   if (a > b) {
//     c = a - b;
//     p = (c / b) * 100;
//     if (p >= 30) {
//       console.log(`The first dept bigger than second by ${p}%`);
//     } else console.log("No bonus for this dept");
//   }
//   if (a < b) {
//     c = b - a;
//     p = (c / a) * 100;
//     if (p >= 30) {
//       console.log(`The second dept bigger than first by ${p}%`);
//     } else console.log("No bonus for this dept");
//   }
// };

// const bonusFirstMoth = printBonusbyfirstQuarter(
//   firstQuarterDept1,
//   firstQuarterDept2
// );

// const bonusSecondMoth = printBonusbyfirstQuarter(
//   secondQuarterDept1,
//   secondQuarterDept2
// );

// const calculateTips = (bill) => (bill >= 20 ? bill * 0.2 : bill * 0.15);

// const bills = [11, 20, 47];
// const tips = [
//   calculateTips(bills[0]),
//   calculateTips(bills[1]),
//   calculateTips(bills[2]),
// ];
// const totalBiils = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totalBiils);

// const Youra = {
//   name: "Youra",
//   familyMembers: ["Irina", "Youra", "Kid"],
//   age: 47,
//   job: "proger",
//   hasDriverLicense: false,
//   getCV: function () {
//     return `${this.name} has a job like ${this.job} and has ${
//       this.familyMembers[0]
//     } and he${
//       this.hasDriverLicense ? " has" : " doesn`t have"
//     } a driver license.`;
//   },
// };

// console.log(
//   `${Youra.name} has ${Youra.familyMembers.length} family members and the firts is ${Youra.familyMembers[0]}`
// );

// console.log(Youra.getCV());

// const man1 = {
//   name: "Jack",
//   lastname: "White",
//   weight: 79,
//   height: 1.7,
//   BMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//     return this.bmi;
//   },
// };

// const man2 = {
//   name: "Mike",
//   lastname: "Black",
//   weight: 91,
//   height: 1.93,
//   BMI: function () {
//     this.bmi = this.weight / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(man1.BMI());
// console.log(man2.BMI());
// console.log(man1.bmi);
// console.log(man2.bmi);

// if (man1.bmi > man2.bmi) {
//   console.log(
//     `${man1.name} ${man1.lastname} BMI is ${man1.bmi} bigger than ${man2.name} ${man2.lastname} BMI ${man2.bmi}.`
//   );
// } else {
//   console.log(
//     `${man2.name} ${man2.lastname} BMI is ${man2.bmi} bigger than ${man1.name} ${man1.lastname} BMI ${man1.bmi}.`
//   );
// }

// const user123 = [
//   "Youra",
//   "Maslov",
//   1998,
//   "developer",
//   ["Irina", "Miha"],
//   false,
//   true,
// ];

// const types = [];

// for (let i = 0; i < user123.length; i++) {
//   console.log(user123[i], typeof user123[i]);
//   //types[i] = typeof user123[i];
//   //types.push(typeof user123[i]);
//   types.unshift (typeof user123[i]);
// }

// console.log(types);

// const birthYears = [1974, 1994, 2000, 2003];

// const ages = [];
// for (let i = 0; i < birthYears.length; i++) {
//   ages.push(2023 - birthYears[i]);
//   console.log(ages);
// }

// const user123 = [
//   "Youra",
//   "Maslov",
//   1998,
//   "developer",
//   ["Irina", "Miha"],
//   false,
//   true,
// ];

// for (let i = 0; i < user123.length; i++) {
//   console.log(user123[i], typeof user123[i]);
// }

// const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
// const tips = [];
// const totals = [];
// const calculateTips = (a) => (a >= 20 ? a * 0.2 : a * 0.15);
// for (let i = 0; i < bills.length; i++) {
//   let tip = calculateTips(bills[i]);
//   tips.push(tip);
//   totals.push(bills[i] + tip);
// }

// console.log(totals);

// const calculateAverage = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return (sum = sum / arr.length);
// };
// console.log(calculateAverage(totals));

const kata = (a, b, c) => {
  let x;
  x = b - a > c ? true : false;
  return x;
};

console.log(kata(10, 36, 25));

const scales = [1, 1, 1, 1, 1, 1, 1, 2];

const getWeight = (left, right) => {
  let res;
  if (left > right) {
    res = -1;
  }
  if (left === right) {
    res = 0;
  }
  if (left < right) {
    res = 1;
  }
  return res;
};

console.log(getWeight(scales[(0, 1, 2)], scales[(3, 4, 5)]));
console.log(getWeight(scales[6], scales[7]));

const field = document.querySelector(".field");
const cellSize = 100;
const empty = {
  top: 0,
  left: 0,
};

const cells = [];
cells.push(empty);
function move(index) {
  const cell = cells[index];

  const leftDiff = Math.abs(empty.left - cell.left);
  const topDiff = Math.abs(empty.top - cell.top);
  if (leftDiff + topDiff > 1) {
    return;
  }

  cell.element.style.left = `${empty.left * cellSize}px`;
  cell.element.style.top = `${empty.top * cellSize}px`;

  const emptyLeft = empty.left;
  const emptyTop = empty.top;
  empty.left = cell.left;
  empty.top = cell.top;
  cell.left = emptyLeft;
  cell.top = emptyTop;
}
const numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);

for (let i = 1; i <= 15; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.innerHTML = numbers[i - 1] + 1;
  const left = i % 4;
  const top = (i - left) / 4;

  cells.push({
    left: left,
    top: top,
    element: cell,
  });

  cell.style.left = `${left * cellSize}px`;
  cell.style.top = `${top * cellSize}px`;

  field.append(cell);

  cell.addEventListener("click", () => {
    move(i);
  });
}

document.querySelector("#singUp").onclick = () => {
  const userName = document.querySelector("#text").value;
  const userPassword = document.querySelector("#password").value;
  const userEmail = document.querySelector("#email").value;
  const userRadio = document.querySelector("#checkbox").value;
  if (userName == "" || userPassword == "" || userEmail == "") {
    console.log("Enter all information about you.");
  } else
    console.log(
      `${userName} with this ${userEmail} was marked down and password was saved.`
    );
  document.querySelector(
    "#comments"
  ).innerHTML = `User ${userName} with ${userEmail} email was singed up.`;
};

fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Kyiv,ua&appid=82a619628e4df6d5ab2e8d90ecc4daa7"
)
  .then(function (res) {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    document.querySelector(".cityName").textContent = data.name;
    document.querySelector(".cityTemp").innerHTML =
      Math.round(data.main.temp - 273) + "&deg";
    document.querySelector(".cityState").innerHTML =
      data.weather[0].description;
    document.querySelector(".weatherIcon").innerHTML = data.wind.speed;
  });

let RateUSD;
let RateEUR;

fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    RateUSD = data[24].rate;
    RateEUR = data[31].rate;
    document.querySelector(".rateUDS").innerHTML = `USD: ${RateUSD}`;
    document.querySelector(".rateEUR").innerHTML = `EUR: ${RateEUR}`;
    console.log(RateEUR, RateUSD);
  });
// window.onload = () => {
//   let c = {
//     UAN: 1,
//     USD: RateUSD,
//     EUR: RateEUR,
//   };
//   const firstInput = document.querySelector(".oneInput");
//   const currency1 = document.querySelector("#one");
//   const currency2 = document.querySelector("#two");
//   const secondInput = document.querySelector(".twoInput");

//   function sum() {
//     let num = 0;
//     if (currency1.value === currency2.value) {
//       secondInput.innerHTML = firstInput.value;
//     } else {
//       if (currency1.value !== "UAN") {
//         num = firstInput.value * c[currency1.value];
//         secondInput.innerHTML =
//           Math.ceil((num / c[currency2.value]) * 100) / 100;
//       } else
//         secondInput.innerHTML =
//           Math.ceil(firstInput.value * c[currency2.value] * 100) / 100;
//     }
//   }
//   firstInput.oninput = function () {
//     sum();
//   };
//   currency1.onchange = function () {
//     sum();
//   };
//   currency2.onchange = function () {
//     sum();
//   };
// };

const changeCurrency = () => {
  const firstInput = document.querySelector(".oneInput").value;
  const currency1 = document.querySelector("#one");
  const currency2 = document.querySelector("#two");
  if (currency1.value === currency2.value) {
    return console.log("Change the different values!");
  } else {
    if (currency1.value == "UAN" && currency2.value == "USD") {
      let sum = 1 / RateUSD;
      let globalSum = Math.ceil(firstInput * sum);
      console.log(globalSum);
      document.querySelector(".twoInput").value = globalSum;
    }
    if (currency1.value == "UAN" && currency2.value == "EUR") {
      let sum = 1 / RateEUR;
      let globalSum = Math.ceil(firstInput * sum);
      console.log(globalSum);
      document.querySelector(".twoInput").value = globalSum;
    }
    if (currency1.value == "EUR" && currency2.value == "UAN") {
      let globalSum = Math.ceil(firstInput * RateEUR);
      console.log(globalSum);
      document.querySelector(".twoInput").value = globalSum;
    }
    if (currency1.value == "EUR" && currency2.value == "USD") {
      let sum = firstInput / RateEUR;
      globalSum = Math.ceil(sum * RateUSD);
      console.log(globalSum);
      document.querySelector(".twoInput").value = globalSum;
    }
    if (currency1.value == "USD" && currency2.value == "UAN") {
      let globalSum = Math.ceil(firstInput * RateUSD);
      console.log(globalSum);
      document.querySelector(".twoInput").value = globalSum;
    }
    if (currency1.value == "USD" && currency2.value == "EUR") {
      let sum = firstInput / RateUSD;
      globalSum = Math.ceil(sum * RateEUR);
      console.log(globalSum);
      document.querySelector(".twoInput").value = globalSum;
    }
  }
};

document.querySelector(".submit").onclick = changeCurrency;
