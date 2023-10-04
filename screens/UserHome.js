import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import color from "../constant/color"
import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';
import MembersList from '../components/MembersList';
import MealDetails from '../components/MealDetails';
import UserData from '../components/UserData';
import { getRoutineDayWise } from '../Helper/api';
import { useSelector } from 'react-redux';


var { width, height } = Dimensions.get('window');


const UserHome = () => {
    const [meal, setMeal] = useState()
    const userData = useSelector((state) => state.user.data)


    useEffect(() => {
        getRoutine()
    }, [])

    const getRoutine = async () => {
        try {
            const token = userData.token
            const response = await getRoutineDayWise(token)
            setMeal(response.routine)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <UserData />
                <MealDetails title={"Today Meal"} lunchMeal={meal?.lunch} dinnerMeal={meal?.dinner} edit={false} />
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