//rquired proporties 


//by default , proporties inside an interface is required 


interface Model {
    name: string;
    accuracy: number;
    trained: boolean;
}


//for example every model must have all 3 
//name
//accuracy
//trained



//questions 

interface Evaluation {
    accuracy: number;
    precision: number;
    recall: number;
}




const result: Evaluation = {
    accuracy: 0.85,
    precision: 0.80,
    recall: 0.90

};


console.log(result)


//if you wanted just one value 


console.log(result.accuracy)

