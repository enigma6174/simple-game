import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

export default function Card(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // only works on Android
    shadowColor: "black", // only works on iOS
    shadowOffset: { width: 0, height: 2 }, // only works on iOS
    shadowRadius: 6, // only works on iOS
    shadowOpacity: 0.25, // only works on iOS
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    fontFamily: "poppins-semi-bold",
  },
});
