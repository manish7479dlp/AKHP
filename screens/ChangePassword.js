import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Skelton from '../components/Skelton'
import InputField from '../components/InputField'
import color from '../constant/color'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { changePassword } from '../Helper/api'
import Toast from "../components/Toast"

const { width, height } = Dimensions.get('screen')
const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const navigation = useNavigation()

    const userData = useSelector((state) => state.user.data)
    const token = userData?.token

    const setStateEmpty = () => {
        setOldPassword(null)
        setNewPassword(null)
        setConfirmPassword(null)
    }

    //handle update
    const handleUpdate = async () => {

        setError(null)
        try {
            if (newPassword === confirmPassword) {
                setLoading(true)
                //logic
                const mobile = userData?.data?.mobile
                const response = await changePassword({ mobile, oldPassword, newPassword, token })
                if (response?.status) {
                    Toast(response?.message)
                    navigation.goBack()
                } else {
                    setError(response?.message)
                }
                setLoading(false)
            } else {
                setError("New and Confirm password not match")
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