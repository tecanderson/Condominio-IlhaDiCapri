import * as React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeModules } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { Text } from 'react-native';
/**Importações criadas localmente */
import Home from './src/pages/home';
import NivelSuperior from './src/pages/NivelSuperior';
import NivelInferior1 from './src/pages/NivelInferior1';
import NivelInferior2 from './src/pages/NivelInferior2';
import NivelInferior3 from './src/pages/NivelInferior3';
import NivelInferior4 from './src/pages/NivelInferior4';
import Bomba01 from './src/pages/Bomba01';
import Bomba02 from './src/pages/Bomba02';
import Bomba03 from './src/pages/Bomba03';
import Bomba04 from './src/pages/Bomba04';
import { CoilsProvider } from './src/pages/context/context'


const AppStack = createStackNavigator();

export default function Routes() {
   //const navigation = useNavigation();
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    
    <NavigationContainer>
      <CoilsProvider>
        <AppStack.Navigator
          // screenOptions={{headerShown: true}}
          initialRouteName="Home">
          <AppStack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
          <AppStack.Screen name="Nivel Superior" 
          component={NivelSuperior} options={({navigation})=>{
            return{ 
            transitionSpec: {
              open: config,
              close: config,
            }, title: 'Home' ,
            headerLeft: () => (
              <HeaderBackButton
                          

         onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.goBack()
        }}
                 title="Voltar"
                color="#d1ac83"
              />
            ),
          }}}/>
          <AppStack.Screen name="Nivel Inferior 01" component={NivelInferior1} 
          options={({navigation})=>{
            return{ 
            transitionSpec: {
              open: config,
              close: config,
            },headerLeft: () => (
              <HeaderBackButton
                          

         onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.goBack()
        }}title="Voltar"
        color="#d1ac83"
              />
            ),title: 'Home' ,
            headerRight: () => (
              <TouchableOpacity
              style={{marginRight:10,flexDirection:'row',justifyContent:'space-around'}}               
              onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.navigate('Nivel Inferior 02')
        }}           
              >
                <Text style={{fontSize:20,paddingRight:30}}>
                  Nivel Inferior 02
                </Text>
                <Feather color={'black'} name="arrow-right" size={25}  />
              </TouchableOpacity>
            )

            
          }}}/>
          <AppStack.Screen name="Nivel Inferior 02" component={NivelInferior2}
           options={({navigation})=>{
            return{ 
            transitionSpec: {
              open: config,
              close: config,
            },
            headerLeft: () => (
              <HeaderBackButton
                          

         onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.goBack()
        }}
        title="Voltar"
        color="#d1ac83"
              />
            ),title: 'Nivel Inferior 01' ,
            headerRight: () => (
              <TouchableOpacity
              style={{marginRight:10,flexDirection:'row',justifyContent:'space-around'}}               
              onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.navigate('Nivel Inferior 03')
        }}           
              >
                <Text style={{fontSize:20,paddingRight:30}}>
                  Nivel Inferior 03
                </Text>
                <Feather color={'black'} name="arrow-right" size={25}  />
              </TouchableOpacity>
            )
          }}}/>
          <AppStack.Screen name="Nivel Inferior 03" component={NivelInferior3} 
          options={({navigation})=>{
            return{ 
            transitionSpec: {
              open: config,
              close: config,
            },
            headerLeft: () => (
              <HeaderBackButton
                          

         onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.goBack()
        }}
                 title="Voltar"
                color="#d1ac83"
              />
            ),title: 'Nivel Inferior 02' ,
            headerRight: () => (
              <TouchableOpacity
              style={{marginRight:10,flexDirection:'row',justifyContent:'space-around'}}               
              onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.navigate('Nivel Inferior 04')
        }}           
              >
                <Text style={{fontSize:20,paddingRight:30}}>
                  Nivel Inferior 04
                </Text>
                <Feather color={'black'} name="arrow-right" size={25}  />
              </TouchableOpacity>
            )
          }}}/>
          <AppStack.Screen name="Nivel Inferior 04" component={NivelInferior4} 
          options={({navigation})=>{
            return{ 
            transitionSpec: {
              open: config,
              close: config,
            },
            headerLeft: () => (
              <HeaderBackButton
                          

         onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.goBack()
        }}
                 title="Voltar"
                color="#d1ac83"
              />
            ),title: 'Nivel Inferior 03' ,
            headerRight: () => (
              <TouchableOpacity
              style={{marginRight:10,flexDirection:'row',justifyContent:'space-around'}}               
              onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.navigate('Home')
        }}           
              >
                <Text style={{fontSize:20,paddingRight:30}}>
                  Home
                </Text>
                <Feather color={'black'} name="arrow-right" size={25}  />
              </TouchableOpacity>
            )
          }}}/>
          <AppStack.Screen name="Bomba 01" component={Bomba01} 
         options={({navigation})=>{
          return{ 
          transitionSpec: {
            open: config,
            close: config,
          },
          title: 'Home' ,
          headerLeft: () => (
            <HeaderBackButton
            title= 'Home' 
              color="#d1ac83"
                      

       onPress={()=> {
       // NativeModules.Newmodbusjava.stoptimertask();
        navigation.goBack()
      }}
               
            />
          ),
          headerRight: () => (
            <TouchableOpacity
            style={{marginRight:10,flexDirection:'row',justifyContent:'space-around'}}               
            onPress={()=> {
       // NativeModules.Newmodbusjava.stoptimertask();
        navigation.navigate('Bomba 02')
      }}
               
            >
              <Text style={{fontSize:20,paddingRight:30}}>
                Bomba 02
              </Text>
              <Feather color={'black'} name="arrow-right" size={25}  />
            </TouchableOpacity>
          )
        }}}/>
           <AppStack.Screen name="Bomba 02" component={Bomba02} 
           options={({navigation})=>{
            return{ 
            transitionSpec: {
              open: config,
              close: config,
            }, 
            headerLeft: () => (
              <HeaderBackButton
                          

         onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.goBack()
        }}
                 title="Voltar"
                color="#d1ac83"
              />
            ),title: 'Bomba 01' ,
            headerRight: () => (
              <TouchableOpacity
              style={{marginRight:10,flexDirection:'row',justifyContent:'space-around'}}               
              onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.navigate('Bomba 03')
        }}             
              >
                <Text style={{fontSize:20,paddingRight:30}}>
                  Bomba 03
                </Text>
                <Feather color={'black'} name="arrow-right" size={25}  />
              </TouchableOpacity>
            )
          }}}/>
           <AppStack.Screen name="Bomba 03" component={Bomba03}
            options={({navigation})=>{
              return{ 
              transitionSpec: {
                open: config,
                close: config,
              }, 
              headerLeft: () => (
                <HeaderBackButton  
           onPress={()=> {
           // NativeModules.Newmodbusjava.stoptimertask();
            navigation.goBack()
          }}/>
              ),title: 'Bomba 02' ,
              headerRight: () => (
                <TouchableOpacity
                style={{marginRight:10,flexDirection:'row',justifyContent:'space-around'}}               
                onPress={()=> {
           // NativeModules.Newmodbusjava.stoptimertask();
            navigation.navigate('Bomba 04')
          }}
                   
                >
                  <Text style={{fontSize:20,paddingRight:30}}>
                    Bomba 04
                  </Text>
                  <Feather color={'black'} name="arrow-right" size={25}  />
                </TouchableOpacity>
              )
            }}}/>
           <AppStack.Screen name="Bomba 04" component={Bomba04} 
           options={({navigation})=>{
            return{ 
            transitionSpec: {
              open: config,
              close: config,
            }, title: 'Bomba 03' ,
            headerLeft: () => (
              <HeaderBackButton
                          

         onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.goBack()
        }}
                 title="Voltar"
                color="#d1ac83"
              />
            ),headerRight: () => (
              <TouchableOpacity
              style={{marginRight:10,flexDirection:'row',justifyContent:'space-around'}}               
              onPress={()=> {
         // NativeModules.Newmodbusjava.stoptimertask();
          navigation.navigate('Home')
        }}
                 
              >
                <Text style={{fontSize:20,paddingRight:30}}>
                  Home
                </Text>
                <Feather color={'black'} name="arrow-right" size={25}  />
              </TouchableOpacity>
            )
          }}}/>
        </AppStack.Navigator>
      </CoilsProvider>
    </NavigationContainer>
   
  );
}
