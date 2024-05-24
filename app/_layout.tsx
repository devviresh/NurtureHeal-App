import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Link, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { AppColors } from '@/constants/Colors';
import { Pressable } from 'react-native';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    latoRegular: require('../assets/fonts/Lato-Regular.ttf'),
    latoMedium: require('../assets/fonts/Lato-Medium.ttf'),
    latoSemiBold: require('../assets/fonts/Lato-SemiBold.ttf'),
    latoBold: require('../assets/fonts/Lato-Bold.ttf'),
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
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider
      value={DefaultTheme}
    // value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='welcome' options={{ headerShown: false }} />
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
        <Stack.Screen name='home'
          options={{
            headerTitle: 'NurtureHeal',
            headerStyle: {
              backgroundColor: AppColors.primary
            },
            headerRight: () => (
              <Link href="/cart/details" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="shopping-cart"
                      size={25}
                      // color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }} />
        <Stack.Screen name='cart/details'
          options={{
            headerTitle: 'My Cart',
            headerStyle: {
              backgroundColor: AppColors.primary
            }
          }} />
        <Stack.Screen name='cart/scheduling'
          options={{
            headerTitle: 'Scheduling',
            headerStyle: {
              backgroundColor: AppColors.primary
            }
          }} />
        <Stack.Screen name='cart/address'
          options={{
            headerTitle: 'Address',
            headerStyle: {
              backgroundColor: AppColors.primary
            }
          }} />



        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="modal" options={{ presentation: 'modal' }} /> */}
      </Stack>
    </ThemeProvider>
  );
}
