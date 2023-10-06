import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from './UserData'
import color from '../constant/color'
import { EvilIcons } from '@expo/vector-icons';


const { width, height } = Dimensions.get('window')

const UserDetails = () => {
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
                            <Text style={styles.labelData}>Manish Kumar</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>Year: </Text>
                            <Text style={styles.labelData}>4</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>Advance: </Text>
                            <Text style={styles.labelData} >1000</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.label}>Mobile: </Text>
                            <Text style={styles.labelData}>7479863918</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserDetails

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
        backgroundColor: color.second,
        borderRadius: 20,
        paddingBottom: 25
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    label: {
        fontSize: 17,
        fontWeight: '400',
        // color: color.first
        color: 'white'
    },
    labelData: {
        fontSize: 16,
        fontWeight: '400',
        marginLeft: 5,
        // color: color.second,
        color: 'white'

    }

})