// combine everything 


function countHighScores(scores: number[]): number {
    let count: number = 0;

    for (const score of scores) {
        if (score >= 80) {
            count = count + 1;
        }
    }

    return count;
}







//below you call the function 

const scores: number[] = [72, 91, 84, 60, 95];


const result = countHighScores(scores);

console.log(result)
