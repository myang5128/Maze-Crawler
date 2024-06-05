import { StatusBar } from 'expo-status-bar';
import { Animated, ImageBackground, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import React, { useEffect, useRef } from 'react';

const handlePress = () => {
    console.log('"Begin Adventure" pressed');
  };

const PlayButton = () => {

  const bounceValue = useRef(new Animated.Value(0)).current;

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

  return (
    <View className = "p-4 m-2 flex justify-center items-center">
    <Pressable onPress={handlePress}>
        <Animated.Text 
        className="text-2xl font-mainfont text-black"
        style={{ transform: [{ translateY: bounceValue }] }}>
          Begin Adventure!
        </Animated.Text> 
    </Pressable>
    </View>
  )
}

export default PlayButton
