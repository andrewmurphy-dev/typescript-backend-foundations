//returning typed objects 



// for example 


type Player = {
    name: string;
    level: number;
};

function createPlayer(): Player {
    return {
        name: "Andrew",
        level: 20
    };
}

const player = createPlayer();

console.log(player.name);
console.log(player.level);







//question 




type ModelResult = {
    prediction: string;
    confidence: number;
    correct: boolean;
}

function createModelResult(): ModelResult {
    return {
        prediction: "xcode",
        confidence: 20,
        correct: true
    };
}


const modeResult = createModelResult();


console.log(modeResult.prediction);
console.log(modeResult.confidence);
console.log(modeResult.correct);