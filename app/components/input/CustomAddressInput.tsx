import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { AppColors } from '@/constants/Colors'

interface CustomButtonProps extends TouchableOpacityProps {
    onPress: () => void;
}

const CustomAddressInput: React.FC<CustomButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.fieldName}>+ Add your address</Text>
        </TouchableOpacity>
    )
}

export default CustomAddressInput

const styles = StyleSheet.create({
    container: {
        maxWidth: 400,
        width: "100%",
        backgroundColor: "rgba(234, 234, 234, 1)",
        borderRadius: 4,
        padding: 10,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        alignSelf:'center',
    },
    fieldName: {
        fontSize: 14,
        color: AppColors.secondaryDark,
        fontFamily: 'LatoBold'
    },
})