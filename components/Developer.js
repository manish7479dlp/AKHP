import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../constant/color'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';


const Developer = ({ name, role, }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image style={styles.image} source={{ uri: "https://img.lovepik.com/element/40128/7461.png_1200.png" }} />
            </View>
            <View style={styles.right}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.role}>{role}</Text>
                <View style={styles.icon}>
                    {/* <FontAwesome5 name="instagram-square" size={24} color="black" /> */}
                    <AntDesign name="instagram" size={24} color="black" />
                    <AntDesign name="github" size={24} color="black" />
                    <FontAwesome name="linkedin-square" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

export default Developer

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        margin: 20,
        borderRadius: 20,
        paddingTop: 20
    },
    left: {
        width: 120,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: "green",
    },
    image: {
        width: 80,
        height: 80,
        objectFit: 'cover',
        resizeMode: 'center',
        borderRadius: 150,
        overflow: 'hidden',
        backgroundColor: 'red'

    },
    right: {
        flex: 1,
        paddingLeft: 12,
        padding: 10,
        paddingRight: 0
        // borderWidth: 1,
    },
    name: {
        color: color.second,
        fontSize: 18,
        fontWeight: '700'
    },
    role: {
        fontSize: 10,
        fontWeight: '500'
    },
    icon: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        marginTop: 10
    }
})