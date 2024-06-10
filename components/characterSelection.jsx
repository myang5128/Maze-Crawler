import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Icon } from '@rneui/themed';
import { Audio } from 'expo-av';

const characterSelection = ({ name, startingName, valueDicts }) => {

    const [selectedValue, setSelectedValue] = useState(startingName);
    const valueLength = valueDicts.length;
    const [sound, setSound] = useState();

    useEffect(() => {
        return sound
          ? () => {
              console.log('Unloading Sound');
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

    const handlePressRight = async () => {
        // console.log(`Right ${name} button pressed`);
        // console.log(`Possible values: ${valueDicts}`);
        // console.log(`Length: ${valueLength}`);
        const curValue = valueDicts.indexOf(selectedValue);
        // console.log(`Current Index: ${curValue}`);
        const nextValue = (curValue + 1) % valueLength;
        const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/clickSounds.wav'));
        setSound(sound);
        await sound.playAsync();
        setSelectedValue(valueDicts[nextValue])
    };

    const handlePressLeft = async () => {
        // console.log(`Left ${name} button pressed`);
        // console.log(`Possible values: ${valueDicts}`);
        // console.log(`Length: ${valueLength}`);
        const curValue = valueDicts.indexOf(selectedValue);
        // console.log(`Current Index: ${curValue}`);
        const prevValue = curValue === 0 ? valueLength - 1 : curValue - 1;
        const { sound } = await Audio.Sound.createAsync( require('../assets/sounds/clickSounds.wav'));
        setSound(sound);
        await sound.playAsync();
        setSelectedValue(valueDicts[prevValue]);
    };

    return (
    <View className="flex-row items-center p-1 pr-2 pl-2 ">
        <View classname="items-center">
            <Icon name='keyboard-arrow-left' size="60" onPress={handlePressLeft} color="#f0efdf"/>
        </View>
        <View className="items-center flex-1 bg-fwhite mr-5 ml-5">
            <Text className="text-black font-mainfont text-3xl">{selectedValue}</Text>
        </View>
        <View className="items-center">
            <Icon name='keyboard-arrow-right' size="60" onPress={handlePressRight} color="#f0efdf"/>
        </View>
    </View>
    )
}

export default characterSelection
