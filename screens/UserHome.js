import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import color from "../constant/color"
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import MembersList from '../components/MembersList';

var { width, height } = Dimensions.get('window');


const UserHome = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <UserData />
                <MealInfo />
                <Member />

            </View>
        </SafeAreaView>
    )
}

const UserData = () => {
    return (
        <View style={styles.userContainer}>
            <Text style={styles.userName}>Hey, Manish</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name="logout" size={24} color={color.first} />
            </TouchableOpacity>
        </View>
    )
}

const MealInfo = () => {
    return (
        <View style={styles.mealInfoContainer}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 7 }}>Today Meal</Text>
            <View>
                <View style={styles.meal}>
                    <Text style={{ color: "white", fontWeight: "500" }}>
                        <Feather name="sun" size={20} color="white" />  Lunch :
                    </Text>
                    <Text style={{ color: "white", fontWeight: "450" }}> Chawal , Dal , Aalu Sabji</Text>
                </View>
                <View style={styles.meal}>
                    <Text style={{ color: "white", fontWeight: "500" }}>
                        <Ionicons name="cloudy-night-outline" size={20} color={"white"} />  Dinner :
                    </Text>
                    <Text style={{ color: "white", fontWeight: "450" }}>Chawal , Dal , Aalu Sabji</Text>
                </View>
            </View>
        </View >
    )
}

const Member = () => {
    return (
        <View style={styles.memberContainer}>
            <Text style={styles.title}>Active Members</Text>
            <MembersList />
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
    userContainer: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: color.background,
    },
    userName: {
        fontWeight: "600",
        color: color.first,
        fontSize: 20

    },
    mealInfoContainer: {
        padding: 10,
        backgroundColor: color.second,
        margin: 10,
        borderRadius: 10,

    },
    meal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5
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