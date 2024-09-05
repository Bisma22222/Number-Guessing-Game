import inquirer from 'inquirer';
type anstype ={
    userguess :number
}
let systemgeneratedNo = Math.floor(Math.random()*10);
const answer = await inquirer.prompt([

    {
        type : "number",
        name : "userguess",
        message: "Write your guess b/w 1 to 10:"
    }
])
const {userguess}:number = answer;
console.log(userguess,"userguess" , systemgeneratedNo ,"sYs")
if(userguess === systemgenertedNo){
    console.log("Yay!! your answer is correct\n You win")
}
else{
    console.log("Better luck next time")
}
    if(userguess<systemgeneratedNo){
        console.log("Hint: Number is higher")
    }
    else{
        console.log("Hint: Number is lower")

    }
