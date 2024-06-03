import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View } from 'react-native';
import { Link } from 'expo-router';
import background from '../assets/images/backgroundMenu.jpg';
import PlayButton from '../components/playButton';

export default function App() {
  return (
    <View className='flex-1 bg-white'>
      <ImageBackground source={background} resizeMode="cover" className='flex-1 justify-center items-center'>
        <Text className='text-3xl font-pblack'>MAZE GAME NAME</Text>
        <PlayButton />
      </ImageBackground> 
      
      <StatusBar style="auto" />
    </View>
  );
}
