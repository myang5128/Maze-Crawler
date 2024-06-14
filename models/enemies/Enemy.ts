export default abstract class PlayerClasses {
    enemyName: string;
    level: number;
    health: number;
    attack: number;
    defense: number;
    magic: number;
    magicDefense: number;
    mana: number;
    gold: number;
    experience: number;
    hitChance: number;
    critChance: number;
    critDamage: number;

    constructor() {
        this.enemyName = "NULL";
        this.level = -1;
        this.health = -1;
        this.attack = -1;
        this.defense = -1;
        this.magic = -1;
        this.magicDefense = -1;
        this.mana = -1;
        this.gold = -1;
        this.experience = -1;
        this.hitChance = -1;
        this.critChance = -1;
        this.critDamage = -1;
    }

    // general getter method
    getStats(): (number | string)[] {
        return [this.enemyName, this.level, this.health, this.attack, this.defense, this.magic, this.magicDefense, this.mana, this.gold, this.level, this.hitChance, this.critChance, this.critDamage];
    }

    // random number gen
    getRandomInt(): (number) {
        return Math.floor(Math.random()) + 1;
      }

    // random damage gen; specialized per monster
    getRandomDamage(max: number): (number) {
        return Math.floor(Math.random()) * max + 1;
    }

    mainAttack(): (number) {
        let attackDamage = this.getRandomDamage(this.attack);
        let extraDamage = 1;

        // check to see if attack hits
        let enemyHit = this.getRandomInt();
        // this misses
        if (enemyHit > this.hitChance) {
            return 0
        }

        // check for crit
        let enemyCrit = this.getRandomInt();
        // this crits
        if (enemyCrit < this.critChance) {
            extraDamage = this.critDamage;
        }
        
        return attackDamage * extraDamage;
    }
}
