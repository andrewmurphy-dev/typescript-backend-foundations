//what is an operational property ???


//usually you write 

interface user {
    name: string;
    age: number;
}


//but you can make it optional now


interface User {
    username: string;
    age?: number;
}


//you can do this with ?


//this makes age optional 


const user1: User = {
    username: "Andrew",
    age: 29
};


// or 

const user2: User = {
    username: "Bob",

};


//both of these are valid