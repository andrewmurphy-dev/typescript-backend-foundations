//literal type 

//for example


let status: string;

//this means status can be any string 


// so these are valid 


status = "training";
status = "complete";
status = "banana";


//but literal type lets you say ! 

//“No — this variable can only have this exact value.”


//for example

let status: "training";


//now this works 

status = "training";


//but not 

status = "complete";


//questions


let modelStatus: "TRAINING";

modelStatus = "TRAINING";




