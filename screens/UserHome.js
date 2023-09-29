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
                <Member />

            </View>
        </SafeAreaView>
    )
}



const Member = () => {
    return (
        <View style={styles.memberContainer}>
            <Text style={styles.title}>Active Members</Text>
            <MembersList mb={height * .572} />
        </View>
    )
}

export default UserHome

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        // backgroundColor: color.third
    },
    title: {
        fontWeight: "600",
        color: color.first,
        fontSize: 20,
        paddingLeft: 15
    },
    memberContainer: {
        backgroundColor: color.background,
    }
})