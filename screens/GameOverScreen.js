import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import * as Device from "expo-device";

import Colors from "../constants/Colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({ userNumber, count, onStartNewGame }) {
  const { height } = useWindowDimensions();

  const dynamicPropertiesContainer = {
    marginTop: height < 400 ? 16 : 100,
  };
  const dynamicPropertiesImageContainer = {
    width: height < 400 ? 120 : 200,
    height: height < 400 ? 120 : 200,
    borderRadius: height < 400 ? 60 : 100,
    margin: height < 400 ? 8 : 30,
  };

  return (
    <View style={[styles.container, dynamicPropertiesContainer]}>
      <Title>Game Over!</Title>
      <View style={[styles.imageContainer, dynamicPropertiesImageContainer]}>
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
    alignItems: "center",
  },
  imageContainer: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    padding: 12,
    fontFamily: "poppins-regular",
    fontSize: Device.deviceType === 2 ? 32 : 20,
    textAlign: "center",
    marginBottom: 16,
  },
  highlight: {
    fontFamily: "poppins-medium",
    color: Colors.primary500,
  },
});
