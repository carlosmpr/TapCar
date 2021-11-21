import React from "react";
import { StyleSheet, View } from "react-native";
import right from "../../assets/right.png";
import buld from "../../assets/buld.png";
import tire from "../../assets/tire.png";
import front from "../../assets/front.png";
import Tab from "./Tab";

const data = [
  { image: right, text: "Home" },
  { image: front, text: "Quick" },
  { image: tire, text: "Tires" },
  { image: buld, text: "Status" },


];
const BottomTabs = () => {
  return (
    <View style={styles.bottomTabs}>
     {data.map(item => <Tab {...item} key={item.text}/>)}
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  bottomTabs: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
});
