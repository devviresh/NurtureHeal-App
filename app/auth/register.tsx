import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import CustomBanner from '../components/CustomBanner'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import CustomTextButton from '../components/CustomTextButton'
import { router } from 'expo-router'

const RegisterScreen = () => {
    return (
        <View style={styles.page}>
            {/* Logo Area */}
            <View style={styles.header}>
                <CustomBanner title="Create Account" subtitle='Create a new account' needHelp={false} />
            </View>

            <View style={styles.body}>

                {/* Form Area */}
                <View>
                    <CustomInput name='Enter your Full name' hint='Enter your name' />
                    <CustomInput name='Email ID' hint='Enter your email id' />
                    <CustomInput name='Date of birth' hint='DD/MM/Year' />
                    <CustomInput name='Mobile No' hint='Enter your mobile no' />
                    {/* Submit Button */}
                    <CustomButton text='Create Account' onPress={() => { router.push('/auth/verify-otp') }} />
                </View>


                {/* Not a member */}
                <View style={styles.alreadyMember}>
                    <Text>Already have a account? </Text>
                    <CustomTextButton text="Login" onPress={() => { router.push('/auth/login') }} />
                </View>
            </View>

            {/* <Link href="/register">About</Link> */}
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    page: {
        // justifyContent:"center",
        // alignItems:"center"
    },

    header: {
        width: 580,
        height: 580,
        top: -420,
        borderBottomLeftRadius: 580,
        borderBottomRightRadius: 580,
        justifyContent: "flex-end",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#DCF9E5",
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0, height: 4
        },
        elevation: 8
    },

    body: {
        top: -430,
        marginTop: 40,
        marginHorizontal: 20
    },

    alreadyMember: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    }

})