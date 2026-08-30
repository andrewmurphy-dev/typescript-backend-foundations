//what a function is and calling it ! 


//a function is a named block of code that you can run whatever you want ! 


// for example 

function greet(): void {
    console.log("Hello");
}


//to run it 
greet();

//notice greet() outside we use semicolon ;
//greet(): inside we use colon ! 



//greet();
//this calls the function 
//it means run the code inside greet now ! 





//what is void !?

//it means the function prints something , but it does not send a value back 

//so for example 


function getLevel(): number {
    return 10;
}

const level = getLevel() 

console.log(level)


//looking at the structure of functions 


function //name function(): , type {
//.    --> code here }



