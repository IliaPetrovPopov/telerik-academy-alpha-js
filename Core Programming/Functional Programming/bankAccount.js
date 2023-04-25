const bankAccount = (function (balance) {
    let totalBalance = balance;

    const deposit = function(numberToAdd) {
        if(numberToAdd < 1) {
            throw new Error('Invalid number to add!');
        }

        balance += numberToAdd;
    }

    const withdraw = function(numberToSub) {
        if(numberToSub < 1) {
            throw new Error('Invalid number to substract!');
        }

        if(totalBalance < numberToSub) {
            throw new Error('Not enough balance!');
        }

        balance -= numberToSub;
    }

    return {
        totalBalance,
        deposit,
        withdraw,
        get getBalance() {
            return balance;
        }
    };
})(1500);