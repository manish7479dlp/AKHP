import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import color from "../constant/color"
import Developer from '../components/Developer'
import { useNavigation } from '@react-navigation/native'
import DEVELOPER_DATA from "../store/DeveloperData"
import { Ionicons } from '@expo/vector-icons';

const { height, width } = Dimensions.get("window")

const DevSection = () => {
    const navigation = useNavigation()

    const goToLoginPage = () => {
        navigation.goBack()
    }
    return (
        <SafeAreaView >
            <TouchableOpacity onPress={goToLoginPage} style={styles.navContainer}>
                <Ionicons name="arrow-back-circle-sharp" size={30} color={color.second} />
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.heading}>Meet The Team</Text>

                <Developer name={DEVELOPER_DATA?.first?.name} role={DEVELOPER_DATA?.first?.role} instagramLink={DEVELOPER_DATA?.first.instagramLink} linkedinLink={DEVELOPER_DATA?.first?.linkedInLink} githubLink={DEVELOPER_DATA?.first?.githubLink} img={DEVELOPER_DATA?.first?.img} />

                <Developer name={DEVELOPER_DATA?.second?.name} role={DEVELOPER_DATA?.second?.role} instagramLink={DEVELOPER_DATA?.second.instagramLink} linkedinLink={DEVELOPER_DATA?.second?.linkedInLink} githubLink={DEVELOPER_DATA?.second?.githubLink} img={DEVELOPER_DATA?.second?.img} />

                <Developer name={DEVELOPER_DATA?.third?.name} role={DEVELOPER_DATA?.third?.role} instagramLink={DEVELOPER_DATA?.third.instagramLink} linkedinLink={DEVELOPER_DATA?.third?.linkedInLink} githubLink={DEVELOPER_DATA?.third?.githubLink} img={DEVELOPER_DATA?.third?.img} />




            </View>
            <Text style={styles.messName}>Aao Kabhi Haveli Pe</Text>
        </SafeAreaView>
    )
}

export default DevSection

const styles = StyleSheet.create({
    navContainer: {
        width: width,
        backgroundColor: "white",
        padding: 10,
        paddingHorizontal: 20
    },
    container: {
        backgroundColor: color.background,
        // height: height,

    },
    heading: {
        fontSize: 35,
        fontWeight: "700",
        color: color.second,
        padding: 10,
        textAlign: 'center',
        marginBottom: 20

    }, messName: {
        color: color.first,
        fontWeight: "300",
        fontSize: 15,
        backgroundColor: color.background,
        width: width,
        textAlign: 'center',
        position: "relative",
        top: height * .098

    },
})