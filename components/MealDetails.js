import { Alert, Button, Dimensions, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';
import { editRoutineById } from "../Helper/api"

import color from "../constant/color"
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

var { width, height } = Dimensions.get('window');



const MealDetails = ({ id, title, lunchMeal, dinnerMeal, edit = true }) => {
    const navigation = useNavigation()

    const editMealDetails = () => {
        navigation.navigate("editMeal", {
            title, id, lunchMeal, dinnerMeal
        })
    }


    return (
        <View style={styles.mealInfoContainer}>
            <View style={styles.mealHeaderContainer}>
                <Text style={{ color: "white", fontSize: 18, fontWeight: "600", marginBottom: 7 }}>{title}</Text>
                {edit && (<TouchableOpacity onPress={editMealDetails}>
                    <Feather name="edit" size={24} color="white" />
                </TouchableOpacity>)}

            </View>
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
    mealHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: "red",
        padding: 5

    },
    meal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5
    },


})