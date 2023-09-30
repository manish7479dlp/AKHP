import { Alert, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
import { MaterialIcons } from '@expo/vector-icons';

var { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';

import color from '../constant/color';

const EDIT_USER = 'edit'
const DELETE_USER = 'delete'
const ADD_USER = 'adduser'

const Member = () => {
    const [userOperation, setUserOperation] = useState("Add User");

    const handleOperation = (operation) => {
        switch (operation) {
            case EDIT_USER:
                setUserOperation('Edit')
                break;
            case DELETE_USER:
                setUserOperation("Delete")
                break;
            case ADD_USER:
                setUserOperation("Add User")
                break;
        }
    }

    return (
        <SafeAreaView>
            <UserData />
            <SearchBar />
            <View style={styles.iconContainer}>
                <FilterButton iconName={ADD_USER} handleOperation={handleOperation} />
                <FilterButton iconName={EDIT_USER} handleOperation={handleOperation} />
                <FilterButton iconName={DELETE_USER} handleOperation={handleOperation} />

            </View>
            <UserOperation title={userOperation} btnTitle={userOperation} />
        </SafeAreaView>
    )
}

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <MaterialIcons style={{ marginLeft: 15 }} name="person-search" size={34} color={color.second} />
            <TextInput placeholder="Search"
                placeholderTextColor="grey"
                keyboardType="name-phone-pad" style={styles.searchInput}
                maxLength={20} />
        </View>
    )
}

const FilterButton = ({ iconName, handleOperation }) => {
    return (
        <TouchableOpacity onPress={() => handleOperation(iconName)} style={styles.filterBtnContainer}>
            <AntDesign name={iconName} size={30} color={"white"} />
        </TouchableOpacity>
    )
}

const UserOperation = ({ title, btnTitle }) => {

    const [moibileNumber, setMobileNumber] = useState();
    const [year, setYear] = useState();
    const [payment, setPayment] = useState();

    const addUser = () => {
        Alert.alert(moibileNumber + " " + year + " " + payment)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Mobile Number
                    </Text>
                    <TextInput maxLength={10} value={moibileNumber} onChangeText={number => setMobileNumber(number)} keyboardType='numeric' style={styles.input} />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Year
                    </Text>
                    <TextInput value={year} keyboardType='numeric' onChangeText={year => setYear(year)} style={styles.input} />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Payment
                    </Text>
                    <TextInput value={payment} onChangeText={payment => setPayment(payment)} keyboardType='numeric' style={styles.input} />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={addUser}>
                        <Text style={styles.buttonLabel}>{btnTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Member

const styles = StyleSheet.create({
    searchContainer: {
        borderWidth: 1.5,
        margin: 3,
        borderRadius: 112,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        marginLeft: 3,
        fontSize: 18,
        fontWeight: '700',
        padding: 10,
        color: color.first,
        width: "100%"
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
        backgroundColor: color.first
    },
    filterBtnContainer: {
        width: width * .2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
        margin: 5
    }, container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontWeight: '600',
        fontSize: 25,
        color: color.second
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
        fontSize: 18
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