import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import BottomTabs from "../components/BottomTabs";
import CarPage from "../components/CarPage";
import Header from "../components/Header";
import left from "../../assets/left.png";
import Spacer from "../components/Spacer";
import Card from "../components/Card";

const ManualScreen = () => {
  return (
    <CarPage>
      <Header car="Nissan GTR" title="About" />
      <View style={styles.content}>
        <Image source={left} />
        <View style={{width:'100%'}}>
        <Spacer space={20} />
        <Text style={{fontSize:28}}>Car 101</Text>
        <Spacer space={20} />
        <Card text="Change a tier"/>
        <Card text="Oil Check"/>
        <Card text="Water refill"/>
        <Card text="Recharge Battery"/>
        </View>
      </View>
      <BottomTabs />
    </CarPage>
  );
};

export default ManualScreen;

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: 20,
  },
});
