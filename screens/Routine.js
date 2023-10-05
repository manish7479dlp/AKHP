import { Dimensions, FlatList, StyleSheet, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MealDetails from '../components/MealDetails'
import UserData from '../components/UserData'
import { getAlltRoutine } from '../Helper/api'
import { useSelector } from 'react-redux';


var { height } = Dimensions.get('window');

const Routine = () => {
    const [routine, setRoutine] = useState();
    const [refreshing, setRefreshing] = React.useState(false);
    const userData = useSelector((state) => state.user.data)


    useEffect(() => {
        const getRoutine = async () => {
            try {
                const token = userData.token
                const response = await getAlltRoutine(token);
                setRoutine(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        getRoutine();
    }, [refreshing])


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);





    return (
        <SafeAreaView>
            <UserData />
            <FlatList style={{ marginBottom: 52 }}
                showsVerticalScrollIndicator={false}
                data={routine}
                renderItem={({ item }) => (

                    <MealDetails id={item._id} title={item.day.charAt(0).toUpperCase() + item.day.slice(1)} lunchMeal={item.lunch} dinnerMeal={item.dinner} edit={userData.data.role === 'admin'} />

                )}
                keyExtractor={item => item.day}

                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }

            />

        </SafeAreaView>
    )
}

export default Routine

const styles = StyleSheet.create({
    container: {
        marginBottom: height * .07
    }
})