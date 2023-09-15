import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";

import Colors from "./constants/Colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const booleanPromise = SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-semi-bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler() {
    setGameOver(true);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRound(0);
  }

  let currentScreen = <StartGameScreen onConfirmNumber={pickedNumberHandler} />;

  if (userNumber)
    currentScreen = (
      <GameScreen
        userNumber={userNumber}
        onGuessRound={setGuessRound}
        onGameOver={gameOverHandler}
      />
    );

  if (gameOver && userNumber)
    currentScreen = (
      <GameOverScreen
        userNumber={userNumber}
        count={guessRound}
        onStartNewGame={startNewGameHandler}
      />
    );

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.mainScreen}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode={"cover"}
        style={styles.mainScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.mainScreen}>{currentScreen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
