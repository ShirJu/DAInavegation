import React, {useEffect} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import CryptoJS from 'react-native-crypto-js';
import { useNavigation } from '@react-navigation/native'; 


const SplashScreen=()=>{ 

    const navigation = useNavigation();

    useEffect(()=>{ 

        const checkAuthentication = async () => {
            const isAuthenticated = await AuthManager.checkCredentials();
        }
        const onLoad=async()=>{ 
            await new Promise(resolve=>setTimeout(resolve,3000)); 
        }; 
        onLoad();//InvocoelmétodoasincrónicoonLoadluegodedefinirsucuerpo. 
        
        return()=>{ 
            // 
        }; 
        },[]); 

        return( 
            <View style={styles.container}> 
                <ActivityIndicator size="large"/> 
            </View> 
    ); 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default SplashScreen;

