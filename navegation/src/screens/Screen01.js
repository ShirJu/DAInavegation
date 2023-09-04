import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Menu from '../components/Menu';
import BotonReutilizable from '../components/BotonReutilizable';

export default function Screen01({ navigation }){
 const handleOnPress = () =>  {
navigation.navigate('LoginScreen')
 }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Screen01</Text>
        <BotonReutilizable
          onPress={handleOnPress} 
          style={styles.logoutDiferente} 
          texto="Ir a Inicio Sesion" />
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
