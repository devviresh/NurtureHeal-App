import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../components/input/CustomInput";
import CustomButton from "../components/buttons/CustomButton";

const userAddress = [];

const address = () => {
  return (
    <View style={styles.container}>
      <CustomInput name={"Name*"} hint={""} />
      <CustomInput name={"Mobile*"} hint={""} />
      <CustomInput name={"Address*"} hint={""} />
      <CustomInput name={"Town*"} hint={""} />
      <CustomInput name={"City*"} hint={""} />
      <CustomInput name={"Pincode*"} hint={""} />
      <CustomInput name={"State*"} hint={""} />
      <Text style={styles.note}>*All are must required</Text>
      {/* Save */}
      <CustomButton
        text={"Save"}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </View>
  );
};

export default address;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  note: {
    fontFamily: "LatoSemiBold",
    color: "rgba(249, 0, 25, 0.7)",
    marginTop: -10,
    maxWidth: 400,
    width: "100%",
    marginBottom: 40,
  },
});
