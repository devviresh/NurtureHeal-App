import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomAddressInput from '../components/input/CustomAddressInput'
import { Slot, router } from 'expo-router'
import SchedulingTreatment from '../components/card/SchedulingTreatment'
import CustomInput from '../components/input/CustomInput'
import CustomDropDown from '../components/input/CustomDropDown'
import SlotCard from '../components/card/SlotCard'
import AddressCard from '../components/card/AddressCard'

const scheduling = () => {
  return (
    <View style={styles.container}>
      <CustomAddressInput onPress={() => { router.push('/cart/address') }} />
      <View>
        {/* <View>
          <Text>Address</Text>
          <View>
            <Image style={{ height: 12, width: 12 }} source={require('../../assets/images/logo.png')} />
            <Text>Edit</Text>
          </View>
        </View> */}
        <AddressCard />
      </View>

      <SchedulingTreatment />

      <CustomDropDown name={'How long you suffer from this issues?'} hint={'choose reason'} />

      <View style={styles.calContainer}>
        <Image style={styles.calender} source={require('../../assets/images/calender.png')} />
        <Text style={styles.calText}>Available slot</Text>
      </View>
      <View style={styles.slot}>
        <SlotCard month={'Apr'} day={'12'} />
        <SlotCard month={'Apr'} day={'12'} />
        <SlotCard month={'Apr'} day={'12'} />
        <SlotCard month={'Apr'} day={'12'} />
        <SlotCard month={'Apr'} day={'12'} />
        <SlotCard month={'Apr'} day={'12'} />
      </View>
    </View>
  )
}

export default scheduling

const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginTop: 20,
    marginHorizontal: 20
  },
  calContainer: {
    flexDirection: 'row',
    maxWidth: 400,
    width: '100%',
    gap: 6,
    alignSelf: 'center',
    alignItems: 'center'
  },
  calender: {
    height: 20,
    width: 20
  },
  calText: {
    fontSize: 12,
    fontFamily: 'LatoBold'
  },
  slot: {
    flexDirection: 'row',
    maxWidth: 400,
    width: '100%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: -10

  }
})