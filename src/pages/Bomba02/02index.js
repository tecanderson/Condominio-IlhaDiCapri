import React,{ useState, useEffect } from 'react';
import {View,Dimensions, NativeModules, SafeAreaView, useWindowDimensions} from 'react-native';
import { useCoilsContext } from '../context/context';
import { DeviceEventEmitter } from 'react-native';
import styles from './styles';
import {Tkcolor} from '../services'
import Level from '../../../assets/painel';


export default function Bomba02({navigation}) {
/**variaves de estado que guarda a cor de cada nivel do tanque 
   sendo posteriormente alterada de acordo com o nivel ficando todas 
   com a mesma cor conforme o nivel sobe ou desce
*/
const [LL,setLL] =useState("#ff0000");
const [L, setL]= useState("#ffff00");
const[ HH, setHH]=useState("#0000ff");
const[ LH,setLH]=useState("#00ff00");
//const[ LH,setLH]=useState("#00ff00");

/**let adresQtd = 4; quantidade de endereços a serem lidos consequentemente
quantidade de thread a ser criada */
const Host01 = "192.168.0.3" ;/** Endereço do modulo clp de onde seram lidos os endereços */
const Host02 = "192.168.0.4" ;
/** entradas a serem monitoradas pelos listener's  */
let DI0 = 'Di2';//automatico HH 
let DI1 = 'Di3';//manual LH
let DI2 = 'Di5';//falha L
let DI3 = 'Di11';//ligado/desligado LL

const initAdreshost01 = [2,3] ;/** lista de Endereços inicial de leitura do clp */
const initAdreshost02 = [5,11] ;
const { Di03:Di01,
        Di05:Di02,
        Di11:Di03,
        Di02:Di00,
        setDi03:setDi01,
        setDi05:setDi02,
        setDi11:setDi03,
        setDi02:setDi00
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
  handlereadDI(initAdreshost01,Host01)
  handlereadDI(initAdreshost02,Host02)
},[])/**
 * Esta função inicia uma thread para cada endereço do clp
 * esta função por sua vez emite sinal com o numero do endereço e
 * o valor lido
 * @param {Number} adress - Endereço inicial de leitura do clp
 * @param {Number} qtd - Quantidades de endereços a serem lidos 
 * @param {String} host - endereço IP do clp de onde seram lidos os endereços
 */
  function handlereadDI(adress,host = '192.168.0.3') {
    adress.forEach((adres)=>{
      console.log('reading DI adres: ' + adres)
      NativeModules.Newmodbusjava.ReadDi(adres, host)
    })}/**
   * @param {Object} data - valor vindo do Listener
   * @param {boolean} Di0-20 - valor lido no endereço {true or false}
   */
   const readMb = (data) => {
// os endereços do DiscretInput's tem um offset de 1
// data['']
if (typeof (data[DI0]) !== 'undefined')
{/**verifica se undefined e apos verificar atribue
   o valor a variavel corespondente
  */
  setDi00(data[DI0])}
if (typeof (data[DI1]) !== 'undefined')
{/**verifica se undefined e apos verificar atribue
   o valor a variavel corespondente
  */setDi01(data[DI1])}
if (typeof (data[DI2]) !== 'undefined')
{/**verifica se undefined e apos verificar atribue
   o valor a variavel corespondente
  */setDi02(data[DI2]) }
if (typeof (data[DI3]) !== 'undefined')
{/**verifica se undefined e apos verificar atribue
   o valor a variavel corespondente
  */setDi03(data[DI3])}};
  /**
   * variaveis de estado para guarda o estado de cada nivel do tanque 
   */
  const heigth=useWindowDimensions().height * 0.83;
  const width=useWindowDimensions().width;
   /**
   * função que ao iniciar a activity dispara as cores baseadas nas variaveis 
   * de estado das entradas do clp lidas na @function handlereadDI que gera evento 
   * para a @function Readmb
   */
  useEffect(() => {
    setLL(Di03 ? '#f00':"#b5afaf")
    setL(Di02 ? "#ff0":"#b5afaf")
    setLH(Di03 ? "#b5afaf":"#0f0")
    
    }, [Di02,Di03])
    
  return (
    
    <SafeAreaView >
       <View style={styles.conteiner}>
       <Level width={width} height={heigth} LL={LL} L={L} aut={Di01} man={Di00} LH={LH} BombaName={"Bomba 02"}/>
       </View>

    </SafeAreaView>
   
    
  );
}
