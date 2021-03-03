import React,{ useState, useEffect } from 'react';
import {View, NativeModules, SafeAreaView, useWindowDimensions, TouchableOpacity} from 'react-native';
import { useCoilsContext } from '../context/context';
import styles from './styles';
import {handleDI, useInterval} from './../services/';
import Level from '../../../assets/painel';
import ModbusTcp from 'react-native-modbus-tcp';
import { Text } from 'react-native-svg';


export default function Bomba01() {

const Host01 = "192.168.0.3" ;/** Endereço do modulo clp de onde seram lidos os endereços */
const Host02 = "192.168.0.4" ;

const initAdreshost01 = [0,1] ;/** lista de Endereços inicial de leitura do clp */
const initAdreshost02 = [4,10] ;

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
  console.log("endereço 00")
  ReadDi(Host01,0,setDi00) /** automatico */
},5000)

useInterval(()=>{
  console.log("endereço 01")
  ReadDi(Host01,1,setDi01) /** automatico */
},6000)

useInterval(()=>{
  console.log("endereço 04")
  ReadDi(Host02,4,setDi02) /** automatico */
},7000)
useInterval(()=>{
  console.log("endereço 10")
  ReadDi(Host02,10,setDi03) /** automatico */
},8000)


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