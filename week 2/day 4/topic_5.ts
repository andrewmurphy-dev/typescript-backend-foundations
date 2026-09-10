//Optional properties in type aliases

//for example 

type Model = {
    name: string;
    accuracy: number;
    notes?: string;
};


//name      → required
//accuracy  → required
//notes     → optional


const model1: Model = {
    name: "ClassifierA",
    accuracy: 0.91
};


const model2: Model = {
    name: "ClassifierB",
    accuracy: 0.94,
    notes: "Best run so far"
};