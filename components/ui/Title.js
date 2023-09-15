import { StyleSheet, Text, useWindowDimensions } from "react-native";
import * as Device from "expo-device";

import Colors from "../../constants/Colors";

export default function Title(props) {
  const { height } = useWindowDimensions();
  const deviceType = Device.deviceType;

  const dynamicProperties_title = {
    fontSize: deviceType === 2 ? 64 : height < 400 ? 32 : 42,
    marginTop: deviceType === 2 ? 24 : 0,
    padding: height < 400 ? 4 : 16,
  };
  return (
    <Text style={[styles.title, dynamicProperties_title]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "poppins-regular",
    color: Colors.white,
    textAlign: "center",
    padding: 16,
  },
});
