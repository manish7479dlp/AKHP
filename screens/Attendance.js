import { Alert, Button, Dimensions, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


import color from "../constant/color"
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useSelector } from 'react-redux';
import Toast from "../components/Toast"
import { getAttendance, giveAttendance } from '../Helper/api';
import UserData from "../components/UserData"

import { Buffer } from 'buffer'

var { width, height } = Dimensions.get('window');


const Attendance = () => {
    const userData = useSelector((state) => state.user.data)
    const [attendance, setAttendance] = useState()
    const [refreshing, setRefreshing] = React.useState(false);
    const token = userData.token


    useEffect(() => {
        const attendance = async () => {
            try {
                const mobile = userData.data.mobile
                const response = await getAttendance({ token, mobile })
                if (response?.status) {
                    setAttendance(response?.data)
                }
            } catch (error) {
                console.log(error)
            }
        }

        attendance()
    }, [refreshing])


    const submitAttendance = async (url) => {
        try {
            console.log(url)
            const response = await giveAttendance({ token, url })
            if (response?.status) {
                setAttendance(response.data)
            }
            Alert.alert(response?.message)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <SafeAreaView >
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <UserData />
                <Scan submitAttendance={submitAttendance} />

                <View style={styles.container}>
                    <Text style={styles.title}>Today's Attendance</Text>
                    <View style={styles.attendanceContainer}>
                        <View style={styles.lunchContainer}>
                            <Text style={{ color: "white", fontWeight: "500" }}>
                                <Feather name="sun" size={20} color="white" />  Lunch :
                            </Text>
                            {attendance?.lunch ?
                                <AntDesign name="checkcircle" size={22} color="lightgreen" />
                                : <Entypo name="circle-with-cross" size={24} color="red" />
                            }
                        </View>

                        <View style={styles.lunchContainer}>
                            <Text style={{ color: "white", fontWeight: "500" }}>
                                <Ionicons name="cloudy-night-outline" size={20} color={"white"} />  Dinner :
                            </Text>
                            {attendance?.dinner ?
                                <AntDesign name="checkcircle" size={22} color="lightgreen" />
                                : <Entypo name="circle-with-cross" size={24} color="red" />
                            }
                        </View>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const Scan = ({ submitAttendance }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);



    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();

    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        // get encrypt data
        let encryptedData = Buffer.from(data, "base64");
        // get decrypt data
        let url = encryptedData.toString("utf8")
        //send request from their
        submitAttendance(url)


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
        // marginTop: 5,
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