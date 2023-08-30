import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

export default function Menu({ navigation }){

    const irScreen01 = () => {
        navigation.navigate('Screen01');
    }
    
      const irScreen02 = () => {
        navigation.navigate('Screen02');
    }

      const irScreen03 = () => {
        navigation.navigate('Screen03');
    }
    

    return (
        <View>

        <TouchableOpacity style={styles.button} onPress={()=> irScreen01()}>
        <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> irScreen02()}>
        <Text>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={()=> irScreen03()}>
        <Text>3</Text>
        </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2196F3', // Color de fondo del botón
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderBlockColor:'#0000'
    },
  });

