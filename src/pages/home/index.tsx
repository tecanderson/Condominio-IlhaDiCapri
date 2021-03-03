import React, { useState, useEffect } from 'react';
import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import { View, Text, TouchableOpacity, NativeModules, Image } from 'react-native';
import PumpIcon from '../../../assets/bomba'
import Reservatorio from '../../../assets/reservatorio'
//import styles from "./styles"


export default function Home({ navigation }) {
const Heigth= useWindowDimensions().height*0.3 ;
const Width = useWindowDimensions().width*0.15;
const height= useWindowDimensions().height ;
const width = useWindowDimensions().width;
  const color="#008";
 console.log(`heigth:${useWindowDimensions().height} \nwidth: ${useWindowDimensions().width} `)
 const styles = StyleSheet.create(
  
  {safeAreaImage:{
    
  },
  conteiner: {
    flexDirection: "column",
    alignItems:'baseline'
    
  },
  menuItem: {
    flexDirection: "row",
    height: height * 0.25,
    width:width * 0.3,
    justifyContent: "space-between",
    alignItems:"center",
    margin: width * 0.01,
    borderRadius:10,
     
    
    
    
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    opacity:90


  },
  
  menu: {
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'baseline',
  //position: 'absolute', //Here is the trick
  bottom:-height*0.65,


  },
  menuItemText:{
    fontSize:height*0.04
  }
})
  return (
    <SafeAreaView style={{flexDirection:"column"}}>
      
    <View style={styles.conteiner}>
    <ImageBackground  style={{width,height}} source={require('../../../assets/GARAGEM_6.jpg')}>
    <View style={styles.menu}>
        <TouchableOpacity  style={styles.menuItem} onPress={()=>{navigation.navigate("Nivel Superior")}}>
        <Reservatorio height={Heigth} fill={color} width={Width} />
          <Text style={styles.menuItemText}>Nivel Superior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={()=>{navigation.navigate("Nivel Inferior 01")}}>
        <Reservatorio height={Heigth} fill={color} width={Width} />
          <Text style={styles.menuItemText}>Nivel Inferior</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={()=>{navigation.navigate("Bomba 01")}} >
        <PumpIcon height={Heigth} fill={color} width={Width} />
          <Text style={styles.menuItemText}>Bombas</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
     
     
        
    </View>
    </SafeAreaView>
   
  );
  
}
