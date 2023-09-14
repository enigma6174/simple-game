import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        maxLength={2}
        keyboardType={"numeric"}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSpace}>
          <PrimaryButton>Rest</PrimaryButton>
        </View>
        <View style={styles.buttonSpace}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4, // only works on Android
    shadowColor: "black", // only works on iOS
    shadowOffset: { width: 0, height: 2 }, // only works on iOS
    shadowRadius: 6, // only works on iOS
    shadowOpacity: 0.25, // only works on iOS
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonSpace: {
    flex: 1,
  },
});
