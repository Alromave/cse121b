/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Alvaro Maldonado";
const currentYear = new Date().getFullYear();
const profilePicture = "images/am.png";



/* Step 3 - Element Variables */

const foodElement = document.querySelector("#food");
const nameElement = document.querySelector("#name");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");



/* Step 4 - Adding Cntent */


yearElement.textContent = currentYear;
nameElement.textContent = fullName;
imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", "I am ${fullName} an Programming student");





/* Step 5 - Array */

let myFavFood = ["chicken", "pizza", "chao mein", "typical food", "fruit salad"];
foodElement.innerHTML = `<br>${myFavFood}`;

myFavFood.push("cake");
foodElement.innerHTML += `<br>${myFavFood}`;

myFavFood.shift();
foodElement.innerHTML += `<br>${myFavFood}`;
myFavFood.pop();
foodElement.innerHTML +=`<br>${myFavFood}`;

//let newfood = "cake";
//myFavFood.push(newfood);
//foodElement.innerHTML += <br>${myFavFood}";





