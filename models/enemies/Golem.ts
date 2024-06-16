import Enemies from './Enemy';

export default class Golem extends Enemies {
    constructor(level: number) {
        super();
        let [hpStats, angryStats, yippieStats] = this.monsterScaling(level);
        this.enemyName = "Stone Cold Steve Golem"
        this.maxHealth = 10 * hpStats;
        this.curHealth = this.maxHealth;
        this.attack = 2 * angryStats;
        this.defense = 3 * angryStats;
        this.magic = 1;
        this.magicDefense = 1 * angryStats;
        this.mana = 2;
        this.gold = 2 * yippieStats;
        this.experience = 3 * yippieStats;
        this.hitChance = .80;
        this.critChance = .05;
        this.critDamage = 1.30;
        console.log(`This is health: ${this.maxHealth} for ${this.enemyName}`);
        console.log(`This is scaling: ${hpStats} for ${this.enemyName}`);
    }

    monsterScaling(level: number) : number[] {
        let hpStats = level * 0.3 + Math.log(level);
        let angryStats = 1 + Math.log(level);
        let yippieStats = level * Math.log(level) + 2;

        hpStats = Math.max(hpStats, 1);
        angryStats = Math.max(angryStats, 1);
        yippieStats = Math.max(yippieStats, 1);

        return [hpStats, angryStats, yippieStats];
    }
}