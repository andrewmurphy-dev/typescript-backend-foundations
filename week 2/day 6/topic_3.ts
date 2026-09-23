//number literal types 

//same as string literal types !


//but just with numbers 

let retryCount: number;


retryCount = 1;
retryCount = 50;
retryCount = 999;



let retryCount: 1 | 2 | 3;


retryCount = 1;
retryCount = 2;
retryCount = 3;


//and this fails 


retryCount = 4;



let modelState: 1 | 2 | 3;

modelState = 1;

console.log(modelState)

