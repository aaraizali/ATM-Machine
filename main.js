import inquirer from "inquirer";
let myBalance = 10000; // DOLLAR
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("You entered correct Pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select any operation",
            type: "list",
            choices: ["withdraw", "check balance"]
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Select the amount you want to withdraw or choose 'Custom Amount'",
                type: "list",
                choices: ["1000", "5000", "10000", "20000", "50000", "Custom Amount"]
            },
        ]);
        let withdrawalAmount;
        if (amountAns.amount === "Custom Amount") {
            let customAmountAns = await inquirer.prompt([
                {
                    name: "customAmount",
                    message: "Enter your custom withdrawal amount",
                    type: "number"
                }
            ]);
            withdrawalAmount = customAmountAns.customAmount;
        }
        else {
            withdrawalAmount = parseInt(amountAns.amount, 10);
        }
        if (withdrawalAmount > myBalance) {
            console.log("You don't have enough balance ");
        }
        else {
            myBalance -= withdrawalAmount;
            console.log(`Your remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log("You entered incorrect pincode");
}
