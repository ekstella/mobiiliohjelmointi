import { useEffect, useState } from "react";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MyNumberInput from "@/components/my-number-input";

export default function GuesserScreen() {
  const [guess, setGuess] = useState(0);
  const [guesses, setGuesses] = useState<number[]>([]);
  const [correct, setCorrect] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => restart(), []);

  function guessNumber() {
    if (Number.isNaN(guess)) {
      setMessage("This is not a valid number :(");
      return;
    }

    setGuesses([...guesses, guess]);
    if (guess === correct) {
      setMessage(
        `Yay, you guessed it!! ^^ The number was ${correct} and it took you ${
          guesses.length + 1
        } guesses! :D`
      );
    }
    if (guess < correct) {
      setMessage(`Your guess of ${guess} is too low :( try again!`);
    }
    if (guess > correct) {
      setMessage(`Your guess of ${guess} is too high :( try again!`);
    }
  }

  function restart() {
    setCorrect(Math.floor(Math.random() * 100) + 1);
    setGuess(0);
    setGuesses([]);
    setMessage("💗 Guess a number between 1 and 100 💗");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>💗 Guessing game!!! 💗</Text>

        <MyNumberInput value={guess} onChange={setGuess}></MyNumberInput>

        <View style={styles.buttonRow}>

          <Pressable style={styles.button} onPress={guessNumber}>
            <Text style={styles.buttonText}>Press here to guess</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={restart}>
            <Text style={styles.buttonText}>Play again!!</Text>
          </Pressable>
        </View>
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
    paddingVertical: 2,
    paddingHorizontal: 10,
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
