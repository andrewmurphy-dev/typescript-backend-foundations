//day 6 

//today we learn 

//accuracy 
//precision
//recall



function calculateAccuracy(TP: number, TN: number, FP: number, FN: number): number {
    const Accuracy = (TP + TN) / (TP + TN + FP + FN) * 100;
    return Accuracy;
}





function calculatePrecision(TP: number, FP: number): number {
        const Precision = TP / (TP + FP) * 100;
        return Precision;
    }

function calculateRecall(TP: number, FN: number): number {
        const Recall = TP / (TP + FN) * 100;
        return Recall;
    }

const TP: number = 50;
const TN: number = 35;
const FP: number = 10;
const FN: number = 15;

const accuracy = calculateAccuracy(TP, TN, FP, FN);
const precision = calculatePrecision(TP, FP);
const recall = calculateRecall(TP, FN);

console.log(`Accuracy: ${accuracy}%`);
console.log(`Precision: ${precision}%`);
console.log(`Recall: ${recall}%`);


