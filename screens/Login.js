import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from "../constant/color"
import { SafeAreaView } from 'react-native-safe-area-context';

var { width, height } = Dimensions.get('window');

const Login = () => {
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
                            <TextInput keyboardType='numeric' style={styles.input} />
                        </View>
                        <View style={styles.field}>
                            <Text style={styles.label}>
                                Password
                            </Text>
                            <TextInput secureTextEntry={true} style={styles.input} />
                        </View>

                        <View style={styles.button}>
                            <TouchableOpacity >
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