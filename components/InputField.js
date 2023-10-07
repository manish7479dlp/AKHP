import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('screen')

const InputField = ({ value, setChangeValue, label, keyBoardType = 'default', isPassword = false }) => {
    return (
        <View style={styles.field} >
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput keyboardType={keyBoardType} value={value} onChangeText={value => setChangeValue(value)} secureTextEntry={isPassword} style={styles.input} />
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    field: {
        padding: 8,
        width: width * .9,
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
})