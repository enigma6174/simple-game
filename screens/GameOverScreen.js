import { Image, StyleSheet, Text, View } from "react-native";

import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({ userNumber, count, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.text}>
        The magic number is <Text style={styles.highlight}>{userNumber}</Text>{" "}
        and we took <Text style={styles.highlight}>{count}</Text> rounds to
        guess it
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    padding: 12,
    fontFamily: "poppins-regular",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
  },
  highlight: {
    fontFamily: "poppins-medium",
    color: Colors.primary500,
  },
  button: {
    height: "2%",
  },
});
