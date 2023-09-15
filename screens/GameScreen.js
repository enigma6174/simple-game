import { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import * as Device from "expo-device";

import Title from "../components/ui/Title";
import generateRandomNumber from "../utils/Random";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";

let currentMin = 1;
let currentMax = 100;

export default function GameScreen({ userNumber, onGuessRound, onGameOver }) {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const { height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) onGameOver();
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    currentMin = 1;
    currentMax = 100;
  }, []);

  function guessNewNumber(mode) {
    if (
      (mode === "lower" && currentGuess < userNumber) ||
      (mode === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("No Cheating", "Misleading us is wrong", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (mode === "lower") currentMax = currentGuess;
    if (mode === "higher") currentMin = currentGuess + 1;

    const newGuess = generateRandomNumber(currentMin, currentMax, currentGuess);
    setCurrentGuess(newGuess);
    onGuessRound((current) => current + 1);
  }

  const paddingTopDistance =
    height < 400 ? 20 : Platform.OS === "ios" ? 20 : 75;

  return (
    <View style={[styles.container, { paddingTop: paddingTopDistance }]}>
      <Title>My Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card
          title={"Higher Or Lower?"}
          style={styles.cardStyle}
          textStyle={styles.cardTitle}
        >
          <View style={styles.btnContainer}>
            <View style={styles.btnSpace}>
              <PrimaryButton onPress={() => guessNewNumber("higher")}>
                Higher
              </PrimaryButton>
            </View>
            <View style={styles.btnSpace}>
              <PrimaryButton onPress={() => guessNewNumber("lower")}>
                Lower
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
}

const deviceType = Device.deviceType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: deviceType === 2 ? 48 : 16,
  },
  btnSpace: {
    flex: 1,
  },
  cardTitle: {
    marginBottom: deviceType === 2 ? 32 : 12,
  },
  cardStyle: {
    height: deviceType === 2 ? 300 : 150,
  },
});
