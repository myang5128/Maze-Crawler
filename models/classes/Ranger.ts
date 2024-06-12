import Classes from './PlayerClasses';

export default class Ranger extends Classes{
    constructor() {
        super()
        this.className = "Ranger";
        this.health = 6;
        this.attack = 3;
        this.defense = 3;
        this.magic = 1;
        this.magicDefense = 3;
        this.mana = 2;
        this.gold = 10;
        this.hitChance = .90;
        this.critChance = .10;
        this.critDamage = 1.50;
    }
}