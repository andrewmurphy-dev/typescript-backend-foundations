//spread operator 

//the spread operator lets you copy values out of an array or object into a new one 

//its pretty easy !


const scores: number[] = [10, 20, 30];

const newScores: number[] = [...scores, 40];

console.log(newScores);


//result 

[10, 20, 30, 40]


//so ur moving everything from scores to new scores 


//another example 

const model = {
    name: "ClassifierV1",
    accuracy: 0.91
};

const updatedModel = {
    ...model,
    accuracy: 0.95
};

console.log(updatedModel);



{
    name: "ClassifierV1",
    accuracy: 0.95
}



//confusion 

// what does reaignment mean!?

//giving an existing variable a new value 


// in spread-operator conext , this means replacing the value of the same variable with an new array or object 


//for example 


let scores = [1, 2, 3];

scores = [...scores, 4];

//That needs let because scores is being reassigned.

//but this
//called new asignment to a new variable

const scores = [1, 2, 3];

const updatedScores = [...scores, 4];


scores
→ existing variable
→ holds [1, 2, 3]

updatedScores
→ brand new variable
→ gets assigned a new array [1, 2, 3, 4]





