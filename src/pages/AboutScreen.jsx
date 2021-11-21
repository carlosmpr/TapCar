import React from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import BottomTabs from "../components/BottomTabs";
import CarPage from "../components/CarPage";
import Header from "../components/Header";
import right from "../../assets/right.png";
import Spacer from "../components/Spacer";


const AboutScreen = () => {
  return (
    <CarPage>
      <Header car="Nissan GTR" title="About" />
      <View style={styles.content}>
           
          
          <Text style={{fontSize:20}}>Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.</Text>
          <Spacer space={20}/>
          <Text style={{fontSize:20}}>Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.</Text>
          <Spacer space={20}/>
          <Text style={{fontSize:20}}>Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.</Text>
          <Spacer space={20}/>
        <Image source={right} />
        
      </View>

      <BottomTabs />
    </CarPage>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding:20
  },

});
