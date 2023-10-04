import Login from './screens/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AdminNavigation from './navigation/AdminNavigation';
import UserNavigation from './navigation/UserNavigation';
import { Provider } from 'react-redux';
import Store from "./store/Store.js"
import { Text, View } from 'react-native';
import Developer from './screens/Developer';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <SafeAreaProvider >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen options={{
              headerShown: false
            }} name='login' component={Login} />

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
            }} name='user' component={UserNavigation} />

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
            }} name='admin' component={AdminNavigation} />

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
            }} name='devloper' component={Developer} />
          </Stack.Navigator>

        </NavigationContainer>

      </SafeAreaProvider>
    </Provider>


  )
}

