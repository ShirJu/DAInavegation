//npmi@react-native-async-storage/async-storage 
//Definicionesdeconstantes. 
import { AsyncStorage } from 'react-native';

import 'react-native-gesture-handler';

const USERNAME_KEY = 'LOGIN_username';
const PASSWORD_KEY = 'LOGIN_password';

class UsuarioService {
    static login = async (userName, password) => {
        //Obtiene las credenciales almacenadas e intenta loguearse. 
        let isValid = false;
        return isValid;
    };

    static automaticlogin = async () => {
        //Obtiene las credenciales almacenadas e intenta loguearse. 
        let isValid = false;
        return isValid;
    };

    //Elimina las credenciales almacenadas al cerrar sesión 
    static eliminarCredenciales = async () => {
      console.log('UsuarioService.eliminarCredenciales');

      try{
        await AsyncStorage.removeItem(USERNAME_KEY);
        await AsyncStorage.removeItem(PASSWORD_KEY);

      } catch (error){
        console.error('Error al remover en el asyncStorage.', error);
      }

    };

    static almacenarCredenciales = async (userName, password) => {
        //Almacena  las credenciales en el asyncStorage (para leer las al iniciar la próxima vez) 
        console.log('UsuarioService.amacenarCredenciales');
        try{
          await AsyncStorage.setItem(USERNAME_KEY, userName);
          await AsyncStorage.setItem(PASSWORD_KEY, password);
        }catch (error){
          console.error('Error al remover en el asyncStorage.', error);
        }
    };

    static obtenerCredenciales = async () => {
      let storedUserName = null;
      let storedPassword = null;

        try {
          // Obtener los valores almacenados en AsyncStorage
           storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
           storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);

        } catch(error){

          console.error('Error al almacenar el asyncStorage',error)
        }
          const returnValue={'username': storedUserName, 'password': storedPassword};

          console.log('UsuarioService.obtenerCredenciales', returnValue);

          return returnValue;
      };

      static almacenarCredenciales=async(username,password)=>{

        console.log('UsuarioService.almacenarCredenciales');
        try{

          await AsyncStorage.setItem(USERNAME_KEY,username);
          await AsyncStorage.setItem(PASSWORD_KEY,password);
        } catch(error){

          console.error('Error al almacenar en el asyncStorage')
        }
      }; 
      static eliminarCredenciales=async()=>{

        console.log('UsuarioService.eliminarCredenciales');
        try{

          await AsyncStorage.removeItem(USERNAME_KEY);
          await AsyncStorage.removeItem(PASSWORD_KEY);
        } catch(error){

          console.error('Error al remover el asyncStorage',error)
        }
      }; 
}
      

export default UsuarioService;

