import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../constant/color';

var { width, height } = Dimensions.get('window');


const DATA = [
    {
        id: 0,
        title: "zero Item"
    },
    {
        id: 1,
        title: 'First Item',
    },
    {
        id: 2,
        title: 'Second Item',
    },
    {
        id: 3,
        title: 'Third Item',
    }, {
        id: 4,
        title: "zero Item"
    },
    {
        id: 5,
        title: 'First Item',
    },
    {
        id: 6,
        title: 'Second Item',
    },
    {
        id: 7,
        title: 'Third Item',
    },
    {
        id: 8,
        title: "zero Item"
    },
    {
        id: 9,
        title: 'First Item',
    },
    {
        id: 10,
        title: 'Second Item',
    },
    {
        id: 11,
        title: 'Third Item',
    }, {
        id: 12,
        title: "zero Item"
    },
    {
        id: 13,
        title: 'First Item',
    },
    {
        id: 14,
        title: 'Second Item',
    },
    {
        id: 15,
        title: 'Third Item',
    },
    {
        id: 111,
        title: 'Third Item',
    }, {
        id: 122,
        title: "zero Item"
    },
    {
        id: 133,
        title: 'First Item',
    },
    {
        id: 144,
        title: 'Second Item',
    },
    {
        id: 155,
        title: 'Third Item',
    },
];

const MembersList = ({ mb }) => {
    return (
        <View>
            <Text style={styles.title}>Active Members</Text>

            <Title />
            <Details mb={mb} />
        </View>

    )
}

const Title = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleName}>Sr.No</Text>
            <Text style={styles.titleName}>Name</Text>
            <Text style={styles.titleName}>Year</Text>
            <Text style={styles.titleName}>Payment</Text>

        </View>
    )
}

const Details = ({ mb }) => {
    return (
        <View style={{ marginBottom: mb }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={({ item }) => {
                    var bgColor = item.id % 2 === 1 ? color.background : "white"
                    return (
                        <View style={{ backgroundColor: bgColor }} >
                            <View style={styles.dataContainer} >
                                <Text style={styles.data}>{item.id + 1}</Text>
                                <Text style={styles.data}>Manish</Text>
                                <Text style={styles.data}>4th</Text>
                                <Text style={styles.data}>1000</Text>

                            </View>
                        </View>
                    )
                }}

                key={DATA.title}
            />
        </View>


    )
}

export default MembersList

const styles = StyleSheet.create({

    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        paddingHorizontal: 12,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 10
    },
    titleName: {
        fontWeight: "600",
        fontSize: 16

    },
    dataContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        // backgroundColor: idx % 2 === 0 ? color.third : null
    },
    data: {
        fontSize: 16,
        color: color.second,
        fontWeight: '700'
    },
    title: {
        fontWeight: "600",
        color: color.first,
        fontSize: 20,
        textAlign: 'center'
    }

})