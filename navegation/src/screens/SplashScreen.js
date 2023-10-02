import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';

import UsuarioService from '../components/UsuarioService';

const SplashScreen=()=>{ 
    console.log('splashScreen');

    const navigation = useNavigation();

    useEffect(()=>{ 
        const onLoad=async()=>{ 
            await new Promise(resolve=>setTimeout(resolve,3000)); 

            const isAuthenticated = await UsuarioService.obtenerCredenciales();
    
        }; 
        /*
        const automaticlogin = async () => {
            const isAuthenticated = await UsuarioService.obtenerCredenciales();
        }
        */
       

        onLoad();
        
        return()=>{ 
            // 
        }; 
        },[]); 

        return( 
            <View style={[styles.container, styles.horizontal]}> 
                 <ActivityIndicator size="small" color="#0000ff" /> 
            </View> 
    ); 
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
  
  export default SplashScreen;

