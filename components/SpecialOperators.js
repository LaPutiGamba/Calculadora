import { StyleSheet, View, Text, Modal, Pressable } from "react-native";

function SpecialOperators(props) {
  function handleSpecialOperator() {
    props.addSpecialOperator(props.specialOperator);
  }

  return (
    <View style={styles.globalStyle}>
      <Pressable
        onPress={handleSpecialOperator}
        style={({ pressed }) => {
          return pressed
            ? { ...styles.pressableStyle, backgroundColor: "#d9d9d9" }
            : { ...styles.pressableStyle, backgroundColor: "#737373" };
        }}
      >
        <Text style={{ color: "black", fontSize: "40px", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif" }}>{props.specialOperator}</Text>
      </Pressable>
    </View>
  );
}

export default SpecialOperators;

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