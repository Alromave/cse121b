/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const articleElement = document.createElement("article");
        const h3Element = document.createElement("h3");
        h3Element.textContent = temple.templeName;

        const imgElement = document.createElement("img");
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;
        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });

    

};



/* async getTemples Function using fetch()*/

const getTemples = async() => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        const templeData = await response.json();
        templeList = templeData;

    }
    catch (error) {
        console.error("Error fetching temple data:", error);
    }

};
getTemples()
    .then(() => console.log(templeList))
    .catch(error => console.error("Error:", error));




 
/* reset Function */
const clearTemples = () => {
    templesElement.innerHTML = "";
};
const reset = () => {
    const articleElements = templesElement.querySelectorAll("article");
    articleElements.forEach(article => {
        article.remove();
    });
};



/* filterTemples Function */
/*const filterTemples = (temples) => {
    reset();
}
const filter = document.getElementById("filtered").value;
switch(filter) {
    case "all":
        break;
    case "recent":
        break;
    case "alphabetical":
        break;
    case "visited":
        break;
    default:

};
switch(filter) {
    case "utah":
        displayTemples(temples.filter(temple => temple.location.includes("utah")));
        break;
    case "nonutah":
        displayTemples(temples.filter(temple => temple.location.includes("nonutah")));
        break;
    case "order":
        displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
        break;
    case "all":
        displayTemples(temples);
        break;
    default:
        console.error("Invalid filter option");
}*/
const filterTemples = function(temples){
    reset();
    let filter = document.querySelector("#filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            breack;
        case "older":
            displayTemples(temples.filter(temple => new Date (temple.dedicated).getFullYear() < new Date(1950,0,1).getFullYear()));
            break;
        default:
            displayTemples(temples);
            break;
    }
}
 



/* Event Listener */
const filteredElement = document.getElementById("filtered");
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();


