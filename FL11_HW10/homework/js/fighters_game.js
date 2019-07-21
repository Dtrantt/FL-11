function Fighter(settings) {

    this.getName = () => settings.name;
    this.getDamage = () => settings.damage;
    this.getAgility = () => settings.agility;
    this.getHealth = () => curentHp;

    const maxAgilityRange = 101;
    let curentHp = settings.hp;
    let maxHeroHp = settings.hp;
    let characterLosses = 0;
    let characterWins = 0;

    this.attack = fighter => {
        const chance = Math.floor(Math.random() * maxAgilityRange);

        if(chance >= fighter.getAgility()) {
            fighter.dealDamage(this.getDamage());
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${fighter.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }

    this.dealDamage = dps => {
        curentHp -= dps;
        if(curentHp < 0) {
            curentHp = 0;
        }
    }

    this.heal = point => {
        curentHp += point
        if(curentHp > maxHeroHp) {
            curentHp = maxHeroHp;
        }
    }

    this.addWin = () => ++characterWins;

    this.addLose = () => ++characterLosses;

    this.logCombatHistory = () => `${this.getName()} Wins: ${characterWins} Losses: ${characterLosses}`
}

const battle = (fighter1, fighter2) => {
    if(!fighter1.getHealth()){
        console.log(`${fighter1.getName()} is dead and can't fight`);
        return;
    } else if(!fighter2.getHealth()) {
        console.log(`${fighter2.getName()} is dead and can't fight`);
        return;
    }

    while(fighter1.getHealth() && fighter2.getHealth()) {
       fighter1.attack(fighter2);

       if(!fighter2.getHealth()) {
           break;
       }

       fighter2.attack(fighter1);
    }

    if(fighter1.getHealth()) {
        fighter1.addWin();
        fighter2.addLose();
    } else {
        fighter2.addWin();
        fighter1.addLose();
    }
}



const fighter1 = new Fighter({name: 'Sylvanas', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Arthas', damage: 10, hp: 120, agility: 45});