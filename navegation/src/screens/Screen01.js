import React from 'react';
import { StyleSheet, View, Text,Alert} from 'react-native';
import Menu from '../components/Menu';
import BotonReutilizable from '../components/BotonReutilizable';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import UsuarioService from '../components/UsuarioService';

let usuarioService = new UsuarioService();

export default function Screen01({ navigation }){

  const butoonAsyncStorage = async() => {
    let contenido = await usuarioService.obtenerCredenciales();
    Alert.alert("El contenido del AsyncStorage es: " , JSON.stringify(contenido));
  }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Screen01</Text>
          <BotonReutilizable
          onPress={butoonAsyncStorage} 
          style={styles.logoutDiferente} 
          texto="VER ASYNCSTORAGE" />
        <Menu navigation={ navigation }/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    alignText: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize : 20,
    textAlign: 'center',
    marginTop:350

  },
});
