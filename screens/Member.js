import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserData from '../components/UserData'
import { MaterialIcons } from '@expo/vector-icons';

var { width, height } = Dimensions.get('window');
import { AntDesign } from '@expo/vector-icons';

import color from '../constant/color';

const Member = () => {
    return (
        <SafeAreaView>
            <UserData />
            <SearchBar />
            <View style={styles.iconContainer}>
                <FilterButton iconName={"adduser"} />
                <FilterButton iconName={"edit"} />
                <FilterButton iconName={'delete'} />

            </View>
        </SafeAreaView>
    )
}

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <MaterialIcons style={{ marginLeft: 15 }} name="person-search" size={34} color={color.second} />
            <TextInput placeholder="Search"
                placeholderTextColor="grey"
                keyboardType="name-phone-pad" style={styles.input}
                maxLength={20} />
        </View>
    )
}

const FilterButton = ({ iconName }) => {
    return (
        <TouchableOpacity style={styles.filterBtnContainer}>
            <AntDesign name={iconName} size={30} color={"white"} />
        </TouchableOpacity>
    )
}

export default Member

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
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4,
        backgroundColor: color.first
    },
    filterBtnContainer: {
        width: width * .2,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 20,
        margin: 5
    },

})