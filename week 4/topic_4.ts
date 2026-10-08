//functions that may return a value or nothing !!!!


//for example 


function getModelScore(found: boolean): number | null {
    if (found) {
        return 0.91;
    }

    return null;
}


//or 



function findScore(scores: number[]): number | undefined {
    return scores.find((score) => {
        return score >= 0.80;
    });
}



