// Function to calculate ingredients based on number of cups
function calculateChaiIngredients(numberOfCups) {
    const water = numberOfCups * 200;
    const milk = numberOfCups * 50;
    const teaLeaves = numberOfCups * 1;
    const sugar = numberOfCups * 2;

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}

// Ask user how many cups
const cups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
calculateChaiIngredients(cups);
