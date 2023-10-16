import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Skelton from "../components/Skelton"
import InputField from "../components/InputField"
import CustomButton from "../components/CustomButton"
import { useState } from 'react'

const ChangeAdmin = () => {
    const [loading, setLoading] = useState()
    const [cManager, setCManager] = useState()
    const [nManger, setNManager] = useState()
    const [password, setPassword] = useState()

    const changeAdmin = () => {
        Alert.alert("It is not impleneted yet...")
    }

    return (


        <Skelton>
            <View style={styles.container}>
                <Text style={styles.title}>Change Meal Manager</Text>
                <InputField label={"Current Manager Mob No"} value={cManager} setChangeValue={setCManager} keyBoardType='numeric' />
                <InputField label={"New Manager Mob No"} value={nManger} setChangeValue={setNManager} keyBoardType='numeric' />
                <InputField label={"Current Manager Password"} isPassword={true} value={password} setChangeValue={setPassword} />

                <CustomButton btnLabel={"Change"} btnClick={changeAdmin} loading={loading} />
            </View>
        </Skelton>
    )
}

export default ChangeAdmin

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 27,
        fontWeight: '400',
        color: color.first,
        marginBottom: 15
    }
})