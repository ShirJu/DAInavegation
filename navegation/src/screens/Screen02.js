import React from 'react';
import { StyleSheet, View, Text , ToastAndroid} from 'react-native';
import Menu from '../components/Menu';
import UsuarioService from '../components/UsuarioService';
import BotonReutilizable from '../components/BotonReutilizable';
import MessageConstants from '../constants/MessageConstants';

let usuarioService = new UsuarioService();

export default function Screen02({ navigation }){

  const butoonEliminarAsyncStorage = async() => {
    await usuarioService.eliminarCredenciales();
    ToastAndroid.show(MessageConstants.MSG_ASYNC_SE_HAN_ELIMINADO_LOS_DATOS, ToastAndroid.SHORT);
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Screen02</Text>
        <BotonReutilizable
          onPress={butoonEliminarAsyncStorage} 
          style={styles.logoutDiferente} 
          texto="ELIMINAR ASYNCSTORAGE" />
        <Menu navigation={ navigation }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2be67c',
    alignText: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize : 20,
    textAlign: 'center',
    marginTop:350

  },
});