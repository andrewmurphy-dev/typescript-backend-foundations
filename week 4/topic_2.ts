//undefined 


//this means there is no value here yet / nothing was found !

//so general structure !

//remeebr the difference !
//null
//→ intentionally no value

//undefined
//→ value is missing / not found / not set




//question 


function findFirsrPassingScore(scores: number[]): number | undefined {

    return scores.find((score) => {
        return score >= 0.80;
    });
}


.find()
→ found something → returns that value
→ found nothing   → returns undefined