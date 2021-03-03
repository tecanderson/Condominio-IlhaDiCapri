import React,{ useState, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import ModbusTcp from 'react-native-modbus-tcp';
import {useCoilsContext } from "./../context/context"
    /**
     * paramentros do hook.
     * @param callback - função a ser executada,
     * @param delay - tempo a ser repetido
     * 
     */
export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
export function Tkcolor(lvhh,lvh,lvl,lvll){
  console.log('dentro da tkcolor')
  console.log(lvhh,lvh,lvl,lvll);

  if(lvhh==true){
    return "#0000ff"
  }
  if(lvh==true){
    return "#00ff00"
  }
  if(lvl==true){
    return "#ffff00"
  }
   if(lvll==true ){
    return "#ff0000"
  }
 

}
 /**
     * paramentros do ReadDiscretInput.
     * @param host   - endereço do clp à solicitar informações,
     * @param initialAdress - Primeiro endereço de leitura do clp
     * @param qtdReader - quantidade de endereços a serem lidos
     * 
     */
export  const handleDI = async (/**@type {String} */host ,/**@type {Number} */initialAdress ,/**@type {Number} */qtdReader) => {
  // Connect to Modbus TCP Master (parameters [ip, port])
  
await ModbusTcp.connectToModbusMaster(host, 502, (res) => {
  // Do something with the response
  // If Success response ==> Modbus4Android init success
  // if response is not success ==> Modbus4Android init success
  console.log(res)
  // Read Discrete Input (parameters [slaveid, start, length])
  /** 
   * @param id - 1° argumento  
   * @param initial - endereço inicial da leitura
   * @param length - tamanho do buff de  endereços a serem lidos do clp
   * @param qtdReader - quantidade a ser lido
  */
 for (let i=0;i<qtdReader;i++)
 {
  ModbusTcp.readDiscreteInput(1, initialAdress+i, 1, (res) => {
// Do something with the response
// If Success response ==> [false,false,false,true,true] etc...
// if response is not success ==> Modbus master is not inited successfully...]
  setDi00(JSON.parse(res)[0]);
  
// Destroy Connection
console.log(Di00)
});
 }


 });


 

 

 
}