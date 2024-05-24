import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

interface CustomInputProps {
    icon: any;
    onPress: () => void;
}


const CustomIconButton: React.FC<CustomInputProps> = ({ icon, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.iconContainer}
            onPress={onPress}
        >
            <Ionicons name={icon} size={25} />
        </TouchableOpacity>
    )
}

export default CustomIconButton

const styles = StyleSheet.create({
    iconContainer: {
        height: 30,
        width: 40,
        alignItems: "center",
        justifyContent: "center"
    },
})