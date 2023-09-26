import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';

const SplashScreen=()=>{ 
    console.log('splashScreen');

    const navigation = useNavigation();

    useEffect(()=>{ 

        const automaticlogin = async () => {
            const isAuthenticated = await AuthManager.checkCredentials();
        }
        const onLoad=async()=>{ 
            await new Promise(resolve=>setTimeout(resolve,3000)); 
            navigation.navigate('LoginScreen');
        }; 

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

