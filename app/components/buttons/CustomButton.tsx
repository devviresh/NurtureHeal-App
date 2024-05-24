import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

interface CustomButtonProps extends TouchableOpacityProps {
    text: string;
    onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );

}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#8464C2',
        borderRadius: 6,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        // marginTop: 20,
        maxWidth: 400,
        alignSelf: "center",
        width: "100%"
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})