import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import color from "../constant/color"
import Developer from '../components/Developer'

const { height, width } = Dimensions.get("window")

const DevSection = () => {
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Text style={styles.heading}>Meet The Team</Text>

                <Developer name={"Manish Kumar"} role={"MERN Stack || React-Native Developer"} />
                <Developer name={"Injamul Md Molla"} role={" Backend Developer"} />
                <Developer name={"Md Owais Raza"} role={"System Architect"} />

            </View>
        </SafeAreaView>
    )
}

export default DevSection

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
        height: height
    },
    heading: {
        fontSize: 35,
        fontWeight: "700",
        color: color.second,
        padding: 10,
        textAlign: 'center'

    }
})