import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const { height, width } = Dimensions.get('screen')

const InputField = ({ value, setChangeValue, label, keyBoardType = 'default', isPassword = false }) => {
    const [visible, setVisible] = useState(isPassword)
    return (
        <View style={styles.field} >
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput keyboardType={keyBoardType} value={value} onChangeText={value => setChangeValue(value)} secureTextEntry={visible} style={styles.input} />
            {
                isPassword && (
                    <TouchableOpacity style={styles.passwordVisibleIcon} onPress={() => setVisible(!visible)}>
                        <MaterialIcons style={{ textAlign: 'right', marginRight: 10, paddingVertical: 8 }} name={visible ? "visibility-off" : "visibility"} size={24} color="black" />
                    </TouchableOpacity>
                )
            }
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
    passwordVisibleIcon: {
        position: 'absolute',
        bottom: 18,
        right: 10,
        // backgroundColor: 'red',
    }
})