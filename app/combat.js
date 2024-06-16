import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState, useEffect } from 'react';
import CombatEnemyScreen from '../components/combatPage/combatEnemyScreen';
import CombatButtons from '../components/combatPage/combatButtons';
import Goblin from "../models/enemies/Goblin";
import Golem from "../models/enemies/Golem";
import Skeleton from "../models/enemies/Skeleton";

export default function App() {

  const enemyOptions = ["Goblin", "Golem", "Skeleton"];
  const [selectedEnemy, setSelectedEnemy] = useState("Goblin");
  const [stats, setStats] = useState(new Goblin(1).getStats());

  useEffect(() => {
    const enemyType = enemyOptions[Math.floor(Math.random() * enemyOptions.length)];
    setSelectedEnemy(enemyType);
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    const getEnemyStats = (selectedEnemy) => {
        let enemyInstance;
        switch (selectedEnemy) {
            case "Goblin":
                enemyInstance = new Goblin(1);
                break;
            case "Golem":
                enemyInstance = new Golem(1);
                break;
            case "Skeleton":
                enemyInstance = new Skeleton(1);
                break;
            default:
                enemyInstance = new Goblin(1);
        }
        setStats(enemyInstance.getStats());
    }
    getEnemyStats(selectedEnemy);
  }, [selectedEnemy]); // Runs whenever selectedEnemy changes

  const [enemyName, maxHealth, curHealth, attack, defense, magic, magicDefense, mana, gold, experience, hitChance, critChance, critDamage] = stats;

  return (
    <View className="items-center bg-black p-5 pb-10 pt-20 h-full">
        <View className="flex-1">
          <CombatEnemyScreen 
              enemyName={enemyName}
              curHealth={curHealth}
              maxHealth={maxHealth}
          />
        </View>
        <View className="flex-1">
          <CombatButtons />
        </View>
        <StatusBar style="auto" />
    </View>
  );
}
