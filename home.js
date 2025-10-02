const validPin = 1234;

document.addEventListener("DOMContentLoaded", function() {
    const addMoneyBtn = document.getElementById("add-money-btn");

    addMoneyBtn.addEventListener("click", function(e) {
        e.preventDefault(); // prevent form submission
        console.log("Add money button clicked");

        // Get form values
        const bank = document.getElementById("bank").value;
        const account = document.getElementById("account-number").value;
        const amount = parseInt(document.getElementById("add-amount").value);
        const pin = parseInt(document.getElementById("pin").value);

        // Validation
        if(account.length < 11){
            alert("Please provide a valid bank account number");
            return;
        }
        if(!bank || !account || !amount || !pin) {
            alert("Please fill all fields correctly!");
            return;
        }
        if(pin !== validPin){
            alert("Please provide a valid PIN number");
            return;
        }

        // Get current balance
        const balanceElement = document.getElementById("available-balance");
        const availableBalance = parseInt(balanceElement.innerText.replace(/\D/g, ''));

        // Calculate new balance
        const totalNewBalance = availableBalance + amount;

        // Update balance on page
        balanceElement.innerText = totalNewBalance;

        console.log({ bank, account, amount, pin, totalNewBalance });
        alert(`Successfully added $${amount} to your account!`);
    });
});
