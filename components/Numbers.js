import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import { useState } from "react";

function Numbers(props) {
  function sendNumberSelected() {
    props.addNumber(props.number);
  }

  return (
    <View style={styles.globalStyle}>
      <Pressable
        onPress={sendNumberSelected}
        style={({ pressed }) => {
          return pressed
            ? { ...styles.pressableStyle, backgroundColor: "#737373" }
            : { ...styles.pressableStyle, backgroundColor: "#333333" };
        }}
      >
        <Text style={{ color: "white", fontSize: "40px", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{props.number}</Text>
      </Pressable>
    </View>
  );
}

export default Numbers;

const styles = StyleSheet.create({
  globalStyle: {
    flex: 1,
    margin: "1.5%",
  },
  pressableStyle: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center"
  }
});
