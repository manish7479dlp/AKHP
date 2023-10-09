import { Alert, Dimensions, Modal, Pressable, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { setUser } from '../store/UserSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const USER = 'user'

const { width, height } = Dimensions.get('screen')



const UserData = () => {
    const userData = useSelector((state) => state.user.data)
    const [visible, setVisible] = useState(false)


    return (
        <View style={styles.userContainer}>
            <Text style={styles.userName}>Hey, {userData?.data?.fullName.split(" ")[0]}</Text>
            <TouchableOpacity onPress={() => (setVisible(!visible))}>
                <Entypo name="dots-three-vertical" size={24} color={color.first} />
            </TouchableOpacity>

            <CustomModal visible={visible} setVisible={setVisible} />
        </View>
    )
}

export default UserData

const CustomModal = ({ visible, setVisible }) => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    const handleProfile = () => {
        navigation.navigate("profile")
        setVisible(false)
    }

    const removeValue = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
        } catch (error) {
            console.log(error)
        }

    }

    const handleLogout = () => {
        dispatch(setUser({}))
        removeValue(USER)
        navigation.navigate("login")
        setVisible(false)
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => { setVisible(false) }}
        >
            <View style={styles.modalContentContainer}>
                <TouchableOpacity style={styles.btnContainer} onPress={handleProfile}>
                    <AntDesign name="user" size={20} color={color.first} />
                    <Text style={styles.btnLabel}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={handleLogout}>
                    <MaterialCommunityIcons name="logout" size={20} color={color.first} />
                    <Text style={styles.btnLabel}>Logout</Text>
                </TouchableOpacity>
            </View>
            <TouchableWithoutFeedback onPress={() => { setVisible(false) }}>
                <View style={styles.overlay}>
                </View>
            </TouchableWithoutFeedback>

        </Modal>
    )
}

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

    },
    modalContentContainer: {
        position: 'absolute',
        right: 0,
        top: 50,
        marginRight: 10,
        padding: 5,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    btnContainer: {
        width: 100,
        padding: 3,
        borderRadius: 5,
        margin: 5,
        backgroundColor: color.background,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnLabel: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: color.second,
        marginLeft: 3,
    },
    overlay: {
        height: height,
        width: width,
        position: 'absolute',
        top: 0,
        marginTop: 170,
    }
})