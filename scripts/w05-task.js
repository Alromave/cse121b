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
        displayTemples(templeList);

    }
    catch (error) {
        console.error("Error fetching temple data:", error);
    }

};





 
/* reset Function */

const reset = () => {
    const articleElements = templesElement.querySelectorAll("article");
    articleElements.forEach(article => {
        article.remove();
    });
};


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
document.getElementById("filtered").addEventListener("change", () => { filterTemples(templeList) });

getTemples();


