import { Alert, Dimensions, Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import color from "../constant/color"
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '../store/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { userLogin } from '../Helper/api';
var { width, height } = Dimensions.get('window');


const Login = () => {
    const [mobileNumber, setMobileNumber] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [admin, setAdmin] = useState(false)
    const navigation = useNavigation()


    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            if (!mobileNumber || mobileNumber.length !== 10) {
                setError("Invalid Mobile Number")
                return
            }
            setLoading(true)
            const data = await userLogin(mobileNumber, password);
            if (!data?.status) {
                setError(data?.message)
            }
            if (data.status) {

                setMobileNumber()
                setPassword()
                dispatch(setUser(data))
                setError()
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

    const goDevloperSection = () => {
        navigation.navigate("devloper")
    }

    return (

        <SafeAreaView style={{ backgroundColor: "lightgrey" }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
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
                                {
                                    error && (<Text style={{ color: "red", marginBottom: 4, marginTop: -10 }}>{error}</Text>)
                                }
                                <TextInput value={mobileNumber} maxLength={10} onChangeText={number => setMobileNumber(number)} keyboardType='numeric' style={styles.input} />
                            </View>

                            <View style={styles.field} >
                                <Text style={styles.label}>
                                    Admin
                                </Text>
                                <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'flex-start', marginVertical: -16 }}>
                                    <Switch
                                        value={admin}
                                        onValueChange={(value) => setAdmin(value)}
                                        trackColor={{ false: color.third, true: color.layer }}
                                        thumbColor={admin ? color.second : '#f4f3f4'}

                                    />
                                </View>

                            </View>

                            {
                                admin && (

                                    <View style={styles.field} >
                                        <Text style={styles.label}>
                                            Password
                                        </Text>
                                        <TextInput value={password} onChangeText={password => setPassword(password)} secureTextEntry={true} style={styles.input} />
                                    </View>

                                )}

                            <View style={styles.button}>
                                <TouchableOpacity onPress={handleLogin} disabled={loading}>
                                    <Text style={styles.buttonLabel}>{loading ? "Please wait..." : "Login"}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <Text style={styles.messName}>Aao Kabhi Haveli Pe</Text>

                    </View>
                    <TouchableOpacity style={styles.dev} onPress={goDevloperSection}>
                        <FontAwesome5 name="dev" size={30} color="white" />
                    </TouchableOpacity>

                </View>
            </ScrollView>
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
        padding: 10,
        paddingHorizontal: 15,
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

    },
    dev: {
        backgroundColor: color.first,
        borderRadius: 5,
        position: 'absolute',
        top: 10,
        right: 10,
        paddingHorizontal: 8,
        paddingVertical: 5
    },
})