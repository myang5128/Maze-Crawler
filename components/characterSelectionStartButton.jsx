import { StatusBar } from 'expo-status-bar';
import { Animated, ImageBackground, Text, View, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import background from '../assets/images/backgroundMenu.jpg';
import { Audio } from 'expo-av';

const CharacterSelectionStartButton = () => {
  const bounceValue = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();
  const router = useRouter();

  const handlePress = async () => {
    console.log('"Begin Adventure" pressed');
    const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/clickSounds.wav'));
    setSound(sound);
    console.log("Do you hear sounds?");
    await sound.playAsync();
    router.push('/character');
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);
  return (
    <View>
        <Pressable onPress={handlePress} className="border border-fwhite rounded-md justify-center items-center w-40 p-3">
            <Text className="font-mainfont text-fwhite text-2xl">START</Text>
        </Pressable>
    </View>
  )
}

export default CharacterSelectionStartButton
