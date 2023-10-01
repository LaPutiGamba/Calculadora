import { StyleSheet, View, Text, Modal, Pressable } from "react-native";

function Operators(props) {
  function sendOperatorSelected() {
    if (props.operator === "=") return;
    props.addOperator(props.operator);
  }
  console.log(props.operatorSelected);
  function calculateResult() {
    const OPERATIONS_DICTIONARY = {
      "÷":
        Number(props.showNumber.firstNumber) /
        Number(props.showNumber.secondNumber),
      "×":
        Number(props.showNumber.firstNumber) *
        Number(props.showNumber.secondNumber),
      "−":
        Number(props.showNumber.firstNumber) -
        Number(props.showNumber.secondNumber),
      "+":
        Number(props.showNumber.firstNumber) +
        Number(props.showNumber.secondNumber),
    };

    props.setOperatorSelected(
      props.operator === "=" ? undefined : props.operator
    );
    props.setShowNumber({
      firstNumber: String(OPERATIONS_DICTIONARY[props.operatorSelected]),
      secondNumber: "",
    });
  }

  return (
    <View style={styles.globalStyle}>
      <Pressable
        onPress={
          !props.showNumber.secondNumber
            ? sendOperatorSelected
            : calculateResult
        }
        style={({ pressed }) => {
          if (props.operator === "=") {
            return pressed ? styles.pressedStyle : styles.noPressedStyle;
          } else {
            return props.operatorSelected === props.operator &&
              !props.showNumber.secondNumber
              ? styles.pressedStyle
              : styles.noPressedStyle;
          }
        }}
        children={() => {
          return (
            <Text
              style={
                props.operatorSelected === props.operator &&
                !props.showNumber.secondNumber
                  ? { ...styles.textStyle, color: "#ff9f0a" }
                  : { ...styles.textStyle, color: "white" }
              }
            >
              {props.operator}
            </Text>
          );
        }}
      ></Pressable>
    </View>
  );
}

export default Operators;

const styles = StyleSheet.create({
  pressedStyle: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color .4s ease-in-out",
  },
  noPressedStyle: {
    backgroundColor: "#ff9f0a",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color .4s ease-in-out",
  },
  globalStyle: {
    flex: 1,
    margin: "1.5%",
  },
  textStyle: {
    fontSize: "40px",
    transform: "translate(1px, 0px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
  },
});