// Function to estimate mobile money transaction fee
function estimateTransactionFee(amountToSend) {
    const percentFee = amountToSend * 0.015; // 1.5% of the amount
    const minFee = 10;
    const maxFee = 70;

    // Fee must be between 10 and 70
    const fee = Math.max(minFee, Math.min(percentFee, maxFee));

    // Total amount = amount to send + transaction fee
    const totalAmount = amountToSend + fee;

    // Print the breakdown
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log("\nSend Money Securely!");
}

// Prompt user for amount to send
const amount = Number(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);
