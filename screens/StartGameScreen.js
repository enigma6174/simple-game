import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Rest</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 4, // only works on Android
    shadowColor: "black", // only works on iOS
    shadowOffset: { width: 0, height: 2 }, // only works on iOS
    shadowRadius: 6, // only works on iOS
    shadowOpacity: 0.25, // only works on iOS
  },
});
