import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import * as Device from "expo-device";

import Colors from "../../constants/Colors";

export default function NumberContainer(props) {
  const { height } = useWindowDimensions();
  const deviceType = Device.deviceType;

  const dynamicProperties_container = {
    margin: height < 400 ? 12 : 24,
    padding: height < 400 ? 12 : 24,
  };

  const dynamicProperties_text = {
    fontSize: deviceType === 2 ? 80 : height < 400 ? 36 : 48,
  };

  return (
    <View style={[styles.container, dynamicProperties_container]}>
      <Text style={[styles.text, dynamicProperties_text]}>
        {props.children}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent500,
    fontWeight: "bold",
  },
});
