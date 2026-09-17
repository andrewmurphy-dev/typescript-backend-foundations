//here we do hard questions 


//question 1 

let modelId: string | number;

modelId = 101;

console.log(modelId)

modelId = "model-101";

console.log(modelId)


// question 2 

function printPrediction(modelI: number): string | boolean  {
    if (modelI >= 0.88) {
        return "POSITIVE";
    } else {
        return true;
    }
}


console.log(printPrediction(1.90));
console.log(printPrediction(2.99));




//question 3 

function getModelId(useNumericId: boolean): string| number {
    if (useNumericId === true) {
        return 500;
    } else {
        return "model-500";
    }
}







//question 4 

function getModelStatus(accuracy: number): string | boolean {
    if (accuracy >= 0.80) {
        return "PASSED";
    } else {
        return false;
    }

}


console.log(getModelStatus(0.99));
console.log(getModelStatus(0.50));



//question 5 


interface PredictionResult {
    id: string | number;
    prediction: string | boolean;
    confidence: number;
}


const result: PredictionResult = {
    id: 10,
    prediction: true,
    confidence: 200
}

