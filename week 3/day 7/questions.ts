//revision questions 


//question 1 
function calculateAccuracy(accuracies: number[]): number {
    let total: number = 0;
    for (const num of accuracies) {
        total = total + num;
    }

    return total/accuracies.length;
}



const accuracies: number[] = [0.80, 0.90, 0.70, 1.00];
const result = calculateAccuracy(accuracies);
console.log(result)





//question 2 


function countValidPassingScores(scores: number[]): number {
    let total: number = 0;
    for (const score of scores) {
        if (score < 0 || score > 1)
            continue

        if (score >= 0.80) {
            total = total + 1  
        }    
    } 
    
    return total
}




const scores: number[] = [0.91, -0.2, 0.75, 1.4, 0.88, 0.95];
const result1 = countValidPassingScores(scores);
console.log(result1)


//logicaklly when looping through a number we cant have below a number and above a number , we need OR
//to use OR , we use || 




//question 3


function findFirstCriticalLoss(losses: number[]): number {
    let result:number = 0;
    for (const loss of losses) {
        if (loss < 0.40) {
            result = loss
            break
        }
    }

    return result 

}


const losses: number[] = [0.91, -0.2, 0.75, 1.4, 0.88, 0.95];
const result2 = findFirstCriticalLoss(losses);
console.log(result2)





//question 4 

function countCriticalLosses(losses: number[]): number {
    let total: number = 0;
    for (const loss of losses) {
        if (loss < 0.40) {
            total = total + 1
        }
    }

    return total
}




//question 5 

function convertLossesToPercent(lossess: number[]): number[] {
    return losses.map((loss) => {
        return loss * 100;
    });
}



const lossess: number[] = [0.82, 0.35, 0.61, 0.24, 0.48]
const result5 = convertLossesToPercent(lossess);
console.log(result5)


//question 6 


function getCriticalLosses(loss: number[]): number[] {
    return loss.filter((los) => {
        return los < 0.40;
    });
}




const loss: number[] = [0.91, 0.72, 0.55, 0.38, 0.21];
const result8 = getCriticalLosses(loss)
console.log(result8)


//question 7 

function findFirstCriticalLoss(losses: number[]): number | undefined {
    return losses.find((loss) => {
        return loss < 0.40;
    });
}



const losses: number[] = [0.91, 0.72, 0.55, 0.38, 0.21];
const result10 = findFirstCriticalLoss(losses)
console.log(result10)


//question 8 


function checkModelScores(scores: number[]): boolean {
    return scores.every((score) => {
        if (score >= 0 && score <= 1) {
            return true
        } else {
            return false;
        }      
    }); 


    }




//so every() auto returns false if its not true !





//question 9 


interface ModelResult {
    name: string;
    accuracy: number;
    passed: boolean;
}


function printModelResult(result: ModelResult): void {
    const {name, accuracy, passed} = result;
    console.log(name)
    console.log(accuracy)
    console.log(passed)
}


const result: ModelResult = {
    name: "ClassifierV1",
    accuracy: 0.91,
    passed: true
};

const Result14 = printModelResult(result)

console.log(Result14)


// this part is wrong , the last part cause of void andrew !
//so all u need is 

printModelResult(result)