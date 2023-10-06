import { StyleSheet, View, FlatList, Text } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

import Numbers from "./components/Numbers";
import Operators from "./components/Operators";
import SpecialOperators from "./components/SpecialOperators";

export default function App() {
  const [showNumber, setShowNumber] = useState({
    firstNumber: "0",
    secondNumber: "",
  });
  const [operatorSelected, setOperatorSelected] = useState();

  console.log(showNumber);

  function changeUINumber(value) {
    const numberToChange = !operatorSelected ? "firstNumber" : "secondNumber";

    if (value === ".") {
      if (!showNumber[numberToChange].includes(".")) {
        setShowNumber({
          ...showNumber,
          [numberToChange]: showNumber[numberToChange].concat("."),
        });
      }
    } else {
      value = value.toString();

      if (showNumber[numberToChange][0] === "0") {
        setShowNumber({
          ...showNumber,
          [numberToChange]: value,
        });
      } else {
        setShowNumber({
          ...showNumber,
          [numberToChange]: showNumber[numberToChange].concat(value),
        });
      }
    }
  }

  function useSpecialOperator(value) {
    if (value === "AC") {
      setShowNumber({
        ...showNumber,
        firstNumber: "0",
        secondNumber: "",
      });

      setOperatorSelected("");
    }
    if (value === "±") {
      if (showNumber["secondNumber"] === "") {
        setShowNumber({
          ...showNumber,
          firstNumber: String(Number(showNumber["firstNumber"]) * -1),
        });
        console.log(String(Number(showNumber[0]) * -1));
      } else {
        setShowNumber({
          ...showNumber,
          secondNumber: String(Number(showNumber["secondNumber"]) * -1),
        });
      }
    }
    if (value === "%") {
      if (showNumber["secondNumber"] === "") {
        setShowNumber({
          ...showNumber,
          firstNumber: String(Number(showNumber["firstNumber"]) * 0.01),
        });
        console.log(String(Number(showNumber[0]) * -1));
      } else {
        setShowNumber({
          ...showNumber,
          secondNumber: String(Number(showNumber["secondNumber"]) * 0.01),
        });
      }
    }
  }

  function changeUIOperator(operator) {
    setOperatorSelected(operator);
  }

  return (
    <>
      <View style={styles.appContainer}>
        <View style={styles.showContainer}>
          <Text
            style={{
              color: "white",
              fontSize: "104px",
              marginRight: "15px",
              fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            {showNumber.secondNumber || showNumber.firstNumber}
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.firstContainer}>
            <SpecialOperators
              specialOperator={"AC"}
              addSpecialOperator={useSpecialOperator}
            />
            <SpecialOperators
              specialOperator={"±"}
              addSpecialOperator={useSpecialOperator}
            />
            <SpecialOperators
              specialOperator={"%"}
              addSpecialOperator={useSpecialOperator}
            />
            <Operators
              operator={"÷"}
              addOperator={changeUIOperator}
              operatorSelected={operatorSelected}
              setOperatorSelected={setOperatorSelected}
              showNumber={showNumber}
              setShowNumber={setShowNumber}
            />
          </View>

          <View style={styles.secondContainer}>
            <Numbers number={7} addNumber={changeUINumber} />
            <Numbers number={8} addNumber={changeUINumber} />
            <Numbers number={9} addNumber={changeUINumber} />
            <Operators
              operator={"×"}
              addOperator={changeUIOperator}
              operatorSelected={operatorSelected}
              setOperatorSelected={setOperatorSelected}
              showNumber={showNumber}
              setShowNumber={setShowNumber}
            />
          </View>

          <View style={styles.thirdContainer}>
            <Numbers number={4} addNumber={changeUINumber} />
            <Numbers number={5} addNumber={changeUINumber} />
            <Numbers number={6} addNumber={changeUINumber} />
            <Operators
              operator={"−"}
              addOperator={changeUIOperator}
              operatorSelected={operatorSelected}
              setOperatorSelected={setOperatorSelected}
              showNumber={showNumber}
              setShowNumber={setShowNumber}
            />
          </View>

          <View style={styles.fourthContainer}>
            <Numbers number={1} addNumber={changeUINumber} />
            <Numbers number={2} addNumber={changeUINumber} />
            <Numbers number={3} addNumber={changeUINumber} />
            <Operators
              operator={"+"}
              addOperator={changeUIOperator}
              operatorSelected={operatorSelected}
              setOperatorSelected={setOperatorSelected}
              showNumber={showNumber}
              setShowNumber={setShowNumber}
            />
          </View>

          <View style={styles.fifthContainer}>
            <Numbers number={0} addNumber={changeUINumber} />
            <Numbers number={0} addNumber={changeUINumber} />
            <Numbers number={"."} addNumber={changeUINumber} />
            <Operators
              operator={"="}
              addOperator={changeUIOperator}
              operatorSelected={operatorSelected}
              setOperatorSelected={setOperatorSelected}
              showNumber={showNumber}
              setShowNumber={setShowNumber}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
  },
  showContainer: {
    flex: 1,
    flexDirection: "column-reverse",
    backgroundColor: "black",
    alignItems: "flex-end",
  },
  inputContainer: {
    flex: 1.39,
    flexDirection: "column",
  },
  firstContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
  },
  secondContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
  },
  thirdContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
  },
  fourthContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
  },
  fifthContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
  },
});
