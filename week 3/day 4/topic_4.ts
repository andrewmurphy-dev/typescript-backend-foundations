//functions


function updateAccuracy(model: Model, newAccuracy: number): Model {
    return {
        ...model,
        accuracy: newAccuracy
    };
}


model
{
    name: "ClassifierV1",
    accuracy: 0.91,
    trained: true
}

...model
→ copy all properties

accuracy: newAccuracy
→ overwrite only accuracy