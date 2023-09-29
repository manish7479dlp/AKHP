import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';


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