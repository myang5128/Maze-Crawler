import Enemies from './Enemy';

export default class Goblin extends Enemies {
    constructor(level: number) {
        super();
        let [hpStats, angryStats, yippieStats] = this.monsterScaling(level);
        this.enemyName = "Gooblin"
        this.maxHealth = 3 * hpStats;
        this.curHealth = this.maxHealth;
        this.attack = 3 * angryStats;
        this.defense = 1 * angryStats;
        this.magic = 1;
        this.magicDefense = 1 * angryStats;
        this.mana = 2;
        this.gold = 3 * yippieStats;
        this.experience = 1 * yippieStats;
        this.hitChance = .90;
        this.critChance = .15;
        this.critDamage = 1.45;
        console.log(`This is health: ${this.maxHealth} for ${this.enemyName}`);
        console.log(`This is scaling: ${hpStats} for ${this.enemyName}`);
    }

    monsterScaling(level: number) : number[] {
        let hpStats = level * 0.3 + Math.log(level);
        let angryStats = .90 + Math.log(level);
        let yippieStats = level * Math.log(level) + 1;
        
        hpStats = Math.max(hpStats, 1);
        angryStats = Math.max(angryStats, 1);
        yippieStats = Math.max(yippieStats, 1);

        return [hpStats, angryStats, yippieStats];
    }
}