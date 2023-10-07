import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/UserSlice';
const { width, height } = Dimensions.get('screen')
const USER = 'user'

const SplashScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();


    const getData = async (key) => {
        try {
            let data = await AsyncStorage.getItem(key);
            data = JSON.parse(data)
            console.log(data)
            if (data) {
                dispatch(setUser(data))
                if (data?.data?.role === 'admin') {
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{ name: "admin" }]
                    }))
                } else if (data?.data?.role === 'user') {
                    navigation.dispatch(CommonActions.reset({
                        index: 0,
                        routes: [{ name: "user" }]
                    }))
                }

            } else {
                navigation.dispatch(CommonActions.reset({
                    index: 0,
                    routes: [{ name: "login" }]
                }))
            }
        } catch (error) {

            console.log(error)
        }
    };


    useEffect(() => {
        getData(USER)
    }, [])
    return (

        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.container}>
                <Image style={styles.img} source={require("../assets/splash.png")} />
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: height,
        width: width * .5
    },
    safeAreaView: {
        backgroundColor: 'transparent'
    }
})