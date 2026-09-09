//what is an interface?

//this describes the shape an object must have !


// for example

interface Player {
    name: string;
    level: number;
}


//this means any object using Player must have name, string ; level , number 



// for example


const player: Player = {
    name: "Andrew",
    level: 20
};





//practice questions 


interface Model  {
    name: string;
    accuracy: number;
    trained: boolean;

}



const model: Model = {
    name: "ClassiderV1",
    accuracy: 0.91,
    trained: true

};








