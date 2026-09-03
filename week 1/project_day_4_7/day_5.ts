//day 5 


function isCorrectPrediction(prediction: boolean, actualPositive: boolean): boolean {

    if(prediction === actualPositive) {
        return true;

    } else {
        return false;
    }
}



function getPredictionResult(prediction: boolean, actualPositive: boolean): string {
    if (prediction === true && actualPositive === true) {
        return "TRUE POSITIVE";
    } else if (prediction === false && actualPositive === false) {
        return "TRUE NEGATIVE";

    } else if (prediction === true && actualPositive === false) {
        return "FALSE POSITIVE";

    } else {
        return "FALSE NEGATIVE";
    }
}


function getErrorType(prediction: boolean, actualPositive: boolean): string {
    if (prediction === true && actualPositive === false) {
        return "TYPE I ERROR";

    } else if(prediction === false && actualPositive === true) {
        return "TYPE II ERROR";

    } else {
        return "NO ERROR";
    }
}



const prediction = true;
const actualPositive = false;

const predictionResult = getPredictionResult(prediction, actualPositive);
const errorType = getErrorType(prediction, actualPositive);

console.log(`Prediction: ${predictionResult}`);
console.log(`Error Type: ${errorType}`);
