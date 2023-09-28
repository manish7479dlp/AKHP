import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHome from '../screens/UserHome';
import Attendance from '../screens/Attendance';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Routine from '../screens/Routine';
import Expances from '../screens/Expances';

const Tab = createBottomTabNavigator();

const UserNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="UserHome" component={UserHome} options={
                    {
                        headerShown: false,
                        // tabBarShowLabel: false,
                        // tabBarIcon: ({ color, size }) => (
                        //     <AntDesign name="home" size={24} color="black" />
                        // )
                    }
                } />
                <Tab.Screen name="Routine" component={Routine} />

                <Tab.Screen name="Attendance" component={Attendance} />
                <Tab.Screen name="Expances" component={Expances} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default UserNavigation