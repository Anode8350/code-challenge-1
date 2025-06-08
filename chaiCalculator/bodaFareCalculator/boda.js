// Function to calculate total Boda Boda fare based on distance
function calculateBodaFare(distanceInKm) {
    const baseFare = 50; // Flat fee for every ride
    const chargePerKm = 15; // Fee per kilometer

    // Total fare = base fare + (distance × charge per km)
    const totalFare = baseFare + (distanceInKm * chargePerKm);

    // Print the fare breakdown
    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("\nPanda Pikipiki!");
}

// Prompt user for distance in kilometers
const distance = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distance);
