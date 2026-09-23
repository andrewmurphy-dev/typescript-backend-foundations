//literal unions ! 


//this is where literal types get more useful 

//instead of 

//let modelState: string;

//you can define a fixed set of allowed values ! 


type ModelState = "TRAINING" | "VALIDATING" | "COMPLETE";


//then 


let modelState: ModelState;



modelState = "TRAINING";

modelState = "VALIDATING";

modelState = "COMPLETE";



//like before 


//modelState = "BROKEN";
//this isnot part of the union 


//questions


//type 


//create a new type called ModelState and only allow these values 

//then u can only reuse that tupe 