//npmi@react-native-async-storage/async-storage 
//Definicionesdeconstantes. 
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
          const storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
          const storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
      
          if (storedUserName && storedPassword) {
            return {
              userName: storedUserName,
              password: storedPassword,
            };
          } else {
            return null; // No stored credentials
          }
        } catch (error) {
          // Handle error if needed
          return null; // Return null in case of an error
        }
      };
}
      

export default UsuarioService;

