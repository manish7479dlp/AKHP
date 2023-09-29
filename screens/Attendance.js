import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import color from "../constant/color"

var { width, height } = Dimensions.get('window');


const Attendance = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: color.second }}>It is not implemented yet.</Text>
        </SafeAreaView>
    )
}

export default Attendance

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        height: height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
})