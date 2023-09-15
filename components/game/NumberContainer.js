import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function NumberContainer(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
    padding: 24,
  },
  text: {
    color: Colors.accent500,
    fontSize: 48,
    fontWeight: "bold",
  },
});
