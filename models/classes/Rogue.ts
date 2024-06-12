import Classes from './PlayerClasses';

export default class Rogue extends Classes {
    constructor() {
        super()
        this.className = "Rogue";
        this.health = 5;
        this.attack = 4;
        this.defense = 2;
        this.magic = 1;
        this.magicDefense = 1;
        this.mana = 1;
        this.gold = 15;
        this.hitChance = .97;
        this.critChance = .18;
        this.critDamage = 1.55;
    }
}