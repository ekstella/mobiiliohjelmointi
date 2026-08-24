import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";

const Calc = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    const sum = Number(number1) + Number(number2);
    setResult(sum);
  };

  const subtractNumbers = () => {
    const difference = Number(number1) - Number(number2);
    setResult(difference);
  };

  return (
    <View
      style={{
        backgroundColor: "pink",
        borderWidth: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
      }}
    >
      <Text>Enter two numbers, please!</Text>
      <TextInput
        style={styles.input}
        placeholder="First number"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />

      <TextInput
        style={styles.input}
        placeholder="Second number"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      <View style={{}}>
        <Pressable onPress={addNumbers}>
          <Text>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 160,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Calc;
