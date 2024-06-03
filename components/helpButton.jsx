import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

const handlePress = () => {
    console.log('"The Adventurers Guide" pressed');
  };

const HelpButton = () => {
  return (
    <View className = "p-4 mt-5 m-2 flex justify-center items-center">
    <Pressable onPress={handlePress}>
        <Text className="text-2xl font-bold text-black">The Adventurer's Guide!</Text> 
    </Pressable>
    </View>
  )
}

export default HelpButton
