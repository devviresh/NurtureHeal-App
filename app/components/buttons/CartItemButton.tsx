import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, Image } from 'react-native'
import React from 'react'
import { AppColors } from '@/constants/Colors';

interface CustomButtonProps extends TouchableOpacityProps {
    text: string;
    onPress: () => void;
    isDelete: boolean
}

const CartItemButton: React.FC<CustomButtonProps> = ({ text, onPress, isDelete }) => {
    return (
        <TouchableOpacity
            style={{ ...styles.button, backgroundColor: isDelete ? AppColors.secondaryLight : AppColors.secondary }}
            onPress={onPress}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {
                    isDelete && <Image style={styles.icons} source={require('../../../assets/images/delete.png')} />
                }
                <Text style={{ ...styles.buttonText, color: isDelete ? AppColors.secondary : AppColors.white }}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default CartItemButton

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        alignItems: 'center',
        alignSelf: "center",
        flex: 1,
        // height: 30
        // width: "100%"
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'LatoBold',
    },
    icons: {
        height: 14, width: 14,
        marginRight: 10
    }
})