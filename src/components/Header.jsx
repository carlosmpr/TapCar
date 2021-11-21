import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Header = ({desc, car, title}) => {
  return (
    <View style={styles.header}>
      <View style={styles.mainHeader}>
        <View>
          <Text style={styles.title}>TapCar</Text>
          <Text style={styles.subtitle}>{car}</Text>
        </View>
        <Ionicons name="menu" size={24} color="black" />
      </View>
      <Text>{title}</Text>
      <View style={styles.headerDesc}>
        <Text>
         {desc}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({header: {
    width: "100%",
    padding: 20,
    
  },

  mainHeader:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
  ,

  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 28,
  },

  headerDesc:{
      width:'60%'
  }});
