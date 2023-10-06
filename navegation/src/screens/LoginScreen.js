import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useRef} from 'react';
import 'react-native-gesture-handler';
import UsuarioService from '../components/UsuarioService';
import MessageConstants from '../constants/MessageConstants';

export default function LoginScreen({ navigation }){
  let usuarioService = new UsuarioService();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [clave, setClave] = useState('');

  const handleLogin =  async () => {
    console.log('login');

    const isValid = await usuarioService.login(nombre, clave);

   if (isValid){
      await usuarioService.almacenarCredenciales(nombre,clave);
      navigation.navigate('Screen01');

    } else {
      Alert.alert(MessageConstants.MSG_USUARIO_O_CLAVE_INVALIDA);
    }
    
  }

  const passwordRef=useRef();

  return (
    <View style={styles.container}>     

      <StatusBar style="auto" />

      <Image style={styles.imagen} source={require('C:/DAInavegation/navegation/assets/backgrounds/login.jpg')}/> 

      <Text style={styles.consigna}> Ingrese los datos del egresado... </Text>

      <Text style={styles.text}> Nombre: </Text>
      <TextInput
        style={styles.input}   
        placeholder= "Nombre..."
        onChangeText={setNombre}
        onSubmitEditing={ ()=> {passwordRef.current.focus(); }}
      />

      <Text style={styles.text}> Clave: </Text>
      <TextInput
        style={styles.input}   
        placeholder= "Clave..."
        onChangeText={setClave}
        ref={passwordRef}
      />  

      <TouchableOpacity style={styles.boton} onPress={handleLogin}><Text style={styles.ingresar}>Ingresar</Text></TouchableOpacity>

    </View>
 
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },
  imagen: {
    width:200,
    height:200  
  },
  text:{
    color: "#0C80E8",
    fontSize : 15,
    padding:8
  },
  input:{
    backgroundColor:'#ffffff',
    borderWidth: 2,
    height:50,
    margin:5,
    borderRadius:50,
    padding:10
  },
  consigna:{
    color:'#0C80E8',
    fontSize : 30,
    textAlign: 'center'
  },
  boton:{
    backgroundColor:'#0C80E8',
    borderWidth: 2,
    height:50,
    margin:5,
    width:100,
    borderRadius:50,
    padding:10,
   
  },
  ingresar:{
    color:'#ffffff',
    textAlign: 'center'
  }
});