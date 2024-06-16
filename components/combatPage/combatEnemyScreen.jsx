import React from 'react';
import { Text, View } from 'react-native';

const CombatEnemyScreen = ({ enemyName, curHealth, maxHealth
}) => {
  return (
    <View className="justify-center bg-black">
      <View className="items-center mb-5">
        <Text className="font-mainfont text-fwhite text-4xl">{enemyName}</Text>
        <Text className="font-mainfont text-fwhite text-xl">{curHealth} / {maxHealth}</Text>
      </View>
        
    </View>
  )
}

export default CombatEnemyScreen
