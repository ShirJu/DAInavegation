import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


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
        <View style={styles.container}>

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
    container:{
        display:"flex",
        backgroundColor:'#FFFFFF',
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        height:55,
        position:"absolute",
        bottom:0
    },
    button: {
        width:"33%",
        height:"100%",
        display:"flex",
        flexDirection: "row",
        justifyContent:"center",
        padding:11
    },
  });

