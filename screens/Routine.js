import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MealDetails from '../components/MealDetails'
import UserData from '../components/UserData'

var { width, height } = Dimensions.get('window');

const Routine = () => {
    return (
        <SafeAreaView>
            <UserData />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.container}
            >
                <MealDetails title={"Monday "} lunchMeal={"Chawal Dal Egg Curry"} dinnerMeal={"Chawal Dal Aalu Sabji"} />
                <MealDetails title={"Tuesday"} lunchMeal={"Chawal Dal Egg Curry"} dinnerMeal={"Chawal Dal Aalu Sabji"} />
                <MealDetails title={"Today Meal"} lunchMeal={"Chawal Dal Egg Curry"} dinnerMeal={"Chawal Dal Aalu Sabji"} />

                <MealDetails title={"Today Meal"} lunchMeal={"Chawal Dal Egg Curry"} dinnerMeal={"Chawal Dal Aalu Sabji"} />
                <MealDetails title={"Today Meal"} lunchMeal={"Chawal Dal Egg Curry"} dinnerMeal={"Chawal Dal Aalu Sabji"} />
                <MealDetails title={"Today Meal"} lunchMeal={"Chawal Dal Egg Curry"} dinnerMeal={"Chawal Dal Aalu Sabji"} />
                <MealDetails title={"Today Meal"} lunchMeal={"Chawal Dal Egg Curry"} dinnerMeal={"Chawal Dal Aalu Sabji"} />

            </ScrollView>

        </SafeAreaView>
    )
}

export default Routine

const styles = StyleSheet.create({
    container: {
        marginBottom: height * .07
    }
})