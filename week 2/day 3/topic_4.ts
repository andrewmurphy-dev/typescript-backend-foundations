//using interfaces in functions ! 


//for example 


interface Evaluation {
    accuracy: number;
    precision: number;
    recall: number;
}

function printEvaluation(result: Evaluation): void {
    console.log(result.accuracy);
    console.log(result.precision);
    console.log(result.recall);
}


