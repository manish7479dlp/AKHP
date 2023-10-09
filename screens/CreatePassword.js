import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Skelton from '../components/Skelton'
import InputField from '../components/InputField'
import color from '../constant/color'
import { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Toast from "../components/Toast"
import { createPassword } from '../Helper/api'

const { width, height } = Dimensions.get('screen')
const CreatePassword = () => {
    const [mobile, setMobile] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const navigation = useNavigation()

    const setStateEmpty = () => {
        setMobile(null)
        setNewPassword(null)
        setConfirmPassword(null)
    }

    //handle update
    const handleCreate = async () => {
        setError(null)
        try {

            if (newPassword === confirmPassword) {
                setLoading(true)
                //logic
                const response = await createPassword(mobile, newPassword)
                if (response?.status) {
                    Toast("Password change sucessfully")
                    setStateEmpty()
                    navigation.goBack()
                }

                setError(response?.message)

                setLoading(false)
            } else {
                setError("New and Confirm password not match")
                return
            }

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    return (
        <Skelton>
            <View style={styles.container}>

                <Text style={styles.title}>Create Password</Text>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
                <InputField label={"Mobile Number"} value={mobile} setChangeValue={setMobile} keyBoardType='numeric' />
                <InputField label={"New Password"} value={newPassword} setChangeValue={setNewPassword} isPassword={true} />
                <InputField label={"Confirm Password"} value={confirmPassword} setChangeValue={setConfirmPassword} isPassword={true} />
                <CustomButton btnLabel={"Create"} loading={loading} btnClick={handleCreate} />



            </View>

        </Skelton>
    )
}

export default CreatePassword

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