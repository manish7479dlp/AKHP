import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { setUser } from '../store/UserSlice';


const UserData = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.data)
    const navigation = useNavigation()


    const logout = () => {
        dispatch(setUser({}))
        navigation.navigate("login")
    }

    return (
        <View style={styles.userContainer}>
            <Text style={styles.userName}>Hey, {userData?.data?.fullName.split(" ")[0]}</Text>
            <TouchableOpacity >
                <MaterialCommunityIcons onPress={logout} name="logout" size={24} color={color.first} />
            </TouchableOpacity>
        </View>
    )
}

export default UserData

const styles = StyleSheet.create({
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

    }
})