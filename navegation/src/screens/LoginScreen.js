import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, TextInput} from 'react-native';
import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const LoginScreen = ({navegation}) =>{
    const[nombre, setNombre] = useState('');
    const[clave, setClave] = useState('');

    const handleLogin = () => {
        console.log('login');
    }
}




export default function App() {
  return (
    <SafeAreaView rstyle={styles.container}>
    <View >     
      <StatusBar style="auto" />
      
      <Text style={styles.consigna}> Ingrese los datos del egresado... {'\n'}</Text>

      <Text> Nombre: {'\n'}</Text>

      <TextInput
        style={styles.input}   
        placeholder= "Nombre..."
      />

      <Text> Apellido: {'\n'}</Text>

      <TextInput
        style={styles.input}   
        placeholder= "Apellido..."
      />   

      <Text> Clave: {'\n'}</Text>

      <TextInput
        style={styles.input}   
        placeholder= "Clave"
      />  

    </View>

  </SafeAreaView>

  
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