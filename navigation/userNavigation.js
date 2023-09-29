import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserHome from '../screens/UserHome';
import Attendance from '../screens/Attendance';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign, Entypo, Fontisto, MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
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
                        tabBarLabel: "Home",
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                focused ? (<Entypo name="home" size={size} color={color} />) : (<AntDesign name="home" size={24} color="black" />)
                            )
                        }
                    }
                } />
                <Tab.Screen name="Routine" component={Routine} options={
                    {
                        headerShown: false,
                        tabBarLabel: "Routine",
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                focused ? (<MaterialIcons name="date-range" size={size} color={color} />) : (<Fontisto name="date" size={24} color="black" />)
                            )
                        }
                    }
                } />
                <Tab.Screen name="Attendance" component={Attendance} options={
                    {
                        headerShown: false,
                        tabBarLabel: "Attendance",
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                focused ? (<FontAwesome name="hand-stop-o" size={size} color={color} />) : (<FontAwesome name="hand-stop-o" size={size} color="black" />)
                            )
                        }
                    }
                } />
                <Tab.Screen name="Expances" component={Expances} options={
                    {
                        headerShown: false,
                        tabBarLabel: "Expances",
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                focused ? (<FontAwesome5 name="rupee-sign" size={size} color={color} />) : (<FontAwesome name="rupee" size={size} color="black" />)
                            )
                        }
                    }
                } />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default UserNavigation