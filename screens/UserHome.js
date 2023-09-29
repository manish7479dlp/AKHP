import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import color from "../constant/color"
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import MembersList from '../components/MembersList';
import MealDetails from '../components/MealDetails';
import UserData from '../components/UserData';

var { width, height } = Dimensions.get('window');


const UserHome = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <UserData />
                <MealDetails title={"Today Meal"} lunchMeal={"Chawal Dal Egg Curry"} dinnerMeal={"Chawal Dal Aalu Sabji"} />
                <MembersList mb={height * .5} />


            </View>
        </SafeAreaView>
    )
}


export default UserHome

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        // backgroundColor: color.third
    }
})