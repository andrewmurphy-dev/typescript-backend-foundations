//literal types in function parameters 



type ModelState = "TRAINING" | "VALIDATING" | "COMPLETE";

function setModelState(state: ModelState): void {
    console.log("Model state:", state);
}



//these work 

setModelState("TRAINING");
setModelState("VALIDATING");
setModelState("COMPLETE");


//this does not work 

setModelState("BROKEN");





//question 



type PredictLabel = "POSITIVE" | "NEGATIVE" | "UNCERTAIN";


function printPrediction(label: PredictLabel): void {
    console.log(label)
}




printPrediction("POSITIVE")
printPrediction("POSITIVE")
printPrediction("UNCERTAIN")
printPrediction("ERROR")

//please rememebr you should always have semi-colon at the end andrew



