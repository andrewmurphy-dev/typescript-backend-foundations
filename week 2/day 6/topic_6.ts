//Literal types inside interfaces / type aliases


//we combine literal types with interfaces 



//remember interface !

interface Model {
    name: string;
    age: number;
}


type ModelStatus = "TRAINING" | "COMPLETE" | "FAILED";

interface ModelRun {
    name: string;
    status: ModelStatus;
}



//Now status is not just any string. It must be one of the union types 



