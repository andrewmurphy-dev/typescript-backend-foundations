// chaining array methods 

function getPassingPercentages(scores: number[]): number[] {
    return scores
        .filter((score) => {
            return score >= 0.80;
        })
        .map((score) => {
            return score * 100;
        });
}



// notice we dont use scores.filer, then scores.map twice 

