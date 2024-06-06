import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    return (
      <View className="flex-1">
        <Text>This is the character creation screen</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

