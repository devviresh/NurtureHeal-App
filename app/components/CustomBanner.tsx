import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIconButton from './buttons/CustomIconButton';
import { Dimensions } from 'react-native';
import { router } from 'expo-router';

interface CustomInputProps {
  title: string;
  subtitle: string;
  needHelp: boolean;
}

const CustomBanner: React.FC<CustomInputProps> = ({ title, subtitle, needHelp }) => {
  return (
    <View style={{ marginTop: 40., marginBottom: 50, paddingHorizontal: 10 }}>
      <View style={styles.titleContainer}>
        <CustomIconButton icon="arrow-back-outline" onPress={() => { router.back() }} />
        <Text style={styles.title}>{title}</Text>
        <CustomIconButton icon={needHelp ? "help-circle-outline" : ""} onPress={() => { }} />
      </View>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}

export default CustomBanner

const styles = StyleSheet.create({
  titleContainer: {
    width: Dimensions.get('window').width - 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#9C06AF",
    textAlign: "center",
  },

  subtitle: {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: 14,
    textAlign: "center",
    margin: 6
  },
})