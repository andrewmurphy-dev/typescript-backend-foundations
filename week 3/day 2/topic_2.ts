//break and continue 


//break
//stop the loop immdiately !



//for example

let epoch: number = 1;

while (epoch <= 10) {
    if (epoch === 5) {
        break;
    }

    console.log(epoch);
    epoch++;
}


//output

1
2
3
4





//continue 


//skip this iteration 
//move to the next one !


for (let epoch: number = 1; epoch <= 5; epoch++) {
    if (epoch === 3) {
        continue;
    }

    console.log(epoch);
}



//coding question 



for (let num:number = 1; num <= 10; epoch++) {
    if (num == 5) {
        continue;
    }

    if (num == 9) {
        break;
    }

    console.log(num);
}




//remember 
//for loop has 3 seperate parts !


for (
  let i = 0;   // starting point
  i < 10;      // condition
  i++          // update
)


