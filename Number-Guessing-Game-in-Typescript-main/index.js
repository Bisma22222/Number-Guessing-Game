import inquirer from 'inquirer';
let systemgenertedNo = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "Write your guess b/w 1 to 10:"
    }
]);
const { userguess } = answer;
console.log(userguess, "userguess", systemgenertedNo, "sYs");
if (userguess === systemgenertedNo) {
    console.log("Yay!! your answer is correct\n You win");
}
else {
    console.log("Better luck next time");
}
if (userguess < systemgenertedNo) {
    console.log("Hint: Number is higher");
}
else {
    console.log("Hint: Number is lower");
}
