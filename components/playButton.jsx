import { StatusBar } from 'expo-status-bar';
import { Animated, ImageBackground, Text, View, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import background from '../assets/images/backgroundMenu.jpg';
import { Audio } from 'expo-av';

const PlayButton = () => {

  const bounceValue = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();
  const router = useRouter();

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(bounceValue, {
          toValue: 5,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(bounceValue, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ])
    );

    bounceAnimation.start();
  }, [bounceValue]);

  const handlePress = async () => {
    console.log('"Begin Adventure" pressed');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/clickSounds.wav'));
    setSound(sound);
    console.log("Do you hear sounds?");
    await sound.playAsync();
    router.push('/character');
  };

  return (
    <View className="flex-1 justify-center">
      <Pressable onPress={handlePress} className="flex-1">
        <ImageBackground source={background} resizeMode="cover" className="flex-1 items-center p-5">
          <View className="flex-1 justify-center items-center">
            <Text className='text-6xl font-mainfont text-black'>Treasures of Titus</Text>
          </View>
          <View className='flex-1 justify-center'>
            <Animated.Text 
            className="text-3xl font-mainfont text-black"
            style={{ transform: [{ translateY: bounceValue }] }}>
              Begin Adventure!
            </Animated.Text> 
          </View>
        </ImageBackground> 
      </Pressable>
    </View>
  )
}

export default PlayButton