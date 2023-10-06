import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import UsuarioService from '../components/UsuarioService';

export default function SplashScreen({navigation}){ 
    console.log('splashScreen');
    let usuarioService = new UsuarioService();
    const onLoad = async() => { 
        
        if (usuarioService.automaticlogin()) {
            navigation.navigate('Screen01');
             
                
        } else {
                
            navigation.navigate('LoginScreen'); 
        } 
    }; 

    useEffect(()=>{ 
        
     setTimeout(onLoad,3000); 
        
    },[])

    return( 
         <View style={[styles.container, styles.horizontal]}> 
              <ActivityIndicator size="small" color="#0000ff" /> 
         </View> 
    )
}
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        horizontal: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
        },
});
  

