// Day 7
// FINAL PROJECT


function predict(score: number, threshold: number): boolean {
    if (score >= threshold) {
        return true;
    } else {
        return false;
    }
}


function getPredictionLabel(prediction: boolean): string {
    if (prediction === true) {
        return "POSITIVE";
    } else {
        return "NEGATIVE";
    }
}


function isHighConfidence(score: number): boolean {
    const confidence: number = 0.80;

    if (score >= confidence) {
        return true;
    } else {
        return false;
    }
}


function isCorrectPrediction(
    prediction: boolean,
    actualPositive: boolean
): boolean {
    if (prediction === actualPositive) {
        return true;
    } else {
        return false;
    }
}


function getPredictionResult(
    prediction: boolean,
    actualPositive: boolean
): string {
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


function getErrorType(
    prediction: boolean,
    actualPositive: boolean
): string {
    if (prediction === true && actualPositive === false) {
        return "TYPE I ERROR";

    } else if (prediction === false && actualPositive === true) {
        return "TYPE II ERROR";

    } else {
        return "NO ERROR";
    }
}


function calculateAccuracy(
    TP: number,
    TN: number,
    FP: number,
    FN: number
): number {
    const accuracy = ((TP + TN) / (TP + TN + FP + FN)) * 100;

    return accuracy;
}


function calculatePrecision(
    TP: number,
    FP: number
): number {
    const precision = (TP / (TP + FP)) * 100;

    return precision;
}


function calculateRecall(
    TP: number,
    FN: number
): number {
    const recall = (TP / (TP + FN)) * 100;

    return recall;
}


// -----------------------
// INPUT VALUES
// -----------------------

const predictionScore: number = 0.82;
const threshold: number = 0.50;
const actualPositive: boolean = false;

const TP: number = 50;
const TN: number = 35;
const FP: number = 10;
const FN: number = 15;


// -----------------------
// SINGLE PREDICTION
// -----------------------

const predictionGet = predict(
    predictionScore,
    threshold
);

const labelPrediction = getPredictionLabel(
    predictionGet
);

const scoreConfidence = isHighConfidence(
    predictionScore
);

const correctPrediction = isCorrectPrediction(
    predictionGet,
    actualPositive
);

const predictionResult = getPredictionResult(
    predictionGet,
    actualPositive
);

const errorType = getErrorType(
    predictionGet,
    actualPositive
);


// -----------------------
// MODEL METRICS
// -----------------------

const accuracy = calculateAccuracy(
    TP,
    TN,
    FP,
    FN
);

const precision = calculatePrecision(
    TP,
    FP
);

const recall = calculateRecall(
    TP,
    FN
);


// -----------------------
// FINAL REPORT
// -----------------------

console.log("=== MODEL EVALUATION ===");

console.log("Prediction score:", predictionScore);
console.log("Threshold:", threshold);
console.log("Prediction:", labelPrediction);
console.log("Actual positive:", actualPositive);
console.log("Correct prediction:", correctPrediction);
console.log("Result:", predictionResult);
console.log("Error type:", errorType);
console.log("High confidence:", scoreConfidence);

console.log("");

console.log("=== MODEL METRICS ===");

console.log("True positives:", TP);
console.log("True negatives:", TN);
console.log("False positives:", FP);
console.log("False negatives:", FN);

console.log(`Accuracy: ${accuracy}%`);
console.log(`Precision: ${precision}%`);
console.log(`Recall: ${recall}%`);