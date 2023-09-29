import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
import AccordionContainer from '../components/AccordionContainer'
import { FontAwesome } from '@expo/vector-icons';

import color from '../constant/color'


const Expences = () => {

    return (
        <SafeAreaView style={styles.container}>
            <UserData />
            <TotalExpanses />
            <AccordionContainer />
        </SafeAreaView>
    )
}

export default Expences

const TotalExpanses = () => {
    return (
        <View style={styles.expansesTotalContainer}>
            <Text style={{ color: "white", fontWeight: "500", fontSize: 17 }}>Monthly Expanses</Text>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}> <FontAwesome name="rupee" size={17} color="white" /> 1456</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    expansesTotalContainer: {
        backgroundColor: color.second,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    }
})