import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MealDetails from '../components/MealDetails'
import UserData from '../components/UserData'
import { getAlltRoutine } from '../Helper/api'

var { width, height } = Dimensions.get('window');

const Routine = () => {
    const [routine, setRoutine] = useState();

    useEffect(() => {

        const getRoutine = async () => {
            try {
                const response = await getAlltRoutine();
                setRoutine(response.data);

            } catch (error) {
                console.log(error)
            }
        }
        getRoutine();

    }, [])




    return (
        <SafeAreaView>
            <UserData />
            <FlatList style={{ marginBottom: 52 }}
                data={routine}
                renderItem={({ item }) => (

                    <MealDetails title={item.day.charAt(0).toUpperCase() + item.day.slice(1)} lunchMeal={item.lunch} dinnerMeal={item.dinner} />

                )}
                keyExtractor={item => item.day}
            />


            {/* <ScrollView
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

            </ScrollView> */}

        </SafeAreaView>
    )
}

export default Routine

const styles = StyleSheet.create({
    container: {
        marginBottom: height * .07
    }
})