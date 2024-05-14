import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrSeparator = () => {
    return (
        <View style={styles.orContainer}>
            <View style={styles.hLine} />
            <View style={styles.orBorder}>
                <Text style={styles.orText}>or</Text>
            </View>
            <View style={styles.hLine} />
        </View>
    )
}

export default OrSeparator

const styles = StyleSheet.create({
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },

    hLine: {
        flex: 1,
        height: 2,
        backgroundColor: "rgba(186, 186, 186, 0.4)"
    },

    orBorder: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.3)",
        borderRadius: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    orText: {
        width: 30,
        height: 24,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold",
        color: "rgba(0, 0, 0, 0.3)",
    }
})