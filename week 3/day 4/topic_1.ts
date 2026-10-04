//topic 1 object destructuting 


//say you have 


const model = {
    name: "Andrew",
    accuracy: 0.91,
    trained: true
};



//normally you would do !

console.log(model.name);
console.log(model.accuracy);
console.log(model.trained);



//Destructuring lets you pull those properties into variables


const {name, accuracy, trained} = model;

//must have a semi-colon 

//now we can go 

console.log(name)


console.log(accuracy)


console.log(trained)



//for interface you can do the same 


interface Model {
    names: string;
    accuracyy: number;
    trainedd: boolean;
}
//defines the shape

const modell: Model = {
    names: "Andrew",
    accuracyy: 200,
    trainedd: true
};
//actual object

const { names, accuracyy, trainedd } = modell;
//destructures the object

console.log(names)



// you can also do functions 


function printModel({ names, accuracyy}: Model): void {
    console.log(names);
    console.log(accuracyy);
}


