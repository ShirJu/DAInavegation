//npmi@react-native-async-storage/async-storage 
//Definicionesdeconstantes. 
import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

    };

    static almacenarCredenciales = async (userName, password) => {
        //Almacena  las credenciales en el asyncStorage (para leer las al iniciar la próxima vez) 
    };

    static obtenerCredenciales = async () => {
        try {
          // Obtener los valores almacenados en AsyncStorage
          const storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
          const storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
      
            // Verificar si los valores existen en AsyncStorage
          if (storedUserName !== null && storedPassword !== null) {
            // Los valores existen, puedes utilizarlos para la autenticación
            navigation.navigate('Home');
            /*return {
              userName: storedUserName,
              password: storedPassword,
            };*/ 
          } else {
            navigation.navigate('LoginScreen');
          }
        } catch (error) {
          console.error('Error al acceder a AsyncStorage:', error);
        }
      };
}
      

export default UsuarioService;

