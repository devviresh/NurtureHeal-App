import React, { useState, useRef } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const OTPField: React.FC = () => {
    const [otp, setOTP] = useState<string>('');
    const otpTextInput = useRef<TextInput[]>([]);

    const handleChangeText = (index: number, value: string) => {
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP.join(''));

        // Auto focus to next input if there's value entered
        if (value && index < 5) {
            otpTextInput.current[index + 1].focus();
        }
    };

    const handleKeyPress = (index: number, key: string) => {
        // Delete the value of previous input on backspace press
        if (key === 'Backspace' && index > 0 && !otp[index]) {
            otpTextInput.current[index - 1].focus();
        }
    };

    return (
        <View style={styles.container}>
            {[...Array(6).keys()].map((_, index) => (
                <TextInput
                    key={index}
                    style={styles.input}
                    maxLength={1}
                    keyboardType="numeric"
                    onChangeText={(value) => handleChangeText(index, value)}
                    onKeyPress={({ nativeEvent: { key } }) => handleKeyPress(index, key)}
                    ref={(ref) => (otpTextInput.current[index] = ref!)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        backgroundColor: "rgba(236, 236, 236, 1)",
        borderColor: "rgba(0, 0, 0, 0.3)",
        width: 36,
        height: 36,
        margin: 5,
        borderWidth: 1,
        borderRadius: 3,
        textAlign: 'center',
        fontWeight: "bold"
    },
});

export default OTPField;
