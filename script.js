"use strict";

let mother = {
    name: "Rosalba",
    age: 67,
    occupation: "Direct Care Worker",
    hobbies: ["Sewing", "Novelas"],
    favoriteColor: "Yellow",
    birthplace: "Mexico",
    favoriteFoods: ["Church's Chicken", "Chile Colorado"],
    favoriteSayings: ["No hagas cosas buenas que parezcan malas"],
    giftIdeas: ["Restaurant gift cards", "Sunflowers"]
};

// Function to generate a random message
function generateMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const messageElement = document.getElementById("message");
    messageElement.textContent = messages[randomIndex];
}

// Array of messages to display
const messages = [
    "Te amo",
    "Estoy agradecida de tenerte en mi vida",
    "Aprecio nuestros momentos juntos",
    "Eres una verdadera bendición en mi vida",
    "Eres una mujer increíble"
];
