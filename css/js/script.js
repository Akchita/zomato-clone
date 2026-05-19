// SELECT ELEMENTS

const orderButton = document.querySelector(".cta-button");
const searchBar = document.querySelector(".search-bar");
const navLinks = document.querySelectorAll("nav ul li a");
const heroHeading = document.querySelector(".hero h1");

/* ORDER BUTTON */

orderButton.addEventListener("click", () => {

    orderButton.innerText = "Loading...";

    setTimeout(() => {
        alert("Redirecting to restaurants 🍕");
        orderButton.innerText = "Order Now";
    }, 1500);

});

/* SEARCH FUNCTIONALITY */

searchBar.addEventListener("keypress", (event) => {

    if(event.key === "Enter"){

        const searchValue = searchBar.value.trim();

        if(searchValue === ""){
            alert("Please enter a food item or restaurant.");
        }

        else{
            alert(`Searching for "${searchValue}" 🍔`);
        }

    }

});

/* ACTIVE NAVIGATION LINK */

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});

/* HERO TEXT CHANGING */

const foodTexts = [
    "Order Food Online from Your Favorite Restaurants 🍔",
    "Delicious Meals Delivered Fast 🍕",
    "Craving Something Tasty? 🍟",
    "Enjoy Food Anytime, Anywhere 🌮"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= foodTexts.length){
        index = 0;
    }

    heroHeading.style.opacity = 0;

    setTimeout(() => {

        heroHeading.innerText = foodTexts[index];
        heroHeading.style.opacity = 1;

    }, 500);

}, 3000);

/* SCROLL EFFECT */

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#c82333";
    }

    else{
        header.style.background = "#e23744";
    }

});

/* SEARCH BAR GLOW EFFECT */

searchBar.addEventListener("focus", () => {
    searchBar.style.boxShadow = "0 0 20px rgba(226,55,68,0.8)";
});

searchBar.addEventListener("blur", () => {
    searchBar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
});