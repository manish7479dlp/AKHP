import Login from './screens/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AdminNavigation from './navigation/AdminNavigation';
import UserNavigation from './navigation/UserNavigation';
import { Provider } from 'react-redux';
import Store from "./store/Store.js"
import DevSection from './screens/DevSection';
import EditMeal from './screens/EditMeal';
import SplashScreen from './screens/SplashScreen';
import ChangePassword from './screens/ChangePassword';
import Profile from './components/Profile';
import CreatePassword from './screens/CreatePassword';


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={Store}>
      <SafeAreaProvider >
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
            }} name='splashScreen' component={SplashScreen} />

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
            }} name='createPassword' component={CreatePassword} />

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
            }} name='changePassword' component={ChangePassword} />

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
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
            }} name='devloper' component={DevSection} />

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
            }} name='editMeal' component={EditMeal} />

            <Stack.Screen options={{
              headerShown: false,
              animation: 'slide_from_right'
            }} name='profile' component={Profile} />
          </Stack.Navigator>

        </NavigationContainer>

      </SafeAreaProvider>
    </Provider>



  )
}

