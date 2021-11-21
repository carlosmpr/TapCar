import React from "react";
import { StyleSheet, Text, View , Image} from "react-native";
import CarPage from "../components/CarPage";
import Header from "../components/Header";
import carUp from  '../../assets/up.png'
import fuel from  '../../assets/fuel.png'
import oil from  '../../assets/oil.png'
import motor from  '../../assets/motor.png'
import races from  '../../assets/races.png'
import location from  '../../assets/location.png'
import CarBadge from "../components/CarBadge";
import BottomTabs from "../components/BottomTabs";

const data = [
    {
        image:fuel,
        text:"Full tank"
    },

    {
        image:oil,
        text:"56%"
    },

    {
        image:motor,
        text:"Good"
    },

    {
        image:races,
        text:"72,522 Miles"
    },

    {
        image:location,
        text:"1407 NY,10036"
    }
]
const WelcomeScreen = () => {
  return (
    <CarPage>
     <Header  desc=" Card layouts can vary to support the types of content they contain.
          The following elements are commonly found among that variety." car="Nissan GTR"/>
    <Image style={styles.image}source={carUp}/>
    {data.map(item=><CarBadge {...item} key={item.text}/>)}
        <BottomTabs />
    </CarPage>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image:{
      position:'absolute',
      right:0,
      top:"20%"
  },

 
  
 
});
