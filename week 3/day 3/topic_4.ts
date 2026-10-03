//so with what we learned , map, filter, find , how would you think we would make this into a function !???

// we just feed it data thats all

// we can call it and feed it data ! 


function understandingMap(scores: number[]): number[] {
    return scores.filter((score) => {
        return score >= 0.05;

    });
}



//so lets break this down , we have a function name 
//we have a variable called scores: which is a list (number[])
//and we return number[]



//then we call it 

//how!?


const scores: number[] = [0,78, 0,88, 0,33] // -- data 

const passingScores = understandingMap(scores); // you call it 

