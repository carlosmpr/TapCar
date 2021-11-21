import React from 'react'
import { StyleSheet,Image, View } from 'react-native'
import BottomTabs from '../components/BottomTabs'
import CarPage from '../components/CarPage'
import Header from '../components/Header'
import upCar from '../../assets/upCar.png'
import lock from '../../assets/lock.png'
import trunk from '../../assets/trunk.png'
import key from '../../assets/key.png'
import thermo from '../../assets/thermo.png'
import lights from '../../assets/lights.png'
import Badge from '../components/Badge'
const LockScreen = () => {
    return (
      <CarPage>
          <Header car="Nissan GTR" title="Quick Actions"/>
          <View style={styles.content}>
          <Image source={upCar} />
          <Badge image={lights} top="5%"/>
            <Badge image={lock}/>
            <Badge image={lock} left="5%" top="37%"/>
            <Badge image={lock} right="5%" top="37%"/>
            <Badge image={lock} right="5%" bottom="25%"/>
            <Badge image={lock} left="5%" bottom="25%"/>
            <Badge image={trunk}  bottom="5%"/>
          </View>
          <Badge image={key} top="20%" left="5%"/>
          <Badge image={thermo} top="20%" right="5%"/>
          <BottomTabs />
      </CarPage>
    )
}

export default LockScreen

const styles = StyleSheet.create({
    content:{
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    }
   
})
