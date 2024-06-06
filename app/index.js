import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Link } from 'expo-router';
import PlayButton from '../components/playButton'; 

export default function App() {
  return (
    <View className="flex-1">
      <PlayButton />
      <StatusBar style="auto" />
    </View>
  );
}
