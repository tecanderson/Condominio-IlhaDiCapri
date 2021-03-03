  // atualiza na tela os componentes referentes aas mudanças no estado
  // no array de monitoramento atualiza os estados

  // useEffect(() => {
  //   // NativeModules.modbusjava.readDI(3, '192.168.0.3');
  //   handlereadDI(0)
  //   // writecoil();
  // }, [coil8193]);
    // DeviceEventEmitter.addListener('WC', modbus);
  // DeviceEventEmitter.addListener('readCoil', readMb);
  // escreve no endereço modbus passado

  // useEffect(() => {
  //   DeviceEventEmitter.addListener('WC', modbus);
  //   return () => {
  //     DeviceEventEmitter.removeListener('WC', modbus);

  //   }
  // }, [modbus])
   //recebe o evento disparado pela leitura ou escrita do endereço
   const modbus = (event) => {
    if (typeof (event['8194']) !== 'undefined')
      event['8194'] ? setCoil8194(event['8194']) : setCoil8194(event['8194'])

    if (typeof (event['8193']) !== 'undefined')
      event['8193'] ? setCoil8193(event['8193']) : setCoil8193(event['8193'])

  };
  const { coil8193, setCoil8193, coil8194, setCoil8194 } = useCoilsContext();