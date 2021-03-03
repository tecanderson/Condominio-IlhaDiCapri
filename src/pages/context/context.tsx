import React ,{ createContext, useState, useEffect ,useContext }from 'react'
import { useWindowDimensions } from 'react-native';



interface Coils {
    setCoil8193:React.Dispatch<React.SetStateAction<boolean>>,
    coil8193:boolean,
    setCoil8194:React.Dispatch<React.SetStateAction<boolean>>,
    coil8194:boolean,
    setCoil8195:React.Dispatch<React.SetStateAction<boolean>>,
    coil8195:boolean,
    setCoil8196:React.Dispatch<React.SetStateAction<boolean>>,
    coil8196:boolean,
    setCoil8197:React.Dispatch<React.SetStateAction<boolean>>,
    coil8197:boolean,
    setCoil8198:React.Dispatch<React.SetStateAction<boolean>>,
    coil8198:boolean,
    setCoil8199:React.Dispatch<React.SetStateAction<boolean>>,
    coil8199:boolean,
    setCoil8200:React.Dispatch<React.SetStateAction<boolean>>,
    coil8200:boolean,
    setCoil8201:React.Dispatch<React.SetStateAction<boolean>>,
    coil8201:boolean,
    setCoil8202:React.Dispatch<React.SetStateAction<boolean>>,
    coil8202:boolean,
    setCoil8203:React.Dispatch<React.SetStateAction<boolean>>,
    coil8203:boolean,
    setCoil8204:React.Dispatch<React.SetStateAction<boolean>>,
    coil8204:boolean,
    setCoil8205:React.Dispatch<React.SetStateAction<boolean>>,
    coil8205:boolean,
    setCoil8206:React.Dispatch<React.SetStateAction<boolean>>,
    coil8206:boolean,
    setCoil8207:React.Dispatch<React.SetStateAction<boolean>>,
    coil8207:boolean,
    setCoil8208:React.Dispatch<React.SetStateAction<boolean>>,
    coil8208:boolean,
    setCoil8209:React.Dispatch<React.SetStateAction<boolean>>,
    coil8209:boolean,
    setCoil8210:React.Dispatch<React.SetStateAction<boolean>>,
    coil8210:boolean,
    setCoil8211:React.Dispatch<React.SetStateAction<boolean>>,
    coil8211:boolean,
    setCoil8212:React.Dispatch<React.SetStateAction<boolean>>,
    coil8212:boolean,
    setCoil8257:React.Dispatch<React.SetStateAction<boolean>>,
    coil8257:boolean,
    setCoil8258:React.Dispatch<React.SetStateAction<boolean>>,
    coil8258:boolean,
    setCoil8259:React.Dispatch<React.SetStateAction<boolean>>,
    coil8259:boolean,
    setCoil8260:React.Dispatch<React.SetStateAction<boolean>>,
    coil8260:boolean,
    setCoil8261:React.Dispatch<React.SetStateAction<boolean>>,
    coil8261:boolean,
    setCoil8262:React.Dispatch<React.SetStateAction<boolean>>,
    coil8262:boolean,
    setCoil8263:React.Dispatch<React.SetStateAction<boolean>>,
    coil8263:boolean,
    setCoil8264:React.Dispatch<React.SetStateAction<boolean>>,
    coil8264:boolean,
    setCoil8265:React.Dispatch<React.SetStateAction<boolean>>,
    coil8265:boolean,
    setCoil8266:React.Dispatch<React.SetStateAction<boolean>>,
    coil8266:boolean,
    setCoil8267:React.Dispatch<React.SetStateAction<boolean>>,
    coil8267:boolean,
    setCoil8268:React.Dispatch<React.SetStateAction<boolean>>,
    coil8268:boolean,
    setCoil8269:React.Dispatch<React.SetStateAction<boolean>>,
    coil8269:boolean,
    setCoil8270:React.Dispatch<React.SetStateAction<boolean>>,
    coil8270:boolean,
    setCoil8271:React.Dispatch<React.SetStateAction<boolean>>,
    coil8271:boolean,
    setCoil8272:React.Dispatch<React.SetStateAction<boolean>>,
    coil8272:boolean,
    setCoil8273:React.Dispatch<React.SetStateAction<boolean>>,
    coil8273:boolean,
    setCoil8274:React.Dispatch<React.SetStateAction<boolean>>,
    coil8274:boolean,
    setCoil8275:React.Dispatch<React.SetStateAction<boolean>>,
    coil8275:boolean,
    setCoil8276:React.Dispatch<React.SetStateAction<boolean>>,
    coil8276:boolean,
    setCoil8277:React.Dispatch<React.SetStateAction<boolean>>,
    coil8277:boolean,
    setCoil8278:React.Dispatch<React.SetStateAction<boolean>>,
    coil8278:boolean,
    setCoil8279:React.Dispatch<React.SetStateAction<boolean>>,
    coil8279:boolean,
    setCoil8280:React.Dispatch<React.SetStateAction<boolean>>,
    coil8280:boolean,
    setCoil8281:React.Dispatch<React.SetStateAction<boolean>>,
    coil8281:boolean,
    setCoil8282:React.Dispatch<React.SetStateAction<boolean>>,
    coil8282:boolean,
    setCoil8283:React.Dispatch<React.SetStateAction<boolean>>,
    coil8283:boolean,
    setCoil8284:React.Dispatch<React.SetStateAction<boolean>>,
    coil8284:boolean,
    setCoil8285:React.Dispatch<React.SetStateAction<boolean>>,
    coil8285:boolean,
    setCoil8286:React.Dispatch<React.SetStateAction<boolean>>,
    coil8286:boolean,
    setCoil8287:React.Dispatch<React.SetStateAction<boolean>>,
    coil8287:boolean,
    setCoil8288:React.Dispatch<React.SetStateAction<boolean>>,
    coil8288:boolean,
    setCoil8289:React.Dispatch<React.SetStateAction<boolean>>,
    coil8289:boolean,
    setCoil8290:React.Dispatch<React.SetStateAction<boolean>>,
    coil8290:boolean,
    setCoil8291:React.Dispatch<React.SetStateAction<boolean>>,
    coil8291:boolean,
    setCoil8292:React.Dispatch<React.SetStateAction<boolean>>,
    coil8292:boolean,
    setCoil8293:React.Dispatch<React.SetStateAction<boolean>>,
    coil8293:boolean,
    setCoil8294:React.Dispatch<React.SetStateAction<boolean>>,
    coil8294:boolean,
    setCoil8295:React.Dispatch<React.SetStateAction<boolean>>,
    coil8295:boolean,
    setCoil8296:React.Dispatch<React.SetStateAction<boolean>>,
    coil8296:boolean,
    setCoil8297:React.Dispatch<React.SetStateAction<boolean>>,
    coil8297:boolean,
    setCoil8298:React.Dispatch<React.SetStateAction<boolean>>,
    coil8298:boolean,
    setCoil8299:React.Dispatch<React.SetStateAction<boolean>>,
    coil8299:boolean,
    setCoil8300:React.Dispatch<React.SetStateAction<boolean>>,
    coil8300:boolean,
    setCoil8301:React.Dispatch<React.SetStateAction<boolean>>,
    coil8301:boolean,
    setCoil8302:React.Dispatch<React.SetStateAction<boolean>>,
    coil8302:boolean,
    setCoil8303:React.Dispatch<React.SetStateAction<boolean>>,
    coil8303:boolean,
    setCoil8304:React.Dispatch<React.SetStateAction<boolean>>,
    coil8304:boolean,
    setCoil8305:React.Dispatch<React.SetStateAction<boolean>>,
    coil8305:boolean,
    setCoil8306:React.Dispatch<React.SetStateAction<boolean>>,
    coil8306:boolean,
    setCoil8307:React.Dispatch<React.SetStateAction<boolean>>,
    coil8307:boolean,
    setCoil8308:React.Dispatch<React.SetStateAction<boolean>>,
    coil8308:boolean,
    setCoil8309:React.Dispatch<React.SetStateAction<boolean>>,
    coil8309:boolean,
    setCoil8310:React.Dispatch<React.SetStateAction<boolean>>,
    coil8310:boolean,
    setCoil8311:React.Dispatch<React.SetStateAction<boolean>>,
    coil8311:boolean,
    setCoil8312:React.Dispatch<React.SetStateAction<boolean>>,
    coil8312:boolean,
    setCoil8313:React.Dispatch<React.SetStateAction<boolean>>,
    coil8313:boolean,
    setCoil8314:React.Dispatch<React.SetStateAction<boolean>>,
    coil8314:boolean,
    setCoil8315:React.Dispatch<React.SetStateAction<boolean>>,
    coil8315:boolean,
    setCoil8316:React.Dispatch<React.SetStateAction<boolean>>,
    coil8316:boolean,
    setCoil8317:React.Dispatch<React.SetStateAction<boolean>>,
    coil8317:boolean,
    setCoil8318:React.Dispatch<React.SetStateAction<boolean>>,
    coil8318:boolean,
    setCoil8319:React.Dispatch<React.SetStateAction<boolean>>,
    coil8319:boolean,
    setCoil8320:React.Dispatch<React.SetStateAction<boolean>>,
    coil8320:boolean,
    setDi00:React.Dispatch<React.SetStateAction<boolean>>,
    Di00:boolean,
    setDi01:React.Dispatch<React.SetStateAction<boolean>>,
    Di01:boolean,
    setDi02:React.Dispatch<React.SetStateAction<boolean>>,
    Di02:boolean,
    setDi03:React.Dispatch<React.SetStateAction<boolean>>,
    Di03:boolean,
    setDi04:React.Dispatch<React.SetStateAction<boolean>>,
    Di04:boolean,
    setDi05:React.Dispatch<React.SetStateAction<boolean>>,
    Di05:boolean,
    setDi06:React.Dispatch<React.SetStateAction<boolean>>,
    Di06:boolean,
    setDi07:React.Dispatch<React.SetStateAction<boolean>>,
    Di07:boolean,
    setDi08:React.Dispatch<React.SetStateAction<boolean>>,
    Di08:boolean,
    setDi09:React.Dispatch<React.SetStateAction<boolean>>,
    Di09:boolean,
    setDi10:React.Dispatch<React.SetStateAction<boolean>>,
    Di10:boolean,
    setDi11:React.Dispatch<React.SetStateAction<boolean>>,
    Di11:boolean,
    setDi12:React.Dispatch<React.SetStateAction<boolean>>,
    Di12:boolean,
    setDi13:React.Dispatch<React.SetStateAction<boolean>>,
    Di13:boolean,
    setDi14:React.Dispatch<React.SetStateAction<boolean>>,
    Di14:boolean,
    setDi15:React.Dispatch<React.SetStateAction<boolean>>,
    Di15:boolean,
    setDi16:React.Dispatch<React.SetStateAction<boolean>>,
    Di16:boolean,
    setDi17:React.Dispatch<React.SetStateAction<boolean>>,
    Di17:boolean,
    setDi18:React.Dispatch<React.SetStateAction<boolean>>,
    Di18:boolean,
    setDi19:React.Dispatch<React.SetStateAction<boolean>>,
    Di19:boolean,
    setDi20:React.Dispatch<React.SetStateAction<boolean>>,
    Di20:boolean,
    setDi21:React.Dispatch<React.SetStateAction<boolean>>,
    Di21:boolean,
    setDi22:React.Dispatch<React.SetStateAction<boolean>>,
    Di22:boolean,
    setDi23:React.Dispatch<React.SetStateAction<boolean>>,
    Di23:boolean,
    Heigth:Number,
    Width:Number

  }

  export const CoilsContext = createContext<Coils>({} as Coils);

  export const CoilsProvider: React.FC = ({ children }) => {

    const [coil8193,setCoil8193] = useState(false)
    const [coil8194,setCoil8194] = useState(false)
    const [coil8195,setCoil8195] = useState(false)
    const [coil8196,setCoil8196] = useState(false)
    const [coil8197,setCoil8197] = useState(false)
    const [coil8198,setCoil8198] = useState(false)
    const [coil8199,setCoil8199] = useState(false)
    const [coil8200,setCoil8200] = useState(false)
    const [coil8201,setCoil8201] = useState(false)
    const [coil8202,setCoil8202] = useState(false)
    const [coil8203,setCoil8203] = useState(false)
    const [coil8204,setCoil8204] = useState(false)
    const [coil8205,setCoil8205] = useState(false)
    const [coil8206,setCoil8206] = useState(false)
    const [coil8207,setCoil8207] = useState(false)
    const [coil8208,setCoil8208] = useState(false)
    const [coil8209,setCoil8209] = useState(false)
    const [coil8210,setCoil8210] = useState(false)
    const [coil8211,setCoil8211] = useState(false)
    const [coil8212,setCoil8212] = useState(false)
    const [Di00, setDi00] = useState(false)
    const [Di01, setDi01] = useState(false)
    const [Di02, setDi02] = useState(false)
    const [Di03, setDi03] = useState(false)
    const [Di04, setDi04] = useState(false)
    const [Di05, setDi05] = useState(false)
    const [Di06, setDi06] = useState(false)
    const [Di07, setDi07] = useState(false)
    const [Di08, setDi08] = useState(false)
    const [Di09, setDi09] = useState(false)
    const [Di10, setDi10] = useState(false)
    const [Di11, setDi11] = useState(false)
    const [Di12, setDi12] = useState(false)
    const [Di13, setDi13] = useState(false)
    const [Di14, setDi14] = useState(false)
    const [Di15, setDi15] = useState(false)
    const [Di16, setDi16] = useState(false)
    const [Di17, setDi17] = useState(false)
    const [Di18, setDi18] = useState(false)
    const [Di19, setDi19] = useState(false)
    const [Di20, setDi20] = useState(false)
    const [Di21,setDi21] = useState(false)
    const [Di22,setDi22] = useState(false)
    const [Di23,setDi23] = useState(false)
    const [coil8257,setCoil8257]= useState(false)
const [coil8258,setCoil8258]= useState(false)
const [coil8259,setCoil8259]= useState(false)
const [coil8260,setCoil8260]= useState(false)
const [coil8261,setCoil8261]= useState(false)
const [coil8262,setCoil8262]= useState(false)
const [coil8263,setCoil8263]= useState(false)
const [coil8264,setCoil8264]= useState(false)
const [coil8265,setCoil8265]= useState(false)
const [coil8266,setCoil8266]= useState(false)
const [coil8267,setCoil8267]= useState(false)
const [coil8268,setCoil8268]= useState(false)
const [coil8269,setCoil8269]= useState(false)
const [coil8270,setCoil8270]= useState(false)
const [coil8271,setCoil8271]= useState(false)
const [coil8272,setCoil8272]= useState(false)
const [coil8273,setCoil8273]= useState(false)
const [coil8274,setCoil8274]= useState(false)
const [coil8275,setCoil8275]= useState(false)
const [coil8276,setCoil8276]= useState(false)
const [coil8277,setCoil8277]= useState(false)
const [coil8278,setCoil8278]= useState(false)
const [coil8279,setCoil8279]= useState(false)
const [coil8280,setCoil8280]= useState(false)
const [coil8281,setCoil8281]= useState(false)
const [coil8282,setCoil8282]= useState(false)
const [coil8283,setCoil8283]= useState(false)
const [coil8284,setCoil8284]= useState(false)
const [coil8285,setCoil8285]= useState(false)
const [coil8286,setCoil8286]= useState(false)
const [coil8287,setCoil8287]= useState(false)
const [coil8288,setCoil8288]= useState(false)
const [coil8289,setCoil8289]= useState(false)
const [coil8290,setCoil8290]= useState(false)
const [coil8291,setCoil8291]= useState(false)
const [coil8292,setCoil8292]= useState(false)
const [coil8293,setCoil8293]= useState(false)
const [coil8294,setCoil8294]= useState(false)
const [coil8295,setCoil8295]= useState(false)
const [coil8296,setCoil8296]= useState(false)
const [coil8297,setCoil8297]= useState(false)
const [coil8298,setCoil8298]= useState(false)
const [coil8299,setCoil8299]= useState(false)
const [coil8300,setCoil8300]= useState(false)
const [coil8301,setCoil8301]= useState(false)
const [coil8302,setCoil8302]= useState(false)
const [coil8303,setCoil8303]= useState(false)
const [coil8304,setCoil8304]= useState(false)
const [coil8305,setCoil8305]= useState(false)
const [coil8306,setCoil8306]= useState(false)
const [coil8307,setCoil8307]= useState(false)
const [coil8308,setCoil8308]= useState(false)
const [coil8309,setCoil8309]= useState(false)
const [coil8310,setCoil8310]= useState(false)
const [coil8311,setCoil8311]= useState(false)
const [coil8312,setCoil8312]= useState(false)
const [coil8313,setCoil8313]= useState(false)
const [coil8314,setCoil8314]= useState(false)
const [coil8315,setCoil8315]= useState(false)
const [coil8316,setCoil8316]= useState(false)
const [coil8317,setCoil8317]= useState(false)
const [coil8318,setCoil8318]= useState(false)
const [coil8319,setCoil8319]= useState(false)
const [coil8320,setCoil8320]= useState(false)
const Heigth = useWindowDimensions().height
const Width = useWindowDimensions().width
    return (
    <CoilsContext.Provider
            value={{
            coil8193,setCoil8193,
            coil8194,setCoil8194,
            coil8195,setCoil8195,
            coil8196,setCoil8196,
            coil8197,setCoil8197,
            coil8198,setCoil8198,
            coil8199,setCoil8199,
            coil8200,setCoil8200,
            coil8201,setCoil8201,
            coil8202,setCoil8202,
            coil8203,setCoil8203,
            coil8204,setCoil8204,
            coil8205,setCoil8205,
            coil8206,setCoil8206,
            coil8207,setCoil8207,
            coil8208,setCoil8208,
            coil8209,setCoil8209,
            coil8210,setCoil8210,
            coil8211,setCoil8211,
            coil8212,setCoil8212,
            setDi00,Di00,
            setDi01,Di01,
    setDi02,Di02,
    setDi03,Di03,
    setDi04,Di04,
    setDi05,Di05,
    setDi06,Di06,
    setDi07,Di07,
    setDi08,Di08,
    setDi09,Di09,
    setDi10,Di10,
    setDi11,Di11,
    setDi12,Di12,
    setDi13,Di13,
    setDi14,Di14,
    setDi15,Di15,
    setDi16,Di16,
    setDi17,Di17,
    setDi18,Di18,
    setDi19,Di19,
    setDi20,Di20,
    setDi21,Di21,
    setDi22,Di22,
    setDi23,Di23,

    coil8257,setCoil8257,
    coil8258,setCoil8258,
    coil8259,setCoil8259,
    coil8260,setCoil8260,
    coil8261,setCoil8261,
    coil8262,setCoil8262,
    coil8263,setCoil8263,
    coil8264,setCoil8264,
    coil8265,setCoil8265,
    coil8266,setCoil8266,
    coil8267,setCoil8267,
    coil8268,setCoil8268,
    coil8269,setCoil8269,
    coil8270,setCoil8270,
    coil8271,setCoil8271,
    coil8272,setCoil8272,
    coil8273,setCoil8273,
    coil8274,setCoil8274,
    coil8275,setCoil8275,
    coil8276,setCoil8276,
    coil8277,setCoil8277,
    coil8278,setCoil8278,
    coil8279,setCoil8279,
    coil8280,setCoil8280,
    coil8281,setCoil8281,
    coil8282,setCoil8282,
    coil8283,setCoil8283,
    coil8284,setCoil8284,
    coil8285,setCoil8285,
    coil8286,setCoil8286,
    coil8287,setCoil8287,
    coil8288,setCoil8288,
    coil8289,setCoil8289,
    coil8290,setCoil8290,
    coil8291,setCoil8291,
    coil8292,setCoil8292,
    coil8293,setCoil8293,
    coil8294,setCoil8294,
    coil8295,setCoil8295,
    coil8296,setCoil8296,
    coil8297,setCoil8297,
    coil8298,setCoil8298,
    coil8299,setCoil8299,
    coil8300,setCoil8300,
    coil8301,setCoil8301,
    coil8302,setCoil8302,
    coil8303,setCoil8303,
    coil8304,setCoil8304,
    coil8305,setCoil8305,
    coil8306,setCoil8306,
    coil8307,setCoil8307,
    coil8308,setCoil8308,
    coil8309,setCoil8309,
    coil8310,setCoil8310,
    coil8311,setCoil8311,
    coil8312,setCoil8312,
    coil8313,setCoil8313,
    coil8314,setCoil8314,
    coil8315,setCoil8315,
    coil8316,setCoil8316,
    coil8317,setCoil8317,
    coil8318,setCoil8318,
    coil8319,setCoil8319,
    coil8320,setCoil8320,
    Heigth,Width
           }}
           >
                 { children }
            </CoilsContext.Provider>

    )
}

export function useCoilsContext(){

    const coils = useContext(CoilsContext);

    return coils;
}