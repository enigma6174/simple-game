import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Device from "expo-device";

import Colors from "../../constants/Colors";

export default function PrimaryButton(props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, styles.pressed] : [styles.button]
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary600 }}
        disabled={props.disabled}
      >
        <Text style={styles.text}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  text: {
    color: Colors.white,
    textAlign: "center",
    fontFamily: "poppins-medium",
    fontSize: Device.deviceType === 2 ? 24 : 14,
  },
  pressed: {
    opacity: 0.75,
  },
});
