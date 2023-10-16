import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from './UserData'
import color from '../constant/color'
import { EvilIcons } from '@expo/vector-icons';
import CustomButton from "../components/CustomButton"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'


const { width, height } = Dimensions.get('window')

const Profile = () => {
    const navigation = useNavigation()
    const userData = useSelector((state) => state.user.data)

    const handleChangePassword = () => {
        navigation.navigate("changePassword")
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <UserData />
                <View style={styles.container}>
                    <View style={styles.iconContainer}>
                        <EvilIcons name="user" size={104} color={color.second} />
                    </View>
                    <View style={styles.detailsContainer}>
                        <View style={styles.content}>
                            <Text style={styles.label}>Name: </Text>
                            <Text style={styles.labelData}>{userData?.data?.fullName}</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>Year: </Text>
                            <Text style={styles.labelData}>{userData?.data?.year}</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>Advance: </Text>
                            <Text style={styles.labelData} >{userData?.data?.advance}</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>Due: </Text>
                            <Text style={styles.labelData} >0</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>Mobile: </Text>
                            <Text style={styles.labelData}>{userData?.data.mobile}</Text>
                        </View>


                    </View>
                    <CustomButton btnLabel={"Change Password"} btnClick={handleChangePassword} />
                    <CustomButton btnLabel={"Transfer Admin"} btnClick={() => { navigation.navigate("changeAdmin") }} />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        marginTop: 3,
        margin: 10
    },
    iconContainer: {
        alignItems: 'center',
    },

    // detailsContainer style

    detailsContainer: {
        marginTop: 20,
        paddingLeft: 15,
        paddingVertical: 10,
        backgroundColor: color.first,
        borderRadius: 20,
        paddingBottom: 25
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 15,
        fontWeight: '400',
        // color: color.first
        color: 'white'
    },
    labelData: {
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 5,
        // color: color.second,
        color: 'white'

    }

})