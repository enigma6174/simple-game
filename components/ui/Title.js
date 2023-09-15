import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function Title(props) {
  return <Text style={styles.title || props.style}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "poppins-regular",
    fontSize: 42,
    color: Colors.white,
    textAlign: "center",
    padding: 16,
  },
});
