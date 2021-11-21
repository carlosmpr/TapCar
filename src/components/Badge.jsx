import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Badge = ({ image, left,right,top,bottom }) => {

    const styles = StyleSheet.create({
        content: {
            left,
            right,
            top,
            bottom,
          position: "absolute",
          backgroundColor: "white",
          height: 50,
          width: 50,
          borderRadius: 20,
          padding: 5,
          justifyContent: "center",
          shadowColor: "#000",
          padding: 5,
          width: 60,
          height: 60,
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
      
          elevation: 7,
        },
      
        image: { width: "100%", resizeMode: "contain" },
      });
      
  return (
    <View style={styles.content}>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default Badge;

