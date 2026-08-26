import { useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function GuesserScreen() {
  const [guess, setGuess] = useState(0);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>💗 Guess a number between 1 and 100 💗</Text>
        <TextInput
          style={styles.input}
          placeholder="Make a guess :)"
          placeholderTextColor="black"
          keyboardType="numeric"
        ></TextInput>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    borderWidth: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {},

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
});
