import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

const handlePress = () => {
    console.log('Pressable pressed');
  };

const PlayButton = () => {
  return (
    <View className = "bg-white">
    <Pressable onPress={handlePress}>
        <Text className="text-3xl font-pblack">I'm pressable!</Text> 
    </Pressable>
    </View>
  )
}

export default PlayButton
