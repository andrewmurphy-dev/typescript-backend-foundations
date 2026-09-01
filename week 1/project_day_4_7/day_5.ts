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
    }

    if (prediction === false && actualPositive === false) {
        return "TRUE NEGATIVE";
    }

    if (prediction === true && actualPositive === false) {
        return "FALSE POSITIVE";
    }

    if (prediction === false && actualPositive === true) {
        return "FALSE NEGATIVE";
    }
}


function getErrorType(prediction: boolean, actualPositive: boolean): string {
    if (prediction === true && actualPositive === false) {
        return "TYPE I ERROR";
    }

    if (prediction === false && actualPositive === false) {
        return "TYPE II ERROR";
    }

    return "NO ERROR";
}



///issues ! why do i have an error in string type in the function!?

