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
let incl1 = "";
let incl2 = "";
let incl3 = "";
let incl4 = "";

string1.includes("string") ? (incl1 += string1) : (incl1 = incl1);
console.log(incl1);
string2.includes("string") ? (incl2 += string2) : (incl2 = incl2);
console.log(incl2);
string3.includes("string") ? (incl3 += string3) : (incl3 = incl3);
console.log(incl3);
string4.includes("string") ? (incl4 += string4) : (incl4 = incl4);
console.log(incl4);

if (incl1.length < incl2.length && incl1.length < incl3.length) {
  console.log(`string1 je najkraci koji sadrzi rec string: ${string1}`);
} else if (incl2.length < incl1.length && incl2.length < incl3.length) {
  console.log(`string2 je najkraci koji sadrzi rec string: ${string2}`);
} else {
  console.log(`string3 je najkraci koji sadrzi rec string: ${string3}`);
}

// Zadatak 3
let sum = "";

!string1.includes("string koji je") ? (sum += string1.slice(5)) : (sum = sum);
console.log(sum);
!string2.includes("string koji je") ? (sum += string2.slice(5)) : (sum = sum);
console.log(sum);
!string3.includes("string koji je") ? (sum += string3.slice(5)) : (sum = sum);
console.log(sum);
!string4.includes("string koji je") ? (sum += string4.slice(5)) : (sum = sum);
console.log(sum);

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
