//creating object types 


//this is where type alias become much more powerful 

//instead of 

type score = number;

//you can describe the shape of the entire object ! 


type player = {
    name: string; 
    level: number;
    active: boolean;
};

// to help with confusion , think of this above only contains colon , semi colon at the end 

//then 

const game: player = {
    name: "Andy",
    level: 20,
    active: true
};




//practice questions


type modelPrediction = {
    score:  number;
    label: string;
    highConfidence: boolean;
};

const prediction: modelPrediction = {
    score: 0.87,
    label: "POSITIVE",
    highConfidence: true
};




//remmeber when using the variable and type aliases we use : , 



//another example


type Player = {
    name: string;
    age: number;
};


const playerName: Player = {
    name: "Andrew",
    age: 20,
};




//now lets try this with a function 

type playerStats = {
    name: string;
    level: number;
    class: string;
};


function playerCharacter(character: playerStats): void {
    console.log(character.name);
    console.log(character.level);
    console.log(character.class);

};



const character: playerStats = {
    name: "Andrew",
    level: 25,
    class: "Mage"
};


playerCharacter(character);