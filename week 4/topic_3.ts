//handling missing values inside functions 


//so this is mainly validation for missing value , when you call the function !


//for example


function printAccuracy(accuracy: number | null): void {
    if (accuracy === null) {
        console.log("No accuracy available");
        return;
    }

    console.log(accuracy);
}