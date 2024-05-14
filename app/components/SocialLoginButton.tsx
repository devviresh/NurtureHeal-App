import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomInputProps {
    icon: any;
    onPress: () => void;
}

const SocialLoginButton: React.FC<CustomInputProps> = ({ icon, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.iconContainer}
            onPress={onPress}
        >
            <Image style={styles.img} source={icon} />
        </TouchableOpacity>
    )
}

export default SocialLoginButton

const styles = StyleSheet.create({
    iconContainer: {
        height: 40,
        width: 40,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "rgba(0, 0, 0, 0.5)",
        marginLeft: "5%",
        marginRight: "5%",
        alignItems: "center",
        justifyContent: "center"
    },

    img: {
        height: 20,
        width: 20,
        resizeMode: "contain",

    }
})