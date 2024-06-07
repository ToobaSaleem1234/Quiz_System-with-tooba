#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log("=".repeat(90))
console.log(chalk.bold.bgBlueBright("\t Welcome-to-code-with-tooba\t"))
console.log("=".repeat(90))

let quiz:
    {
        question_1:string,
        question_2:string,
        question_3:string,
        question_4:string,
        question_5:string
    }=await inquirer.prompt([
        {
            name:"question_1",
            type:"list",
            message:"What is an interface in TypeScript?",
            choices:["a) A class that can be instantiated",
                     "b) A type alias for a primitive type",
                     "c) A blueprint for creating objects","d) A function that returns a value"
                    ]
        },
        {
            name:"question_2",
            type:"list",
            message:"How do you declare a variable with the type string in TypeScript?",
            choices:["a) let myVariable: string = 'hello'",
                     "b) let myVariable: String = 'hello'","c) let myVariable = 'hello'",
                     "d) let myVariable: str= 'hello'"]
        },
        {
            name:"question_3",
            type:"list",
            message:"What is the type of the variable x in let x = 5?",
            choices:["a) number",
                     "b) any",
                     "c) string",
                     "d) unknown"
                    ]
        },
        {
            name:"question_4",
            type:"list",
            message:"Which keyword is used to define a class in TypeScript?",
            choices:[
                      "a) interface",
                      "b) class",
                      "c) type",
                      "d) enum"
                ]
        },{
            name:"question_5",
            type:"list",
            message:"What is the default type of a variable in TypeScript if no type is specified?",
            choices:["a) string",
                     "b) unknown",
                     "c) any",
                     "d) null"
                    ]
        }

    ])
let score:number=0

switch(quiz.question_1){
    case "c) A blueprint for creating objects":
        console.log("1.Correct");
        ++score; 
        break;
        default:
            console.log("1.Incorrect");
}

switch(quiz.question_2){
    case "a) let myVariable: string = 'hello'":
        console.log("2.Correct")
        ++score 
        break;
        default:
            console.log("2.Incorrect")
}

switch(quiz.question_3){
    case "a) number":
        console.log("3.Correct")
        ++score 
        break;
        default:
            console.log("3.Incorrect")
}

switch(quiz.question_4){
    case "b) class":
        console.log("4.Correct")
        ++score 
        break;
        default:
            console.log("4.Incorrect")
}

switch(quiz.question_5){
    case "c) any":
        console.log("5.Correct")
        ++score 
        break;
        default:
            console.log("5.Incorrect")
}

console.log(`SCORE: ${score}/5`)

console.log("Congratulations! you completed your quiz")