import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Screen01 from './Screen01';

export default function LoginScreen({ navigation }){

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [clave, setClave] = useState('');

  const handleLogin = () => {
    console.log('login');
    navigation.navigate('Screen01');
  }

  return (
    <View style={styles.container}>     

      <StatusBar style="auto" />

      <Text style={styles.consigna}> Ingrese los datos del egresado... {'\n'}</Text>

      <Text> Nombre: {'\n'}</Text>

      <TextInput
        style={styles.input}   
        placeholder= "Nombre..."
        onChangeText={setNombre}
      />

      <Text> Apellido: {'\n'}</Text>

      <TextInput
        style={styles.input}   
        placeholder= "Apellido..."
        onChangeText={setApellido}
      />   

      <Text> Clave: {'\n'}</Text>

      <TextInput
        style={styles.input}   
        placeholder= "Clave"
        onChangeText={setClave}
      />  

      <TouchableOpacity onPress={()=> handleLogin()}><Text>Ingresar</Text></TouchableOpacity>

    </View>
 
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    //flex: divide el espacio en la cantidad de flex que ponga
    flex:1,
    justifyContent: 'center'
  },
  text:{
    color: "#FF5733",
    fontSize : 20,
    backgroundColor: '#FFFFFF',
    textAlign: 'center'
    
  },
  input:{
    backgroundColor:'#ffffff',
    borderWidth: 2
    
  },
  consigna:{
    color:'#FFFFFF',
    fontSize : 15,
    textAlign: 'center'
  },
});