import { Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from "../constant/color"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '../store/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../Helper/api';

var { width, height } = Dimensions.get('window');

const Login = () => {
    const [mobileNumber, setMobileNumber] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigation()

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.data)


    const handleLogin = async () => {
        const data = await userLogin(mobileNumber);
        dispatch(setUser(data))

        if (userData.user.role === 'admin') {
            navigation.navigate("admin")
        } else {
            navigation.navigate("user")
        }


    }

    return (

        <SafeAreaView style={{ backgroundColor: "lightgrey" }}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.heroBanner}>
                        <Image style={{ width: "100%", height: '100%', resizeMode: 'center' }} source={require("../assets/hero.png")} />
                    </View>
                    <Text style={styles.title}>Login</Text>
                    <View style={styles.content}>
                        <View style={styles.field}>
                            <Text style={styles.label}>
                                Mobile Number
                            </Text>
                            <TextInput maxLength={10} onChangeText={number => setMobileNumber(number)} keyboardType='numeric' style={styles.input} />
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>
                                Password
                            </Text>
                            <TextInput onChangeText={password => setPassword(password)} secureTextEntry={true} style={styles.input} />
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity onPress={handleLogin}>
                                <Text style={styles.buttonLabel}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.messName}>Aao Kabhi Haveli Pe</Text>

                </View>


            </View>
        </SafeAreaView>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: color.second,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    wrapper: {
        backgroundColor: "white",
        height: height * .8,
        width: width,
        borderTopStartRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        alignItems: "center",

    },
    heroBanner: {
        width: width,
        height: height * .3,
        marginTop: -height * .170,


    },
    title: {
        marginTop: 8,
        fontSize: 35,
        fontWeight: 'bold',
        color: color.second,
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
        width: 100,
        padding: 10,
        borderRadius: 8,
        backgroundColor: color.second,
        fontSize: 18,
        fontWeight: '600',
    },
    messName: {
        color: color.first,
        fontWeight: "300",
        fontSize: 15,
        position: 'absolute',
        bottom: 0,
        padding: 10,
        backgroundColor: color.four,
        width: width,
        textAlign: 'center'

    }
})