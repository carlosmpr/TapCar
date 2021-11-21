import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from 'react-native'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CarPage = ({children}) => {
    return (
        <SafeAreaView style={styles.main}>
           {children}
        </SafeAreaView>
    )
}

export default CarPage

const styles = StyleSheet.create({
  main:{
    width:windowWidth,
    height:windowHeight,
    position:'relative'
  }
})
