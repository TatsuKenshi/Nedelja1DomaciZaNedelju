// Domaci Zadatak 1
let string1 = "neki prvi string";
let string2 = "neki drugi string koji je i duzi string";
let string3 = "neki treci string koji je dugacak";
let string4 = "neki cetvrti";

let max1 = string1.length;
let max2 = string2.length;
let max3 = string3.length;
let max4 = string4.length;

if (max1 > max2 && max1 > max3 && max1 > max4) {
  console.log(`Najduzi string je string1.`);
} else if (max2 > max1 && max2 > max3 && max2 > max4) {
  console.log(`Najduzi string je string2.`);
} else if (max3 > max1 && max3 > max2 && max3 > max4) {
  console.log(`Najduzi string je string3.`);
} else {
  console.log("Najduzi je string4");
}

// Zadatak 2
console.log(string1);

// Zadatak 3
const totalString = string1.slice(5) + string4.slice(5);
console.log(totalString);

// Zadatak 4
let quantity = 250;
let price = 1000;
let articlePrice;

if (quantity > 0) {
  articlePrice = (quantity / 1000) * price;
  console.log(`Total price is ${articlePrice} dinars`);
}

// 5
let money = 150;
if (money < articlePrice) {
  console.log(`Insufficient funds`);
} else {
  console.log(`Your tab is ${articlePrice} dinars. Thank you, come again!`);
}
