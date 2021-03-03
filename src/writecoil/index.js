import React from 'react'
import { useCoilsContext } from '../pages/home/context'


const modbusWriteEventListiner = (event) => {
  const { setCoil8193, setCoil8194 } = useCoilsContext();

  console.log(event)
  setCoil8193(event['8193'])
  // setCoil8194(event['Q02'])

};
export default modbusWriteEventListiner