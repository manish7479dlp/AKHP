import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, Fontisto, MaterialIcons, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';

import Routine from '../screens/Routine';
import Expences from '../screens/Expences';

import color from "../constant/color"
import Member from '../screens/Member';
import UserHome from "../screens/UserHome"
import Items from '../screens/Items';


const Tab = createBottomTabNavigator();

const AdminNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Admin" component={UserHome} options={
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


            <Tab.Screen name="routine" component={Routine} options={
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

            <Tab.Screen name="Member" component={Member} options={
                {
                    headerShown: false,
                    tabBarLabel: "Member",
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            focused ? (<Ionicons name="person-add" size={size} color={color} />) : (<Ionicons name="person-add-outline" size={24} color="black" />)
                        )
                    }
                }
            } />

            <Tab.Screen name="Items" component={Items} options={
                {
                    headerShown: false,
                    tabBarLabel: "Items",
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            focused ? (<AntDesign name="pluscircle" size={size} color={color} />) : (<AntDesign name="pluscircleo" size={24} color="black" />)
                        )
                    }
                }
            } />



            <Tab.Screen name="expences" component={Expences} options={
                {
                    headerShown: false,
                    tabBarLabel: "Expences",
                    tabBarIcon: ({ focused, color, size }) => {
                        return (
                            focused ? (<FontAwesome5 name="rupee-sign" size={size} color={color} />) : (<FontAwesome name="rupee" size={size} color="black" />)
                        )
                    }
                }
            } />



        </Tab.Navigator>
    );
}

export default AdminNavigation