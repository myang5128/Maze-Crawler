export default class Player {

    // player constructor
    constructor(name, classType, level, maxHealth, curHealth, attack, defense, magic, magicDefense, mana, gold, experience, hitChance) {
        this.name = name;
        this.classType = classType;
        this.level = level;
        this.maxHealth = maxHealth;
        this.curHealth = curHealth;
        this.attack = attack;
        this.defense = defense;
        this.magic = magic;
        this.magicDefense = magicDefense;
        this.mana = mana;
        this.gold = gold;
        this.experience = experience;
        this.hitChance = hitChance;
    }

    // getter and setter methods
    updateMaxHealth(maxHealth) {
        this.maxHealth = maxHealth;
    }
    getMaxHealth() {
        return this.maxHealth;
    }
    
    updateCurHealth(curHealth) {
        this.curHealth = curHealth;
    }
    getCurHealth() {
        return this.curHealth;
    }

    updateAttack(attack) {
        this.attack = attack;
    }
    getAttack() {
        return this.attack;
    }
    
    updateDefense(defense) {
        this.defense = defense;
    }
    getDefense() {
        return this.defense;
    }

    updateMagic(magic) {
        this.magic = magic;
    }
    getMagic() {
        return this.magic;
    }

    updateMagicDefense(magicDefense) {
        this.magicDefense = magicDefense;
    }
    getMagicDefense() {
        return this.magicDefense;
    }

    updateMana(mana) {
        this.curHealth = mana;
    }
    getMana() {
        return this.mana;
    }

    updateGold(gold) {
        this.gold = gold;
    }
    getGold() {
        return this.gold;
    }
    
    updateExperience(experience) {
        this.experience = experience;
    }
    getExperience() {
        return this.experience;
    }

    updateHitChance(hitChance) {
        this.hitChance = hitChance;
    }
    getHitChance() {
        return this.hitChance;
    }

}