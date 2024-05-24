import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './components/buttons/CustomButton'
import { router } from 'expo-router'

const welcome = () => {
    return (
        <View>
            <Text>Welcome Screen</Text>
            <CustomButton text={'Continue'} onPress={() => {
                // router.push('/auth/login')
                router.push('/auth/login')

            }} />
        </View>
    )
}

export default welcome

const styles = StyleSheet.create({})