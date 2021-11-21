import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const LargeTab = ({ image, text }) => {
  return (
      <View style={styles.content}>
    <View style={styles.tab}>
      <Image source={image} style={styles.image} />
    </View>
    <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default LargeTab;

const styles = StyleSheet.create({
    content:{
        alignItems:'center'
    },
  tab: {
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    padding: 5,
    width: 80,
    height: 80,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

  image: {
    width: "100%",
    resizeMode: "contain",
  },

  text:{
      fontWeight:'bold'
  }
});
