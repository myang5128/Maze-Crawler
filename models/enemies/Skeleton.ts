import Enemies from './Enemy';

export default class Skeleton extends Enemies {
    constructor(level: number) {
        super();
        let [hpStats, angryStats, yippieStats] = this.monsterScaling(level);
        this.enemyName = "Skeleboner"
        this.maxHealth = 5 * hpStats;
        this.curHealth = this.maxHealth;
        this.attack = 3 * angryStats;
        this.defense = 1 * angryStats;
        this.magic = 1;
        this.magicDefense = 1 * angryStats;
        this.mana = 2;
        this.gold = 2 * yippieStats;
        this.experience = 2 * yippieStats;
        this.hitChance = .85;
        this.critChance = .12;
        this.critDamage = 1.20;
        console.log(`This is health: ${this.maxHealth} for ${this.enemyName}`);
        console.log(`This is scaling: ${hpStats} for ${this.enemyName}`);
    }

    monsterScaling(level: number) : number[] {
        let hpStats = level * 0.2 + Math.log(level);
        let angryStats = 1.1 + Math.log(level);
        let yippieStats = level * Math.log(level) + 2.1;

        hpStats = Math.max(hpStats, 1);
        angryStats = Math.max(angryStats, 1);
        yippieStats = Math.max(yippieStats, 1);
        
        return [hpStats, angryStats, yippieStats];
    }
}