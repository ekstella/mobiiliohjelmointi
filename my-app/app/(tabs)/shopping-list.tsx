import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  FlatList,
} from "react-native";
import styles from "@/components/styles";
import { useState } from "react";

export default function Shoppinglist() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const addButton = () => {
    setItems([...items, item]);
  };

  const clearButton = () => {};

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Shopping list</Text>
        <TextInput
          style={styles.input}
          placeholder="Add an item"
          placeholderTextColor="black"
          value={item}
          onChangeText={setItem}
        ></TextInput>

        <View style={styles.buttonRow}>
          <Pressable style={styles.button} onPress={addButton}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={clearButton}>
            <Text style={styles.buttonText}>Reset</Text>
          </Pressable>
        </View>

        <Text style={styles.text}>⊹₊˚‧︵‿₊୨ᰔ୧₊‿︵‧˚₊⊹</Text>

        <FlatList
          data={items}
          renderItem={({ item }) => (
            <Text style={styles.historyItem}>{item}</Text>
          )}
          ListEmptyComponent={() => <Text>No items yet</Text>}
        ></FlatList>
      </View>
    </TouchableWithoutFeedback>
  );
}
