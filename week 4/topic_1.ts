//null


//what does null mean!?

//this means there is intenstionally no value here !

function findModelAccurrcy(found: boolean, accuracy: number): number | null {
    if (found === true) {
        return accuracy
    } else {
        (found === false)
    }
}

//see the structure is off !

//why do you need to do else { if (found === false)}?

//we are using else for the oppositie condition 


//so we do 


else {
    return null;
}


//or you could just write 


function findModelAccuracy(found: boolean, accuracy: number): number | null {
    if (found) {
        return accuracy;
    }

    return null;
}


