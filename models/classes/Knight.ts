// Knight.js
import Classes from './PlayerClasses';

export default class Knight extends Classes {
    constructor() {
        super();
        this.className = "Knight";
        this.health = 8;
        this.attack = 2;
        this.defense = 3;
        this.magic = 1;
        this.magicDefense = 3;
        this.mana = 2;
        this.gold = 10;
        this.hitChance = 0.95;
        this.critChance = .10;
        this.critDamage = 1.40;
    }
}
