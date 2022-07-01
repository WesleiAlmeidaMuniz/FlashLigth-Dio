import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = ()=>{
  const [toogle, setToogle] = useState(false);

  const handleChangeToogle = () => setToogle(oldToogle=>!oldToogle)

  useEffect(() => {
    //Liga Flash do Celular
    Torch.switchState(toogle);
  },[toogle]);

  useEffect(()=>{
    /* 
    * quando o celular for chacoalhado, mudaremos o toogle
    */
    const subscription = RNShake.addListener(() =>{
      setToogle(oldToogle=>!oldToogle);
    });

    //essa funcao vai ser chamada quando o components
    //for ser desmontado
    return () => subscription.remove();
  }, []);

  return (
  <View style={toogle ? style.containerligth:style.container}>
    <TouchableOpacity 
      onPress={handleChangeToogle}>
      <Image 
      style={toogle ? style.lightingon : style.lightingoff} 
      source={
        toogle 
        ? require('./assets/icons/eco-light.png')
        : require('./assets/icons/eco-light-off.png')} 
        />
      <Image 
      style={style.diologo} 
      source={
        toogle 
        ? require('./assets/icons/logo-dio.png')
        : require('./assets/icons/logo-dio-white.png')} 
        /> 
    </TouchableOpacity>
  </View>);
};

export default App

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerligth:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingon:{
    resizeMode:'contain',
    alignSelf: 'center',
    width: 150,
    height:150,
  },
  lightingoff:{
    resizeMode:'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height:150,
  },
  diologo:{
    resizeMode:'contain',
    alignSelf: 'center',
    width: 250,
    height:250,
  },
  
});