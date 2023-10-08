import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Skelton from '../components/Skelton'
import InputField from '../components/InputField'
import color from '../constant/color'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'

const { width, height } = Dimensions.get('screen')
const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [loading, setLoading] = useState()

    const setStateEmpty = () => {
        setOldPassword(null)
        setNewPassword(null)
        setConfirmPassword(null)
    }

    //handle update
    const handleUpdate = () => {
        try {

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Skelton>
            <View style={styles.container}>

                <Text style={styles.title}>Change Password</Text>
                <InputField label={"Old Password"} value={oldPassword} setChangeValue={setOldPassword} />
                <InputField label={"New Password"} value={newPassword} setChangeValue={setNewPassword} />
                <InputField label={"Confirm Password"} value={confirmPassword} setChangeValue={setConfirmPassword} />
                <CustomButton btnLabel={"Update"} loading={false} btnClick={handleUpdate} />



            </View>

        </Skelton>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    container: {
        width: width,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'blue'
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        color: color.second,
        marginBottom: 10
    }
})