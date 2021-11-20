import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Foundation } from '@expo/vector-icons';
const Card = ({text}) => {
  return (
    <View style={styles.card}>
      <Text style={{ fontSize: 18 }}>{text}</Text>
      <Foundation name="clipboard-notes" size={34} color="gray" />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
    shadowOffset: {
      width: 0,
      height: 3,

    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginVertical:10
  },
});
//