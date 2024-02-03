/* LESSON 3 - Programming Tasks */
// Step 2 Object Literal

/* Profile Object  */
let myprofile = {
    name: "Alvaro Maldonado",
    photo: {
        src: "images/am.png",
        alt: "Profile Picture"
    },
    favoriteFoods:[
        "Rice", "Fried Chicken", "Lasagna", "Fish", "Typical Food"
    ],
    hobbies: [
        "Soccer", "Reading", "Ride on bycicle", 
    ],
    placesLived: [
        
    ],


};





/* Populate Profile Object with placesLive objects */




myprofile.placesLived.push(
    {
       place: "Huehuetenango, Guatemala",
       length: "10 years",   
    },
    {
        place: "Guatemala, Guatemala",
        length: "20 years",


    },
    {
        place: "San José, Costa Rica",
        length: "3 years",
    }
   
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myprofile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myprofile.photo.src;

document.querySelector("#photo").alt = myprofile.photo.alt;



/* Favorite Foods List*/

myprofile.favoriteFoods.forEach(item =>{
    let li = document.createElement("li");
    li.textContent = item;
    document.querySelector("#favorite-foods").appendChild(li);
});


/* Hobbies List */
myprofile.hobbies.forEach(item =>{
    let ul = document.createElement("ul");
    ul.textContent = item;
    document.querySelector("#hobbies").appendChild(ul);
});



/* Places Lived DataList */
myprofile.placesLived.forEach(entry =>{
    let dtElement = document.createElement("dt");
    dtElement.textContent = entry.place;
    let ddElement = document.createElement("dd");
    ddElement.textContent = entry.length;
    document.getElementById("places-lived").appendChild(dtElement);
    document.getElementById("places-lived").appendChild(ddElement);

});

    
