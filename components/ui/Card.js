import { StyleSheet, Text, View } from "react-native";
import * as Device from "expo-device";

import Colors from "../../constants/Colors";

export default function Card(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={[styles.title, props.textStyle]}>{props.title}</Text>
      {props.children}
    </View>
  );
}

const deviceType = Device.deviceType;

const styles = StyleSheet.create({
  container: {
    height: deviceType === 2 ? 280 : 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  title: {
    color: Colors.white,
    fontSize: deviceType === 2 ? 42 : 24,
    fontFamily: "poppins-semi-bold",
  },
});
