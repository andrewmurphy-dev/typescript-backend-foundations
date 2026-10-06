//so here we try to understand .some() 


//this means 

//does at least 1 item in this array match my condition 

//this retruns a boolean 

// scores.ts

export const scores: number[] = [0.91, 0.72, 0.88];


function hasHighScore(scores: number): boolean {
    return scores.some((score) => {
        return score > 0.80;
    });
}







