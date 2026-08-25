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
    <View style={styles.container}>
      <Text style={styles.title}>⭐️ Enter two numbers, please! ⭐️</Text>
      <TextInput
        style={styles.input}
        placeholder="First number"
        placeholderTextColor="black"
        keyboardType="numeric"
        value={number1}
        onChangeText={setNumber1}
      />

      <TextInput
        style={styles.input}
        placeholder="Second number"
        placeholderTextColor="black"
        keyboardType="numeric"
        value={number2}
        onChangeText={setNumber2}
      />

      <View style={styles.buttonRow}>
        <Pressable style={styles.button} onPress={addNumbers}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={subtractNumbers}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>

      <Text style={styles.result}>Result: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 160,
    borderColor: "black",
    borderWidth: 1,
    color: "black",
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    gap: 20,
  },
  button: {
    backgroundColor: "lightyellow",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: "black",
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  result: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  container: {
    backgroundColor: "pink",
    borderWidth: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default Calc;
