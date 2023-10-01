import { StyleSheet, View, Text, Modal, Pressable } from "react-native";

function SpecialOperators(props) {
  function handleSpecialOperator() {
    
  }


  return (
    <View style={styles.globalStyle}>
      <Pressable
        onPress={handleSpecialOperator}
        style={
          props.operatorSelected === props.operator &&
          !props.showNumber.secondNumber
            ? styles.pressedStyle
            : styles.noPressedStyle
        }
        children={() => {
          return (
            <Text
              style={
                props.operatorSelected === props.operator 
                  ? { ...styles.textStyle, color: "#ff9f0a" }
                  : { ...styles.textStyle, color: "white" }
              }
            >
              {props.specialOperator}
            </Text>
          );
        }}
      ></Pressable>
    </View>
  );
}

export default SpecialOperators;

const styles = StyleSheet.create({
  pressedStyle: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color .3s ease-in-out",
  },
  noPressedStyle: {
    backgroundColor: "#ff9f0a",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color .3s ease-in-out",
  },
  globalStyle: {
    flex: 1,
    margin: "1.5%",
  },
  textStyle: {
    fontSize: "40px",
    transform: "translate(1px, 0px)",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif"
  },
});
