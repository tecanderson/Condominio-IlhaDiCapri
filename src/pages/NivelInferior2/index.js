import React,{ useState, useEffect } from 'react';
import {View,Dimensions, NativeModules, SafeAreaView, useWindowDimensions} from 'react-native';
import { useCoilsContext } from '../context/context';
import { DeviceEventEmitter } from 'react-native';
import styles from './styles';
import {Tkcolor} from '../services'
import LevelLd from '../../../assets/LevelLd';

export default function NivelInferior2({navigation}) {
let initAdres = 16 ;/** Endereço inicial de leitura do clp */
let adresQtd = 4;/** quantidade de endereços a serem lidos consequentemente
quantidade de thread a ser criada */
/**mesmo IP dos tanques 03 e 01*/
let Host = "192.168.0.3" ;/** Endereço do modulo clp de onde seram lidos os endereços */
/** entradas a serem monitoradas pelos listener's  */
let DI0 = 'Di19';/** level HH */
let DI1 = 'Di18';/** level H */
let DI2 = 'Di17';/** level L  */
let DI3 = 'Di16';/** level LL */
const {Di17:Di02,Di18:Di01,Di19:Di00,Di16:Di03,
      setDi17:setDi02,setDi18:setDi01,setDi19:setDi00,setDi16:setDi03
    } = useCoilsContext();


/** Adiciona e remove os listener's das entradas as serem lidas */
  useEffect(function() {
    DeviceEventEmitter.addListener(DI0, readMb);
    DeviceEventEmitter.addListener(DI1, readMb);
    DeviceEventEmitter.addListener(DI2, readMb);
    DeviceEventEmitter.addListener(DI3, readMb);
    return () => {
    
      DeviceEventEmitter.removeListener(DI0, readMb);
      DeviceEventEmitter.removeListener(DI1, readMb);
      DeviceEventEmitter.removeListener(DI2, readMb);
      DeviceEventEmitter.removeListener(DI3, readMb);
  }
},[readMb])

useEffect(()=>{
  handlereadDI(initAdres,adresQtd,Host)
},[])

/**
 * Esta função inicia uma thread para cada endereço do clp
 * esta função por sua vez emite sinal com o numero do endereço e
 * o valor lido
 * @param {Number} adress - Endereço inicial de leitura do clp
 * @param {Number} qtd - Quantidades de endereços a serem lidos 
 * @param {String} host - endereço IP do clp de onde seram lidos os endereços
 */
  function handlereadDI(adress,qtd, host = '192.168.0.3') {
    for(let i=0;i<qtd;i++){
      console.log('reading DI adres: '+ (adress+i))
      NativeModules.Newmodbusjava.ReadDi(adress+i, host)
    }}
  /**
   * 
   * @param {Object} data - valor vindo do Listener
   * @param {boolean} Di0-20 - valor lido no endereço {true or false}
   */
   const readMb = (data) => {
// os endereços do DiscretInput's tem um offset de 1
// data['']
if (typeof (data[DI0]) !== 'undefined')
{/**
  verifica se undefined e apos verificar atribue
   o valor a variavel corespondente
  */
  setDi00(data[DI0])}
if (typeof (data[DI1]) !== 'undefined')
{/**
  verifica se undefined e apos verificar atribue
   o valor a variavel corespondente
  */setDi01(data[DI1])}
if (typeof (data[DI2]) !== 'undefined')
{/**
  verifica se undefined e apos verificar atribue
   o valor a variavel corespondente
  */setDi02(data[DI2]) }
if (typeof (data[DI3]) !== 'undefined')
{/**
  verifica se undefined e apos verificar atribue
   o valor a variavel corespondente
  */setDi03(data[DI3])}
 
    
  };
  /**
   * variaveis de estado para guarda o estado de cada nivel do tanque 
   */
    
  const height=useWindowDimensions().height * 0.83;
  const width=useWindowDimensions().width;
      /**
       * variaves de estado que guarda a cor de cada nivel do tanque 
       * sendo posteriormente alterada de acordo com o nivel ficando todas 
       * com a mesma cor conforme o nivel sobe ou desce
       */
      const [LL,setLL] =useState("#ff0000")
      const [L, setL]= useState("#ffff00")
      const[ HH, setHH]=useState("#0000ff")
      const[ LH,setLH]=useState("#00ff00")
 
 
  
  /**
   * função que ao iniciar a activity dispara as cores baseadas nas variaveis 
   * de estado das entradas do clp lidas na @function handlereadDI que gera evento 
   * para a @function Readmb
   */
  useEffect(() => {
    setLL(Di03 ? Tkcolor(Di00,Di01,Di02,Di03):"#b5afaf")
    setL(Di02 ? Tkcolor(Di00,Di01,Di02,Di03):"#b5afaf")
    setLH(Di01 ? Tkcolor(Di00,Di01,Di02,Di03):"#b5afaf")
    setHH(Di00 ? Tkcolor(Di00,Di01,Di02,Di03):"#b5afaf")
    }, [Di01,Di02,Di03,Di00])

  return (
    <SafeAreaView style={{
      flex:1,
      flexDirection:'column',
      aspectRatio:1,
      justifyContent:'center',
      alignContent:'center',
     
     
    } } >
     
     
    <LevelLd height={height} width={width} LL={LL} L={L} HH={HH} LH={LH} TK={'TQ02'}/>
      
      

    </SafeAreaView>
   
    
  );
}
