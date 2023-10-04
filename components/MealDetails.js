import { Alert, Button, Dimensions, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather } from '@expo/vector-icons';
import { editRoutineBy, editRoutineById } from "../Helper/api"

import color from "../constant/color"
import { useSelector } from 'react-redux';
var { width, height } = Dimensions.get('window');



const MealDetails = ({ id, title, lunchMeal, dinnerMeal, edit = true }) => {
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
                    <EditRoutine lunchMeal={lunchMeal} dinnerMeal={dinnerMeal} title={title} id={id} setIsModalVisible={setIsModalVisible} />
                    {/* <Button title="close" onPress={() => setIsModalVisible(false)} /> */}
                </View>

            </Modal>
        </View >

    )
}

const EditRoutine = ({ setIsModalVisible, title, id, lunchMeal, dinnerMeal }) => {
    const [lunch, setLunch] = useState(lunchMeal);
    const [dinner, setDinner] = useState(dinnerMeal);
    const userData = useSelector((state) => state.user.data)


    const update = async () => {
        try {
            const token = userData.token
            const day = title.toLowerCase()

            const response = await editRoutineById({ id, lunch, dinner, day, token })
            console.log(response)

            setIsModalVisible(false)
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <View style={styles.editRoutineContainer}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Lunch
                    </Text>
                    <TextInput value={lunch} onChangeText={text => setLunch(text)} style={styles.input} />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Dinner
                    </Text>
                    <TextInput value={dinner} onChangeText={text => setDinner(text)} style={styles.input} />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={update} >
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
        alignItems: "center",
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