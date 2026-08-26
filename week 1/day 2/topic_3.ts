//if statement



// for example 


const playerHealth: number = 20;

if (playerHealth < 30) {
    console.log("Low health!");
}


//question 1 


const playerLevel: number = 12;
const requiredLevel: number = 10;


if (playerLevel >= requiredLevel) {
    console.log("Level requirement met");
}


//question 2 (Hard)

const bossHealth: number = 950;
const damagePerHit: number = 125;
const hitsLanded: number = 6;
const enrageThreshold: number = 250;



const remainingHealth = bossHealth - damagePerHit * hitsLanded;

console.log("Boss Health: ", remainingHealth);


if (remainingHealth <= enrageThreshold) {
    console.log("Boss enraged!");
}




