import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import address from '@/app/cart/address'

const AddressCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.name}>First Last</Text>
                <Text style={styles.type}>Home</Text>
            </View>

            <View >
                <Text style={styles.address}>36 Anna nagar, near nugabakkam bus stioNugabakkam</Text>
                <Text style={styles.address}>Chennai - 600 001</Text>
            </View>

            <Text style={styles.address}>Mobile no: +91 82565 52485</Text>

        </View>
    )
}

export default AddressCard

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'rgba(234, 234, 234, 1)',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        gap: 4,
        maxWidth: 400,
        width: '100%',
        alignSelf: 'center',

    },
    type: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 2,
        fontSize: 8,
        fontFamily: 'LatoBold',
        color: 'white'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems:'flex-start'
    },
    name: {
        fontSize: 12,
        fontFamily: 'LatoBold',
        color: 'rgba(0, 0, 0, 0.5)'
    },
    address: {
        fontFamily: 'LatoMedium',
        fontSize: 10,
        color: 'rgba(0, 0, 0, 0.6)'

    }
})