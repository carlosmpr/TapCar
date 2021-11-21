import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Panel = ({ number, low = false, top , left, right, bottom }) => {
  const styles = StyleSheet.create({
    content: {
      width: 200,
      height: 200,
      backgroundColor: "rgba(255, 255, 255, 0.61)",
      position: "absolute",
      borderRadius: 10,
      top,
      left,
      right,
      bottom,
      padding: 20,
      borderWidth: 1,
      borderColor: low ? "red" : "gray",
      justifyContent: "space-between",
    },
    number: { fontSize: 30, fontWeight: "bold", color: low ? "red" : "black" },
    low: { fontSize: 30, color: "red" },
  });

  return (
    <View style={styles.content}>
      <Text style={styles.number}>{number}psi</Text>
      {low ?  <Text style={styles.low}>LOW</Text> : null}
     
    </View>
  );
};

export default Panel;
