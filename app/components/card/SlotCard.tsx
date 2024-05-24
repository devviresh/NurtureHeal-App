import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface CustomInputProps{
  month: string,
  day: string
}

const SlotCard: React.FC<CustomInputProps> = ({month,day}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{month}</Text>
      <Text style={styles.text}>{day}</Text>
    </View>
  )
}

export default SlotCard

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40
  },
  text: {
    textAlign: 'center',
    fontFamily: 'LatoRegular',
    fontSize: 12
  }
})