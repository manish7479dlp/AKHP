import Login from './screens/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserNavigation from './navigation/userNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AdminNavigation from './navigation/AdminNavigation';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
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
        </Stack.Navigator>

      </NavigationContainer>


    </SafeAreaProvider>
  )
}

