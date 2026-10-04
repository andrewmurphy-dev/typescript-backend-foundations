//array destrcuturing 

//same idea with object but arrays 

const scores: number[] = [0.91, 0.82, 0.77]


const first = scores[0];
const second = scores[1];
const third = scores[2];
//old way above 



//below u can just set them 
const [first, second, third] = scores;

console.log(first);
