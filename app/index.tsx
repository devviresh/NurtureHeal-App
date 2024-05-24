import { StyleSheet, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'
import LottieView from 'lottie-react-native';

const index = () => {
  // const router = useRouter();` 

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/welcome');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return <View style={styles.container}>
    <Image style={styles.logo} source={require('../assets/images/logo.png')} />
    {/* <LottieView
      style={styles.logo}
      source={require('../assets/lottie/splash-animation.json')}
      autoPlay
      // loop
    /> */}
  </View>
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fff',
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  }
})