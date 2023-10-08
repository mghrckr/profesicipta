import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import store from "./src/store"

import LoginScreen from './src/screens/LoginScreen';
import AfterLogin from './src/screens/AfterLogin';
import SecurityScreen from './src/screens/SecurityScreen';
import SalesOrderList from './src/screens/SalesOrderList';
import SalesOrderInput from './src/screens/SalesOrderInput';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AfterLogin" component={AfterLogin} options={{ headerShown: false }} />
          <Stack.Screen name="SecurityScreen" component={SecurityScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SalesOrderList" component={SalesOrderList} options={{ headerShown: false }} />
          <Stack.Screen name="SalesOrderInput" component={SalesOrderInput} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

