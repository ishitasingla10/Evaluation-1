let walletBalance = 456; // Initial wallet balance

function addCash() {
    let cashToAdd = prompt("Enter amount to add to wallet:");
    if (cashToAdd && !isNaN(cashToAdd) && cashToAdd > 0) {
        walletBalance += parseFloat(cashToAdd);
        document.getElementById('walletAmount').textContent = `Rs. ${walletBalance.toFixed(2)}`;
    } else {
        alert("Please enter a valid amount.");
    }
}
