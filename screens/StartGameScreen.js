import { useState } from "react";
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import * as Device from "expo-device";

import Colors from "../constants/Colors";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function StartGameScreen({ onConfirmNumber }) {
  const [inputValue, setInputValue] = useState("");

  const { height } = useWindowDimensions();

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

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior={"position"}>
        <View style={[styles.container, { marginTop: marginTopDistance }]}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const deviceType = Device.deviceType;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    marginHorizontal: deviceType === 2 ? 120 : 0,
  },
  textInput: {
    height: deviceType === 2 ? 64 : 48,
    width: deviceType === 2 ? 78 : 48,
    fontSize: deviceType === 2 ? 56 : 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  buttonSpace: {
    flex: 1,
  },
});
