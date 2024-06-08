import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CharacterSelection from '../components/characterSelection';

export default function App() {
    const raceOptions = ["Human", "Elf", "Dwarf", "Dragonborn", "Gnome", "Orc", "Undead"];
    const classOptions = ["Knight", "Ranger", "Rogue"]
    const genderOptions = ["Male", "Female"]

    return (
      <View className="flex-1 items-center justify-end bg-black pb-20">
        <CharacterSelection name="Race" startingName="Human" valueDicts={raceOptions}/>
        <CharacterSelection name="Class" startingName="Knight" valueDicts={classOptions}/>
        <CharacterSelection name="Gender" startingName="Male" valueDicts={genderOptions}/>
        <StatusBar style="auto" />
      </View>
    );
  }

