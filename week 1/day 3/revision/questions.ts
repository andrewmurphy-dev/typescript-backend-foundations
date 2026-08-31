//question 1 



function calculateFinalDamage(baseDamage: number, bonusDamage: number, criticalHit: boolean): number {
    let true_damage  = baseDamage + bonusDamage;

    if (criticalHit === true) {
        true_damage = true_damage * 2;
    }

    return true_damage;


}




const damage = calculateFinalDamage(10, 20, true);

console.log(damage);





//question 2 


function canBuyItem(gold: number, itemPrice: number): boolean {
    if (gold >= itemPrice) {
        return true;
    } else {
        return false;
    }
}



const item = canBuyItem(50, 40);

console.log(item);


//question 3

function getBossState(bossHealth: number, enrageThreshold: number): string {
    if (bossHealth <= enrageThreshold) {
        return "ENRAGED";
    } else {
        return "NORMAL";
    }
    
}





const state = getBossState(200, 250);

console.log(state)





//question 4 



function calculateRemainingHealth(health: number, damagePerHit: number, hitsTaken: number): number {
    let damageTaken = hitsTaken * damagePerHit - health;
    return damageTaken;
}




const remaining = calculateRemainingHealth(1000, 125, 6);

console.log(remaining);


