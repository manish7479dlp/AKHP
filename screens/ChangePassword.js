import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Skelton from '../components/Skelton'
import InputField from '../components/InputField'
import color from '../constant/color'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')
const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const navigation = useNavigation()

    const setStateEmpty = () => {
        setOldPassword(null)
        setNewPassword(null)
        setConfirmPassword(null)
    }

    //handle update
    const handleUpdate = () => {
        setError(null)
        try {
            if (!oldPassword) {
                if (newPassword === confirmPassword) {
                    setLoading(true)
                    //logic

                    // navigation.goBack()
                    setLoading(false)
                } else {
                    setError("New and Confirm password not match")
                }
            } else {
                if (newPassword === confirmPassword) {
                    setLoading(true)
                    //logic
                    // navigation.goBack()
                    setLoading(false)
                } else {
                    setError("New and Confirm password not match")

                }
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <Skelton>
            <View style={styles.container}>

                <Text style={styles.title}>Change Password</Text>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
                <InputField label={"Old Password"} value={oldPassword} setChangeValue={setOldPassword} />
                <InputField label={"New Password"} value={newPassword} setChangeValue={setNewPassword} />
                <InputField label={"Confirm Password"} value={confirmPassword} setChangeValue={setConfirmPassword} />
                <CustomButton btnLabel={"Update"} loading={loading} btnClick={handleUpdate} />



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
    },
    errorMessage: {
        color: 'red'
    }
})