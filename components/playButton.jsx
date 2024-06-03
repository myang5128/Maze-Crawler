import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';

const handlePress = () => {
    console.log('"Begin Adventure" pressed');
  };

const PlayButton = () => {
  return (
    <View className = "p-4 m-2 flex justify-center items-center">
    <Pressable onPress={handlePress}>
        <Text className="text-2xl font-bold text-black">Begin Adventure!</Text> 
    </Pressable>
    </View>
  )
}

export default PlayButton
