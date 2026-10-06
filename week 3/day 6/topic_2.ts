//topic 2 .every() 

//this means 

//do all items in this array match the condition 


//returns a boolean 

//lets try to import scores here 


import { scores } from "./topic_1";

//we dont use .ts


function everyBoolean(scores: number[]): boolean {
    return scores.every((score) => {
        return score > 0.77;
    });
}


const result = everyBoolean(scores)


console.log(result)




