import React from 'react'
import { StyleSheet,Image, View, Text } from 'react-native'
import BottomTabs from '../components/BottomTabs'
import CarPage from '../components/CarPage'
import Header from '../components/Header'
import carTires from '../../assets/carTires.png'

import Panel from '../components/Panel'
const TiresScreen = () => {
    return (
      <CarPage>
          <Header car="Nissan GTR" title="Quick Actions"/>
          <View style={styles.content}>
          <Image source={carTires} />
         
         <Panel number={23.6} low={true} top={0} left={1}/>
         <Panel number={33.0}  top={0} right={1}/>
         <Panel number={33.0}  bottom={0} right={1}/>
         <Panel number={33.0}  bottom={0} left={1}/>
          </View>
         
          <BottomTabs />
      </CarPage>
    )
}

export default TiresScreen

const styles = StyleSheet.create({
    content:{
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    }
   
})
