//what is union type?

//this value is aloud to be more than one type! 


//for example

let id: string | number;

//this is can be a number or a string , both are valud 

//so in type script the symbol / means or 



//questions 



//question 1
let userId: number | string = 42;


console.log(userId);


userId = "user-42";

console.log(userId);




//question 2

function printId(id: string | number): void {
    console.log(id);
}



printId(42);
printId("user-42");






//question 3 
let modelStatus: string | boolean;

modelStatus = "training";

console.log(modelStatus);

modelStatus = true;

console.log(modelStatus)


//question 4 


function getPrediction(score: number): string | boolean {
    if (score >= 0.5) {
        return "POSITIVE";
    } else {
        return false;
    }
}


console.log(getPrediction(0.8));
console.log(getPrediction(0.3));



//question 5 

interface ModelResult {
    modelId: string | number;
    prediction: string | boolean;
    confidence: number;
}


const result1: ModelResult = {
    modelId: 101,
    prediction: "POSITIVE",
    confidence: 0.91
};

const result2: ModelResult = {
    modelId: "model-v2",
    prediction: false,
    confidence: 0.42
};