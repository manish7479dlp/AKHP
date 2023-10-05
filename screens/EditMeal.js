import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
import { useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/core'
import { editRoutineById } from '../Helper/api'
import Toast from '../components/Toast'
var { width, height } = Dimensions.get('window');


const EditMeal = () => {
    const route = useRoute()
    const { title, id, lunchMeal, dinnerMeal } = route.params
    return (
        <SafeAreaView>
            <UserData />
            <EditRoutine title={title} id={id} lunchMeal={lunchMeal} dinnerMeal={dinnerMeal} />
        </SafeAreaView>
    )
}

export default EditMeal



const EditRoutine = ({ title, id, lunchMeal, dinnerMeal }) => {
    const [lunch, setLunch] = useState(lunchMeal);
    const [dinner, setDinner] = useState(dinnerMeal);
    const [loading, setLoading] = useState()

    const navigation = useNavigation()
    const userData = useSelector((state) => state.user.data)

    const update = async () => {
        try {
            setLoading(true)
            const token = userData.token
            const day = title.toLowerCase()

            const response = await editRoutineById({ id, lunch, dinner, day, token })
            setLoading(false)
            navigation.goBack()
            Toast(response?.message, 0, 80)

        } catch (error) {
            Toast(response?.message, 0, 80)
            setLoading(false)
            console.log(error)
        }

    }
    return (
        <ScrollView>
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
                        <TouchableOpacity onPress={update} disabled={loading}>
                            <Text style={styles.buttonLabel}>{loading ? "Please wait..." : "Update"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    // edit routine 
    editRoutineContainer: {
        backgroundColor: color.background,
        padding: 50,
        borderRadius: 20,
        height: height * .7

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
        marginTop: 10,
    },
    buttonLabel: {
        color: 'white',
        textAlign: "center",
        padding: 10,
        borderRadius: 8,
        backgroundColor: color.second,
        fontSize: 18,
        fontWeight: '600',
    },
})