//npmi@react-native-async-storage/async-storage 

import AsyncStorage  from '@react-native-async-storage/async-storage';

const USERNAME_KEY='LOGIN_username';
const PASSWORD_KEY='LOGIN_password';

class UsuarioService {

  login = async(userName, password) => { 
    //Obtiene las credenciales almacenadas e intenta loguearse. 
    let isValid;

    try {            
        if (userName == 'Shirly' && password == 'hola'){

            isValid = true;

        } else {

            isValid = false;
        }  

        return isValid; 

    } catch(error){

        return false;
    }
    
  };
    
  automaticlogin = async() => { 
    //Obtiene las credenciales almacenadas e intenta loguearse.  
    try {
        let userName = await AsyncStorage.getItem(USERNAME_KEY);
        let password = await AsyncStorage.getItem(PASSWORD_KEY);
        let isValid;
        
        if (userName == 'Shirly' && password == 'hola'){
            isValid = true;
        } else {
            isValid = false;
        }             
        return isValid; 

    } catch(error){
        return false;
    }
  };

  eliminarCredenciales = async() => { 
    //Elimina las credenciales almacenadas al cerrar sesión 
    try {
        await AsyncStorage.removeItem(USERNAME_KEY); 
        await AsyncStorage.removeItem(PASSWORD_KEY); 

    } catch(error) {

        console.log(error);
    }
  };

  almacenarCredenciales = async(userName,password) => { 
        //Almacena las credenciales en el asyncStorage 
        try {    
            await AsyncStorage.setItem(USERNAME_KEY, userName);  
            await AsyncStorage.setItem(PASSWORD_KEY, password); 

        } catch(error) {    
            console.log(error);
        }
    }; 

  obtenerCredenciales = async() => { 
     
    let storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
    let storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
    const returnValue = {'userName':storedUserName, 'password':storedPassword}; 
   
    return returnValue; 
  }; 
}
      

export default UsuarioService;

