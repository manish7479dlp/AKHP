import { Alert, Dimensions, ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
import { MaterialIcons } from '@expo/vector-icons';

var { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';

import color from '../constant/color';
import { createUser, editUser, getUserByMobile } from '../Helper/api';
import { useSelector } from 'react-redux';
import Toast from '../components/Toast';

const EDIT_USER = 'edit'
const DELETE_USER = 'delete'
const ADD_USER = 'adduser'

const Member = () => {
    const [userOperation, setUserOperation] = useState("Add User");
    const [searchInput, setSearchInput] = useState();

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: height * .07 }}
            >
                <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
                <View style={styles.iconContainer}>
                    <FilterButton iconName={ADD_USER} handleOperation={handleOperation} />
                    <FilterButton iconName={EDIT_USER} handleOperation={handleOperation} />
                    <FilterButton iconName={DELETE_USER} handleOperation={handleOperation} />

                </View>

                <UserOperation title={userOperation} btnTitle={userOperation} searchInput={searchInput} setSearchInput={setSearchInput} />
            </ScrollView>

        </SafeAreaView>
    )
}

const SearchBar = ({ searchInput, setSearchInput }) => {
    return (
        <View style={styles.searchContainer}>
            <MaterialIcons style={{ marginLeft: 15 }} name="person-search" size={34} color={color.second} />
            <TextInput placeholder="Search"
                placeholderTextColor="grey"
                keyboardType="name-phone-pad" style={styles.searchInput}
                maxLength={20}
                value={searchInput}
                onChangeText={search => setSearchInput(search)}
            />
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

const UserOperation = ({ title, btnTitle, searchInput, setSearchInput }) => {
    const [name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [year, setYear] = useState();
    const [advance, setAdvance] = useState();
    const userData = useSelector((state) => state.user.data)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (title === "Add User") {
            makeStateBlank()
            console.log(("add"))
        } else if (title === "Edit") {
            makeStateBlank()
            getUserDetailByMobileNumber()
        } else if (title === "Delete") {
            makeStateBlank()
            getUserDetailByMobileNumber()

        }
    }, [title])

    const makeStateBlank = () => {
        setMobile("")
        setName("")
        setYear("")
        setAdvance("")
    }


    const getUserDetailByMobileNumber = async () => {
        try {
            const token = userData.token
            setLoading(true)
            const response = await getUserByMobile(searchInput, token)
            if (response.status) {
                const { mobile, fullName, year, advance } = response?.data
                setMobile(mobile + ""),
                    setName(fullName)
                setYear(year)
                setAdvance(advance ? advance + "" : "0")
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const userCURD = async (title) => {
        try {
            setLoading(true);
            var response;
            const token = userData.token

            if (title === 'Add User') {
                response = await createUser({ name, mobile, year, advance, token })
            } else if (title === 'Edit') {
                response = await editUser({ name, mobile, year, advance, token })
            } else if (title === 'Delete') {

            }

            if (response.status) {
                Toast(response?.message, x = 0, y = 190)
                makeStateBlank()
            }

            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Name
                    </Text>
                    <TextInput maxLength={25} value={name} onChangeText={name => setName(name)} style={styles.input} />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Mobile Number
                    </Text>
                    <TextInput maxLength={10} value={mobile} onChangeText={number => setMobile(number)} keyboardType='numeric' style={styles.input} />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Year
                    </Text>
                    <TextInput value={year} keyboardType='numeric' onChangeText={year => setYear(year)} style={styles.input} />
                </View>
                <View style={styles.field}>
                    <Text style={styles.label}>
                        Advance
                    </Text>
                    <TextInput value={advance} onChangeText={advance => setAdvance(advance)} keyboardType='numeric' style={styles.input} />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={() => userCURD(title)} disabled={loading}>
                        <Text style={styles.buttonLabel}>{loading ? "Please wait..." : btnTitle}</Text>
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
        alignItems: 'center',
        paddingBottom: 50
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
        width: 150,
        padding: 10,
        borderRadius: 8,
        backgroundColor: color.second,
        fontSize: 18,
        fontWeight: '600',
    },

})