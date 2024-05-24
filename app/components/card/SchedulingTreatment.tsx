import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AppColors } from '@/constants/Colors'

const SchedulingTreatment = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontFamily: 'LatoBold', color: 'rgba(0, 0, 0, 0.5)' }}>Treatment</Text>
                <Text style={{ fontFamily: 'LatoBold', color: 'rgba(0, 0, 0, 0.5)' }}>Pranic healing</Text>

            </View>
            <View style={styles.body}>
                <Image style={styles.image} source={require('../../../assets/images/doctor.png')} />
                <View style={styles.details}>
                    <Text style={styles.recommended}>Export Recommended</Text>
                    <Text style={styles.recommendation}>Compulsory</Text>

                </View>
                <Text style={styles.session}>5 Session</Text>

            </View>

        </View>
    )
}

export default SchedulingTreatment

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        overflow: 'hidden',
        maxWidth: 400,
        alignSelf: 'center',
        width: '100%',
        shadowColor: AppColors.black,
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0, height: 3
        },
        elevation: 8
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor:'rgba(80, 165, 158, 0.2)',
    },
    body: {
        flexDirection: 'row',
        backgroundColor: '#50A59E',
        padding: 10,
        gap: 10,
        alignItems: 'center'
    },

    image: {
        height: 24,
        width: 24,

    },
    details: {
        flex: 1,

    },
    recommended: {
        color: 'white',
        fontFamily: 'LatoBold',
        fontSize: 12,
        marginBottom: 4
    },
    recommendation: {
        color: 'white',
        fontFamily: 'LatoMedium',
        fontSize: 10
    },
    session: {
        color: 'white',
        fontFamily: 'LatoBold',
        fontSize: 12
    }

})