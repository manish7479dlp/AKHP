import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';


const MealDetails = ({ title, lunchMeal, dinnerMeal }) => {
    return (
        <View style={styles.mealInfoContainer}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 7 }}>{title}</Text>
            <View>
                <View style={styles.meal}>
                    <Text style={{ color: "white", fontWeight: "500" }}>
                        <Feather name="sun" size={20} color="white" />  Lunch :
                    </Text>
                    <Text style={{ color: "white", fontWeight: "400" }}>{lunchMeal}</Text>
                </View>
                <View style={styles.meal}>
                    <Text style={{ color: "white", fontWeight: "500" }}>
                        <Ionicons name="cloudy-night-outline" size={20} color={"white"} />  Dinner :
                    </Text>
                    <Text style={{ color: "white", fontWeight: "400" }}>{dinnerMeal}</Text>
                </View>
            </View>
        </View >
    )
}

export default MealDetails

const styles = StyleSheet.create({
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
})