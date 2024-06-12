import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CharacterSelection from '../components/characterSelection';
import CharacterSelectionStats from '../components/characterSelectionStats';
import CharacterNameSelection from '../components/characterNameSelection';
import CharacterSelectionStartButton from '../components/characterSelectionStartButton';
import Knight from "../models/classes/KnightClass"; // dont know why this is error, it still works
import Ranger from "../models/classes/Ranger";
import Rogue from "../models/classes/Rogue";

export default function App() {
    const raceOptions = ["Human", "Elf", "Dwarf", "Dragonborn", "Gnome", "Orc", "Undead"];
    const classOptions = ["Knight", "Ranger", "Rogue"];
    const genderOptions = ["Male", "Female"];

    const [selectedRace, setSelectedRace] = useState("Human");
    const [selectedClass, setSelectedClass] = useState("Knight");
    const [selectedGender, setSelectedGender] = useState("Male");
    const [selectedName, setSelectedName] = useState("Dorian")
    
    const knightInstance = new Knight();
    const rangerInstance = new Ranger();
    const rogueInstance = new Rogue(); 

    const [stats, setStats] = useState(knightInstance.getStats());
    useEffect(() => {
      const updateStats = (selectedClass) => {
        let newStats;
        switch (selectedClass) {
          case "Knight":
            newStats = knightInstance.getStats();
            break;
          case "Ranger":
            newStats = rangerInstance.getStats();
            break;
          case "Rogue":
            newStats = rogueInstance.getStats();
            break;
          default:
            newStats = knightInstance.getStats();
        }
        setStats(newStats);
      }
      updateStats(selectedClass);
    }, [selectedClass])
    const [className, health, attack, defense, magic, magicDefense, mana, gold, hitChance, critChance, critDamage] = stats;
    return (
      <View className="items-center bg-black p-5 pb-10 pt-20 h-full">
        <View className="flex-1 justify-start p-2">
          <CharacterSelectionStats 
            classType={selectedClass} 
            health={health} 
            defense={defense}
            attack={attack}
            magic={magic}
            magicDefense={magicDefense}
            mana={mana}
            gold={gold}
            hitChance={hitChance}
            critChance={critChance}
            critDamage={critDamage}
            race={selectedRace} 
            gender={selectedGender} 
            name={selectedName}/>
        </View>
        <View className="flex-1 justify-center items-center">
          <CharacterNameSelection selectedValue={selectedName} setSelectedValue={setSelectedName}/>
        </View>
        <View className='flex-1 items-center justify-end'>
          <CharacterSelection valueDicts={raceOptions} selectedValue={selectedRace} setSelectedValue={setSelectedRace}/>
          <CharacterSelection valueDicts={classOptions} selectedValue={selectedClass} setSelectedValue={setSelectedClass}/>
          <CharacterSelection valueDicts={genderOptions} selectedValue={selectedGender} setSelectedValue={setSelectedGender}/>
          <StatusBar style="auto" />
        </View>
        <View className="flex mt-5">
          <CharacterSelectionStartButton />
        </View>
      </View>
    );
}
