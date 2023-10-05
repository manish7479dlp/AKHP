import { Alert, Button, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import color from "../constant/color"
import { BarCodeScanner } from 'expo-barcode-scanner';

var { width, height } = Dimensions.get('window');


const Attendance = () => {
    return (
        <SafeAreaView >
            <ScrollView>
                <Scan />

                <View style={styles.container}>
                    <Text style={styles.title}>Today's Attendance</Text>
                    <View style={styles.attendanceContainer}>
                        <View style={styles.lunchContainer}>
                            <Text style={{ color: "white", fontWeight: "500" }}>
                                <Feather name="sun" size={20} color="white" />  Lunch :
                            </Text>
                            <AntDesign name="checkcircle" size={22} color="lightgreen" />
                        </View>

                        <View style={styles.lunchContainer}>
                            <Text style={{ color: "white", fontWeight: "500" }}>
                                <Ionicons name="cloudy-night-outline" size={20} color={"white"} />  Dinner :
                            </Text>
                            <Entypo name="circle-with-cross" size={24} color="red" />
                        </View>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const Scan = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();

    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        //send request from their
        Alert.alert(data)
        console.log(type, data)
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.scannerContainer}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={'Tap for Attendance'} onPress={() => setScanned(false)} />}
        </View>
    );
}



export default Attendance

const styles = StyleSheet.create({
    scannerContainer: {
        height: height * .6,
        width: width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    container: {
        marginTop: 10,
        padding: 20,
        backgroundColor: color.background,
        display: 'flex',
        justifyContent: 'center'

    },
    title: {
        fontSize: 30,
        fontWeight: '700',
        color: color.second
    },
    lunchContainer: {
        margintop: 10,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    attendanceContainer: {
        backgroundColor: color.second,
        borderRadius: 20,
        padding: 10,
        margin: 10
    }

})