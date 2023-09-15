import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/Colors";
import Card from "../components/ui/Card";

export default function StartGameScreen({ onConfirmNumber }) {
  const [inputValue, setInputValue] = useState("");

  function inputHandler(value) {
    setInputValue(value);
  }

  function restInputHandler() {
    setInputValue("");
  }

  function confirmBtnHandler() {
    const number = parseInt(inputValue);

    if (isNaN(number) || number < 1 || number > 99) {
      Alert.alert("Invalid Number", "Pick a number between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: restInputHandler,
        },
      ]);
    }

    onConfirmNumber(number);
  }

  return (
    <View style={styles.container}>
      <Card title={"Enter A Number"}>
        <TextInput
          style={styles.textInput}
          maxLength={2}
          keyboardType={"numeric"}
          autoCapitalize={"none"}
          autoCorrect={false}
          value={inputValue}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonSpace}>
            <PrimaryButton onPress={restInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonSpace}>
            <PrimaryButton
              onPress={confirmBtnHandler}
              disabled={inputValue === ""}
            >
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  textMessage: {
    color: Colors.white,
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonSpace: {
    flex: 1,
  },
});
