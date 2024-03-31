#! /usr/bin/env node
import inquirer from "inquirer";
let todo :any[]= [];
let condition = true;

let condition2 = true;

while (condition) {
    

let worktodos = await inquirer.prompt
(
    [
{

    name : "tasks",
    type : "input",
    message: " what do you want to add"
    
},

{    name: "addmore",
     type: "confirm",
    message: "do you want to add more",
     default: false
},

         
    ]
);

todo.push(worktodos.tasks);
condition=worktodos.addmore;
console.log(todo)}

while(condition2){ 

  
let remove= await inquirer.prompt(  
  { name: "remove",
    type: "input",
   message: "what do you want to remove" });

   
let itemToRemove = remove.remove // Item to remove
todo = todo.filter(item => item !== itemToRemove);

console.log(todo)


let taskPop = await inquirer.prompt(

    {     name : "subtract",
          type : "confirm",
        message: "do you want to remove any tasks.",
        default: false })
    

condition2=taskPop.subtract;}
   