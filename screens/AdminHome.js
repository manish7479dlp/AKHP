import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
import MembersList from "../components/MembersList"
import color from '../constant/color'
import { MaterialIcons } from '@expo/vector-icons';

var { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';


const AdminHome = () => {
    return (
        <SafeAreaView>
            <UserData />
            <MembersList mb={height * .4} />
        </SafeAreaView>
    )
}



export default AdminHome

const styles = StyleSheet.create({
    searchContainer: {
        borderWidth: 1.5,
        margin: 3,
        borderRadius: 112,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        marginLeft: 3,
        fontSize: 18,
        fontWeight: '700',
        padding: 10,
        color: color.first,
        width: "100%"
    },
    filterBtnContainer: {
        width: width * .2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'deepyellow',
        padding: 5,
        borderRadius: 20
    }
})