import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface CustomInputProps {
  name: string;
  hint: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ name, hint }) => {
  return (
    <View>
      <Text style={styles.fieldName}>{name}</Text>
      <TextInput
        style={styles.inputField}
        autoCapitalize='none'
        autoCorrect={false}
        placeholder={hint}
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
  fieldName: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 20
  },
  inputField: {
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderRadius: 6,
    padding: 8
  }
})