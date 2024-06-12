export default abstract class PlayerClasses {
    className: string;
    health: number;
    attack: number;
    defense: number;
    magic: number;
    magicDefense: number;
    mana: number;
    gold: number;
    hitChance: number;
    critChance: number;
    critDamage: number;

    constructor() {
        this.className = "NULL";
        this.health = -1;
        this.attack = -1;
        this.defense = -1;
        this.magic = -1;
        this.magicDefense = -1;
        this.mana = -1;
        this.gold = -1;
        this.hitChance = -1;
        this.critChance = -1;
        this.critDamage = -1;
    }

    // general getter method
    getStats(): (number | string)[] {
        return [this.className, this.health, this.attack, this.defense, this.magic, this.magicDefense, this.mana, this.gold, this.hitChance, this.critChance, this.critDamage];
    }
}
