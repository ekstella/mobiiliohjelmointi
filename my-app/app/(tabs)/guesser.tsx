import { useEffect, useState } from "react";
import {
    Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Guess = () => {
  const [number, setNumber] = useState("");
};

export default function GuesserScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Guess a number between 1 and 100</Text>
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
    fontSize: 20,
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
});
