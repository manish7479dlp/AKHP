import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get("screen")

const Skelton = ({ children }) => {
    const navigation = useNavigation()

    const goDevloperSection = () => {
        navigation.navigate("devloper")
    }

    return (
        <SafeAreaView>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.heroBanner}>
                            <Image style={{ width: "100%", height: '100%', resizeMode: 'center' }} source={require("../assets/hero.png")} />
                        </View>

                        <View style={styles.childrenContainer}>
                            {children}
                        </View>

                        <Text style={styles.messName}>Aao Kabhi Haveli Pe</Text>

                    </View>
                    <TouchableOpacity style={styles.dev} onPress={goDevloperSection}>
                        <FontAwesome5 name="dev" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </SafeAreaView >
    )
}

export default Skelton

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.second,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    wrapper: {
        backgroundColor: "white",
        marginTop: 150,
        width: width,
        borderTopStartRadius: 40,
        borderTopRightRadius: 40,
        display: 'flex',
        alignItems: "center",

    },
    heroBanner: {
        width: width,
        height: height * .3,
        marginTop: -height * .170,
    },
    messName: {
        color: color.first,
        fontWeight: "300",
        fontSize: 15,
        position: 'absolute',
        bottom: 0,
        padding: 10,
        backgroundColor: color.four,
        width: width,
        textAlign: 'center',
        backgroundColor: 'lightgrey'

    },
    dev: {
        backgroundColor: color.first,
        borderRadius: 5,
        position: 'absolute',
        top: 10,
        right: 10,
        paddingHorizontal: 8,
        paddingVertical: 5
    },
    childrenContainer: {
        paddingBottom: 70
    }
})