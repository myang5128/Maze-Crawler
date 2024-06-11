import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CharacterSelection from '../components/characterSelection';
import CharacterSelectionStats from '../components/characterSelectionStats';
import CharacterNameSelection from '../components/characterNameSelection';
import CharacterSelectionStartButton from '../components/characterSelectionStartButton';

export default function App() {
    const raceOptions = ["Human", "Elf", "Dwarf", "Dragonborn", "Gnome", "Orc", "Undead"];
    const classOptions = ["Knight", "Ranger", "Rogue"]
    const genderOptions = ["Male", "Female"]

    return (
      // classType, health, defense, attack, magic, magicDefense, mana, gold, hitChance, critChance, critDamage, race, gender, name
      <View className="items-center bg-black p-5 pb-10 pt-20 h-full">
        <View className="flex-1 justify-start p-2">
          <CharacterSelectionStats classType="Knight" health="8" defense="4" attack="2" magic="1" magicDefense="3" mana="2" gold="10" hitChance="95%" critChance="10%" critDamage="140%" race="Human" gender="Male" name="Leto"/>
        </View>
        <View className="flex-1 justify-center items-center">
          <CharacterNameSelection />
        </View>
        <View className='flex-1 items-center justify-end'>
          <CharacterSelection name="Race" startingName="Human" valueDicts={raceOptions}/>
          <CharacterSelection name="Class" startingName="Knight" valueDicts={classOptions}/>
          <CharacterSelection name="Gender" startingName="Male" valueDicts={genderOptions}/>
          <StatusBar style="auto" />
        </View>
        <View className="flex mt-5">
          <CharacterSelectionStartButton />
        </View>
      </View>
    );
  }

