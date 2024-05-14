import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
  // return <LoginScreen />
  // return <RegisterScreen />
  // return <OtpScreen />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={DefaultTheme}
    // value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack>
        <Stack.Screen name='auth/login' options={{ headerShown: false }} />
        <Stack.Screen name='auth/register'
          options={{ headerShown: false }}
        // options={{
        //   headerTitle: 'Create Account',
        //   headerTitleStyle: { color: "#9C06AF", fontWeight: 'bold' },
        //   headerStyle: {
        //     backgroundColor: "#DCF9E5",
        //   }
        // }}
        />
        <Stack.Screen name='auth/verify-otp'
          options={{ headerShown: false }}
        // options={{
        //   headerTitle: 'Almost There',
        //   headerTitleStyle: { color: "#9C06AF", fontWeight: 'bold' },
        //   headerStyle: {
        //     backgroundColor: "#DCF9E5",
        //   }
        // }}
        />

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
