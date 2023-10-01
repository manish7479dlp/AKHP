import { Alert, Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
var { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';
import color from '../constant/color';


const Items = () => {
    const [moibileNumber, setMobileNumber] = useState();
    const [year, setYear] = useState();
    const [payment, setPayment] = useState();
    const title = "Add Item"

    const addUser = () => {
        Alert.alert(moibileNumber + " " + year + " " + payment)
    }
    return (
        <SafeAreaView>
            <UserData />
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ width: width }}><Text style={styles.title}>{title}</Text></View>
                    <View style={styles.content}>
                        <View style={styles.field}>
                            <Text style={styles.label}>
                                Item Name
                            </Text>
                            <TextInput maxLength={20} value={moibileNumber} onChangeText={number => setMobileNumber(number)} style={styles.input} />
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>
                                Quantity
                            </Text>
                            <TextInput value={year} onChangeText={year => setYear(year)} style={styles.input} />
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>
                                Price
                            </Text>
                            <TextInput value={payment} onChangeText={payment => setPayment(payment)} keyboardType='numeric' style={styles.input} />
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={addUser}>
                                <Text style={styles.buttonLabel}><AntDesign name="plus" size={20} color="white" /> Add</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Items

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontWeight: '600',
        fontSize: 50,
        color: color.second,
        textAlign: 'center',
    },
    content: {
        marginTop: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    field: {
        padding: 8,
        width: width * .9
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
        width: width,
        alignItems: 'center',
        marginTop: 10
    },
    buttonLabel: {
        color: 'white',
        textAlign: "center",
        width: 120,
        padding: 10,
        borderRadius: 8,
        backgroundColor: color.second,
        fontSize: 18,
        fontWeight: '600',
    },

})