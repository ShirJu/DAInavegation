import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import 'react-native-gesture-handler';

export default function LoginScreen({ navigation }){

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [clave, setClave] = useState('');

  const handleLogin = () => {
    console.log('login');

    //if (nombre == 'shirly') {
      navigation.navigate('Screen01');
    /*} else {
      alert("El nombre, la contraseña o la clave son incorrectas. Porfavor intentelo nuevamente");
    }*/
    
  }

  return (
    <View style={styles.container}>     

      <StatusBar style="auto" />

      <Image style={styles.imagen} source={require('C:/DAInavegation/navegation/assets/backgrounds/imagen.png')} />

      <Text style={styles.consigna}> Ingrese los datos del egresado... {'\n'}</Text>

      <Text style={styles.text}> Nombre: </Text>

      <TextInput
        style={styles.input}   
        placeholder= "Nombre..."
        onChangeText={setNombre}
      />

      <Text style={styles.text}> Apellido:</Text>

      <TextInput
        style={styles.input}   
        placeholder= "Apellido..."
        onChangeText={setApellido}
      />   

      <Text style={styles.text}> Clave: </Text>

      <TextInput
        style={styles.input}   
        placeholder= "Clave"
        onChangeText={setClave}
      />  

      <TouchableOpacity style={styles.boton} onPress={()=> handleLogin()}><Text style={styles.ingresar}>Ingresar</Text></TouchableOpacity>

    </View>
 
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  imagen: {
    width:100,
    height:100
  },
  text:{
    color: "#5820DB",
    fontSize : 20
  },
  input:{
    backgroundColor:'#ffffff',
    borderWidth: 2,
    height:50,
    margin:5
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
    alignContent: 'a',
    width:100,
    alignContent: 'center'
  },
  ingresar:{
    color:'#0C80E8'
  }
});