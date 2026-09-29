//types arrays + loops 

//a typed array says 

//"this array can only contain this kind of value!"

//number[]  → array of numbers
//string[]  → array of strings
//boolean[] → array of booleans



const scores: number[] = [10, 20, 30];

const names: string[] = ["Andrew", "Bob", "Alice"];

const results: boolean[] = [true, false, true];




//then u can loop though them !


for (const score of scores) {
    console.log(score);

}





const accuracies: number[] = [0.72, 0.91, 0.65, 0.88, 0.95];


for (const accurate of accuracies) {
    if (accurate >= 0.80) {
        console.log("PASS"); 
    } else console.log("FAIL");
}

//you can use return only when its inside a function , which is interesting 

//output 
FAIL
PASS
FAIL
PASS
PASS



const accuracies: number[] = [0.72, 0.91, 0.65, 0.88, 0.95];


function analyzeAccuracies(accuracies: number[]): number {
    let total: number = 0;
    for (const num of accuracies){
        if (num >= 0.80)
            total = total + num
    }

    return total
}


//remmeber return attaches the result to the variable pointing in memory 

const result = analyzeAccuracies(accuracies);

console.log(result);