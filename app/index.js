import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View } from 'react-native';
import { Link } from 'expo-router';
import background from '../assets/images/backgroundMenu.jpg';
import PlayButton from '../components/playButton';
import HelpButton from '../components/helpButton';

import { Video } from 'expo-av';
import * as React from 'react';

export default function App() {
  const video = React.useRef(null);
  return (
    <View className='flex-1 bg-white'>
      <ImageBackground source={background} resizeMode="cover" className='flex-1 justify-center items-center'>
      <View className='p-3 m-2'>
        <Text className='text-6xl font-mainfont text-black'>Treasures of Titus</Text>
      </View>
      <View className='mt-10'>
        <PlayButton />
      </View>
      </ImageBackground> 
      <StatusBar style="auto" />
    </View>
  );
}
