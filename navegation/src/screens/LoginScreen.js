import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
//import React, {useState, useRef} from 'react';
import UsuarioService from '../components/UsuarioService';
import MessageConstants from '../constants/MessageConstants';

//npm expo install expo-av nbiblioteca para el reproductor de video

//npm install react-native-image-picker biblioteca  para seleccionar el video 
//version react-native@0.72.5

import React, {useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';
import 'react-native-gesture-handler';
import imagePicker from 'react-native-image-picker';


export default function LoginScreen({ navigation }) {
  const video = React.useRef(null);
  // creo el estado para la url del video a seleccionar
  const [videoUri, setVideoUri] = useState(null);

  //funcion que abre la galeria y selecciona un video
  const openGallery = () => {
    const options = {
      title: 'Select Video',
      storageOptions:{
        skipBackup:true,
        path:'videos',
      }
    };
  
    imagePicker.launchImageLibrary(options, response => {
      if (response.errorCode) {
        console.log(response.errorMessage)
      } else if (response.didCancel){
        console.log('El usuario canceló la selección')
      } else {
        const path = response.assets[0].uri
        setVideoUri(path)
      }
      
    });
  };


  return (
    <View>

{videoUri && (
      <Video
        source={{ uri: videoUri }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        useNativeControls
        style={{ width: 300, height: 300 }}
      />
    )}

    <Button title="Seleccionar Video" onPress={openGallery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
});

/*
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

      <Videos/>

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
*/