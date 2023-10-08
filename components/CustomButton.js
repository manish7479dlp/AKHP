import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen')

const CustomButton = ({ btnClick, loading, btnLabel }) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity onPress={btnClick} disabled={loading}>
                <Text style={styles.buttonLabel}>{loading ? "Please wait..." : btnLabel}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: width,
        alignItems: 'center',
        padding: 8,
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
})