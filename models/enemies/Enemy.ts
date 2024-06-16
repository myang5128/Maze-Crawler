export default abstract class PlayerClasses {
    enemyName: string;
    maxHealth: number;
    curHealth: number;
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
        this.maxHealth = -1;
        this.curHealth = -1;
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

    abstract monsterScaling(level: number) : number[]

    // general getter method
    getStats(): (number | string)[] {
        return [this.enemyName, this.maxHealth, this.curHealth, this.attack, this.defense, this.magic, this.magicDefense, this.mana, this.gold, this.experience, this.hitChance, this.critChance, this.critDamage];
    }

    // random number gen
    getRandomInt(max: number): number {
        return Math.floor(Math.random() * max) + 1;
    }

    mainAttack(): (number) {
        let attackDamage = this.getRandomInt(this.attack);
        let extraDamage = 1;

        // check to see if attack hits
        let enemyHit = this.getRandomInt(1);
        // this misses
        if (enemyHit > this.hitChance) {
            return 0
        }

        // check for crit
        let enemyCrit = this.getRandomInt(1);
        // this crits
        if (enemyCrit < this.critChance) {
            extraDamage = this.critDamage;
        }
        
        return attackDamage * extraDamage;
    }

    takeDamage(damage: number, type: string): void {
        let defenseType : number;
        switch (type) {
            case "MAGIC":
                defenseType = this.magicDefense;
                break;
            default:
                defenseType = this.defense;
        }
        let totalDamage = damage - defenseType;
        if (totalDamage < 0) {
            totalDamage = 1;
        }
        this.curHealth -= totalDamage;
    }
}
