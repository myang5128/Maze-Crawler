import { Text, View, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

const CharacterSelectionStartButton = () => {
  const [sound, setSound] = useState();
  const router = useRouter();

  const handlePress = async () => {
    console.log('"Begin Game" pressed');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/sounds/clickSounds.wav'));
    setSound(sound);
    console.log("Do you hear sounds?");
    await sound.playAsync();
    router.push('/combat');
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
