import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import OrSeparator from '../components/OrSeparator';
import SocialLoginButton from '../components/SocialLoginButton';
import CustomTextButton from '../components/CustomTextButton';
import { Link, router } from 'expo-router';

const LoginScreen = () => {
    return (
        <View style={styles.page}>
            {/* Logo Area */}
            <View style={styles.header}>
                <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
            </View>

            <View style={styles.body}>
                {/* Welcome Section */}
                <View style={{ marginTop: 30, marginBottom: 10 }}>
                    <Text style={styles.welcome}>Welcome!</Text>
                    <Text style={styles.banner}>Login to your account</Text>
                </View>

                {/* Form Area */}
                <View>
                    <CustomInput name='Email or Mobile number' hint='Enter your mail or mobile number' />
                    <CustomButton text='Continue' onPress={() => { router.push('/auth/verify-otp') }} />
                </View>

                {/* Other Sign in Methods */}
                <OrSeparator />
                <View style={styles.SocialLoginContainer}>
                    <SocialLoginButton icon={require("../../assets/images/google.png")} onPress={() => { }} />
                    <SocialLoginButton icon={require("../../assets/images/fb.png")} onPress={() => { }} />
                    <SocialLoginButton icon={require("../../assets/images/x.png")} onPress={() => { }} />
                </View>

                {/* Not a member */}
                <View style={styles.notMember}>
                    <Text>Not a member? </Text>
                    {/* <Link href='/auth/RegisterScreen'> */}
                    <CustomTextButton text="Create Account" onPress={() => { router.push('/auth/register') }} />

                </View>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    page: {
        // justifyContent:"center",
        // alignItems:"center"
    },

    header: {
        width: 520,
        borderBottomLeftRadius: 520,
        borderBottomRightRadius: 520,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#DCF9E5",
        paddingTop: 20,
        shadowColor: "#000000",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0, height: 4
        },
        elevation: 8
    },

    logo: {
        height: 133,
        resizeMode: "contain",
        margin: 50
    },

    body: {
        marginHorizontal: 20
    },

    welcome: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#9C06AF",
        textAlign: "center"
    },

    banner: {
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: 14,
        textAlign: "center",
        fontWeight: "bold",
        margin: 6
    },

    SocialLoginContainer: {
        marginTop: 20,
        marginLeft: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingHorizontal: 40
    },

    notMember: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20
    }

})