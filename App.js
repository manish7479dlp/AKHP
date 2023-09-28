import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserHome from './screens/UserHome';
import MembersList from './components/MembersList';
import UserNavigation from './navigation/userNavigation';

export default function App() {
  return (
    <SafeAreaProvider>

      <UserNavigation />

    </SafeAreaProvider>
  )
}

