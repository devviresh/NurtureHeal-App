import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface CustomInputProps {
  name: string;
  hint: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ name, hint }) => {
  return (
    <View style={styles.container}>
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
  container: {
    maxWidth: 400,
    alignSelf: "center",
    width: "100%",
  },
  fieldName: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily:'LatoSemiBold',
    color: 'rgba(0, 0, 0, 0.5)'
    // marginTop: 20,
  },
  inputField: {
    backgroundColor: "rgba(234, 234, 234, 1)",
    borderRadius: 6,
    padding: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  }
})