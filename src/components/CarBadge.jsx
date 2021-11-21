import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const CarBadge = ({image, text}) => {
    return (
        <View style={styles.badge}>
        <Image source={image}/>
        <Text style={styles.info}>{text}</Text>
    </View>
    )
}

export default CarBadge

const styles = StyleSheet.create({
    badge:{
        padding:20,
        flexDirection:'row',
       alignItems:'center'
    },
    info:{
        fontSize:22,
        marginLeft:10
    }
    
})
