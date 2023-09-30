import { Alert, Button, Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';

import color from "../constant/color"
var { width, height } = Dimensions.get('window');



const MealDetails = ({ title, lunchMeal, dinnerMeal, edit = true }) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const editMealDetails = () => {
        setIsModalVisible(true);
        // Alert.alert(isModalVisible)
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

            {/* modal  */}

            <Modal
                visible={isModalVisible}
                // onRequestClose={setIsModalVisible(false)}
                animationType="slide"
                transparent
            >

                <View style={styles.editMealContainer}>
                    {/* <Text style={{ backgroundColor: "green", padding: 10, color: "white", fontWeight: '700' }}>hlw from the other side...</Text> */}
                    <EditRoutine setIsModalVisible={setIsModalVisible} />
                    {/* <Button title="close" onPress={() => setIsModalVisible(false)} /> */}
                </View>

            </Modal>
        </View >

    )
}

const EditRoutine = ({ setIsModalVisible }) => {
    const [moibileNumber, setMobileNumber] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {



    }
    return (
        <View style={styles.editRoutineContainer}>
            <Text style={styles.title}>Monday</Text>
            <View style={styles.content}>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Lunch
                    </Text>
                    <TextInput maxLength={30} onChangeText={number => setMobileNumber(number)} style={styles.input} />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Dinner
                    </Text>
                    <TextInput maxLength={30} onChangeText={password => setPassword(password)} secureTextEntry={true} style={styles.input} />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => setIsModalVisible(false)} >
                        <Text style={styles.buttonLabel}>Update</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        padding: 5
    },

    // model style

    editMealContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'ceter',
        padding: 20,
        backgroundColor: color.layer
    },

    // edit routine 
    editRoutineContainer: {
        backgroundColor: color.background,
        padding: 50,
        borderRadius: 20

    },
    title: {
        marginTop: 8,
        fontSize: 35,
        fontWeight: 'bold',
        color: color.second,
        textAlign: 'center'
    }
    ,
    content: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    field: {
        padding: 8,
        width: width * .87
    },
    label: {
        fontWeight: '500',
        marginBottom: 10,
        fontSize: 18,
        color: color.second
    },
    input: {
        borderWidth: 2,
        borderColor: color.first,
        borderRadius: 8,
        padding: 15,
        fontWeight: 'bold',
        fontSize: 18

    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    buttonLabel: {
        color: 'white',
        textAlign: "center",
        width: 100,
        padding: 10,
        borderRadius: 8,
        backgroundColor: color.second,
        fontSize: 18,
        fontWeight: '600',
    },
})