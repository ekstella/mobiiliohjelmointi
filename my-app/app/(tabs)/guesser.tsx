import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function GuesserScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
    </View>
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
});
