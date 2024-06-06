import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font'
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "BreatheFire": require("../assets/fonts/BreatheFire.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options = {{ headerShown: false}} />
    </Stack>
  )
}

export default RootLayout