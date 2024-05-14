import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomInputProps {
    text: String
    onPress: () => void
}

const CustomTextButton: React.FC<CustomInputProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomTextButton

const styles = StyleSheet.create({
    text: {
        color: "#3D73FF"
    }
})