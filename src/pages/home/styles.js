import React from 'react'
import { Dimensions, StyleSheet, useWindowDimensions } from 'react-native';
import {useCoilsContext} from '../context/context';
//const Heigth= useWindowDimensions().height ;
//const Width = useWindowDimensions().width;



export default StyleSheet.create(
  
  {safeAreaImage:{
    
  },
  conteiner: {
    flex: 1,
    flexDirection: "column",
    alignItems:'baseline'
    
  },
  menuItem: {
    flexDirection: "row",
    height: Dimensions.get('window').height * 0.25,
    width:Dimensions.get("window").width * 0.3,
    justifyContent: "space-between",
    alignItems:"center",
    padding:  Dimensions.get('screen').width * 0.01,
    margin: Dimensions.get('screen').width * 0.01,
    borderWidth:1,
    borderColor:"#e9e9e9",
    borderRadius:10,
    shadowColor: '#d9d9d9',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    position: 'relative',
    backgroundColor:"#e9e9e9"


  },
  
  menu: {
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'baseline',
  position: 'absolute', //Here is the trick
  bottom: -Dimensions.get('window').height*.85

  },
  menuItemText:{
    fontSize:20
  }
})