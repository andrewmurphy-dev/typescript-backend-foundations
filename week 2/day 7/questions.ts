//questions

//question 1 

type ModelId = string | number;

let modelId: ModelId = 500;


console.log(modelId)


modelId = "classifier-500"


console.log(modelId)




//question 2 



type ModelResult = {
    name: string;
    accuracy: number;
    passed: boolean;

};


let model: ModelResult = {
    name: "Amdrew",
    accuracy: 200,
    passed: true
};


console.log(model)


//use const here since you are not reassigning ! 




//question 3 


interface TrainingRun  {
    modelName: string;
    epochs: number;
    completed: boolean;

};

//when doing interface u do not use = 



//remember 


//type uses = 
//interface doesnt !!



const Training: TrainingRun = {
    modelName: "Andrew",
    epochs: 200,
    completed: true
};


console.log(Training)




//style point , variables usually use lower case ! 

//question 4 

interface Experiment {
    name : string;
    accuracy: number;
    notes?: string;
    
};

//optional property !

//notes | string 


const experiment1: Experiment =  {
    name: "ModelA",
    accuracy: 0.91,
    notes: "First Experiment"
};


const experiment2: Experiment = {
    name: "ModelB",
    accuracy: 0.87
};





console.log(experiment1)
console.log(experiment2)



//rememebr optional proporties , we use ?




//question 5


function printModelId(id: string | number): void {
    console.log(id)
};


printModelId(101);

printModelId("model-101")




//question 6 

function getPrediction(score: number): string | boolean {
    if (score >= 0.5) {
        return "POSITIVE"
    } return false;
};


console.log(getPrediction(0.8));
console.log(getPrediction(0.3));



//question 7 

type ModelStatus = "TRAINING" | "VALIDATING" | "COMPLETE";


let status: ModelStatus = "TRAINING";


console.log(status)


status = "VALIDATING";



console.log(status)



status = "COMPLETE";

console.log(status)



//question 8 

type PredictionLabel = "POSITIVE" | "NEGATIVE" | "UNCERTAIN";



function printPrediction(label: PredictionLabel): void {
    console.log(label)
};


printPrediction("POSITIVE");
printPrediction("NEGATIVE");
printPrediction("UNCERTAIN");


//question 9 


type RunStatus = "QUEUED" | "RUNNING" | "COMPLETE";



interface ModelRun {
    id: string | number;
    status: RunStatus;
    accuracy?: number;
};

const run1: ModelRun = {
    id: 101,
    status: "RUNNING",

};


const run2: ModelRun = {
    id: "model-202",
    status: "COMPLETE",
    accuracy: 0.93

};


console.log(run1);
console.log(run2);

