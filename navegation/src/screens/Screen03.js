import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Menu from '../components/Menu';
import BotonReutilizable from './../components/BotonReutilizable';

export default function Screen03({navigation}){
  const handleOnPress = () =>  {
    navigation.navigate('Screen01')
     }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Screen03</Text>
        <BotonReutilizable 
         onPress={handleOnPress} 
         style={styles.logoutDiferente} 
          texto="Ir a pantalla 1" />
        
        <Menu navigation={navigation}></Menu>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FA300C',
    alignText: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize : 20,
    textAlign: 'center',
    marginTop:350
  },
  logoutDiferente: { backgroundColor: '#B30427'},
});
