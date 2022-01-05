function createAccount(startPin, amount=0) {
    let pin = startPin;
    let balance = amount;

    return {
        checkBalance: (pinEntry) => {
            if (!(pinEntry === pin)) return "Invalid PIN.";
            
            return `$${balance}`;
        },
        deposit: (pinEntry, depositAmt) => {
            if (!(pinEntry === pin)) return "Invalid PIN.";

            balance += depositAmt;
            return `Succesfully deposited $${depositAmt}. Current balance: $${balance}.`
        },
        withdraw: (pinEntry, withdrawAmt) => {
            if (!(pinEntry === pin)) return "Invalid PIN.";
            if (balance-withdrawAmt < 0) return "Withdrawal amount exceeds account balance. Transaction cancelled.";

            balance -= withdrawAmt;
            return `Succesfully withdrew $${withdrawAmt}. Current balance: $${balance}.`
        },
        changePin: (pinEntry, newPin) => {
            if (!(pinEntry === pin)) return "Invalid PIN.";

            pin = newPin;
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };