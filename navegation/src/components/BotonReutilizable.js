import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
const BotonReutilizable = ({ onPress, style, texto }) => {


    return (  
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, style]}>

        <Text style={styles.buttonText}>{texto}</Text>

        </TouchableOpacity>
    ); 
            }
    const styles = StyleSheet.create({
        buttonContainer: { 
        width: '100%', 
        backgroundColor: '#007AFF',
        borderRadius: 50, 
        paddingVertical: 12, 
        marginTop: 15, 
        alignContent:'center',
        display:"flex",
        position:"relative"
       
        },
        buttonText: { 
            color: '#fff', 
            fontSize: 16, 
            textAlign: 'center'
        }
});
export default BotonReutilizable;