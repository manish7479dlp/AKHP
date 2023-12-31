import { Alert, Dimensions, Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from "../constant/color"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '../store/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { userLogin } from '../Helper/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Skelton from '../components/Skelton';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

var { width, height } = Dimensions.get('window');


const USER = 'user'

const Login = () => {
    const [mobileNumber, setMobileNumber] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const [admin, setAdmin] = useState(false)
    const navigation = useNavigation()
    const dispatch = useDispatch();


    const createPassword = () => {
        navigation.navigate("createPassword")
    }


    const storeData = async (key, value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
        } catch (error) {
            console.log(error)
        }
    };


    const handleLogin = async () => {
        try {
            if (!mobileNumber) {
                setError("Mobile number is required")
                return
            }
            if (mobileNumber.length !== 10) {
                setError("Invalid Mobile number")
                return
            }
            if (!password) {
                setError("Password is required")
                return
            }
            setLoading(true)
            let data
            const ROLE = 'admin'
            data = admin ? await userLogin(mobileNumber, password, ROLE) : await userLogin(mobileNumber, password);
            if (!data?.status) {
                setError(data?.message)
            }
            if (data?.status) {

                setMobileNumber()
                setPassword()
                dispatch(setUser(data))
                storeData(USER, data)
                setError()
                setAdmin()
            }
            console.log(data)
            if (data?.data?.role === 'admin') {
                navigation.navigate("admin")
            } else if (data?.data?.role === 'user') {
                navigation.navigate("user")
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }

    }

    return (
        <Skelton>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
                <InputField keyBoardType='numeric' label={"Mobile Number"} value={mobileNumber} setChangeValue={setMobileNumber} />
                <InputField label={"Password"} value={password} setChangeValue={setPassword} isPassword={true} />
                <CustomSwitch admin={admin} setAdmin={setAdmin} />
                <CustomButton btnLabel={"Login"} btnClick={handleLogin} loading={loading} />
                <TouchableOpacity onPress={createPassword}>
                    <Text style={styles.changePasswordLabel}>Create password</Text>
                </TouchableOpacity>

            </View>
        </Skelton>
    )
}

export default Login

const CustomSwitch = ({ admin, setAdmin }) => {
    return (
        <View style={{ width: width * .9, paddingLeft: 8 }}>
            <View style={styles.admin} >
                <Text style={[styles.label, styles.adminLabel]}>
                    Admin
                </Text>
                <Switch
                    value={admin}
                    onValueChange={(value) => setAdmin(value)}
                    trackColor={{ false: color.third, true: color.layer }}
                    thumbColor={admin ? color.second : '#f4f3f4'}

                />

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: width,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        color: color.second,
        marginBottom: 10
    },
    errorMessage: {
        color: 'red'
    },
    admin: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    adminLabel: {
        marginBottom: 0,
        marginRight: 5
    },
    label: {
        fontWeight: '500',
        marginBottom: 10,
        fontSize: 18
    },
    changePasswordLabel: {
        color: 'blue',
        marginTop: 5
    }
})


