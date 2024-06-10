import React from 'react';
import { Text, View } from 'react-native';

const CharacterSelectionStats = ({ classType, health, defense, attack, magic, magicDefense, mana, gold, 
  hitChance, critChance, critDamage, race, gender, name
}) => {
  return (
    <View className="justify-center w-80">
      <View className="items-center mb-5">
        <Text className="font-mainfont text-fwhite text-5xl">{name} - {classType}</Text>
        <Text className="font-mainfont text-fwhite text-3xl">{gender} {race}</Text>
      </View>
      <View className="flex-row justify-between">
        <View className="items-start">
          <Text className="font-mainfont text-fwhite text-xl">Health: {health}</Text>
          <Text className="font-mainfont text-fwhite text-xl">Armor: {defense}</Text>
          <Text className="font-mainfont text-fwhite text-xl">Mana: {mana}</Text>
          <Text className="font-mainfont text-fwhite text-xl">Magic Armor: {magicDefense}</Text>
          <Text className="font-mainfont text-fwhite text-xl">Gold: {gold}</Text>
        </View>
        <View className="items-end">
          <Text className="font-mainfont text-fwhite text-xl">Attack: {attack}</Text>
          <Text className="font-mainfont text-fwhite text-xl">Magic: {magic}</Text>
          <Text className="font-mainfont text-fwhite text-xl">Hit Chance: {hitChance}</Text>
          <Text className="font-mainfont text-fwhite text-xl">Critical Chance: {critChance}</Text>
          <Text className="font-mainfont text-fwhite text-xl">Critical Damage: {critDamage}</Text>
        </View>
      </View>
        
    </View>
  )
}

export default CharacterSelectionStats
