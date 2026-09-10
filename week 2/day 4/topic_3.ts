//optional proporties in interfaces 

//We’ve already been using them, so this topic is mainly about what happens when you actually access an optional property.


interface Experiment {
    name: string;
    accuracy: number;
    notes?: string;
}


const experiment: Experiment = {
    name: "Model A",
    accuracy: 0.91
};


//then u go

console.log(experiment.notes);

//you will get 


//undefined 