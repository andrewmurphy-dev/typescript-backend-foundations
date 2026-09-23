//string literal types ! 

let status: string;

// you can only allow string specfic things 


let status: "TRAINING" | "COMPLETE";


//now these are valid 


//but this is not 

status = "ANDREW";




let modelState: "TRAINING" | "VALIDATING" | "COMPLETE";


modelState = "TRAINING";


console.log(modelState)



modelState = "VALIDATING";

console.log(modelState)



modelState = "COMPLETE";

console.log(modelState)