import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomBanner from '../components/CustomBanner';
import OTPField from '../components/input/CustomOTPField';
import CustomButton from '../components/buttons/CustomButton';


const OtpScreen = () => {
    const [timer, setTimer] = useState(30)
    const [resend, setResend] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            }
            else {
                setResend(true)
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timer]);

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <View style={styles.header}>
                <CustomBanner title='Almost There' subtitle='Please enter the OTP sent on 9*********6' needHelp={true} />
            </View>

            <View style={styles.body}>
                {/* Otp Field */}
                <OTPField />

                {/* resend Text + timer */}
                <View style={styles.resendCont}>
                    <Text style={styles.text}>Didn’t receive the OTP ? Resend in </Text>
                    <Text style={styles.timer}>{timer} seconds</Text>
                </View>

                {/* <CustomButton text='Resend' onPress={() => { }} /> */}
            </View>
        </View>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#DCF9E5",
    },

    body: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        top: -32,
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0, height: -4
        },
        padding: 40,
        elevation: 4,
    },

    resendCont: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center"
    },

    text: {
        fontSize: 12
    },

    timer: {
        fontSize: 12,
        fontWeight: "bold"
    }

})