import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import Screen01 from './src/screens/Screen01';
import Screen02 from './src/screens/Screen02';
import Screen03 from './src/screens/Screen03';
import Menu from './src/components/Menu';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">

        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{title:'Menu', headerStyle: {backgroundColor:'#ffff'}}}
          
        />
        
        <Stack.Screen 
          name="Screen01" 
          component={Screen01}
          options={{title:'Screen01'}}
          
        />
        
        
        <Stack.Screen 
          name="Screen02" 
          component={Screen02} 
          options={{title:'Screen02'}}
        />

        <Stack.Screen 
          name="Screen03" 
          component={Screen03} 
          options={{title:'Screen03'}}
        />
        
        <Stack.Screen name="Menu" component={Menu} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    //flex: divide el espacio en la cantidad de flex que ponga
    flex:1,
    justifyContent: 'center'
  },
});
