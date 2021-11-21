import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import BottomTabs from "../components/BottomTabs";
import CarPage from "../components/CarPage";
import Header from "../components/Header";
import front from "../../assets/front.png";
import LargeTab from "../components/LargeTab";
import motor from "../../assets/motor.png";
import oil from "../../assets/oil.png";
import fuel from "../../assets/fuel.png";
import battery from "../../assets/battery.png";
import wipes from "../../assets/wipes.png";
import temp from "../../assets/temp.png";
import tirelow from "../../assets/tirelow.png";
import parking from "../../assets/parking.png";
import air from "../../assets/air.png";
import buld from "../../assets/buld.png";
import brake from "../../assets/brake.png";
import track from "../../assets/track.png";
import fuelCap from "../../assets/fuelCap.png";
import wheel from "../../assets/wheel.png";
import frontCap from "../../assets/fronCap.png";
import hill from "../../assets/hill.png";
const data = [
  { image: motor },
  { image: oil },
  { image: fuel },
  { image: battery },
  { image: wipes },
  { image: temp },
  { image: tirelow },
  { image: parking },
  { image: air },
  { image: buld },
  { image: brake },
  { image: track },
  { image: fuelCap },
  { image: wheel },
  { image: frontCap },
  { image: hill },
];
const StatusScreen = () => {
  return (
    <CarPage>
      <Header car="Nissan GTR" title="Car Status" />
      <View style={styles.content}>
        <Image source={front} />
        <View style={styles.status}>
          {data.map((item) => (
            <View style={styles.spacer}>
              <LargeTab {...item} />
            </View>
          ))}
        </View>
      </View>

      <BottomTabs />
    </CarPage>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  status: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  spacer: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
