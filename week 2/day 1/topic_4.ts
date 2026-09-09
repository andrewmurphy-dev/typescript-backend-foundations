//type errors 

//now we write code that typescript should reject ! 
//the reason is to understand why the type system helps you ! 




function getName(): string {
    return "Andy";
}

//the string , is called return type annotation 

//getName     → function name
//()          → parameters go here
//: string    → return type annotation
//{ }         → function body



//: string means:

//“This function must return a string.”