//while loops 


//keep running until condition is true 


//for example


let epoch: number = 1;

while (epoch <= 5) {
    console.log("Epoch:", epoch);

    epoch++
}


//result
Epoch: 1
Epoch: 2
Epoch: 3
Epoch: 4
Epoch: 5





let epoch1: number = 1;


while (epoch1 <= 8) {
    console.log("Training:", epoch1);

    epoch1++;
}


//what is happening here 
//while loop , keeps looping until condition is true !


//when is this used !?
// mainly in cli 

// for example


let running: boolean = true;

while (running) {
    console.log("CLI is running");

    // some condition later sets:
    // running = false;
}


//this will run intil running is false very simialr to break !