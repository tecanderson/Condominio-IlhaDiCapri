import React,{ useState, useEffect } from 'react';
import {View, NativeModules, SafeAreaView, useWindowDimensions, TouchableOpacity} from 'react-native';
import { useCoilsContext } from '../context/context';
import styles from './styles';
import {handleDI, useInterval} from './../services/';
import Level from '../../../assets/painel';
import ModbusTcp from 'react-native-modbus-tcp';
import { Text } from 'react-native-svg';


export default function Bomba02() {
const timer = 1000;
const DI0 = 2;//manual LH
const DI1 = 3;//automatico HH 
const DI2 = 5;//falha L
const DI3 = 11;//ligado/desligado LL

const Host01 = "192.168.0.3" ;/** Endereço do modulo clp de onde seram lidos os endereços */
const Host02 = "192.168.0.4" ;


const [LL,setLL] =useState("#ff0000");
const [L, setL]= useState("#ffff00");
const[ HH, setHH]=useState("#0000ff");
const[ LH,setLH]=useState("#00ff00");

const[Di00,setDi00] = useState(false) ;//manual LH
const[Di01,setDi01] = useState(false) ; //automatico HH 
const[Di02,setDi02] = useState(false) ;//falha L
const[Di03,setDi03] = useState(false) ;//ligado/desligado LL
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

const heigth=useWindowDimensions().height * 0.83;
const width=useWindowDimensions().width;

async function ReadDi(host:String,adress:number,setDI:React.Dispatch<React.SetStateAction<boolean>>){
  ModbusTcp.connectToModbusMaster(host, 502, async (res) => {
    console.log(res)
    await ModbusTcp.readDiscreteInput(1,adress, 1, async (res) => {
      try{ 
        const newres = await JSON.parse(res)[0];
          setDI(newres);   
          console.log(`endereço: ${adress}`)
          console.log(newres)
          }
          catch (err)
          {
            // setDI(false)
          }
            
            
              });
           });
 
}
useInterval(()=>{
  console.log(`endereço:${DI0}`)
  ReadDi(Host01,DI0,setDi00) /** manual */
},timer+1000)

useInterval(()=>{
  console.log(`endereço:${DI1}`)
  ReadDi(Host01,DI1,setDi01) /** automatico */
},timer+2000)

useInterval(()=>{
  console.log(`endereço:${DI2}`)
  ReadDi(Host02,DI2,setDi02) /** falha */
},timer+3000)
useInterval(()=>{
  console.log(`endereço:${DI3}`)
  ReadDi(Host02,DI3,setDi03) /** ligado / desligado */
},timer+4000)


return (
    
    <SafeAreaView >
       <View style={styles.conteiner}>
       <TouchableOpacity style={{flex:1,backgroundColor:"black"}}>
    <Text>
      teste
    </Text>
  </TouchableOpacity>

       <Level width={width} height={heigth} LL={LL} L={L} aut={Di01} man={Di00} LH={LH} BombaName={"Bomba 01"}>
  
       </Level>
       </View>

    </SafeAreaView>
   
    
  );
}