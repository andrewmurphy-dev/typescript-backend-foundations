//counters 

//basically a tracking varuab

let count:number = 0;
const scores: number[] = [10, 20, 30];

for (const score of scores) {
    count = count + 1;
}


console.log(count)

// 3



//so we are counting with the tracking variable


//but accumilator we are adding the values



let total: number = 0;


for (const score of scores) {
    total = total + score;
}


console.log(total)





